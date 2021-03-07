module.exports = (sequilize, DataTypes) => {
    const Users = sequilize.define("users", {

        name: {
            type: DataTypes.STRING,
            set(value){
                this.setDataValue('name',value+' Verma')
            },
            get(){
               return this.getDataValue('name')+' '+this.email
            }
        },

        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com'
        },
        gender: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Users
}