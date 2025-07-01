"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("./globals.css");
const mono_1 = require("geist/font/mono");
const sans_1 = require("geist/font/sans");
const next_themes_1 = require("next-themes");
exports.metadata = {
    metadataBase: new URL("https://natural-language-postgres.vercel.app"),
    title: "Natural Language Postgres",
    description: "Chat with a Postgres database using natural language powered by the AI SDK by Vercel.",
};
function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      <body className={`${mono_1.GeistMono.className} ${sans_1.GeistSans.className}`}>
        <next_themes_1.ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </next_themes_1.ThemeProvider>
      </body>
    </html>);
}
