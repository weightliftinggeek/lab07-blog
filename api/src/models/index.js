const path = require('path');
const Sequelize = require('sequelize').default;

// Load our database configuration
const dbconfig = require('../config/database');

// Connect Sequelize to the database
const sequelize = new Sequelize(dbConfig.database, dbconfig.user, dbConfig.password, dbconfig);

// Load all of our model definitions
const models = {
   Post: sequelize.import(require.resolve('./post'))
};

// Store the database connection 
models.database = sequelize;

// Export our model definitions 
module.exports = models;	