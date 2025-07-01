"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectInfo = void 0;
const lucide_react_1 = require("lucide-react");
const deploy_button_1 = require("./deploy-button");
const alert_1 = require("./ui/alert");
const link_1 = __importDefault(require("next/link"));
const ProjectInfo = () => {
    return (<div className="bg-muted p-4 mt-auto">
      <alert_1.Alert className="bg-muted text-muted-foreground border-0">
        <lucide_react_1.Info className="h-4 w-4 text-primary"/>
        <alert_1.AlertDescription>
          This application uses the{" "}
          <link_1.default target="_blank" className="text-primary hover:text-primary/90 underline" href="https://sdk.vercel.ai">
            AI SDK
          </link_1.default>{" "}
          to allow you to query a PostgreSQL database with natural language. The
          dataset is CB Insights&apos; list of all unicorn companies. Learn more
          at{" "}
          <link_1.default href="https://www.cbinsights.com/research-unicorn-companies" target="_blank" className="text-primary hover:text-primary/90 underline">
            CB Insights
          </link_1.default>
          .
          <div className="mt-4 sm:hidden">
            <deploy_button_1.DeployButton />
          </div>
        </alert_1.AlertDescription>
      </alert_1.Alert>
    </div>);
};
exports.ProjectInfo = ProjectInfo;
