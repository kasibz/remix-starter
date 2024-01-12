import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import styles from "./styles/main.css";
import MainNavigation from "./components/MainNavigation";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>

        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// this is needed to link things in the header
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
