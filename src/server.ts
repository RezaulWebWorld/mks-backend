import app from "./app";
import config from "./config/index";
import mongoose from "mongoose";

async function main() {
  try {
    console.log("Mongodb uri", config.data_Url);
    await mongoose.connect(config.data_Url as string);
    app.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
