$(function(){
    resetui();

    $('#btnSend').click(function(){
        let text = $('#ipt').val().trim();
        if(text.length <= 0){
            return $('#ipt').val('');
        }
        $('#talk_list').append(`<li class="right_word"><img src="image/person02.png"/><span>${text}</span></li>`);
        $('#ipt').val('')
        resetui();
        //发送请求.获得机器人发送回来的消息
        getMsg(text);
    }) 
    
    function getMsg(text){
        $.ajax({
            method:'GET',
            url:'http://www.liulongbin.top:3006/api/robot',
            data:{
                spoken:text,
            },
            success:function(res){
                console.log(res);
                if(res.message ==='success'){
                    let msg = res.data.info.text;
                    $('#talk_list').append(`<li class="left_word"><img src="image/person01.png"/><span>${msg}</span></li>`);
                    resetui();
                    //调用getVoice函数，把文本转化为语音
                    getVoice(msg);
                }
            }
            
        })
    }

function getVoice(text){
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3006/api/synthesize',
        data:{
            text:text,
        },
        success:function(res){
            console.log(res);
            if(res.status ===200){
                $('#voice').attr('src',res.voiceUrl);
            }
        }
    })
}

$('#ipt').keyup(function(e){
    if(e.key =='Enter'){
        $('#btnSend').click();
    }
})
})
