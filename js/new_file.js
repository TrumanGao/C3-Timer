// 获取开始按钮
$("#start").click(function () {
    // 切换类名current，用于控制计时开始/暂停按钮
    $(".needle").toggleClass("current");
    // 增加类名on，用于结束按钮有效/无效
    $(this).addClass("on");
    
    // 判读是否有current类名
    if($(".needle").hasClass("current")){
        // 秒针运动
        $("#sec").css({
        	"animation": "move 60s infinite linear",
        });
        // 分针运动
        $("#min").css({
        	"animation": "move 3600s infinite linear",
        });
        // 时针运动
        $("#hour").css({
        	"animation": "move 86400s infinite linear",
        });
        $(this).text("暂停");
    } else {
        // 所有指针暂停
        $(".needle").css({
            "animation-play-state": "paused",
        });
        $(this).text("继续");
    }
})

// 获取结束按钮
$("#stop").click(function () {
    // 判断计时器是否启动，启动则结束按钮有效
    if($("#start").hasClass("on")){
        var flag = confirm("一寸光阴一寸金，确定要结束计时吗？")
        if(flag == true){
            alert("emm我对你很失望...");
        } else {
            alert("后悔已经晚了，没想到吧？");
        }
        // 清除动画
        $(".needle").css({
            "animation": "",
        })
        // 切换类名current
        $(".needle").removeClass("current");
        $("#start").text("开始");
        $("#start").removeClass("on");
    } else {
        alert("还没开始呢，急什么")
        $(this).attr("disabled", false);
    }
})




