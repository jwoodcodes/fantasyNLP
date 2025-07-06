import { Search as SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Search = ({
  handleSubmit,
  inputValue,
  setInputValue,
  submitted,
  handleClear,
}: {
  handleSubmit: () => Promise<void>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  submitted: boolean;
  handleClear: () => void;
}) => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit();
      }}
      className="mb-6"
    >
      <div className="flex flex-col w-1/2 m-auto sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full">
          <Input
            type="text"
            placeholder="show games where...     OR    show seasons where..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className=" text-base text-center"
          />
          {/* <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" /> */}
        </div>
        <div className="flex sm:flex-row items-center justify-center gap-2">
          {submitted ? (
            <Button
              type="button"
              variant="outline"
              onClick={handleClear}
              className="w-full sm:w-auto"
            >
              Clear
            </Button>
          ) : (
            <Button type="submit" className="w-full sm:w-auto">
              Send
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};
