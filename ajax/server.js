//1.引入express
const express = require('express');
//2.创建应用对象
const app = express();
//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/get',(request,response)=>{
    response.setHeader('Access-control-Allow-Origin','*');//设置响应头名称，及其值。
    response.send('发送了一个Ajax请求 get');
});
app.all('/post',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('发送了一个Ajax请求 post');
});
app.all('/repetition',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(()=>{
     response.send('延迟响应');
    },3000)
 
})
app.all('/delay',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(()=>{
    response.send('发送一个请求');
    },3000)

})
app.all('/JSON',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: '轨迹'
    };
    //JSON.stringfy把JS对象转换为JSON字符串
    let str = JSON.stringify(data);
    //设置响应体，send()方法中必须为字符串
    response.send(str);
})

app.all('/jquery-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'轨迹'};
    response.send(JSON.stringify(data));
})
app.all('/axios-server',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
    const data = {
        name:'轨迹'
    }
    response.send(JSON.stringify(data));
})
app.listen(8000,()=>{
    console.log('Server is runing on port 8000')
})