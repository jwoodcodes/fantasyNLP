"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const lucide_react_1 = require("lucide-react");
const button_1 = require("./ui/button");
const input_1 = require("./ui/input");
const Search = ({ handleSubmit, inputValue, setInputValue, submitted, handleClear, }) => {
    return (<form onSubmit={async (e) => {
            e.preventDefault();
            await handleSubmit();
        }} className="mb-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-grow">
          <input_1.Input type="text" placeholder="Ask about startup unicorns..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="pr-10 text-base"/>
          <lucide_react_1.Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"/>
        </div>
        <div className="flex sm:flex-row items-center justify-center gap-2">
          {submitted ? (<button_1.Button type="button" variant="outline" onClick={handleClear} className="w-full sm:w-auto">
              Clear
            </button_1.Button>) : (<button_1.Button type="submit" className="w-full sm:w-auto">
              Send
            </button_1.Button>)}
        </div>
      </div>
    </form>);
};
exports.Search = Search;
