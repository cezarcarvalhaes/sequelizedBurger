module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      // Giving the Author model a name of type STRING
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      }
    });
  
    return Customer;
  };