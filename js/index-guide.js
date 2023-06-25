$(document).ready(function () {
    $('title').html('一事一码-办事指南');
    var tabWidth = $('.guide-img').width() / ($('#tab-calu li').length+1);
    $('.tab-css').css('width', tabWidth + 'px')
        .css('margin-right', '0.13em');
});

// 导入数据源
import { data } from "./sourcedata.js";
// 获取URL中的查询参数
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
// 解析连接中的事件ID
const eventId = getQueryParam('eventId');
console.log('当前事项id: ' + eventId); // 输出事件ID到控制台，方便调试
// 根据事件ID找到当前事项
const eventItem = data.find(item => item.eventId === eventId);
console.log(eventItem);

/*{
    "eventId": "01",
    "eventName": "事项名称01",
    "officeHall": "办理机构",
    "codeAddress": "暂时没用到，使用的按钮的事项id，拼接的图片地址",
    "codeItem": "http://zwfw.gxzf.gov.cn/gxzwfw/workhandguide/infos.do?taskCode=11450000007565194H200011501500504",
    "workAttentionAddress": "办事指南地址",
    "workAttention": {//办事指南
    "workId": "事项id",
        "workInfo": "基础信息",
        "workCondition": "受理条件",
        "workAddress": "办事地点",
        "workProcess": "办理流程",
        "workNeed": "申请材料",
        "workOther": "特别程序",
        "workFree": "收费标准",
        "workProblem": "其他问题"
}*/

//办事名称
$(".itemName").html('<b>' + eventItem.eventName + '</b>');
//基础信息
$("#tab1").html('<b>' + eventItem.workAttention.workInfo + '</b>');
//受理条件
$("#tab2").html('<b>' + eventItem.workAttention.workCondition + '</b>');
//办事地点
$("#tab3").html('<b>' + eventItem.workAttention.workAddress + '</b>');
//办理流程
$("#tab4").html('<b>' + eventItem.workAttention.workProcess + '</b>');
//申请材料
$("#tab5").html('<b>' + eventItem.workAttention.workNeed + '</b>');
// //收费标准
// $("#tab6").html('<b>' + eventItem.workAttention.workFree + '</b>');
// //其他问题
// $("#tab7").html('<b>' + eventItem.workAttention.workProblem + '</b>');






