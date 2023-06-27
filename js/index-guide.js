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
var table_top_html =
    '<tbody>' +
    '<tr>' +
    '<th>办理部门</th>' +
    '<td>' + eventItem.workAttention.workDepartment + '</td>' +
    '<th>服务对象</th>' +
    '<td>' + eventItem.workAttention.serviceObject + '</td>' +
    ' </tr>' +
    '<tr>' +
    '<th>办理时间</th>' +
    '<td>' + eventItem.workAttention.workTime + '</td>' +
    ' <th>办理地点</th>' +
    '<td>' + eventItem.workAttention.workAddress + '</td>' +
    '</tr>' +
    '<tr>' +
    '<th>咨询方式</th>' +
    ' <td>' + eventItem.workAttention.consultWay + '</td>' +
    '<th>监督投诉方式</th>' +
    '<td>' + eventItem.workAttention.complaintWay + '</td>' +
    '</tr>' +
    ' </tbody>';
$(".table-top").html(table_top_html);
//办事指南下方

//办事指南tab1 基础信息
var table_tab1_html =
    ' <tbody><tr><th> 事项名称 </th>' +
    '<td>' + eventItem.workAttention.basicInfo.eventName + '</td>' +
    '<th>事项类型</th>' +
    '<td>' + eventItem.workAttention.basicInfo.eventType + '</td></tr>' +
    '<tr><th>是否网办</th>' +
    ' <td>' + eventItem.workAttention.basicInfo.onlineOrNot + '</td>' +
    '<th>年检或年审</th>' +
    '<td>' + eventItem.workAttention.basicInfo.as + '</td></tr>' +
    '<tr><th>办理形式</th>' +
    '<td>' + eventItem.workAttention.basicInfo.handingType + '</td>' +
    '<th>办理进度查询途径</th>' +
    '<td>' + eventItem.workAttention.basicInfo.queryType + '</td></tr>' +
    '<tr><th>查询方式</th>' +
    '<td>' + eventItem.workAttention.basicInfo.progressQuery + '</td></tr>' +
    '<tr> <th>审查方式及标准</th>' +
    '<td>' + eventItem.workAttention.basicInfo.standard + '</td>' +
    ' </tr> </tbody>';
$(".table-tab1").html(table_tab1_html);

//办事指南tab2 受理条件
var table_tab2_html='<div class="tab2Text">'+eventItem.workAttention.HandlingCondition.HandlingCondition+'</div>';
console.log(table_tab2_html);
$(".table-tab2").html(table_tab2_html);




