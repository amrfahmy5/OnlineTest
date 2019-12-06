con = require("../../config/connection");

const bcrypt = require('bcryptjs');

module.exports = {
    getAllStudents: function(callback) {
        con.query("SELECT * FROM student", callback)
    },
    getStudentById: function( id, callback) {
        con.query('SELECT * FROM student WHERE id = ?',[id], callback)
    },
    createStudent: function(req, callback) {
        con.query(
            "INSERT INTO online_test.student" +
            " (user_name, email,password,phone_number)" +
            " VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.password+"','"+req.body.phone+"')" , callback )
    },
    removeStudent: function(id, callback) {
        con.query('DELETE FROM  online_test.student WHERE id = ?',[id], callback)
    },
    findStudentByUserNameAndPassword : function(user_name , password , callback){
        con.query('SELECT * FROM  online_test.student WHERE user_name = ? AND password = ?',
            [user_name, password], callback)
    },

    findStudentByUserName : function(user_name  , callback){
        con.query('SELECT * FROM  online_test.student WHERE user_name = ?',
            [user_name], callback)
    },
    hashfun : (password)=>{
        return bcrypt.hashSync(password,10);
    },
    compare :(userPassword,hashPassword)=>{
        return bcrypt.compareSync(userPassword, hashPassword);
    }
};