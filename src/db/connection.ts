import mongoose from "mongoose";

const connectionString = {
  cloud:
    "mongodb+srv://itweb:fitness@cluster0-nyqu6.mongodb.net/test?retryWrites=true",
  local: "mongodb://localhost:27017/Fitness"
};

mongoose.connect(
  connectionString.cloud,
  error => {
    if (error) {
      // do something
    } else {
      console.log("Connected to db");
    }
  }
);

export default mongoose;
