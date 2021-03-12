export default User ={
    id : Int,
    email : String,
    encryptedPassword : String,
    firtname : String,
    lastname : String,
    birthdate : Date,
    gender : String,
    createdAt : Date,
    updateAt : Date,
    task : Object

};
export default Task ={
    id : Int,
    content : String,
    isComplete : String,
    userId : Number,
    useridEnd : Number,
    createdAt : Date,
    updateAt : Date
}