const fs = require('fs');

// Environment informations
if (fs.existsSync('./frontend')) {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/reseau_nda'; // Databse URI and database name
  process.env.databaseName = 'development database: reseau_nda'; // Database name
}