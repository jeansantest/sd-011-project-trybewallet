(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{33:function(e,t,n){e.exports=n(50)},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),l=n.n(i),u=n(21),c=n(7),o=n(14),s=n(30),d=n(31),p=n(2),h={email:""};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return Object(p.a)(Object(p.a)({},e),{},{email:t.payload});default:return e}},E=n(18),v={currencies:[],expenses:[],isEditingExpense:!1,editingExpenseId:""};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return Object(p.a)(Object(p.a)({},e),{},{expenses:[].concat(Object(E.a)(e.expenses),[t.payload])});case"DELETE_EXPENSE":return Object(p.a)(Object(p.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.id}))});case"EDIT_EXPENSE":return Object(p.a)(Object(p.a)({},e),{},{isEditingExpense:!0,editingExpenseId:t.id});case"SAVE_EXPENSE":var n=e.expenses.findIndex((function(e){return e.id===t.payload.id})),a=Object(E.a)(e.expenses);return a[n]=Object(p.a)({},t.payload),Object(p.a)(Object(p.a)({},e),{},{expenses:a,isEditingExpense:!1});default:return e}},f=Object(o.combineReducers)({user:m,wallet:b}),g=Object(o.createStore)(f,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),y=(n(42),n(4)),x=n(5),j=n(6),O=n(3),C=n(9),w=n(8),I=(n(43),function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={email:"",isEmailValid:!1,password:"",isPasswordValid:!1},a.handleEmailChange=a.handleEmailChange.bind(Object(O.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(O.a)(a)),a.handleLogin=a.handleLogin.bind(Object(O.a)(a)),a}return Object(j.a)(n,[{key:"handleEmailChange",value:function(e){var t=e.target.value,n=this.validateEmail(t);this.setState({email:t,isEmailValid:n})}},{key:"validateEmail",value:function(e){return!!e.match(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/)}},{key:"handlePasswordChange",value:function(e){var t=e.target.value,n=this.validatePassword(t);this.setState({password:t,isPasswordValid:n})}},{key:"validatePassword",value:function(e){return e.trim().length>=6}},{key:"handleLogin",value:function(e){e.preventDefault(),(0,this.props.userLogin)(this.state.email)}},{key:"render",value:function(){var e=this.state,t=e.isEmailValid,n=e.isPasswordValid,a=e.email,i=e.password;return this.props.loggedEmail?r.a.createElement(y.a,{to:"/carteira"}):r.a.createElement("div",{className:"login-container"},r.a.createElement("h1",null,"TrybeWallet"),r.a.createElement("form",{onSubmit:this.handleLogin,className:"login-form",autoComplete:"off"},r.a.createElement("input",{type:"email",name:"email",placeholder:"E-mail","data-testid":"email-input",required:!0,onChange:this.handleEmailChange,value:a}),r.a.createElement("p",{className:"login-validation-error"},!t&&a.length>0&&"Digite um email v\xe1lido"),r.a.createElement("input",{type:"password",name:"password",placeholder:"Senha","data-testid":"password-input",onChange:this.handlePasswordChange,value:i,required:!0}),r.a.createElement("p",{className:"login-validation-error"},!n&&i.length>0&&"Sua senha deve conter no m\xednimo 6 d\xedgitos"),r.a.createElement("button",{type:"submit",disabled:!t||!n},"Entrar")))}}]),n}(r.a.Component)),k=Object(c.b)((function(e){return{loggedEmail:e.user.email}}),(function(e){return{userLogin:function(t){return e(function(e){return{type:"USER_LOGIN",payload:e}}(t))}}}))(I),S=(n(45),function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"renderTotalExpense",value:function(e){var t=e.reduce((function(e,t){var n=Number(t.exchangeRates[t.currency].ask);return e+Number(t.value)*n}),0);return r.a.createElement("p",null,"Gasto total: ".concat((t/100).toFixed(2)," "),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL"))}},{key:"render",value:function(){var e=this.props,t=e.userEmail,n=e.expenses;return r.a.createElement("header",{className:"header-container"},r.a.createElement("h1",{className:"header-title"},"TrybeWallet"),r.a.createElement("div",{className:"header-info"},r.a.createElement("p",{"data-testid":"email-field"},"Usu\xe1rio:"," ",t),this.renderTotalExpense(n)))}}]),n}(a.Component)),D=Object(c.b)((function(e){return{userEmail:e.user.email,expenses:e.wallet.expenses}}))(S),N=n(26),V=n.n(N),T=n(32),P=n(16),M=/^[1-9]{1}$/,L=/^[0-9]{1}$/,F=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).handleKeyDown=a.handleKeyDown.bind(Object(O.a)(a)),a}return Object(j.a)(n,[{key:"handleKeyDown",value:function(e){var t=this.props,n=t.value,a=t.onValueChange,r=e.key,i=e.keyCode;if((0!==n||M.test(r))&&(0===n||L.test(r)||8===i)){var l,u=n.toString();if(8!==i){var c=0===n?r:"".concat(u).concat(r);l=Number.parseInt(c,10)}else{var o=u.slice(0,-1);l=""===o?0:Number.parseInt(o,10)}l>Number.MAX_SAFE_INTEGER||a(l)}}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.currency;if(t!==Math.trunc(Math.abs(t))||!Number.isFinite(t)||Number.isNaN(t))throw console.log(typeof t),new Error("invalid value property");var a=(t/100).toLocaleString("pt-BR",{style:"currency",currency:n});return r.a.createElement("label",{htmlFor:"value-input"},"Valor:",r.a.createElement("input",{id:"value-input",inputMode:"numeric",value:a,onKeyDown:this.handleKeyDown,onChange:function(){}}))}}]),n}(a.Component),R=(n(47),function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={currencyOptions:[],newExpense:{value:0,description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"}},a.handleInputChange=a.handleInputChange.bind(Object(O.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a.handleValueChange=a.handleValueChange.bind(Object(O.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(t){var n=Object.values(t).map((function(e){return e.code}));e.setState({currencyOptions:Object(E.a)(new Set(n))})}))}},{key:"handleInputChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState((function(e){var t=e.newExpense;return{newExpense:Object(p.a)(Object(p.a)({},t),{},Object(P.a)({},n,a))}}))}},{key:"handleValueChange",value:function(e){this.setState((function(t){return Object(p.a)(Object(p.a)({},t),{},{newExpense:Object(p.a)(Object(p.a)({},t.newExpense),{},{value:e})})}))}},{key:"handleSubmit",value:function(){var e=Object(T.a)(V.a.mark((function e(){var t,n,a,r,i,l,u;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.newExpense,n=this.props,a=n.expenses,r=n.submitNewExpense,e.next=4,fetch("https://economia.awesomeapi.com.br/json/all");case 4:return i=e.sent,e.next=7,i.json();case 7:l=e.sent,u=Object(p.a)(Object(p.a)({id:a.length},t),{},{exchangeRates:l}),r(u),this.setState({newExpense:{value:0,description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"}});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderValueInput",value:function(){var e=this.state.newExpense,t=e.value,n=e.currency;return r.a.createElement(F,{id:"value-input",value:t,currency:n,onValueChange:this.handleValueChange})}},{key:"renderDescriptionInput",value:function(){var e=this.state.newExpense.description;return r.a.createElement("label",{htmlFor:"description-input"},"Descri\xe7\xe3o:",r.a.createElement("input",{id:"description-input",name:"description",value:e,onChange:this.handleInputChange}))}},{key:"renderCurrencyInput",value:function(){var e=this.state,t=e.currencyOptions,n=e.newExpense.currency;return r.a.createElement("label",{htmlFor:"currency-input"},"Moeda:",r.a.createElement("select",{id:"currency-input",name:"currency",value:n,onChange:this.handleInputChange},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}},{key:"renderPaymentMethodInput",value:function(){var e=this.state.newExpense.method;return r.a.createElement("label",{htmlFor:"method-input"},"M\xe9todo de pagamento:",r.a.createElement("select",{id:"method-input",name:"method",value:e,onChange:this.handleInputChange},r.a.createElement("option",{vaue:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito")))}},{key:"renderTagInput",value:function(){var e=this.state.newExpense.tag;return r.a.createElement("label",{htmlFor:"tag-input"},"Tag:",r.a.createElement("select",{id:"tag-input",name:"tag",value:e,onChange:this.handleInputChange},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade")))}},{key:"render",value:function(){return r.a.createElement("form",{className:"expense-form"},this.renderCurrencyInput(),this.renderValueInput(),this.renderDescriptionInput(),this.renderPaymentMethodInput(),this.renderTagInput(),r.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Adicionar despesa"))}}]),n}(a.Component)),A=Object(c.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{submitNewExpense:function(t){return e(function(e){return{type:"ADD_EXPENSE",payload:e}}(t))}}}))(R),_=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;Object(x.a)(this,n);var r=(a=t.call(this,e)).props,i=r.expenses,l=r.editingExpenseId,u=i.find((function(e){return e.id===l})),c=u.id,o=u.value,s=u.description,d=u.currency,p=u.method,h=u.tag,m=u.exchangeRates;return a.state={expense:{id:c,value:o,description:s,currency:d,method:p,tag:h,exchangeRates:m}},a.handleInputChange=a.handleInputChange.bind(Object(O.a)(a)),a.renderValueInput=a.renderValueInput.bind(Object(O.a)(a)),a.renderDescriptionInput=a.renderDescriptionInput.bind(Object(O.a)(a)),a.renderTagInput=a.renderTagInput.bind(Object(O.a)(a)),a.renderPaymentMethodInput=a.renderPaymentMethodInput.bind(Object(O.a)(a)),a.renderCurrencyInput=a.renderCurrencyInput.bind(Object(O.a)(a)),a.handleSaveExpense=a.handleSaveExpense.bind(Object(O.a)(a)),a.handleValueChange=a.handleValueChange.bind(Object(O.a)(a)),a}return Object(j.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState((function(e){var t=e.expense;return{expense:Object(p.a)(Object(p.a)({},t),{},Object(P.a)({},n,a))}}))}},{key:"handleValueChange",value:function(e){this.setState((function(t){var n=t.expense;return{expense:Object(p.a)(Object(p.a)({},n),{},{value:e})}}))}},{key:"handleSaveExpense",value:function(){var e=this.props.saveExpense,t=this.state.expense;e(Object(p.a)({},t))}},{key:"renderValueInput",value:function(){var e=this.state.expense,t=e.value,n=e.currency;return r.a.createElement(F,{id:"value-input",value:t,currency:n,onValueChange:this.handleValueChange})}},{key:"renderDescriptionInput",value:function(){var e=this.state.expense.description;return r.a.createElement("label",{htmlFor:"description-input"},"Descri\xe7\xe3o:",r.a.createElement("input",{"data-testid":"description-input",name:"description",value:e,onChange:this.handleInputChange}))}},{key:"renderCurrencyInput",value:function(){var e=this.state.expense,t=e.currency,n=e.exchangeRates;return r.a.createElement("label",{htmlFor:"currency-input"},"Moeda:",r.a.createElement("select",{id:"currency-input","data-testid":"currency-input",name:"currency",value:t,onChange:this.handleInputChange},Object.keys(n).map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}},{key:"renderPaymentMethodInput",value:function(){var e=this.state.expense.method;return r.a.createElement("label",{htmlFor:"method-input"},"M\xe9todo de pagamento:",r.a.createElement("select",{id:"method-input","data-testid":"method-input",name:"method",value:e,onChange:this.handleInputChange},r.a.createElement("option",{vaue:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito")))}},{key:"renderTagInput",value:function(){var e=this.state.expense.tag;return r.a.createElement("label",{htmlFor:"tag"},"Tag:",r.a.createElement("select",{id:"tag-input","data-testid":"tag-input",name:"tag",value:e,onChange:this.handleInputChange},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade")))}},{key:"render",value:function(){return r.a.createElement("form",{className:"expense-form"},this.renderCurrencyInput(),this.renderValueInput(),this.renderDescriptionInput(),this.renderPaymentMethodInput(),this.renderTagInput(),r.a.createElement("button",{type:"button",onClick:this.handleSaveExpense},"Editar despesa"))}}]),n}(a.Component),X=Object(c.b)((function(e){return{expenses:e.wallet.expenses,editingExpenseId:e.wallet.editingExpenseId}}),(function(e){return{saveExpense:function(t){return e({type:"SAVE_EXPENSE",payload:t})}}}))(_),z=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).handleDeleteExpense=a.handleDeleteExpense.bind(Object(O.a)(a)),a}return Object(j.a)(n,[{key:"handleEditExpense",value:function(e){(0,this.props.editExpense)(e)}},{key:"handleDeleteExpense",value:function(e){(0,this.props.deleteExpense)(e)}},{key:"render",value:function(){var e=this,t=this.props.expense,n=(t.value/100).toFixed(2),a=Number(t.exchangeRates[t.currency].ask),i=t.exchangeRates[t.currency].name,l=Number(t.value/100)*a;return r.a.createElement("tr",null,r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.tag),r.a.createElement("td",null,t.method),r.a.createElement("td",null,n),r.a.createElement("td",null,i.split("/")[0]),r.a.createElement("td",null,a.toFixed(2)),r.a.createElement("td",null,l.toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"edit-btn",onClick:function(){return e.handleEditExpense(t.id)}},"Editar"),r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:function(){return e.handleDeleteExpense(t.id)}},"Excluir")))}}]),n}(a.Component),K=Object(c.b)(null,(function(e){return{deleteExpense:function(t){return e(function(e){return{type:"DELETE_EXPENSE",id:e}}(t))},editExpense:function(t){return e(function(e){return{type:"EDIT_EXPENSE",id:e}}(t))}}}))(z),U=(n(48),function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.expenses;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement(K,{key:e.id,expense:e})}))))}}]),n}(a.Component)),W=Object(c.b)((function(e){return{expenses:e.wallet.expenses}}))(U),B=(n(49),function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.isEditingExpense;return r.a.createElement("div",{className:"wallet-page-container"},r.a.createElement(D,null),e?r.a.createElement(X,null):r.a.createElement(A,null),r.a.createElement(W,null))}}]),n}(r.a.Component));B.defaultProps={isEditingExpense:!1};var G=Object(c.b)((function(e){return{isEditingExpense:e.wallet.isEditingExpense}}))(B);var $=function(){return r.a.createElement(y.d,null,r.a.createElement(y.b,{path:"/",exact:!0,component:k}),r.a.createElement(y.b,{path:"/carteira",component:G}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{store:g},r.a.createElement(u.a,null,r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.f366ee37.chunk.js.map