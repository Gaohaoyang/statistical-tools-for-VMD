$(document).ready(function() {

    /*fileinput*/
    $('#file').fileinput({
        browseClass: "btn btn-default btn-block",
        browseLabel:"...",
        /*showCaption: false,*/
        showRemove: false,
        showUpload: false,
    });

    /*开始统计按钮*/
    $("#start").click(function() {
        /*接收表单信息*/
        var sNumber = $('#number').val();
        var sLetter = $('#letter').val();
        var file = $("#file").val();/*ie下是完整名，FF下是文件名*/
        console.log("fileName:"+file);
        var sFileName = getFileName(file);
        console.log("fileName2:"+sFileName);

        console.log("数字："+sNumber);
        console.log("字母："+sLetter);
        /*读取txt文件*/
        txt = $.ajax({
            /*url: 'Helix_X_dssp.txt',*/
            url:'files/'+sFileName,
            async: false
        });
        /*console.log(txt.responseText);*/
        txt.responseText = txt.responseText+"";//转化为字符串
        /*将txt且分为数组，每行是一个单元*/
        /* '\r'是回车,'\n'是换行,前者使光标到行首,后者使光标下移一格。通常用的Enter是两个加起来。*/
        var array = txt.responseText.split('\r\n');
        console.log("行数"+array.length);
        console.log("第10行内容"+array[9]);

        var count = 0;
        for(var i=0;i<array.length;i++){
            if(array[i].search(sNumber)==0 && array[i].search(sLetter)==array[i].length-1){
                count++;/*首位是数字，且末位是字母，计数器+1*/
            }
        }
        console.log(sNumber+"和"+sLetter+"组合出现次数："+count);
        /*结果显示区*/
        $(".panel-body").html("<p>当前文件："+sFileName+"</p><p>总行数："+array.length+"</p><p>"+sNumber+"和"+sLetter+"组合出现行数："+count+"</p>");
    });

    /*帮助按钮*/
    $("#help").click(function() {
        if ($(this).attr('aria-expanded')=='false'){
            $(this).html("▲ 隐藏帮助");
        } else{
            $(this).html("▼ 显示帮助");
        }
    });
});

/*因为IE下获取的是完整路径，我们要截取文件名*/
function getFileName(o){
    var pos=o.lastIndexOf("\\");
    return o.substring(pos+1);  
}