/*
*
*
*
//此项目为收集自己前端学习中遇见的功能模
//块和一些好的代码的集合，以供工作学习复用
//纯菜鸟一枚,如有错误请谅解指正，大神勿喷
*
*
*/
window.onload = function () {

}

var yn = {};
//工具
yn.tools = {};

/******
获取一个时间改变后的标准日期
--------------
date: 时间
type：year mon day 在传入值基础上改变n 年/月/日
value:增加或减少对应的年月日值
return: 默认返回如  2016-01-02
******/
yn.tools.getDay = function (date, type, value) {
    if (type == 'year') {//日期基础上减value年
        date = date.setYear(date.getFullYear() + value);
    } else if (type == 'mon') {//日期基础上减value月
        date = date.setMonth(date.getMonth() + value);
    } else if (type == 'day') {//日期基础上减value日
        date = date.setDay(date.getDate() + value);
    }
    date = new Date(date); //1491717986778  将时间戳转为日期
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day;
}

/*
//求对象集合中某些字段值得总和（属性值为整数）
dataList:json对象数组 如[{HighLevel:10,ManNum:1,WomanNum:4,ProjectName:'人事'},{HighLevel:10,ManNum:3,WomanNum:,ProjectName:'财务'}]
columNames:要求和的属性的字符串用逗号间隔 如"HighLevel,ManNum,WomanNum"
return:返回具有求和属性的对象
*/
function calculateSum(dataList, columNames) {

    var colNames = columNames.split(',');
    var sumObj = new Object();
    //var sumObj = dataList[0];错误，此处会改变dataList中的值
    for (var k = 0; k < colNames.length; k++) {
        sumObj[colNames[k]] = 0;
    }
    for (var i = 0; i < dataList.length; i++) {
        for (var j = 0; j < colNames.length; j++) {
            sumObj[colNames[j]] = sumObj[colNames[j]] + dataList[i][colNames[j]];
        }
    }
    return sumObj;
}






//////////////////////////////////////////////////////////////////////////////////////////////////////////
//功能组件
yn.module = {};


