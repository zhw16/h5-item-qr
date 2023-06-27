$('title').html('一事一码·办事指南')
$(document).ready(function () {
    $('tbody tr').each(function () {
        var $td = $(this).find('td');
        if ($td.length === 1) {
            $td.attr('colspan', '3');
        }
    });
});

// 导入数据源
import {data} from "./sourcedata.js";

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
$(".my_title").html(eventItem.eventName);
//办事指南上方
$(".workDepartment").html(eventItem.workAttention.workDepartment);
$(".serviceObject").html(eventItem.workAttention.serviceObject);
$(".workTime").html(eventItem.workAttention.workTime);
$(".workAddress").html(eventItem.workAttention.workAddress);
$(".consultWay").html(eventItem.workAttention.consultWay);
$(".complaintWay").html(eventItem.workAttention.complaintWay);
//办事指南下方

//办事指南tab1 基础信息
$(".eventName").html(eventItem.workAttention.basicInfo.eventName);
$(".eventType").html(eventItem.workAttention.basicInfo.eventType);
$(".onlineOrNot").html(eventItem.workAttention.basicInfo.onlineOrNot);
$(".as").html(eventItem.workAttention.basicInfo.as);
$(".handingType").html(eventItem.workAttention.basicInfo.handingType);
$(".queryType").html(eventItem.workAttention.basicInfo.queryType);
$(".progressQuery").html(eventItem.workAttention.basicInfo.progressQuery);
$(".standard").html(eventItem.workAttention.basicInfo.standard);

//办事指南tab2 受理条件
$(".tab2Text").html(eventItem.workAttention.HandlingCondition.HandlingCondition);

//tab3办理流程
// 需要遍历这些流程
console.log(eventItem.workAttention.handlingProcess);
var table_tab3_html='';
$.each(eventItem.workAttention.handlingProcess, function (index, handlingProcess) {
    table_tab3_html +=
    '<tr><td>'+handlingProcess.processName+'</td>'+
    '<td>'+handlingProcess.Procedure+'</td>'+
    '<td>'+handlingProcess.worker+'</td>'+
    '<td>'+handlingProcess.limitTime+'</td>'+
    '<td>'+handlingProcess.checkStandard+'</td>'+
    '<td>'+handlingProcess.result+'</td></tr>'
});
$(".table-tab3").html(table_tab3_html);

//tab04办事地点
$(".windowsName").html(eventItem.workAttention.handingAddress.windowsName);
$(".windowsPhone").html(eventItem.workAttention.handingAddress.windowsPhone);
$(".windowsTime").html(eventItem.workAttention.handingAddress.windowsTime);
$(".windowsAddress").html(eventItem.workAttention.handingAddress.windowsAddress);
$(".trafficGuide").html(eventItem.workAttention.handingAddress.trafficGuide);

//tab5申请材料

// 需要遍历这些流程
console.log(eventItem.workAttention.applicationMaterial);
var table_tab5_html='';
$.each(eventItem.workAttention.applicationMaterial, function (index, applicationMaterial) {
    table_tab5_html +=
        '<tr><td>'+applicationMaterial.materialName+'</td>'+
        '<td>'+applicationMaterial.materialExample+'</td>'+
        '<td>'+applicationMaterial.materialSource+'</td>'+
        '<td>'+applicationMaterial.materialType+'</td>'+
        '<td>'+applicationMaterial.materialNeed+'</td>'+
        '<td>'+applicationMaterial.materialStandard+'</td></tr>'
});
$(".table-tab5").html(table_tab5_html);


