module.exports = (sequilize, DataTypes)=>{
   const Users = sequilize.define("users",{
    
       name:DataTypes.STRING,
       email:{
           type:DataTypes.STRING,
           defaultValue:'test@gmail.com'
       },
       gender:{
           type:DataTypes.STRING
       }
   },{
    timestamps: true  
   }) 
   return Users
}