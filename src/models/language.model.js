import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const modelLanguage = sequelize.define("languages", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    paradigm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default modelLanguage;