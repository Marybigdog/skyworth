// 上传报名信息
let commitButton = document.querySelector('#commitButton')
commitButton.addEventListener('click', function() {
    alert('提交成功')

    var data = {
        "temuserName": $('#temuserName').val(),
        "temsex": $('#temsex').val(),
        "temgrade": $('#temgrade').val(),
        "temorigo": $('#temorigo').val(),
        "temcolMajor": $('#temcolMajor').val(),
        "temphoneNum": $('#temphoneNum').val(),
        "temqqNum": $('#temqqNum').val(),
        "temdormitory": $('#temdormitory').val(),
        "temfirstChoice": $('#temfirstChoice').val(),
        "temsecondChoice": $('#temsecondChoice').val(),
        "temisObey": $('#temisObey').val(),
        "temintroduce": $('#temintroduce').val(),
        "temexpReason": $('#temexpReason').val()
    }
    console.log(data)

    // $.ajax({
    //     url: "http://localhost:8888/SpringMVCdemo/user/addUser",
    //     type: "POST",
    //     data: JSON.stringify(data), //转JSON字符串
    //     dataType: 'json',
    //     contentType: 'application/json;charset=UTF-8', //contentType很重要   
    //     success: function(result) {
    //         console.log('发送成功');
    //     }
    // })
})