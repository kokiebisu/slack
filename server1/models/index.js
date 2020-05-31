const Sequelize = require('sequelize');

const sequelize = new Sequelize('slack', 'ken', 'kronos111', {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const models = {
  User: sequelize['import']('./user'),
  Message: sequelize['import']('./message'),
  Channel: sequelize['import']('./channel'),
  Team: sequelize['import']('./team'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
