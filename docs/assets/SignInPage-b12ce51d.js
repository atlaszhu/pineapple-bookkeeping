import{bH as E,bC as g,bz as r,bX as F,bW as z,bG as e,bY as l,bL as _,c1 as B}from"./vendor-7c1d6fce.js";import{s as M}from"./pineapple-c3e4a438.js";import{u as V,I as q,B as k,M as w,b as h,h as b,a as p,v as y,o as L}from"./index-a80b2280.js";import{B as N}from"./BackIcon-6a743e0d.js";import"./vant-1401b6a8.js";const R="_signInWrapper_knsu0_1",T="_svg_knsu0_8",Z="_email_knsu0_16",j="_validationCodeWrapper_knsu0_17",P="_validationCode_knsu0_17",U="_validationCodeSendButton_knsu0_48",$="_loginButton_knsu0_55",s={signInWrapper:R,svg:T,email:Z,validationCodeWrapper:j,validationCode:P,validationCodeSendButton:U,loginButton:$},K=E({setup(){const a=g({email:"",code:""});a.email="atlaszhu@foxmail.com",a.code="123456";const n=g({email:[],code:[]}),v=o=>{const t={code:[{key:"code",type:"required",message:"必填"},{key:"code",type:"pattern",regex:/^\d{6}$/,message:"验证码为六位数字"}],email:[{key:"email",type:"required",message:"必填"},{key:"email",type:"pattern",regex:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/,message:"邮箱格式不规范"}]};o==="email"?p(n,y(a,t.email)):p(n,y(a,t.code.concat(t.email)))},I=()=>b.post("/validation_codes",{email:a.email}),m=o=>{L(o,422,t=>{p(n,t.errors)},!1)},i=r(0),u=r(!1),c=r(),d=r(!1),D=()=>{u.value||(v("email"),!h(n)&&(d.value=!0,I().then(()=>{i.value=3,u.value=!0,c.value=setInterval(()=>{i.value--,i.value<=0&&(clearInterval(c.value),c.value=void 0,u.value=!1)},1e3)}).catch(m).finally(()=>{d.value=!1})))},S=F(),W=z(),x=V(),A=()=>{v("all"),!h(n)&&b.post("/session",a,{_autoLoading:!0}).then(o=>{var C,f;localStorage.setItem("jwt",o.data.jwt);let t=(C=W.query.return_to)==null?void 0:C.toString();(t==="/export"||t==="notify")&&(t=void 0),(f=x.refreshMe())==null||f.then(()=>S.push(t||"/")).catch(()=>alert("身份信息异常"))}).catch(m)};return()=>e(w,null,{icon:()=>e(N,null,null),title:()=>"登录",content:()=>e("div",{class:s.signInWrapper},[e(q,{iconName:M,class:s.svg},null),e("p",null,[l("菠萝账本")]),e("label",{class:s.email},[l("邮箱"),_(e("input",{"onUpdate:modelValue":o=>a.email=o},null),[[B,a.email]]),e("p",null,[n.email[0]??"　"])]),e("label",{class:s.validationCodeWrapper},[l("验证码"),e("div",{class:s.validationCode},[_(e("input",{"onUpdate:modelValue":o=>a.code=o,placeholder:"输入验证码"},null),[[B,a.code]]),e(k,{disabled:u.value||d.value,class:s.validationCodeSendButton,onClick:D},{default:()=>[u.value?e("span",null,[l("已发送，"),i.value,l("秒后可重发")]):e("span",null,[l(" 发送验证码")])]})]),e("p",null,[n.code[0]??"　"])]),e(k,{class:s.loginButton,onClick:A},{default:()=>[l("登录")]})])})}});export{K as SignInPage,K as default};
