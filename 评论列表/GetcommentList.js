$(function(){
    function getCommentList() {
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function(res){
            if(res.status !==200) return alert('获取信息失败');
            let rows =[];
            $.each(res.data,function(i,item){
                let String =`<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：'${item.time}'</span><span class="badge" style="background-color: #5BC0DE;">评论人:${item.username}</span>${item.content}</li>`
                rows.push(String);
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
    }
    getCommentList();
    $(function(){
        $('#formAddCmt').submit(function(e){
         e.preventDefault();
         var data = $(this).serialize();
         $.ajax({
            method:'POST',
            url:'http://www.liulongbin.top:3006/api/addcmt',
            data:data,
            success:function(res){
                if(res.status!==201) {
                    console.log(res.status);
                    return alert('发表评论失败');
                }
                getCommentList();
                $('#formAddCmt')[0].reset();
            }
         })
        })
    })
})