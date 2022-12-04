import {QueryClient, QueryObserver} from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const getQueryKeys = key => {
  return client.queryCache.queries
    .map(q =>
      q?.queryKey[0] === key && q?.state && q?.state?.data ? q.queryKey : false
    )
    ?.filter(q => q);
};

export const deleteJunkCache = (key, items = 5) => {
  const queries = client.getQueryCache().findAll(key);
  // .forEach(query => query.setData(undefined));

  if (queries.length > items) {
    // for (const query of queries) {
    const query = queries[0];
    client.removeQueries(query.queryKey, {exact: true});
    // }
  }
};

// export const observer = new QueryObserver(client, {queryKey: "song"});

export default client;
