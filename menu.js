let query = require('cli-interact').question;
let addStudent = require('./addStudent.js');
let transcript = require('./transcript.js');
let students = [] ;
while(1){
console.log('1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：');
let answer = query();
switch(answer){
	case '1':students.push(addStudent());console.log(students);break;
	case '2':transcript(students);break;
	case '3':return 0 ;
	default:break;
}
}
return '';
