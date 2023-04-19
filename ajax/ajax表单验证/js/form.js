
//原生JS
/* window.addEventListener('load',function(){
  var form = document.getElementById('form');
  form.addEventListener ('submit',function(event) {
      alert('当前表单已被提交...');
      //取消事件的默认动作。
      console.log('当前表单已被提交...');
      event.preventDefault();

  });
}) */

//JQUEY
$(function () {
    // 第一种方式
    // $('#f1').submit(function (e) {
    //   alert('监听到了表单的提交事件')
    //   e.preventDefault()
    // })

    // 第二种方式
    $('#form').on('submit', function (e) {  
      alert('监听到了表单的提交事件2')
      var data = $('#form').serialize()
      console.log(data)
      e.preventDefault()
    })
  })