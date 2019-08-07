(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){e.exports=a(262)},173:function(e,t,a){},174:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=(a(173),a(41)),s=(a(174),a(23)),u=a(290),l=a(10),m=a(19),p=a(17),d=a(13),h=a(15),g=a(16),f=a(283),b=a(284),E=a(286),v=a(287),y=a(288),_=a(289),O=a(285),j=a(20),C=a.n(j),N=a(98),S=function(e){var t=e.id,a=e.error;return r.a.createElement(N.a,{key:a,id:t,error:!0},a)},T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={accountName:"",password:""},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeAccountName=a._onChangeAccountName.bind(Object(h.a)(a)),a._onChangePassword=a._onChangePassword.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.accountName,n=t.password;this.props.onSubmit(a,n)}},{key:"_onChangeAccountName",value:function(e){this.setState({accountName:e.target.value})}},{key:"_onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.accountName,a=e.password,n=this.props.classes;return r.a.createElement("div",{className:n.paper},r.a.createElement(b.a,{className:n.avatar},r.a.createElement(O.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8"),r.a.createElement("form",{className:n.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"accountName",label:"\u30e6\u30fc\u30b6\u540d",name:"accountName",autoFocus:!0,value:t,onChange:this._onChangeAccountName}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",type:"password",autoComplete:"current-password",value:a,onChange:this._onChangePassword}),this.props.error&&r.a.createElement(S,{id:"signInButton",error:this.props.error}),r.a.createElement(y.a,{id:"signInButton",type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:this._onSubmit,className:n.submit},"\u30ed\u30b0\u30a4\u30f3"),r.a.createElement(_.a,{container:!0},r.a.createElement(_.a,{item:!0,xs:!0},r.a.createElement(o.a,{to:Yt.register.path},"\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089")))))}}]),t}(r.a.Component),w=C()(function(e){return Object(f.a)({paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(T),I=a(9),k=a(38),x=a.n(k),P=a(56),F={apiUrl:"http://localhost:8000",paymentUrl:"http://localhost:5555"},A=a(84),U=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).res=void 0,n.res=a,n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"getResponse",value:function(){return this.res}}]),t}(Object(A.a)(Error)),R=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),t}(U),B=new(function(){function e(){Object(l.a)(this,e),this.baseUrl=F.apiUrl,this.defaultHeaders={}}return Object(m.a)(e,[{key:"get",value:function(){var e=Object(P.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl).concat(t),{method:"GET",headers:this.defaultHeaders});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(P.a)(x.a.mark(function e(t){var a,n,r=arguments;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:{},n={method:"POST",mode:"same-origin",headers:Object.assign({},this.defaultHeaders,{"Content-Type":"application/json"}),credentials:"same-origin"},e.next=4,this.getCsrfToken();case 4:return a.csrf_token=e.sent,a&&(n.body=JSON.stringify(a)),e.next=8,fetch("".concat(this.baseUrl).concat(t),n);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCsrfToken",value:function(){var e=Object(P.a)(x.a.mark(function e(){var t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/settings",{method:"GET",headers:this.defaultHeaders});case 2:if((t=e.sent).ok){e.next=5;break}throw new R("CSRF token\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f",t);case 5:return e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a.csrf_token);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}()),L=a(25),H="LOGIN_SUCCESS",G="LOGIN_FAIL";function D(e,t){return function(a){B.post("/login",{account_name:e,password:t}).then(function(e){if(200!==e.status)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var t;a((t={userId:e.id,accountName:e.account_name,address:e.address},{type:H,payload:t})),a(Object(L.d)(Yt.top.path))}).catch(function(e){var t;a((t={error:e.message},{type:G,payload:t}))})}}var W=Object(I.c)(function(e){return{error:e.formError.error}},function(e){return{onSubmit:function(t,a){e(D(t,a))}}})(w);var q=function(){return{type:"FETCH_SETTINGS_START"}},M=function(e){return{type:"FETCH_SETTINGS_SUCCESS",payload:{settings:e}}},z=function(){return{type:"FETCH_SETTINGS_FAIL"}},V=a(156),J=a(292),Y=a(293),K=a(291),Q=Object(u.a)(function(e){return{progress:{top:0,bottom:0,right:0,left:0,margin:"auto",position:"absolute"}}}),X=function(){var e=Q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{size:80,className:e.progress}))},Z=Object(V.a)({palette:{background:{default:"white"}}}),$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).props.alreadyLoaded||a.props.load(),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{theme:Z},r.a.createElement(Y.a,{maxWidth:"lg"},this.props.loading?r.a.createElement(X,null):this.props.children||null))}}]),t}(r.a.Component),ee=Object(I.c)(function(e){return{loading:e.page.isLoading,alreadyLoaded:e.authStatus.checked}},function(e){return{load:function(){e(function(e){Promise.resolve(function(){e(q())}).then(function(){return B.get("/settings")}).then(function(e){if(!e.ok)throw new R("Request for getting settings data was failed",e);return e.json()}).then(function(t){var a=void 0;t.user&&(a={id:t.user.id,accountName:t.user.account_name,address:t.user.address,numSellItems:t.user.num_sell_items}),e(M({csrfToken:t.csrf_token,user:a}))}).catch(function(t){e(z())})})}}})($),te=Object(u.a)(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),ae=function(){var e=te();return r.a.createElement(ee,null,r.a.createElement("div",{className:e.paper},r.a.createElement(W,null)))},ne=a(36),re=a.n(ne),ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={accountName:"",address:"",password:""},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeAccountName=a._onChangeAccountName.bind(Object(h.a)(a)),a._onChangeAddress=a._onChangeAddress.bind(Object(h.a)(a)),a._onChangePassword=a._onChangePassword.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault(),this.props.register({account_name:this.state.accountName,address:this.state.address,password:this.state.password})}},{key:"_onChangeAccountName",value:function(e){this.setState({accountName:e.target.value})}},{key:"_onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"_onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.accountName,n=t.address,i=t.password;return r.a.createElement("div",{className:e.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(O.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u65b0\u898f\u767b\u9332"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u30e6\u30fc\u30b6\u540d",name:"name",value:a,onChange:this._onChangeAccountName,autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"address",label:"\u4f4f\u6240",name:"address",value:n,onChange:this._onChangeAddress}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",type:"password",value:i,onChange:this._onChangePassword}),this.props.error&&r.a.createElement(S,{id:"signUpButton",error:this.props.error}),r.a.createElement(y.a,{id:"signUpButton",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this._onSubmit},"\u65b0\u898f\u767b\u9332"),r.a.createElement(_.a,{container:!0},r.a.createElement(_.a,{item:!0,xs:!0},r.a.createElement(o.a,{to:Yt.login.path},"\u3059\u3067\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3053\u3061\u3089")))))}}]),t}(r.a.Component),ce=C()(function(e){return Object(f.a)({paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(ie),oe="REGISTER_SUCCESS",se="REGISTER_FAIL";function ue(e){return function(t){B.post("/register",e).then(function(e){if(200!==e.status)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var a;t((a={userId:e.id,accountName:e.account_name,address:e.address},{type:oe,payload:a})),t(Object(L.d)(Yt.top.path))}).catch(function(e){var a;t((a={error:e.message},{type:se,payload:a}))})}}var le=Object(I.c)(function(e){return{error:e.formError.error}},function(e){return{register:function(t){e(ue(t))}}})(ce),me=re()(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),pe=function(){var e=me();return r.a.createElement(ee,null,r.a.createElement("div",{className:e.paper},r.a.createElement(le,null)))},de=a(148),he=a.n(de),ge=a(149),fe=a.n(ge),be=a(294),Ee=a(63),ve=a.n(Ee),ye=a(147),_e=a.n(ye),Oe=a(86),je=a.n(Oe),Ce=a(150),Ne=a.n(Ce),Se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={imagePreviewUrl:""},a._handleImageChange=a._handleImageChange.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_handleImageChange",value:function(e){var t=this;if(e.preventDefault(),null!==e.target.files){var a=new FileReader,n=e.target.files[0];a.onloadend=function(){if("string"!==typeof a.result)throw new Error;t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}}},{key:"render",value:function(){var e=this.props.classes,t=this.state.imagePreviewUrl,a=null;return console.log(t),a=t?r.a.createElement("img",{alt:"\u30d7\u30ec\u30d3\u30e5\u30fc",src:t}):r.a.createElement(he.a,null,r.a.createElement(fe.a,{className:e.avatar},r.a.createElement(be.a,null)),r.a.createElement(ve.a,null,"\u5546\u54c1\u753b\u50cf")),r.a.createElement(je.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(je.a,{item:!0,xs:8},a),r.a.createElement(je.a,{item:!0,xs:4},r.a.createElement("input",{accept:"image/*",className:e.upload,id:"outlined-button-file",type:"file",onChange:this._handleImageChange}),r.a.createElement("label",{htmlFor:"outlined-button-file"},r.a.createElement(Ne.a,{variant:"outlined",component:"span",className:e.button},"Upload"))))}}]),t}(r.a.Component),Te=C()(function(e){return _e()({upload:{display:"none"},avatar:{margin:e.spacing(1)},button:{margin:e.spacing(1)}})})(Se),we=a(81),Ie=a.n(we),ke=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={name:"",description:"",price:0},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeName=a._onChangeName.bind(Object(h.a)(a)),a._onChangeDescription=a._onChangeDescription.bind(Object(h.a)(a)),a._onChangePrice=a._onChangePrice.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.description,r=t.price;this.props.sellItem(a,n,r)}},{key:"_onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"_onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"_onChangePrice",value:function(e){var t=e.target.value;Ie.a.isNumeric(t,{no_symbols:!0})?this.setState({price:Number(t)}):e.preventDefault()}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.name,n=t.description,i=t.price;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u51fa\u54c1\u30da\u30fc\u30b8"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(Te,null),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u5546\u54c1\u540d",name:"name",value:a,onChange:this._onChangeName,autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"description",label:"\u5546\u54c1\u8aac\u660e",name:"description",value:n,onChange:this._onChangeDescription,multiline:!0,rows:5}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"price",label:"\u5024\u6bb5",name:"price",value:i,onChange:this._onChangePrice}),this.props.error&&r.a.createElement(S,{id:"sellButton",error:this.props.error}),r.a.createElement(y.a,{id:"sellButton",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this._onSubmit},"\u51fa\u54c1\u3059\u308b")))}}]),t}(r.a.Component),xe=C()(function(e){return Object(f.a)({form:{width:"80%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(ke),Pe="SELLING_ITEM_SUCCESS",Fe="SELLING_ITEM_FAIL";function Ae(e,t,a){return function(n){var r={name:e,description:t,price:a};B.post("/sell",r).then(function(e){if(!e.ok)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var t;n((t=e.id,{type:Pe,payload:{itemId:t}})),n(Object(L.d)(Yt.top.path))}).catch(function(e){var t;n((t={error:e.message},{type:Fe,payload:t}))})}}var Ue=Object(I.c)(function(e){return{error:e.formError.error}},function(e){return{sellItem:function(t,a,n){e(Ae(t,a,n))}}})(xe),Re="NOT_FOUND_ERROR",Be="INTERNAL_SERVER_ERROR";var Le=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),t}(Object(A.a)(Error));var He=function(){return{type:"FETCH_ITEM_PAGE_START"}},Ge=function(e){return{type:"FETCH_ITEM_PAGE_SUCCESS",payload:{item:e}}},De=function(){return{type:"FETCH_ITEM_PAGE_FAIL"}},We=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case Re:return{errorType:"NOT_FOUND",errorCode:404};case Be:case"FETCH_ITEM_PAGE_FAIL":case"FETCH_SETTINGS_FAIL":return{errorType:"INTERNAL_SERVER_ERROR",errorCode:500};default:return{errorType:"NO_ERROR"}}},qe=a(57),Me=function(){return r.a.createElement("div",null,"404 Not Found")},ze=function(){return r.a.createElement("div",null,"Internal Server Error")},Ve=function(){return Object(qe.b)(Object(qe.d)(function(e){return{errorType:e.errorType}}),Object(qe.a)(function(e){return"NOT_FOUND"===e.errorType},Object(qe.c)(Me)),Object(qe.a)(function(e){return"INTERNAL_SERVER_ERROR"===e.errorType},Object(qe.c)(ze)))},Je=Object(u.a)(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),Ye=Ve()(function(){var e=Je();return r.a.createElement(ee,null,r.a.createElement("div",{className:e.paper},r.a.createElement(Ue,null)))}),Ke=function(){return r.a.createElement(ee,null,r.a.createElement("div",null,"Item Edit Page"))},Qe=a(152),Xe=a.n(Qe),Ze=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e)))._onClick=a._onClick.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onClick",value:function(e){e.preventDefault(),this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.buttonName,r=e.classes;return n.createElement(n.Fragment,null,n.createElement(y.a,{className:r.button,disabled:t,onClick:this._onClick},a),t&&n.createElement(K.a,{size:24,className:r.buttonProgress}))}}]),t}(n.Component),$e=C()(function(e){return Object(f.a)({button:{margin:e.spacing(3,0,1)},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})(Ze),et=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={cardNumber:""},a._onChangeCardNumber=a._onChangeCardNumber.bind(Object(h.a)(a)),a._onClickBuyButton=a._onClickBuyButton.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onChangeCardNumber",value:function(e){var t=e.target.value;t.length>8||(Ie.a.isHexadecimal(t)||""===t)&&this.setState({cardNumber:t.toUpperCase()})}},{key:"_onClickBuyButton",value:function(e){var t=this.props.item.id,a=this.state.cardNumber;this.props.onBuyAction(t,a)}},{key:"render",value:function(){var e=this.props,t=e.item,a=e.errors,n=e.classes,i=e.loadingBuy,c=a.cardError,o=a.buyError;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:n.itemImage,alt:t.name,src:t.thumbnailUrl}),r.a.createElement(ve.a,{variant:"h4"},t.name),r.a.createElement(ve.a,{variant:"h5"},"\xa5".concat(t.price)),r.a.createElement("form",{className:n.form,noValidate:!0},r.a.createElement(Xe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"cardNumber",label:"\u30ab\u30fc\u30c9\u756a\u53f7",name:"cardNumber",helperText:"16\u9032\u6570\u5927\u6587\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",error:!!c,value:this.state.cardNumber,onChange:this._onChangeCardNumber,autoFocus:!0}),c&&r.a.createElement(S,{id:"cardNumber",error:c}),r.a.createElement($e,{onClick:this._onClickBuyButton,buttonName:"\u8cfc\u5165",loading:i}),o&&r.a.createElement(S,{id:"buyButton",error:o})))}}]),t}(r.a.Component),tt=C()(function(e){return Object(f.a)({itemImage:{width:"100%",maxWidth:"500px",height:"auto",textAlign:"center"},form:{width:"100%",marginTop:e.spacing(3,0,1)}})})(et),at=new(function(){function e(){Object(l.a)(this,e),this.baseUrl=F.paymentUrl,this.defaultHeaders={}}return Object(m.a)(e,[{key:"get",value:function(){var e=Object(P.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl).concat(t),{method:"GET",headers:this.defaultHeaders});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(P.a)(x.a.mark(function e(t,a){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",mode:"cors",headers:Object.assign({},this.defaultHeaders,{"Content-Type":"application/json"}),credentials:"same-origin"},a&&(n.body=JSON.stringify(a)),e.next=4,fetch("".concat(this.baseUrl).concat(t),n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}()),nt=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),t}(U),rt="BUY_START",it="BUY_SUCCESS",ct="BUY_FAIL",ot="USING_CARD_FAIL";function st(e,t){return function(a){Promise.resolve(function(){a({type:rt})}).then(function(){return at.post("/card",{card_number:t,shop_id:"11"})}).then(function(e){if(!e.ok)throw new nt("request to /card of payment service was failed",e);return e.json()}).catch(function(e){throw new nt(e.message)}).then(function(t){return B.post("/buy",{item_id:e,token:t.token})}).then(function(e){if(!e.ok)throw new R("request to /buy of app was failed",e);return e.json()}).then(function(){a({type:it}),a(Object(L.d)(Yt.buyComplete.path))}).catch(function(e){if(e instanceof U){var t,n=e.getResponse();return t=e instanceof nt?ut:lt,n?n.json().then(function(n){n&&n.error?a(t(n.error)):a(t(e.message))}):void a(t(e.message))}a(lt(e.message))})}}function ut(e){return{type:ot,payload:{error:void 0,buyFormError:{cardError:e}}}}function lt(e){return{type:ct,payload:{error:void 0,buyFormError:{buyError:e}}}}var mt,pt=Object(I.c)(function(e){return{item:e.viewingItem.item,errors:e.formError.buyFormError,loadingBuy:e.buyPage.loadingBuy}},function(e){return{onBuyAction:function(t,a){e(st(t,a))}}})(tt),dt=function(){return r.a.createElement(ee,null,r.a.createElement(pt,null))},ht=function(){return r.a.createElement(ee,null,"User setting Page")},gt=function(){return r.a.createElement(ee,null,r.a.createElement("div",null,"Item buying Page"))},ft=a(295),bt=a(296),Et=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).props.load(a.props.match.params.item_id),a._onClickBuyButton=a._onClickBuyButton.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onClickBuyButton",value:function(e){e.preventDefault(),this.props.onClickBuy(this.props.item.id)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.item,n=e.loading;return r.a.createElement(ee,null,n?r.a.createElement(X,null):r.a.createElement(r.a.Fragment,null,"Item Page",r.a.createElement(E.a,{className:t.title,variant:"h3"},a.name),r.a.createElement(_.a,{container:!0,spacing:2},r.a.createElement(_.a,{item:!0},r.a.createElement("img",{className:t.itemImage,alt:a.name,src:a.thumbnailUrl})),r.a.createElement(_.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(_.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(_.a,{item:!0,xs:!0},r.a.createElement("div",{className:t.descSection},r.a.createElement(E.a,{variant:"h4"},"\u5546\u54c1\u8aac\u660e"),r.a.createElement(ft.a,{className:t.divider,variant:"middle"}),r.a.createElement(E.a,{variant:"body1"},a.description)),r.a.createElement("div",{className:t.descSection},r.a.createElement(E.a,{variant:"h4"},"\u51fa\u54c1\u8005"),r.a.createElement(ft.a,{className:t.divider,variant:"middle"}),r.a.createElement(_.a,{container:!0,direction:"row",justify:"center",alignItems:"center",wrap:"nowrap",spacing:2},r.a.createElement(_.a,{item:!0},r.a.createElement(o.a,{className:t.link,to:Yt.user.getPath(a.sellerId)},r.a.createElement(b.a,{className:t.avatar},a.seller.accountName.charAt(0)))),r.a.createElement(_.a,{item:!0,xs:!0},r.a.createElement(E.a,{variant:"body1"},a.seller.accountName)))))))),r.a.createElement(bt.a,{color:"primary",position:"fixed",className:t.appBar},r.a.createElement(_.a,{container:!0,spacing:2,direction:"row",alignItems:"center"},r.a.createElement(_.a,{item:!0},r.a.createElement(E.a,{variant:"h5"},"\xa5",a.price)),r.a.createElement(_.a,{item:!0},r.a.createElement(y.a,{variant:"contained",className:t.buyButton,onClick:this._onClickBuyButton},"\u8cfc\u5165"))))))}}]),t}(r.a.Component),vt=Ve()(C()(function(e){return Object(f.a)({title:{margin:e.spacing(3)},itemImage:{width:"100%",maxWidth:"500px",height:"auto"},avatar:{width:"50px",height:"50px"},divider:{margin:e.spacing(1)},descSection:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},link:{textDecoration:"none"},appBar:{top:"auto",bottom:0},buyButton:{margin:e.spacing(1)}})})(Et)),yt=Object(I.c)(function(e){return{loading:e.page.isLoading,item:e.viewingItem.item,errorType:e.error.errorType}},function(e){return{load:function(t){e(function(e){return function(t){Promise.resolve(function(){t(He())}).then(function(){return B.get("/items/".concat(e,".json"))}).then(function(e){if(!e.ok){if(404===e.status)throw new Le("Item not found");throw new R("Request for getting item data was failed",e)}return e.json()}).then(function(e){t(Ge({id:e.id,status:e.status,sellerId:e.seller_id,seller:{id:e.seller.id,accountName:e.seller.account_name,numSellItems:e.seller.num_sell_items},buyerId:e.buyer_id,buyer:e.buyer,name:e.name,price:e.price,thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png",description:e.description}))}).catch(function(e){t(De())})}}(t))},onClickBuy:function(t){e(Object(L.d)(Yt.buy.getPath(t)))}}})(vt),_t=a(300),Ot=a(297),jt=a(298),Ct=re()(function(e){return{itemImage:{height:"100%"}}}),Nt=function(e){var t=e.itemId,a=e.imageUrl,n=e.title,i=e.price,c=Ct();return r.a.createElement(Ot.a,null,r.a.createElement(o.a,{to:Yt.item.getPath(t)},r.a.createElement("img",{className:c.itemImage,src:a,alt:n})),r.a.createElement(jt.a,{title:n,subtitle:"\xa5".concat(i)}))},St=a(299),Tt=re()(function(e){return{grid:{width:"300px",height:"300px"}}}),wt=function(e){var t=e.items,a=Tt(),n=[],i=!0,c=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var l=s.value;n.push(r.a.createElement(St.a,{className:a.grid,key:l.id},r.a.createElement(Nt,{itemId:l.id,imageUrl:l.thumbnailUrl,title:l.name,price:l.price})))}}catch(m){c=!0,o=m}finally{try{i||null==u.return||u.return()}finally{if(c)throw o}}return r.a.createElement(_t.a,{cols:3},n)},It=a(153),kt=a.n(It),xt=a(301),Pt=re()(function(e){return{fab:{margin:e.spacing(1),position:"fixed",top:"auto",bottom:"30px",right:"30px",width:"100px",height:"100px"}}}),Ft=Object(I.c)(function(e){return{}},function(e){return{onClick:function(t){t.preventDefault(),e(Object(L.d)(Yt.sell.path))}}})(function(e){var t=e.onClick,a=Pt();return r.a.createElement(kt.a,{className:a.fab,color:"secondary",onClick:t},r.a.createElement(xt.a,{fontSize:"large"}))}),At=re()(function(e){return{root:{display:"flex",flexWrap:"wrap",marginTop:e.spacing(1),justifyContent:"space-around",overflow:"hidden"}}}),Ut=Ve()(function(e){var t=e.items,a=At();return r.a.createElement(ee,null,r.a.createElement("div",{className:a.root},r.a.createElement(wt,{items:t}),r.a.createElement(Ft,null)))}),Rt={id:1235,accountName:"Kirin",address:"Tokyo",numSellItems:0},Bt=[{id:1,status:"on_sale",sellerId:1111,seller:{id:1111,accountName:"sota1235",address:"",numSellItems:1},buyerId:2222,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:2,status:"on_sale",sellerId:1111,seller:{id:1111,accountName:"sota1235",address:"",numSellItems:1},buyerId:2222,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:3,status:"on_sale",sellerId:1111,seller:{id:1111,accountName:"sota1235",address:"",numSellItems:1},buyerId:2222,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:4,status:"on_sale",sellerId:1111,seller:{id:1111,accountName:"sota1235",address:"",numSellItems:1},buyerId:2222,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"}],Lt=Object(I.c)(function(e){return{items:Bt,errorType:e.error.errorType,loading:!1}},function(e){return{}})(Ut),Ht=Ve()(function(){return r.a.createElement(ee,null,r.a.createElement("div",null,"Transaction Page"))}),Gt=Object(I.c)(function(e){return{errorType:e.error.errorType,loading:!1}},function(e){return{}})(Ht),Dt=re()(function(e){return{avatar:{margin:e.spacing(3),width:"100px",height:"100px"},itemList:{marginTop:e.spacing(4)}}}),Wt=Ve()(function(e){var t=e.items,a=e.user,n=Dt();return r.a.createElement(ee,null,r.a.createElement("p",null,"User Page"),r.a.createElement(_.a,{container:!0,direction:"row",justify:"center",alignItems:"center",wrap:"nowrap",spacing:2},r.a.createElement(_.a,{item:!0},r.a.createElement(b.a,{className:n.avatar},a.accountName.charAt(0))),r.a.createElement(_.a,{item:!0,xs:!0},r.a.createElement(E.a,{variant:"h3"},a.accountName))),r.a.createElement(ft.a,{variant:"middle"}),r.a.createElement("div",{className:n.itemList},r.a.createElement(wt,{items:t})),r.a.createElement(Ft,null))}),qt=Object(I.c)(function(e){return{items:Bt,user:Rt,errorType:e.error.errorType,loading:!1}},function(e){return{}})(Wt),Mt=a(85),zt=Object(I.c)(function(e){return{isLoggedIn:!!e.authStatus.userId}},function(e){return{}})(function(e){var t=e.component,a=e.isLoggedIn,n=Object(Mt.a)(e,["component","isLoggedIn"]);if(!t)throw new Error("component attribute required for AuthRoute component");return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(s.a,{to:Yt.login.path})}}))}),Vt=Object(I.c)(function(e){return{isLoggedIn:!!e.authStatus.userId}},function(e){return{}})(function(e){var t=e.component,a=e.isLoggedIn,n=Object(Mt.a)(e,["component","isLoggedIn"]);if(!t)throw new Error("component attribute required for NonAuthRoute component");return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(s.a,{to:Yt.timeline.path}):r.a.createElement(t,e)}}))}),Jt=function(){return r.a.createElement(ee,null,"Top Page")},Yt={top:{path:"/",getPath:function(){return"/"}},login:{path:"/login",getPath:function(){return"/login"}},register:{path:"/register",getPath:function(){return"register"}},timeline:{path:"/timeline",getPath:function(){return"/timeline"}},sell:{path:"/sell",getPath:function(){return"/sell"}},item:{path:"/items/:item_id",getPath:function(e){return"/items/".concat(e)}},itemEdit:{path:"/items/:item_id/edit",getPath:function(e){return"/items/".concat(e,"/edit")}},buy:{path:"/items/:item_id/buy",getPath:function(e){return"/items/".concat(e,"/buy")}},buyComplete:{path:"/buy/complete",getPath:function(){return"/buy/complete"}},transaction:{path:"/transactions/:transaction_id",getPath:function(e){return"/transactions/".concat(e)}},user:{path:"/users/:user_id",getPath:function(e){return"/users/".concat(e)}},userSetting:{path:"/users/setting",getPath:function(){return"/users/setting"}}},Kt=function(){return r.a.createElement(s.d,null,r.a.createElement(Vt,{exact:!0,path:Yt.top.path,component:Jt}),r.a.createElement(Vt,{exact:!0,path:Yt.login.path,component:ae}),r.a.createElement(Vt,{exact:!0,path:Yt.register.path,component:pe}),r.a.createElement(zt,{exact:!0,path:Yt.timeline.path,component:Lt}),r.a.createElement(zt,{exact:!0,path:Yt.sell.path,component:Ye}),r.a.createElement(zt,{exact:!0,path:Yt.item.path,component:yt}),r.a.createElement(zt,{exact:!0,path:Yt.itemEdit.path,component:Ke}),r.a.createElement(zt,{exact:!0,path:Yt.buy.path,component:dt}),r.a.createElement(zt,{exact:!0,path:Yt.buyComplete.path,component:gt}),r.a.createElement(zt,{exact:!0,path:Yt.transaction.path,component:Gt}),r.a.createElement(zt,{exact:!0,path:Yt.user.path,component:qt}),r.a.createElement(zt,{exact:!0,path:Yt.userSetting.path,component:ht}),r.a.createElement(s.b,{component:Me}))},Qt=[{path:"/",pageName:"Top page"},{path:"/login",pageName:"Sign in page"},{path:"/register",pageName:"Sign up page"},{path:"/timeline",pageName:"Timeline page"},{path:"/items/:item_id",pageName:"Item page"},{path:"/items/:item_id/edit",pageName:"Item edit page"},{path:"/items/:item_id/buy",pageName:"Item buy page"},{path:"/buy/complete",pageName:"Buying complete page"},{path:"/sell",pageName:"Sell page"},{path:"/transactions/:transaction_id",pageName:"Transaction page"},{path:"/users/:user_id",pageName:"User page"},{path:"/users/setting",pageName:"User setting page"}],Xt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("ul",null,function(){for(var e=[],t=0,a=Qt;t<a.length;t++){var n=a[t];e.push(r.a.createElement("li",{key:n.pageName},r.a.createElement(o.a,{to:n.path},n.pageName)))}return e}())),r.a.createElement("hr",null),r.a.createElement(Kt,null))},Zt=a(29),$t=a(39),ea=a(157),ta=a(48),aa=a(141),na=a(154),ra=a(155),ia=[function(e){var t=e.getState;return function(e){return function(a){console.group(a.type),console.info("dispatching",a);var n=e(a);return console.log("next state",t()),console.groupEnd(),n}}}],ca=a(26),oa={checked:!1},sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oa,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:case oe:return Object(ca.a)({},e,t.payload);case"FETCH_SETTINGS_SUCCESS":var a=t.payload.settings.user,n={};return a&&(n={userId:a.id,accountName:a.accountName,address:a.address||void 0}),Object(ca.a)({},e,n,{checked:!0});case"FETCH_SETTINGS_FAIL":return Object(ca.a)({},e,{checked:!0});default:return e}},ua={error:void 0,buyFormError:{}},la=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case G:case se:case ot:case ct:case Fe:return Object(ca.a)({},e.payload);default:return ua}},ma={},pa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ma,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEM_PAGE_SUCCESS":return Object(ca.a)({},e,{item:t.payload.item});default:return e}},da={isLoading:!0},ha=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:da;switch((arguments.length>1?arguments[1]:void 0).type){case"FETCH_ITEM_PAGE_START":case"FETCH_SETTINGS_START":return Object(ca.a)({},e,{isLoading:!0});case"FETCH_ITEM_PAGE_SUCCESS":case"FETCH_ITEM_PAGE_FAIL":case"FETCH_SETTINGS_SUCCESS":case"FETCH_SETTINGS_FAIL":return Object(ca.a)({},e,{isLoading:!1});default:return Object(ca.a)({},e)}},ga={loadingBuy:!1},fa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ga;switch((arguments.length>1?arguments[1]:void 0).type){case rt:return Object(ca.a)({},e,{loadingBuy:!0});case it:case ct:case ot:return Object(ca.a)({},e,{loadingBuy:!1});default:return Object(ca.a)({},e)}},ba=Object(Zt.a)(),Ea=function(e,t){return Object(ta.createStore)(e,Object(ra.composeWithDevTools)(ta.applyMiddleware.apply(void 0,[na.a,Object(aa.a)(t)].concat(Object(ea.a)(ia)))))}((mt=ba,Object(ta.combineReducers)({router:Object($t.b)(mt),authStatus:sa,formError:la,viewingItem:pa,error:We,page:ha,buyPage:fa})),ba);c.a.render(r.a.createElement(I.a,{store:Ea},r.a.createElement($t.a,{history:ba},r.a.createElement(Xt,null))),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.8bbe53d8.chunk.js.map