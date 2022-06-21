import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oogksy0oyf01xla3k13npn/master",
  cache: new InMemoryCache()  
})