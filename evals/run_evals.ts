
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const queriesPath = path.join(__dirname, 'queries.json');
  const expectedResultsPath = path.join(__dirname, 'expected_results.json');

  const queriesData = await fs.readFile(queriesPath, 'utf-8');
  const expectedResultsData = await fs.readFile(expectedResultsPath, 'utf-8');

  const queries: { query: string }[] = JSON.parse(queriesData).queries;
  const expectedResults: { query: string; result: any }[] = JSON.parse(expectedResultsData).results;

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i].query;
    const expected = expectedResults.find((r: { query: string; result: any }) => r.query === query);

    console.log(`Running query: ${query}`);

    const response = await fetch('http://localhost:3000/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    });

    const actual = await response.json();

    if (expected) {
      const normalize = (q: string) => q.replace(/"/g, "'").replace(/;\s*$/, "").trim();

      let actualQuery = '';
      if (actual.result && actual.result.generatedQuery) {
        actualQuery = normalize(actual.result.generatedQuery.query || actual.result.generatedQuery.query1 || '');
      }

      const expectedQuery = normalize(expected.result[0]);

      if (actualQuery === expectedQuery) {
        console.log('  ✅ Test passed');
      } else {
        console.log('  ❌ Test failed');
        console.log('    Expected:', expected.result[0]);
        console.log('    Actual:  ', actualQuery);
      }
    } else {
        console.log('  ❌ Test failed');
        console.log('    Expected: undefined');
        console.log('    Actual:', actual.result);
    }
  }
}

main();
