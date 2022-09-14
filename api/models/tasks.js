const S = require("sequelize")
const db = require("../db/index.db")

class Tasks extends S.Model {}

Tasks.init(
    {
        Title:{
            type: S.STRING,
            allowNull: false,
        },
        Description:{
            type:S.STRING,
            allowNull:false
        }
    },{
        timestamps:false, sequelize:db, modelName:"Tasks"
    }
)

module.exports = Tasks