const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ikram:the4horsemen@fullstack.tjqw9oh.mongodb.net/BLOG_API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database is connected");
  })
  .catch((ex) => {
    console.log("Database connection failed: ", ex);
  });
