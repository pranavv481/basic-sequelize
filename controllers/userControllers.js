const db = require('../models');

const Users = db.users;


const addUser = async (req,res)=>{

    let data = await Users.create({name:"Test3",email:"test3@gmail.com"});

    // update
    //data.save();
    
    //delete
    //data.destroy();

    //reload
    //data.reload()

    console.log(data)
    let response ={
        data:'ok'
    }
    res.status(200).json(response)
}

const crudOperation = async (req, res)=>{
    // insert
    // let data = await Users.create({name:"Test4",email:"test4@gmail.com", gender:"male"});

    // update 
    // let data = await Users.update({name:"final",email:"final@gmail.com"}, {
    //     where:{
    //         id:6
    //     }
    // });

    // delete
    // let data = await Users.destroy({
    //     where:{
    //         id:6
    //     }
    // })

    // truncate
    // let data = await Users.destroy({
    //    truncate:true
    // })

    // bulk insert
    // let data = await Users.bulkCreate([
    //     {name:"first", email:"first@gmail.com", gender:"male"},
    //     {name:"first1", email:"first1@gmail.com", gender:"male"},
    //     {name:"first2", email:"first2@gmail.com", gender:"male"},
    // ])

    // // find All
    // let data = await Users.findAll({});
    
    // find One
     // let data = await Users.findOne({});
    

    let response ={
        data:"ok"
    }
    res.status(200).json(response)
}



module.exports = {
    addUser,
    crudOperation
}