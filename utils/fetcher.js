import { request } from "graphql-request";

export function fetcher(query) {
  return request(
    "https://api.thegraph.com/subgraphs/name/perpetual-protocol/perp-position-subgraph",
    query
  );
}
export function perpetualStatsFetcher(query) {
  return request(
    "https://api.thegraph.com/subgraphs/name/vipineth/perpetual-protocol-stats",
    query
  );
}

export const urlFetcher = (...args) => fetch(...args).then((res) => res.json());
