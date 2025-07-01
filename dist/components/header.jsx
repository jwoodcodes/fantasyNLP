"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const lucide_react_1 = require("lucide-react");
const deploy_button_1 = require("./deploy-button");
const button_1 = require("./ui/button");
const next_themes_1 = require("next-themes");
const Header = ({ handleClear }) => {
    const { theme, setTheme } = (0, next_themes_1.useTheme)();
    return (<div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center cursor-pointer" onClick={() => handleClear()}>
        Natural Language PostgreSQL
      </h1>
      <div className="flex items-center justify-center space-x-2">
        <button_1.Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "dark" ? (<lucide_react_1.Moon className="h-5 w-5"/>) : (<lucide_react_1.Sun className="h-5 w-5"/>)}
          <span className="sr-only">Toggle theme</span>
        </button_1.Button>
        <div className="hidden sm:block">
          <deploy_button_1.DeployButton />
        </div>
      </div>
    </div>);
};
exports.Header = Header;
