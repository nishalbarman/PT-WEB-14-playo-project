const PORT = 3000;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/playo", router);
server.listen(process.env.PORT || PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);
