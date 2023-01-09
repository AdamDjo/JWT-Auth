const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@mern.cnwihff.mongodb.net/mern",
    {
      //userNewUrlParser: true,
      //  useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    }
  )
  .then(() => console.log("connected to MongoDb"))
  .catch((err) => console.log("failed to connect to mongodb", err));
