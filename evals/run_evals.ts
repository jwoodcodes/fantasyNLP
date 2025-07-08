
import { promises as fs } from 'fs';
import path from 'path';

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

    if (expected && JSON.stringify(actual.result) === JSON.stringify(expected.result)) {
      console.log('  ✅ Test passed');
    } else {
      console.log('  ❌ Test failed');
      if (expected) {
        console.log('    Expected:', expected.result);
      } else {
        console.log('    Expected: undefined');
      }
      console.log('    Actual:', actual.result);
    }
  }
}

main();
