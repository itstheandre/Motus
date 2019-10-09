(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){e.exports=a(251)},117:function(e,t,a){},146:function(e,t){},147:function(e,t){},148:function(e,t){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),c=a.n(l),o=(a(117),a(15)),s=a(16),u=a(18),i=a(17),m=a(19),d=(a(37),a(8)),p=a(6),f=a.n(p),h=function(e){f.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))},g=function(e){return console.log("NAVBAR: ",e),r.a.createElement("nav",{className:" sticky-top navbar navbar-expand-lg navbar-dark default-color"},r.a.createElement(d.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:"motus-logo2.png",style:{height:"30px"}})),e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{className:"navbar-brand",to:"/content-dashboard"},"Content"),r.a.createElement(d.b,{className:"navbar-brand",to:"/charts/".concat(e.user.username)},"Analytics"),r.a.createElement(d.b,{className:"navbar-brand my-2 my-lg-0 ml-auto",to:"/",onClick:function(){return h(e)}},r.a.createElement("i",{class:"fas fa-sign-out-alt"}))," "):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{className:"navbar-brand my-2 my-lg-0 ml-auto",to:"/signup"},"Signup"),r.a.createElement(d.b,{className:"navbar-brand my-2 my-lg-0 ml-auto",to:"/login"},r.a.createElement("i",{class:"fas fa-sign-in-alt"}))),e.user&&r.a.createElement("h3",{className:"heyUser my-2 my-lg-0 ml-auto"},"Hey ",e.user.fullName),r.a.createElement(d.b,{style:{marginTop:"5px"},to:"/settings"},r.a.createElement("i",{class:"fas fa-user-edit white-text"})))},b=a(4),v=a(5),E=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(b.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(""),d=Object(b.a)(m,2),p=d[0],h=d[1],g=Object(n.useState)(""),E=Object(b.a)(g,2),y=E[0],O=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.c,null,r.a.createElement(v.e,null,r.a.createElement(v.b,null,r.a.createElement("h1",{className:"text-center mb-4 logIn"},"Sign up"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),function(e,t,a){return f.a.post("/api/auth/signup",{username:e,password:t,fullName:a}).then((function(e){return console.log("Response: I copied from Montasar:",e.data),e.data})).catch((function(e){return e.response.data}))}(l,u,y).then((function(t){t.message?h(t.message):(e.setUser(t),e.history.push("/content-dashboard"))}))}},r.a.createElement("div",{className:"grey-text"},r.a.createElement(v.d,{label:"username",validate:!0,group:!0,error:"wrong",success:"right",type:"text",name:"username",id:"username",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement(v.d,{label:"name",validate:!0,group:!0,error:"wrong",success:"right",type:"text",name:"fullName",id:"fullName",value:y,onChange:function(e){return O(e.target.value)}}),r.a.createElement(v.d,{label:"password",validate:!0,group:!0,error:"wrong",success:"right",type:"password",name:"password",id:"password",value:u,onChange:function(e){return i(e.target.value)}})),p&&r.a.createElement("h1",null,p),r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{type:"submit"},"Create Account")))))))},y=a(31),O=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(b.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(""),d=Object(b.a)(m,2),p=d[0],h=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.c,null,r.a.createElement(v.e,null,r.a.createElement(v.b,null,r.a.createElement("h1",{className:" text-center mb-4 logIn"},"Log in"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),function(e,t){return f.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(l,u).then((function(t){t.message?h(t.message):(e.setUser(t),e.history.push("/projects"))}))}},r.a.createElement("div",{className:"grey-text"},r.a.createElement(v.d,{label:"username",validate:!0,group:!0,error:"wrong",success:"right",type:"text",name:"username",id:"username",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement(v.d,{label:"password",validate:!0,group:!0,error:"wrong",success:"right",type:"password",name:"password",id:"password",value:u,onChange:function(e){return i(e.target.value)}})),p&&r.a.createElement("h1",null,p),r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{type:"submit"},"Login")))))))},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={textToCopy:""},a.componentDidMount=function(){var e=a.props.content._id,t=a.props.user.username;a.setState({textToCopy:"http://localhost:3000/u/".concat(t,"/").concat(e)})},a.handleClick=function(e){return e.preventDefault(),f.a.delete("/api/content/".concat(a.props.content._id)).then((function(e){a.props.getData()}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"borderCard"},r.a.createElement("div",{className:"contentCard"},r.a.createElement("h2",null,this.props.content.title),r.a.createElement("h4",null,this.props.content.date),r.a.createElement(d.b,{style:{textDecoration:"none",color:"black"},to:"/content-dashboard/".concat(this.props.content._id)},r.a.createElement("i",{className:"fas fa-lg fa-eye"})),r.a.createElement(d.b,{style:{textDecoration:"none",color:"black"},to:"/edit/".concat(this.props.content._id)},r.a.createElement("i",{className:"fas fa-lg fa-edit"})),r.a.createElement("i",{className:"fas fa-lg fa-trash-alt",onClick:this.handleClick}),r.a.createElement("i",{className:"far fa-lg fa-share-square",onClick:function(){return navigator.clipboard.writeText(e.state.textToCopy)}}),r.a.createElement(d.b,{to:"/u/".concat(this.props.user.username,"/").concat(this.props.content._id)}," ","View as Normal")),r.a.createElement("hr",{width:"80%"}))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user,content:[],textToCopy:""},a.componentDidMount=function(){a.getData()},a.getData=function(){f.a.get("/api/content").then((function(e){a.setState({content:e.data})}))},a.setTextToCopy=function(e){var t=a.state.user.username.username;a.setState({textToCopy:"http://localhost:3000/u/".concat(t,"/").concat(e)}),navigator.clipboard.writeText(a.state.textToCopy)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=0!==t.content.length&&"Not empty";return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"},className:"logIn"},"My Content Dashboard"),r.a.createElement("br",null),!n&&r.a.createElement("div",null,"Click above "),this.state.content.reverse().map((function(t){return r.a.createElement("div",{className:"text-center dashCard"},r.a.createElement(j,{content:t,getData:e.getData,key:t._id,user:e.state.user}))}))),r.a.createElement("div",{className:"fixed-bottom addBtn"},r.a.createElement(d.b,{to:"/content-dashboard/add"},r.a.createElement("i",{className:"fas fa-3x fa-plus-circle text-default"})))):r.a.createElement("h1",null,"You are not logged in, so no dashboard for you")}}]),t}(n.Component),w=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(b.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)("image"),d=Object(b.a)(m,2),p=d[0],h=d[1],g=Object(n.useState)(!1),E=Object(b.a)(g,2),y=E[0],O=E[1],j=Object(n.useState)(""),x=Object(b.a)(j,2),w=x[0],S=x[1],N=Object(n.useState)(""),C=Object(b.a)(N,2),V=C[0],A=C[1],P=y?"multipart/form-data":"",D="image"===p,T="audio"===p,F="video"===p,M="text"===p;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.c,null,r.a.createElement(v.e,null,r.a.createElement(v.b,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l&&u&&p&&w?(console.log(l),f.a.post("/api/content/add",{urlPath:l,title:u,contentType:p,body:w}).then((function(){e.history.push("/content-dashboard")}))):A("Please fill out the whole form")},encType:P},r.a.createElement("label",{className:"text-default logIn",htmlFor:"title"},"Title"),r.a.createElement(v.d,{label:"",type:"text",name:"title",id:"title",value:u,onChange:function(e){return i(e.target.value)}}),r.a.createElement("label",{className:"text-default logIn",htmlFor:"contentType"},"Content Type"),r.a.createElement("select",{className:"browser-default custom-select",id:"contentType",name:"contentType",value:p,onChange:function(e){console.log("Option selected:",e.target.value);var t=e.target.value;console.log(typeof t,t===e.target.value),"text"===t?(h(t),A("Adding text will be added later. Stay tuned!")):"video"!==t?(h(t),O(!0)):(h(t),A(""))}},r.a.createElement("option",{value:"image"},"Image"),r.a.createElement("option",{value:"text"},"Text"),r.a.createElement("option",{value:"audio"},"Audio"),r.a.createElement("option",{value:"video"},"Video")),D&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"text-default logIn",htmlFor:"file"},"Upload your image"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",name:"urlPath",id:"urlPath",onChange:function(e){console.log("the file to be added is",e.target.files[0]);var t=e.target.files[0],a=new FormData;a.append("urlPath",t),f.a.post("/api/content/add/image",a).then((function(e){var t=e.data.secure_url;c(t)}))},className:"custom-file-input","aria-describedby":"inputGroupFileAddon01"}),r.a.createElement("label",{className:"custom-file-label grey-text",htmlFor:"file"},"choose file")),r.a.createElement("img",{src:l}))),T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"text-default logIn",htmlFor:"file"},"Upload your audio"),r.a.createElement(v.d,{type:"file",name:"urlPath",id:"urlPath",onChange:function(e){console.log("the file to be added is",e.target.files[0]);var t=e.target.files[0],a=new FormData;a.append("urlPath",t),f.a.post("/api/content/add/audio",a).then((function(e){var t=e.data.secure_url;c(t)}))}})),F&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"file"},"Paste your Youtube Link"),r.a.createElement(v.d,{type:"text",name:"urlPath",id:"urlPath",onChange:function(e){return c(e.target.value)},value:l})),M&&r.a.createElement("div",null,V),r.a.createElement("label",{htmlFor:"body"},"Add a description"),r.a.createElement(v.d,{name:"body",id:"body",type:"text",value:w,onChange:function(e){return S(e.target.value)}}),!M&&r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{type:"submit"},"Upload")),V)))))},S=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(b.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(""),d=Object(b.a)(m,2),p=(d[0],d[1]),h=Object(n.useState)(""),g=Object(b.a)(h,2),v=g[0],E=g[1];return Object(n.useEffect)((function(){var t=e.match.params.unique;f.a.get("/api/content/".concat(t)).then((function(e){var t=e.data,a=t.title,n=t.body,r=t._id,l=t.owner.username,o=t.owner.fullName;c(a),i(n),p(o),E("http://localhost:3000/u/".concat(l,"/").concat(r))}))}),[]),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.history.goBack()}},r.a.createElement("i",{class:"fas fa-3x fa-angle-left"})),r.a.createElement("h1",null,l),r.a.createElement("p",null,u),r.a.createElement("button",{onClick:function(){navigator.clipboard.writeText(v)}},"Share this link and check the emotional responses."))},N=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(b.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(""),d=Object(b.a)(m,2),p=d[0],h=d[1];return Object(n.useEffect)((function(){var t=e.match.params.editPost;f.a.get("/api/content/".concat(t)).then((function(e){var t=e.data._id,a=e.data,n=a.title,r=a.body;c(n),i(r),h(t)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.c,null,r.a.createElement(v.e,null,r.a.createElement(v.b,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),f.a.put("/api/content/".concat(p),{title:l,body:u}).then((function(){e.history.push("/content-dashboard")}))}},r.a.createElement("div",{className:"text-default"},r.a.createElement("label",{className:"text-default logIn",htmlFor:"title"},"Title"),r.a.createElement(v.d,{type:"text",id:"title",name:"title",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{className:"text-default",htmlFor:"body"},"Description"),r.a.createElement(v.d,{type:"text",id:"body",name:"body",value:u,onChange:function(e){return i(e.target.value)}}),r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{type:"submit"},"Save"))))))))},C=a(41),V=a.n(C),A=a(70),P=a(24),D=a(23),T=a(108),F=function(e){if(0===e.length)return 0;e.sort((function(e,t){return e-t}));var t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2},M=null,k=null;"undefined"!==typeof document.hidden?(M="hidden",k="visibilitychange"):"undefined"!==typeof document.msHidden?(M="msHidden",k="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(M="webkitHidden",k="webkitvisibilitychange");var I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={actions:[]},a.handleVisibilityChange=function(){document[M]?a.setState({actions:[].concat(Object(P.a)(a.state.actions),["hide"])}):a.setState({actions:[].concat(Object(P.a)(a.state.actions),["show"])})},a.dataManager=function(){clearInterval(a.myDetection),a.webcam();var e=a.MaxAndAvg(),t=a.timeSessionCalculation(),n={angry:[e.angryMaxValue,e.angryAvgValue],disgusted:[e.disgustedMaxValue,e.disgustedAvgValue],fearful:[e.fearfulMaxValue,e.fearfulAvgValue],happy:[e.happyMaxValue,e.happyAvgValue],neutral:[e.neutralMaxValue,e.neutralAvgValue],sad:[e.sadMaxValue,e.sadAvgValue],surprised:[e.surprisedMaxValue,e.surprisedAvgValue],age:Math.ceil(e.age),gender:e.gender,time:{fullTime:e.time,min:t.min,sec:t.sec}};console.log("FaceDetectionOBJ------",n),console.log("STATE AFTER UNMOUNT-------",e),f.a.put("/api/views/".concat(a.props.id),n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.timeElapsed=[],a.timeSession=function(){var e,t=(new Date).toString().split(" "),n=t[2],r=t[1],l=t[3],c=t[4].toString().split(""),o=c[0]+c[1],s=c[3]+c[4],u=c[6]+c[7];return e="".concat(n," ").concat(r," ").concat(l," ").concat(o,":").concat(s,":").concat(u),a.timeElapsed.push(e)},a.timeSessionCalculation=function(){var e=parseInt(a.timeElapsed[0].split(" ")[3].split(":")[1]),t=parseInt(a.timeElapsed[0].split(" ")[3].split(":")[2]),n=parseInt(a.timeElapsed[1].split(" ")[3].split(":")[1]),r=parseInt(a.timeElapsed[1].split(" ")[3].split(":")[2]);return{min:n-e,sec:n-e>0?60-t+r:r-t}},a.angryValues=[],a.disgustedValues=[],a.fearfulValues=[],a.happyValues=[],a.neutralValues=[],a.sadValues=[],a.surprisedValues=[],a.ageValues=[],a.genderValues=[],a.maleCount=0,a.femaleCount=0,a.exactGender=function(e){return e&&e.forEach((function(e){"male"===e?a.maleCount++:"female"===e&&a.femaleCount++})),a.maleCount>a.femaleCount?"male":a.femaleCount>a.maleCount?"female":""},a.MaxAndAvg=function(){return{angryMaxValue:Math.max.apply(Math,Object(P.a)(a.angryValues)),disgustedMaxValue:Math.max.apply(Math,Object(P.a)(a.disgustedValues)),fearfulMaxValue:Math.max.apply(Math,Object(P.a)(a.fearfulValues)),happyMaxValue:Math.max.apply(Math,Object(P.a)(a.happyValues)),neutralMaxValue:Math.max.apply(Math,Object(P.a)(a.neutralValues)),sadMaxValue:Math.max.apply(Math,Object(P.a)(a.sadValues)),surprisedMaxValue:Math.max.apply(Math,Object(P.a)(a.surprisedValues)),angryAvgValue:F(a.angryValues),disgustedAvgValue:F(a.disgustedValues),fearfulAvgValue:F(a.fearfulValues),happyAvgValue:F(a.happyValues),neutralAvgValue:F(a.neutralValues),sadAvgValue:F(a.sadValues),surprisedAvgValue:F(a.surprisedValues),age:F(a.ageValues),ageArray:a.ageValues,gender:a.exactGender(a.genderValues),genderArray:a.genderValues,maleNum:a.maleCount,femaleNum:a.femaleCount,time:a.timeElapsed}},a.myDetection=0,a.webcam=function(){var e=document.getElementById("video");navigator.getUserMedia({video:{}},(function(t){return e.srcObject=t.getVideoTracks().forEach((function(e){return e.stop()}))}),(function(e){return console.error(e)}))},a.faceApi=function(){var e=document.getElementById("video");Promise.all([D.e.tinyFaceDetector.loadFromUri("/assets"),D.e.faceLandmark68Net.loadFromUri("/assets"),D.e.faceRecognitionNet.loadFromUri("/assets"),D.e.faceExpressionNet.loadFromUri("/assets"),D.e.ageGenderNet.loadFromUri("/assets")]).then((function(){navigator.getUserMedia({video:{}},(function(t){return e.srcObject=t}),(function(e){return console.error(e)}))})),e.addEventListener("play",Object(A.a)(V.a.mark((function t(){var n,r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.b(e);case 2:return n=t.sent,document.body.append(n),r={width:e.width,height:e.height},t.next=7,D.d(n,r);case 7:console.log("WEBCAM LOADED"),a.myDetection=setInterval(Object(A.a)(V.a.mark((function t(){var n;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.c(e,new D.a).withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptors();case 2:void 0===(n=t.sent)[0]?console.log("DETECTION FAILED... "):n[0].expressions&&(console.log("STORING EMOTIONS..."),n[0].expressions.angry&&a.angryValues.push(n[0].expressions.angry),n[0].expressions.disgusted&&a.disgustedValues.push(n[0].expressions.disgusted),n[0].expressions.fearful&&a.fearfulValues.push(n[0].expressions.fearful),n[0].expressions.happy&&a.happyValues.push(n[0].expressions.happy),n[0].expressions.neutral&&a.neutralValues.push(n[0].expressions.neutral),n[0].expressions.sad&&a.sadValues.push(n[0].expressions.sad),n[0].expressions.surprised&&a.surprisedValues.push(n[0].expressions.surprised),a.ageValues.push(n[0].age),a.genderValues.push(n[0].gender));case 4:case"end":return t.stop()}}),t)}))),100);case 9:case"end":return t.stop()}}),t)}))))},a.componentDidMount=function(){a.timeSession(),a.faceApi(),document.addEventListener(k,a.handleVisibilityChange,!1)},a.componentWillUnmount=function(){document.removeEventListener(k,a.handleVisibilityChange),a.timeSession(),a.timeSessionCalculation(),a.dataManager()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return"hide"===this.state.actions[this.state.actions.length-1]?(console.log("TAB FOCUS IS HIDDEN"),this.timeSession(),this.timeSessionCalculation(),this.dataManager()):"show"===this.state.actions[this.state.actions.length-1]&&(this.timeElapsed=[],this.timeSession(),this.faceApi()),r.a.createElement("div",{class:"faceApi"},r.a.createElement(T.Beforeunload,{onBeforeunload:function(){return console.log("DISPLAY PROPS: ----",e.props),e.timeSession(),e.timeSessionCalculation(),e.dataManager(),!1}}),r.a.createElement("video",{id:"video",width:"720",height:"560",autoPlay:!0,muted:!0}))}}]),t}(n.Component),U=a(109),_=a.n(U),H=a(110),B=a.n(H),L=function(e){var t="video"===e.contentType,a="audio"===e.contentType,n="image"===e.contentType;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,n&&r.a.createElement("img",{src:e.urlPath}),t&&r.a.createElement("div",{className:"videoPlayer"},r.a.createElement("div",{className:"embed-responsive"},r.a.createElement(_.a,{url:e.urlPath,controls:!0}))),a&&r.a.createElement(B.a,{src:e.urlPath,controls:!0}),r.a.createElement("br",null),"HERE ",e.views," views",r.a.createElement("br",null),r.a.createElement(d.b,{to:"/u/".concat(e.owner)},"Check the creator's page"),r.a.createElement(I,{id:e.viewId})))},R=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(b.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(""),d=Object(b.a)(m,2),p=d[0],h=d[1],g=Object(n.useState)(""),v=Object(b.a)(g,2),E=v[0],y=v[1],O=Object(n.useState)(""),j=Object(b.a)(O,2),x=j[0],w=j[1],S=Object(n.useState)(""),N=Object(b.a)(S,2),C=N[0],V=N[1],A=Object(n.useState)(0),P=Object(b.a)(A,2),D=P[0],T=P[1],F=Object(n.useState)(""),M=Object(b.a)(F,2),k=M[0],I=M[1],U=Object(n.useState)(""),_=Object(b.a)(U,2),H=_[0],B=_[1];Object(n.useEffect)((function(){var t=e.match.params.user,a=e.match.params.id;f.a.get("/u/api/".concat(t,"/").concat(a)).then((function(e){var t=e.data._id,a=e.data.owner.username,n=e.data.owner._id,r=e.data.views.length,l=e.data,o=l.title,s=l.body,u=l.contentType,m=l.urlPath;f.a.post("/api/views/".concat(t)).then((function(e){var l=e.data._id;i(s),c(o),y(a),w(n),V(l),h(t),T(r),B(u),I(m)}))}))}),[]);var R={title:l,body:u,contentId:p,owner:E,ownerId:x,viewId:C,viewTotal:D,contentType:H,urlPath:k};return r.a.createElement("div",null,r.a.createElement(L,R))},G=function(e){return r.a.createElement("div",{className:"contentCard"},r.a.createElement("h2",null,e.content.title),r.a.createElement("h4",null,e.content.date),r.a.createElement("button",null,r.a.createElement(d.b,{to:"/u/".concat(e.user,"/").concat(e.content._id)},"View")))},W=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(b.a)(o,2),u=s[0],i=s[1];return Object(n.useEffect)((function(){var t=e.match.params.user;f.a.get("/u/api/".concat(t)).then((function(e){var a=e.data;c(a),i(t)}))}),[]),r.a.createElement(r.a.Fragment,null,l.reverse().map((function(e){return r.a.createElement(G,{content:e,key:e._id,user:u})})))},Y=a(67),q=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getDato",value:function(){var e=this.props.match.params.user;f.a.get("http://localhost:5005/api/chart/".concat(e)).then((function(e){var t=e.data.map((function(e){return e.views}));console.log("Conten info!!! ",t);var a=[];t.forEach((function(e,t){e.forEach((function(e,t){a.push(e.averageEmotion)}))}));var n=[];a.forEach((function(e,t){n.push(e.neutralAvg)}));var r=(100-n.reduce((function(e,t){return e+t}),0)/n.length).toFixed(2);function l(e){return a.reduce((function(t,a){return a&&a[e]&&t++,t}),0)}console.log(r),console.log(n);var c=[];console.log("Hola!! ",t),t.forEach((function(e,t){e.forEach((function(e){c.push(e.age)}))}));var o=c.reduce((function(e,t){return e+t}),0),s=[];t.forEach((function(e,t){e.forEach((function(e){s.push(e.gender)}))}));var u=s.filter((function(e){if("male"===e)return e})),i=((u.length/s.length*100).toFixed(2),((s.length-u.length)/s.length*100).toFixed(2),s.length,Math.floor(o/c.length),{angry:l("angryAvg"),disgusted:l("disgustedAvg"),fearful:l("fearfulAvg"),happy:l("happyAvg"),sad:l("sadAvg"),surprised:l("surprisedAvg")});console.log(i)}))}},{key:"render",value:function(){return console.log(this.props.content),r.a.createElement("div",null,r.a.createElement("h4",null,"Number of views ",this.props.content.views.length," "),r.a.createElement("h1",null,"Hello"))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={chartData:{},emotionalImpact:0,malePercent:0,femalePercent:0,age:0,views:0,content:[]},a.componentDidMount=function(){a.getData()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getData",value:function(){var e=this,t=this.props.match.params.user;f.a.get("http://localhost:5005/api/chart/all/".concat(t)).then((function(t){t.data;var a=[];t.data.map((function(e){return e.views})).forEach((function(e){e.forEach((function(e){a.push(e)}))}));var n=a.map((function(e){return e.averageEmotion}));a.map((function(e){return e.maxEmotion}));function r(e){return n.reduce((function(t,a){return a&&a[e]&&t++,t}),0)}function l(e){return e.reduce((function(e,t){return t+e}))/e.length}var c=[];n.forEach((function(e){c.push(e.neutralAvg)}));var o=(100-l(c)).toFixed(2),s=[];a.forEach((function(e){s.push(e.age)}));var u=Math.floor(l(s)),i=[];a.forEach((function(e){i.push(e.gender)}));var m=i.filter((function(e){if("male"===e)return e})),d=(m.length/i.length*100).toFixed(2),p=((i.length-m.length)/i.length*100).toFixed(2),f=a.length,h={angry:r("angryAvg"),disgusted:r("disgustedAvg"),fearful:r("fearfulAvg"),happy:r("happyAvg"),sad:r("sadAvg"),surprised:r("surprisedAvg")},g={labels:["Angry","Disgusted","Fearful","Happy","Sad","Surprised"],datasets:[{label:"Emotions detected",data:[h.angry,h.disgusted,h.fearful,h.happy,h.sad,h.surprised],backgroundColor:["rgba(255, 95, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]};e.setState({chartData:g,age:u,femalePercent:p,malePercent:d,emotionalImpact:o,views:f})}))}},{key:"render",value:function(){return console.log(this.state.content),r.a.createElement("div",{className:"chart"},r.a.createElement(Y.a,{data:this.state.chartData,options:{maintainAspectRatio:!1}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement("h5",null,"Emotional Impact: ",this.state.emotionalImpact,"%"),r.a.createElement("h5",null,"Average Age: ",this.state.age,"  "),r.a.createElement("h5",null,"Male:",this.state.malePercent,"%"),r.a.createElement("h5",null,"Female:",this.state.femalePercent,"%"),r.a.createElement("h5",null,"Total views:",this.state.views)),this.state.content.map((function(e){return r.a.createElement(q,{content:e})})))}}]),t}(n.Component),Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"motusHeader logIn",src:"motus-header.png"}),r.a.createElement("iframe",{style:{pointerEvents:"none"},src:"https://giphy.com/embed/KD1vTHZYe5l8TcPZHo",width:"480",height:"300",frameBorder:"0",className:" motusHeader giphy-embed",allowFullScreen:!0}),r.a.createElement("p",{style:{fontSize:"2rem"},className:"motusHeader"},"the app that makes analitics of a content in terms of user's emotions, age, gender and time spent on a page"))},z=a(32);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=function(e){var t=e.setUser,a=e.handleSubmit,n=e.onImageUpload,l=e.user;return console.log(l),r.a.createElement(v.c,null,r.a.createElement(v.e,null,r.a.createElement(v.b,null,r.a.createElement("form",{onSubmit:a},r.a.createElement(v.d,{label:"name",type:"text",name:"fullName",id:"fullName",value:l.fullName,onChange:function(e){return t($({},l,Object(z.a)({},e.target.name,e.target.value)))}}),r.a.createElement(v.d,{label:"username",type:"text",name:"username",id:"username",value:l.username,onChange:function(e){return t($({},l,Object(z.a)({},e.target.name,e.target.value)))}}),r.a.createElement(v.d,{label:"oldpassword",type:"password",name:"oldPasswordTest",id:"oldPasswordTest",value:l.oldPasswordTest,onChange:function(e){return t($({},l,Object(z.a)({},e.target.name,e.target.value)))}}),r.a.createElement(v.d,{label:"new password",type:"password",name:"newPasswordTest",id:"newPasswordTest",value:l.newPasswordTest,onChange:function(e){return t($({},l,Object(z.a)({},e.target.name,e.target.value)))}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",name:"profilePictureTest",id:"profilePictureTest",onChange:n,className:"custom-file-input","aria-describedby":"inputGroupFileAddon01"}),r.a.createElement("label",{className:"custom-file-label grey-text",htmlFor:"file"},"choose file"))),r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{type:"submit"},"Save"))))))};function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var te=function(e){var t=e.user._id,a=e.history;console.log(t);var l=Object(n.useState)({fullName:"",username:"",profilePicture:"",oldPasswordTest:"",newPasswordTest:""}),c=Object(b.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(!1),i=Object(b.a)(u,2),m=(i[0],i[1],Object(n.useState)("")),d=Object(b.a)(m,2),p=d[0],h=d[1];Object(n.useEffect)((function(){f.a.get("/api/userSettings/".concat(t)).then((function(e){var t=e.data,a=t.fullName,n=t.username;s(ee({},o,{fullName:a,username:n}))}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",{className:" text-center mb-4 logIn"},"Edit your profile"),r.a.createElement(Q,{setUser:s,handleSubmit:function(e){e.preventDefault(),console.log(o),f.a.put("/api/userSettings/".concat(t),o).then((function(){a.push("/content-dashboard")})).catch((function(e){h(e.response.data.message)}))},onImageUpload:function(e){console.log("the file to be added is",e.target.files[0]);var t=e.target.files[0],a=new FormData;a.append("profilePictureTest",t),f.a.post("/api/userSettings/add/image",a).then((function(e){var t=e.data.secure_url;s(ee({},o,{profilePicture:t}))}))},user:o}),r.a.createElement("p",{style:{textAlign:"center"}},p))},ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(g,{user:this.state.user,setUser:this.setUser}),r.a.createElement(y.c,null," ",r.a.createElement(y.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(E,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(y.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(O,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(y.a,{exact:!0,path:"/content-dashboard",render:function(t){return r.a.createElement(x,Object.assign({user:e.state.user},t))}}),r.a.createElement(y.a,{exact:!0,path:"/content-dashboard/add",component:w}),r.a.createElement(y.a,{exact:!0,path:"/content-dashboard/:unique",component:S}),r.a.createElement(y.a,{exact:!0,path:"/edit/:editPost",component:N}),r.a.createElement(y.a,{exact:!0,path:"/u/:user",component:W}),r.a.createElement(y.a,{exact:!0,path:"/u/:user/:id",component:R}),r.a.createElement(y.a,{exact:!0,path:"/",component:Z}),r.a.createElement(y.a,{exact:!0,path:"/chart/:user",render:function(t){return r.a.createElement(J,Object.assign({user:e.state.user},t))}}),r.a.createElement(y.a,{exact:!0,path:"/settings",render:function(t){return r.a.createElement(te,Object.assign({user:e.state.user},t))}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(248),a(249),a(250);f.a.get("/api/auth/loggedin").then((function(e){var t=e.data;c.a.render(r.a.createElement(d.a,null,r.a.createElement(ae,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.689d6db3.chunk.js.map