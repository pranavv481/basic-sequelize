const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("all-india", "root", "", {
    host:"localhost",
    dialect:'mysql',
    logging:false,
    pool:{max:5, min:0, idle:10000}
})
sequelize.authenticate()
.then(()=>{
    console.log("connected")
}).catch(err=>{
    console.log("error" +err)
})

const db= {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({force:false})
.then(()=>{
    console.log("yes re-sync")
})

db.users = require('./users')(sequelize, DataTypes);
module.exports = db;
