$(document).ready(function() {
    $('tbody tr').each(function() {
        var $td = $(this).find('td');
        if ($td.length === 1) {
            $td.attr('colspan', '3');
        }
    });
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
//基础信息
// $("#tab1").html('<b>' + eventItem.workAttention.workInfo + '</b>');
//受理条件
// $("#tab2").html('<b>' + eventItem.workAttention.workCondition + '</b>');
//办事地点
// $("#tab3").html('<b>' + eventItem.workAttention.workAddress + '</b>');
//办理流程
// $("#tab4").html('<b>' + eventItem.workAttention.workProcess + '</b>');
//申请材料
// $("#tab5").html('<b>' + eventItem.workAttention.workNeed + '</b>');
// //收费标准
// $("#tab6").html('<b>' + eventItem.workAttention.workFree + '</b>');
// //其他问题
// $("#tab7").html('<b>' + eventItem.workAttention.workProblem + '</b>');






