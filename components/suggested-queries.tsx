import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const SuggestedQueries = ({
  handleSuggestionClick,
}: {
  handleSuggestionClick: (suggestion: string) => void;
}) => {
  const suggestionQueries = [
        {
          desktop: "Show games where Xavier Worthy played and Rashee Rice did not play",
          mobile: "worthy no rice games",
        },
        {
          desktop: "Show the 10 highest ppr scoring games in 2024",
          mobile: "top 10 ppr games 2024",
        },
  ];

  

  return (
    <motion.div
      key="suggestions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
      exit={{ opacity: 0 }}
      className="h-full overflow-y-auto"
    >
      <h2 className="text-lg text-center mt-4 mb-8 sm:text-xl font-semibold text-foreground mb-4">
        Example queries (click to run):
      </h2>
      <div className="flex flex-wrap flex-col gap-2 w-1/4 text-center ml-auto mr-auto">
        {suggestionQueries.map((suggestion, index) => (
          <Button
            key={index}
            className={index > 5 ? "hidden sm:inline-block mb-2 border-blue-300" : "mb-4 border-blue-300"}
            type="button"
            variant="outline"
            onClick={() => handleSuggestionClick(suggestion.desktop)}
          >
            <span className="sm:hidden">{suggestion.mobile}</span>
            <span className="hidden sm:inline">{suggestion.desktop}</span>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
