window.onload = function() {
    var regTel = /^1[3-9]\d{9}$/; //验证手机号
    var regQq = /^[1-9]\d{4,}$/ //第一个qq号为10000
    var regNc = /^[\u4e00-\u9fa5\w.-]{2,8}$/ //昵称为2~8个汉字 
    var regMsg = /^\d{4,}$/ //验证码为4位数以上
    var regpwd = /^[0-9a-zA-Z_.-]{6,16}$/ //密码为6~16位的数字，英文字母-._的组合。
    var regzhong = /^([a-zA-Z-._]{6,16})|([a-zA-Z\d]{6,16})|([-_.\d]{6,16})$///密码强度
    var regruo = /^(\d{6,16})|([-._]{6,16})|([a-zA-Z]{6,16})$/
    var safe = document.querySelector(".safe");
    var qiang = document.querySelector(".qiang");
    var zhong = document.querySelector(".zhong"); 
    var ruo = document.querySelector(".ruo");
    var tel = document.querySelector('#tel')
    var qq = document.querySelector('#qq')
    var nc = document.querySelector('#nc')
    var msg = document.querySelector('#msg')
    var pwd = document.querySelector('#pwd')
    var confirmpwd = document.querySelector('#surepwd')
    var btnshow=document.querySelector('.show')
    reg(tel, regTel)
    reg(qq, regQq)
    reg(nc, regNc)
    reg(msg, regMsg)
    reg(pwd, regpwd)
     /* 判断输入格式 */
    function reg(element, reg){
        element.addEventListener('focus',function(){
            this.nextElementSibling.className = ""
            this.nextElementSibling.innerHTML = ``
        })
        element.addEventListener('blur',function(){
            if (reg.test(this.value)) {
                this.nextElementSibling.className = "success"
                this.nextElementSibling.innerHTML = `<i class="success_icon"></i>`
            } else if(this.value != ''){
                this.nextElementSibling.className = "error"
                this.nextElementSibling.innerHTML = `<i class="error_icon"></i> 格式输入有误`
            }
        })
    }
    /*  点击显示与隐藏密码 */
    var flag = 0;
    btnshow.onclick = function(){
     if(flag == 0){
     pwd.type = 'text';
     flag = 1;
     btnshow.src='img/小眼睛.png';
    }else{
     pwd.type = 'password';
     flag = 0;
     btnshow.src = 'img/闭眼睛.png';
    }
 }
     /* 显示密码安全等级 */
    pwd.addEventListener('focus',function(){
        safe.style.display = "none";
        pwd.type = 'password';
    })
    pwd.addEventListener('blur',function(){
        if(regruo.test(pwd.value)){
            safe.style.display = "inline-block";
            ruo.style.display = "inline-block";
        }else if(regzhong.test(pwd.value)){
            safe.style.display = "inline-block";
            zhong.style.display = "inline-block";
        }else if(regqiang.test(pwd.value)){
            safe.style.display = "inline-block";
            qiang.style.display = "inline-block";
        }
 })
     /* 再次输入密码进行检查 */
    confirmpwd.onblur = function() {
       if(regpwd.test(pwd.value) == false && pwd.value !=''){
            this.nextElementSibling.className = "error"
            this.nextElementSibling.innerHTML = `<i class="error_icon"></i>请检查第一次输入密码格式`
        }else if(this.value != ''&& this.value != pwd.value ) {
            this.nextElementSibling.className = "error"
            this.nextElementSibling.innerHTML = `<i class="error_icon"></i> 两次密码输入不同`
        } else if (this.value === pwd.value && pwd.value !='') {
            this.nextElementSibling.className = "success"
            this.nextElementSibling.innerHTML = `<i class="success_icon"></i>`
        }
    }
}