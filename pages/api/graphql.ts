import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
import Cors from "micro-cors";
import { typeDefs } from "../../utils/api/typedefs";
import { resolvers } from "../../utils/api/resolvers";

const schema = makeExecutableSchema({ typeDefs, resolvers });

const handler = new ApolloServer({
  schema,
}).createHandler({ path: "/api/graphql" });

export default Cors()((req, res) => {
  // fix for apollo client sending many options requests
  if (req.method == "OPTIONS") return res.status(200).send();

  return handler(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
