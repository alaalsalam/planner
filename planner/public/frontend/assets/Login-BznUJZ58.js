import{r as g,G as k,v as o,k as m,u as e,O as V,l as r,i as c,j as _,A as p,F as L,x as C,e as h,f as n,P as u,_ as x,Q as b,z as B}from"./index-D-nDpyS1.js";const E={class:"flex h-screen w-screen justify-center bg-gray-100"},N={class:"mt-32 w-full px-4"},P={class:"mx-auto mt-6 w-full px-4 sm:w-96"},S={class:"mt-4"},j={key:1,class:"mx-auto space-y-2"},z=["href"],O={__name:"Login",setup(M){let t=g(!1),l=g(""),i=g(""),d=k({url:"planner.api.oauth_providers",auto:!0,onSuccess(f){t.value=f.length===0}});d.fetch();function w(){u.login.submit({email:l.value,password:i.value})}return(f,s)=>{const y=h("ErrorMessage"),v=h("Button");return n(),o("div",E,[m("div",N,[m("div",P,[e(t)?(n(),o("form",{key:0,method:"POST",action:"/api/method/login",onSubmit:V(w,["prevent"])},[m("div",null,[r(e(x),{variant:"outline",size:"md",type:(e(l)||"").toLowerCase()==="administrator"?"text":"email",label:"Email",modelValue:e(l),"onUpdate:modelValue":s[0]||(s[0]=a=>c(l)?l.value=a:l=a),placeholder:"jane@example.com",disabled:e(u).login.loading},null,8,["type","modelValue","disabled"])]),m("div",S,[r(e(x),{variant:"outline",size:"md",label:"Password",modelValue:e(i),"onUpdate:modelValue":s[1]||(s[1]=a=>c(i)?i.value=a:i=a),placeholder:"••••••",disabled:e(u).login.loading,type:"password"},null,8,["modelValue","disabled"])]),r(y,{class:"mt-2",message:e(u).login.error},null,8,["message"]),r(v,{variant:"solid",class:"mt-6 w-full",loading:e(u).login.loading},{default:_(()=>[b(" Login ")]),_:1},8,["loading"]),e(d).data.length?(n(),o("button",{key:0,class:"mt-2 w-full py-2 text-base text-gray-600",onClick:s[2]||(s[2]=a=>c(t)?t.value=!1:t=!1)}," Login using other methods ")):p("",!0)],32)):p("",!0),e(d).data&&!e(t)?(n(),o("div",j,[r(v,{onClick:s[3]||(s[3]=a=>c(t)?t.value=!0:t=!0),variant:"solid",class:"w-full"},{default:_(()=>[b(" Login via email ")]),_:1}),(n(!0),o(L,null,C(e(d).data,a=>(n(),o("a",{class:"block w-full rounded border bg-gray-900 px-3 py-1 text-center text-base h-7 focus:outline-none focus:ring-2 focus:ring-gray-400 text-white transition-colors hover:bg-gray-700",key:a.name,href:a.auth_url}," Login via "+B(a.provider_name),9,z))),128))])):p("",!0)])])])}}};export{O as default};
