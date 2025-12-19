import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { App } from "@/App";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <App />
      <TanStackRouterDevtools />
    </>
  ),
});
