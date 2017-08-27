module.exports = class student{
	constructor(Name, ID, Class, Chinese, Math, English){
		this.格式 = Name + ', ' + ID + ',' + Class;
			this.语文 = Chinese ;
			this.数学 = Math    ;
			this.英语 = English ;
		this.平均分 = ((this.语文 + this.数学 + this.英语)/ 3).toFixed(1) ;
	}
};
