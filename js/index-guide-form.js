// 初始化
var vConsole = new VConsole();
//单元素占满一行
$(document).ready(function () {
    $('tbody tr').each(function () {
        var $td = $(this).find('td');
        if ($td.length === 1) {
            $td.attr('colspan', '3');
        }
    });

    $('.my_title').on('input', function() {
        var inputValue = $(this).val();
        $('.eventName').val(inputValue);
    });

});

//申请材料 新增删除行
// 添加行按钮点击事件
$(document).on('click', '.add-row-5', function () {
    const newRow = `
            <tr>
                <td><input type="text" class="form-control materialName"></td>
                <td><input type="text" class="form-control materialExample"></td>
                <td><input type="text" class="form-control materialSource"></td>
                <td><input type="text" class="form-control materialType"></td>
                <td><input type="text" class="form-control materialNeed"></td>
                <td><input type="text" class="form-control materialStandard"></td>
                <td>
                    <button class="btn btn-danger btn-sm delete-row-5">删除本行</button>
                    <button class="btn btn-primary btn-sm add-row-5">添加下行</button>
                </td>
            </tr>
        `;
    $(this).closest('tr').after(newRow);
});

// 删除行按钮点击事件
$(document).on('click', '.delete-row-5', function () {
    const row = $(this).closest('tr');
    if (row.index() !== 0) { // 仅删除非第一行的行
        row.remove();
    }
});
//办理流程
// 添加行按钮点击事件
$(document).on('click', '.add-row-2', function () {
    const newRow = `
            <tr>
                <td><input type="text" class="form-control processName" placeholder=""></td>
                <td><input type="text" class="form-control Procedure" placeholder=""></td>
                <td><input type="text" class="form-control worker" placeholder=""></td>
                <td><input type="text" class="form-control limitTime" placeholder=""></td>
                <td><input type="text" class="form-control checkStandard" placeholder=""></td>
                <td><input type="text" class="form-control result" placeholder=""></td>
                <td>
                    <button class="btn btn-danger btn-sm delete-row-2">删除本行</button>
                    <button class="btn btn-primary btn-sm add-row-2">添加下行</button>
                </td>
            </tr>
        `;
    $(this).closest('tr').after(newRow);
});
// 删除行按钮点击事件
$(document).on('click', '.delete-row-2', function () {
    const row = $(this).closest('tr');
    if (row.index() !== 0) { // 仅删除非第一行的行
        row.remove();
    }
});


//点击提交按钮生成json对象
$(document).on('click', '.btn-submit-form', function () {
    //生成事项id,使用时间戳

    //头部获取事项名称
    var eventName = $(".my_title").val();
    //**上方表格**
    var workDepartment = $(".workDepartment").val();
    var serviceObject = $(".serviceObject").val();
    var workTime = $(".workTime").val();
    var workAddress = $(".workAddress").val();
    var consultWay = $(".consultWay").val();
    var complaintWay = $(".complaintWay").val();


    //**基础信息**
    const tableDataTab1 = {
        eventName: eventName,
        eventType: $(".eventType").val(),
        onlineOrNot: $(".onlineOrNot").val(),
        as: $(".as").val(),
        handingType: $(".handingType").val(),
        queryType: $(".queryType").val(),
        progressQuery: $(".progressQuery").val(),
        standard: $(".standard").val()
    };
    // console.log(tableDataTab1);


    //**受理条件,输入#换行**
    const tableDataTab2 = {
        HandlingCondition: $(".tab2Text").val(),
    };
    // console.log(tableDataTab2);


    //**办理流程
    var tableDataTab3 = [];
    $('.table-tab3  tr').each(function () {
        console.log($(this).find('.processName').val());
        const rowData = {
            processName: $(this).find('.processName').val(),
            Procedure: $(this).find('.Procedure').val(),
            worker: $(this).find('.worker').val(),
            limitTime: $(this).find('.limitTime').val(),
            checkStandard: $(this).find('.checkStandard').val(),
            result: $(this).find('.result').val()
        };
        tableDataTab3.push(rowData);
    });
    // console.log(tableDataTab3);


    //**办事地点
    var tableDataTab4 = {
        windowsName: $(".windowsName").val(),
        windowsPhone: $(".windowsPhone").val(),
        windowsTime: $(".windowsTime").val(),
        windowsAddress: $(".windowsAddress").val(),
        trafficGuide: $(".trafficGuide").val()
    };
    // 将对象转换为 JSON 字符串
    // console.log(tableDataTab4);

    //**申请材料
    const tableDataTab5 = [];
    $('.table-tab5  tr').each(function () {
        const rowData = {
            materialName: $(this).find('.materialName').val(),
            materialExample: $(this).find('.materialExample').val(),
            materialSource: $(this).find('.materialSource').val(),
            materialType: $(this).find('.materialType').val(),
            materialNeed: $(this).find('.materialNeed').val(),
            materialStandard: $(this).find('.materialStandard').val()
        };
        tableDataTab5.push(rowData);
    });
    // console.log(tableDataTab5);
    var eventId = new Date().getTime().toString();
    //封装json
    const finalJson = {
        //时间戳作为事件id
        eventId:eventId ,
        eventName: eventName,
        officeHall: workAddress,
        codeAddress: "",
        codeItem: "",
        workAttentionAddress: "",
        workAttention: {
            workId: this.eventId,
            workDepartment: workDepartment,
            serviceObject: serviceObject,
            workTime: workTime,
            workAddress: workAddress,
            consultWay: consultWay,
            complaintWay: complaintWay,
            //基础信息
            basicInfo: tableDataTab1,
            //受理条件
            HandlingCondition: tableDataTab2,
            //办理流程
            handlingProcess: tableDataTab3,
            //办事地点
            handingAddress: tableDataTab4,
            //申请材料
            applicationMaterial: tableDataTab5,
        }
    };
    console.log(finalJson);

    /**
     *
     * @param eventId
     * @param text
     */
    function download(eventId, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', eventId);
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();
        document.body.removeChild(element);
    }
        download(eventId+'.json',JSON.stringify(finalJson));


});