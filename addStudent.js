let  query  = require('readline-sync').question ;
let  student = require('./Class.js');

module.exports = function addStudent (){
	let answer = query('请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：\n').split(',');
 	let aStudent = new student(answer[0], answer[1], answer[2], Number(answer[3].trim().match(/\d+/)), Number(answer[4].trim().match(/\d+/)), Number(answer[5].trim().match(/\d+/)), Number(answer[6].trim().match(/\d+/)));	
	console.log('学生' + answer[0] + '的成绩被添加');
	return aStudent ;
};

