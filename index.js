const Axios = require("axios");
const express = require("express");
const app = express();
const checkRequest = require("./middleware/checkRequest");

app.use(express.json());

app.get("/data", checkRequest(), async (req, res) => {
  const { data } = await Axios.get(
    "https://fast-reef-22226.herokuapp.com/data"
  );
  res.status(200).json(data);
});
app.listen(process.env.PORT || 3300, () => {
  console.log(`Port is listening on 3300`);
});
