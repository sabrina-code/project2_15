

module.exports = function (sequelize, DataTypes){
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 2,
          max: 12
        }
    },
    lastName: {
      type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 2,
          max: 12
        }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true
      }
    },
    phone: {
      type: DataTypes.INTEGER
    }
   
  });
  return User;
};


