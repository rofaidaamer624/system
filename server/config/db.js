const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://rofaidaessa6:TX0tvi0MvPHhOeav@cluster0.xtdfnen.mongodb.net/'; // Replace with your MongoDB Atlas connection string
    await mongoose.connect(uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds if server selection takes longer
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
