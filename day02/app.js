import express from "express";
import router from "./router.js";
const app = express();

app.use("/Api", router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is listing at ${PORT}`);
});
