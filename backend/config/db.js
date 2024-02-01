// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`.red.bold);
//     process.exit(1); // Exit with a non-zero status code to indicate an error
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://dksolanki790:dPa3px44TG8F47ds@cluster0.kxtybok.mongodb.net/?retryWrites=true&w=majority";
;
    if (!uri) {
      console.error("Error: MONGO_URI environment variable not set".red.bold);
      process.exit(1);
    }

    const conn = await mongoose.connect(uri,
     {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.blue.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
