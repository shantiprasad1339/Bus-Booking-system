import { Sequelize ,DataTypes} from "sequelize";
import sequelize from "../confige/db.confige.js";

const allbus =  sequelize.define("AllBus",{
    id: { type: Sequelize.INTEGER,autoIncrement: true, primaryKey: true},
    from:{type:DataTypes.STRING, allowNull: false},
    to:{type:DataTypes.STRING, allowNull: false},
    BusName:{type:DataTypes.STRING, allowNull: false},
    BusNumber:{type:DataTypes.STRING, allowNull: false},
    BusDeparture:{type:DataTypes.STRING, allowNull: false},
    BusArrived:{type:DataTypes.STRING, allowNull: false},
    Price:{type:DataTypes.STRING, allowNull: false},


    
},{tableName:"AllBus"}, {timestamps: true});
allbus.sync()
// users.drop()
export default allbus;