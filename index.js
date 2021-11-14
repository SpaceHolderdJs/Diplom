const express = require("express");
const app = express();
const port = 8080; // default port to listen

const usersRouter = require("./routes/Users");

app.use(usersRouter);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
