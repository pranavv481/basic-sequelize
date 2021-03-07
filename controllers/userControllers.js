const { Sequelize, Op } = require('sequelize');

const db = require('../models');

const Users = db.users;


const addUser = async (req, res) => {

    let data = await Users.create({ name: "Test3", email: "test3@gmail.com" });

    // update
    //data.save();

    //delete
    //data.destroy();

    //reload
    //data.reload()

    console.log(data)
    let response = {
        data: 'ok'
    }
    res.status(200).json(response)
}

const crudOperation = async (req, res) => {
    // ----------------insert----------------
    // let data = await Users.create({name:"Test4",email:"test4@gmail.com", gender:"male"});

    // -------------update------------------- 
    // let data = await Users.update({name:"final",email:"final@gmail.com"}, {
    //     where:{
    //         id:6
    //     }
    // });

    // ------------delete----------------
    // let data = await Users.destroy({
    //     where:{
    //         id:6
    //     }
    // })

    //------------ truncate-------------
    // let data = await Users.destroy({
    //    truncate:true
    // })

    //--------- bulk insert--------------
    // let data = await Users.bulkCreate([
    //     {name:"first", email:"first@gmail.com", gender:"male"},
    //     {name:"first1", email:"first1@gmail.com", gender:"male"},
    //     {name:"first2", email:"first2@gmail.com", gender:"male"},
    // ])

    // //------- find All-------------
    // let data = await Users.findAll({});

    // find One
    // let data = await Users.findOne({});


    let response = {
        data: "ok"
    }
    res.status(200).json(response)
}

const queryData = async (req, res) => {
    // let data = await Users.create({name:"demo1",email:"demo1@gmail.com",gender:"male"},{
    //     fields:['email']
    // });

    //----------- select-------------
    // let data = await Users.findAll({
    //     attributes: [
    //         'name',
    //         ['email', 'emailID'],
    //         'gender',
            // count
            // [Sequelize.fn('COUNT', Sequelize.col('email')), 'emailCount']
            // CONCAT
            // [Sequelize.fn('CONCAT', Sequelize.col('email'),'ID'), 'emailCount']

    //     ]
    // });




    //----------- include and exclude

    // let data = await Users.findAll({
    //     attributes:{
    //         exclude:['created_at','modified_at'],
    //         include:[[Sequelize.fn('CONCAT', Sequelize.col('name'),' verma'), 'fullname']]
    //     },
        
    // });

    // ----------- condition-----------//////////
    
    // let data =await Users.findAll({
    //     where:{
    //         id:{
    //             [Op.gt]:2
    //         },
    //         email:{
    //             [Op.like]:'%@gmail.com'
    //         },

    //     },
    //     order:[
    //         ['name','DESC']
    //     ],
    //     group:['email','name'],
    //     limit:2,
    //     offset:1
    // }) 

    //----------- count----------------

    let data = await Users.count({}) 

    let response = {
        data: data
    }
    res.status(200).json(response)
}

const finderData = async(req, res)=>{
    //--------- find All-------------
   // let data = await Users.findAll({})

   //----------find One---------------
   // let data = await Users.findOne({})

    //----------find By Pk---------------
    // let data = await Users.findByPk(3)

     //----------findAndCountAll---------------
    // let data = await Users.findAndCountAll({
    //     where:{
    //         email:'first2@gmail.com'
    //     }
    // })

    //========== findorCreate===============
    let [data, created] = await Users.findOrCreate({
        where:{name:'dummy'},
        defaults:{
            email:"dummy@gmail.com",
            gender:'male'
        }
    })
    let response = {
        data: data,
        add:created
    }
    res.status(200).json(response)
}



module.exports = {
    addUser,
    crudOperation,
    queryData,
    finderData
}