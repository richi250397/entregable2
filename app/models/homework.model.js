module.exports = (sequelize, Sequelize) => {
    const Homework = sequelize.define("homeworks", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        completed: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });

    return Homework;
};