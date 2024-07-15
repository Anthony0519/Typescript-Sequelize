import {Sequelize} from "sequelize"

const sequelize = new Sequelize({
    username:"root",
    password:"Anthony19:1",
    database:"sequelizeclass",
    host:"127.0.0.1",
    port:3306,
    dialect:"mysql"
})

export default sequelize
