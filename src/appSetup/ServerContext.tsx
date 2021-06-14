import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export const ServerContext: FC = (props) => (
  <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
);
