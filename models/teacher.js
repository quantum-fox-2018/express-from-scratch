'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isDuplicate(value,next) {
          Teacher.findOne({where: {email: value}})
          .then(teacher => {
            if (teacher) {
              next('Email tidak boleh duplikat');
            } else {
              next();
            }
          })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject, {foreignKey: 'SubjectId'})
  };
  return Teacher;
};