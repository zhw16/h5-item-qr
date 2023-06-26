//js判断是否为移动端/pc端：
// true： 移动端
// false： pc端
function isMobile() {
    let userAgentInfo = navigator.userAgent;
    let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let getArr = Agents.filter(i => userAgentInfo.includes(i));
    return getArr.length ? true : false;
}

$('title').html('一事一码-办事政策列表')
// index的result高度
// 获取屏幕高度
var screenHeight = $(window).height();
// 输出屏幕高度
console.log('屏幕高度为: ' + screenHeight + 'px');
//获取logo和搜索栏高度
var logoHeight = $(".logo").height();
var searchHeight = $(".search").height();
console.log("logo高度和搜索高度分别为：" + logoHeight + "," + searchHeight);
//给结果设置高度
$("#retUl").css("height", screenHeight - logoHeight - searchHeight-18).css("overflow-y","auto");

import {data} from "./sourcedata.js";
//要拼接的数据
var html = '';
//办事指南
var button02 = '';
if (isMobile()) {
    //隐藏
    button02 = '<button style="display: none" class="button2" id="">办事指南</button>';
} else {
    button02 = '<button class="button2" id="">办事指南</button>';
}

//默认展示全部
data.forEach(function (item) {
    html += '<li class="poibox" data-ps="data.position" data-name="data.name">' +
        '<div class="poi-content">' +
        '<a class="a-left" href="' + item.codeItem + '">' +
        '<div class="content-left">' +
        '<span class="title poi-title">' + item.eventName + '</span>' +
        '<div class="poi-address">' + item.officeHall + '</div>' +
        '</div>' +
        '</a>' +
        '<div class="content-right">' +
        '<div class="buttons" id="' + item.eventId + '">' +
        '<button style="margin-right: 0.8em" class="button1" id="' + item.eventId + '">一事一码</button>' +
         button02 +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>';
});
$(".ret-ul").append(html);


//搜索事项方法
function searchItems() {
    var keyword = $("#searchIn").val(); // 获取搜索框中的关键词
    keyword = keyword.trim().toLowerCase(); // 去除首尾空格并转换为小写

    $(".poi-title").each(function () {
        var itemName = $(this).text().toLowerCase(); // 获取每个事项名称并转换为小写
        if (itemName.includes(keyword)) {
            $(this).parent().parent().parent().parent().show(); // 显示匹配到的事项
        } else {
            $(this).parent().parent().parent().parent().hide(); // 隐藏未匹配到的事项
        }
    });
}

$("#search").click(searchItems); // 点击搜索按钮触发搜索
$("#searchIn").keypress(function (event) {
    if (event.which === 13) { // 监听 Enter 键（按键码为13）
        searchItems();
        event.preventDefault(); // 阻止默认的 Enter 键行为（如提交表单）
    }
});


//添加二维码悬浮
// 为 button1 在PC下按钮添加悬浮事件
if (!isMobile()) {
    $(".button1").hover(
        function (e) {
            console.log(e);
            var eventId = $(this).attr("id"); // 获取按钮所在链接的地址
            var x = e.clientX;
            var y = e.clientY;
            $("<img>")
                .attr("src", "https://citizen.smkzz.com:8014/qr/" + eventId + ".jpg")
                .addClass("hover-qrcode")
                .css({
                    //position: "absolute",
                    top: y + "px", /* 根据需要调整图片的位置 */
                    left: x + "px", /* 根据需要调整图片的位置 */
                    //transform: "translateX(-50%)",
                    width: "100px", /* 根据需要调整图片的尺寸 */
                    height: "100px", /* 根据需要调整图片的尺寸 */
                    //background-size: "cover",
                    //background-position: " center",
                    "z-index": "99999", /* 确保图片位于其他内容之上 */
                    //pointer-events: "none", /* 防止图片遮挡按钮的交互 */
                })
                .appendTo($(this).parent().parent());
            // 当鼠标悬浮时添加一个类名来改变当前文字大小
            $(this).parent().parent().siblings('.content-left').find('.poi-title').addClass('enlarge-font-title');
            $(this).parent().parent().siblings('.content-left').find('.poi-address').addClass('enlarge-font-address');
        },
        function () {
            $(this)
                .parent().parent()
                .find(".hover-qrcode")
                .remove();
            // 当鼠标移开时移除类名恢复字体大小
            $(this).parent().parent().siblings('.content-left').find('.poi-title').removeClass('enlarge-font-title');
            $(this).parent().parent().siblings('.content-left').find('.poi-address').removeClass('enlarge-font-address');
        }
    );
    //电脑端点击button1不跳转，只显示悬浮二维码
    $('.button1').click(function () {
        var eventId = $(this).attr("id"); // 获取按钮所在链接的地址
        window.location.href = '#';
    });
} else {
    //点击button1跳转页面，对应的一事一码
    $('.button1').click(function () {
        var eventId = $(this).parent().attr("id"); // 获取按钮所在链接的地址
        window.location.href = 'item-html/01.html';
    });
}

//点击button2跳转页面
$('.button2').click(function () {
    var eventId = $(this).parent().attr("id"); // 获取按钮所在链接的地址
    window.location.href = './index-guide.html?eventId=' + eventId;
});



