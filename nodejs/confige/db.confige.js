import Sequelize from "sequelize";

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password:"",
    database:"bbs",
    logging: false,
});
sequelize.authenticate().then(() => {
    console.log("Database connected successfully");
}).catch((error) => console.log(`Database Connection ERROR : ${error}`))
export default sequelize