module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  Teacher.prototype.getFullName = function () {
    return this.first_name+' '+this.last_name
  }

  Teacher.prototype.getAge = function () {
    return new Date().getFullYear()-this.birthday.substring(0,4)+' YO'
  }
  return Teacher;
};
