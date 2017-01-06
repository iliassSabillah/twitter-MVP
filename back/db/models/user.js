'use strict';

const sequelizeConnection = require('../index');


module.exports = (sequelize, DataTypes)=> {
    let User = sequelizeConnection.define('User', {
            username: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 50],
                    unique: true,
                    notNull: true
                }
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 50],
                    idEmail: true,
                    unique: true,
                    notNull: true
                }
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 20],
                    notNull: true
                }
            },
            profilePhoto: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 50]
                }
            },
            headerPhoto: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 50]
                }
            },
            location: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 20]
                }
            },
            website: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 50],
                    isUrl: true
                }
            },
            birthday: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 20],
                    isDate: true
                }
            },
            bio: {
                type: DataTypes.TEXT,
                validate: {
                    len: [1,160]
                }
            },
            classMethods: {
              associate: function(models) {
                // associations can be defined here
              }
            }
    });

    return User;
};
