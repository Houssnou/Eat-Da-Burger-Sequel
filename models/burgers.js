module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define("burgers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return burgers;
}