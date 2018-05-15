module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        
    })
      // Add a belongsTo association to Authors here
    Burger.associate = function (models) {
    models.Burger.hasOne(models.Customer, {
      foreignKey: {
        allowNull: true
      }
    });
};
    return Burger
};