(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{DOsj:function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var l=r(a("2/Rp"));a("g9YV");var i=r(a("wCAj"));a("P2fV");var d=r(a("NJEC"));a("/zsF");var u=r(a("PArb"));a("5NDa");var o=r(a("5rEg"));a("OaEy");var s=r(a("2fM7"));a("miYZ");var c=r(a("tsqr")),f=r(a("MVZn")),g=r(a("lwsE")),h=r(a("W8MJ")),p=r(a("a1gu")),v=r(a("Nsbk")),m=r(a("7W2i")),y=n(a("q1tI")),k=r(a("Y+p1")),w=r(a("PbGl")),E=function(e){function t(e){var a;return(0,g.default)(this,t),a=(0,p.default)(this,(0,v.default)(t).call(this,e)),a.index=15,a.cacheOriginData={},a.toggleEditable=function(e,t){e.preventDefault();var n=a.state.data,r=n.map(function(e){return(0,f.default)({},e)}),l=a.getRowByKey(t,r);l&&(l.editable||(a.cacheOriginData[t]=(0,f.default)({},l)),l.editable=!l.editable,a.setState({data:r}))},a.newMember=function(){var e=a.state.data,t=e.map(function(e){return(0,f.default)({},e)});t.push({idAgent:"NEW_TEMP_ID_".concat(a.index),nif:"",name:"",idParking:"",password:"",editable:!0,isNew:!0}),a.index+=1,a.setState({data:t})},a.state={data:e.value,value:e.value},a}return(0,m.default)(t,e),(0,h.default)(t,[{key:"getRowByKey",value:function(e,t){var a=this.state.data;return(t||a).filter(function(t){return t.idAgent===e})[0]}},{key:"handleDelete",value:function(e){var t=this.props.handleDeleteAgent;t(e)}},{key:"discard",value:function(e){var t=this.state.data,a=this.props.onChange,n=t.filter(function(t){return t.idAgent!==e});this.setState({data:n}),a(n)}},{key:"handleKeyPress",value:function(e,t){"Enter"===e.key&&this.saveRow(e,t)}},{key:"handleFieldChange",value:function(e,t,a){var n=this.state.data,r=n.map(function(e){return(0,f.default)({},e)}),l=this.getRowByKey(a,r);l&&(l[t]=e.target.value,this.setState({data:r}))}},{key:"handleDropdownChange",value:function(e,t,a){var n=this.state.data,r=n.map(function(e){return(0,f.default)({},e)}),l=this.getRowByKey(a,r);l&&(l[t]=e,this.setState({data:r}))}},{key:"saveRow",value:function(e,t){e.persist();var a=this.getRowByKey(t)||{};if(!a.nif||!a.name||!a.idParking||!a.password)return c.default.error("Error. Por favor verifique los datos."),void e.target.focus();var n=this.props,r=n.handlePostAgent,l=n.handlePutAgent;a.isNew?r(a):l(a)}},{key:"cancel",value:function(e,t){this.clickedCancel=!0,e.preventDefault();var a=this.state.data,n=a.map(function(e){return(0,f.default)({},e)}),r=this.getRowByKey(t,n);this.cacheOriginData[t]&&(Object.assign(r,this.cacheOriginData[t]),delete this.cacheOriginData[t]),r.editable=!1,this.setState({data:n}),this.clickedCancel=!1}},{key:"render",value:function(){var e=this,t=this.props.parkingList.map(function(e){return y.default.createElement(s.default.Option,{key:e.id},e.name)}),a=this.props.loading,n=[{title:"Nombre",dataIndex:"name",key:"name",width:"20%",render:function(t,a){return a.editable?y.default.createElement(o.default,{value:t,autoFocus:!0,onChange:function(t){return e.handleFieldChange(t,"name",a.idAgent)},onKeyPress:function(t){return e.handleKeyPress(t,a.idAgent)},placeholder:"Nombre"}):t}},{title:"NIF",dataIndex:"nif",key:"nif",width:"20%",render:function(t,a){return a.editable?y.default.createElement(o.default,{value:t,onChange:function(t){return e.handleFieldChange(t,"nif",a.idAgent)},onKeyPress:function(t){return e.handleKeyPress(t,a.idAgent)},placeholder:"NIF"}):t}},{title:"Parking",dataIndex:"idParking",key:"idParking",width:"20%",render:function(a,n){return n.editable?y.default.createElement(s.default,{filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},style:{minWidth:120},showSearch:!0,placeholder:"Seleccione parking",onChange:function(t){return e.handleDropdownChange(t,"idParking",n.idAgent)}},t):a}},{title:"Password",dataIndex:"password",key:"password",width:"20%",render:function(t,a){return a.editable?y.default.createElement(o.default,{value:t,onChange:function(t){return e.handleFieldChange(t,"password",a.idAgent)},onKeyPress:function(t){return e.handleKeyPress(t,a.idAgent)},placeholder:"Password"}):t}},{title:"Acciones",key:"action",render:function(t,a){var n=e.state.loading;return a.editable&&n?null:a.editable?a.isNew?y.default.createElement("span",null,y.default.createElement("a",{onClick:function(t){return e.saveRow(t,a.idAgent)}},"Agregar"),y.default.createElement(u.default,{type:"vertical"}),y.default.createElement(d.default,{title:"Descartar nuevo agente",onConfirm:function(){return e.discard(a.idAgent)},cancelText:"Cancelar"},y.default.createElement("a",null,"Descartar"))):y.default.createElement("span",null,y.default.createElement("a",{onClick:function(t){return e.saveRow(t,a.idAgent)}},"Confirmar"),y.default.createElement(u.default,{type:"vertical"}),y.default.createElement("a",{onClick:function(t){return e.cancel(t,a.idAgent)}},"Cancelar")):y.default.createElement("span",null,y.default.createElement("a",{onClick:function(t){return e.toggleEditable(t,a.idAgent)}},"Editar"),y.default.createElement(u.default,{type:"vertical"}),y.default.createElement(d.default,{title:"\xbfEst\xe1 seguro que desea eliminar \xe9ste Agente?",onConfirm:function(){return e.handleDelete(a.idAgent)},okText:"Confirmar",cancelText:"Cancelar"},y.default.createElement("a",null,"Eliminar")))}}],r=this.state.data;return y.default.createElement(y.Fragment,null,y.default.createElement(i.default,{loading:a,columns:n,dataSource:r,pagination:!1,rowKey:function(e){return e.idAgent},rowClassName:function(e){return e.editable?w.default.editable:""}}),y.default.createElement(l.default,{style:{width:"100%",marginTop:16,marginBottom:8},type:"dashed",onClick:this.newMember,icon:"plus"},"Agregar un agente"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return(0,k.default)(e.value,t.value)?null:{data:e.value,value:e.value}}}]),t}(y.PureComponent),A=E;t.default=A},PbGl:function(e,t,a){},zJeH:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=n(a("bx4M")),i=n(a("pVnL")),d=n(a("lwsE")),u=n(a("W8MJ")),o=n(a("a1gu")),s=n(a("Nsbk")),c=n(a("7W2i"));a("y8nQ");var f,g,h,p=n(a("Vl3Y")),v=r(a("q1tI")),m=a("MuoO"),y=n(a("zHco")),k=n(a("DOsj")),w=n(a("PbGl")),E=(f=(0,m.connect)(function(e){var t=e.agent,a=e.parking,n=e.loading;return{agent:t,parking:a,submitting:n.effects["form/submitAdvancedForm"]}}),g=p.default.create(),f(h=g(h=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,o.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(r))),a.handlePostAgent=function(e){var t=a.props.dispatch;t({type:"agent/add",payload:e})},a.handlePutAgent=function(e){var t=a.props.dispatch;t({type:"agent/update",payload:e})},a.handleDeleteAgent=function(e){var t=a.props.dispatch;t({type:"agent/delete",payload:e})},a}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"agent/fetch"}),e({type:"parking/fetch"})}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.parking,n=e.agent,r=n.agents,d=n.loading,u=a.parkings,o={handlePutAgent:this.handlePutAgent,handlePostAgent:this.handlePostAgent,handleDeleteAgent:this.handleDeleteAgent};return v.default.createElement(y.default,{title:"Agentes",content:"Manager de usuarios",wrapperClassName:w.default.advancedForm},v.default.createElement(l.default,{title:"Gesti\xf3n de usuarios ",bordered:!1},t("members",{initialValue:r})(v.default.createElement(k.default,(0,i.default)({parkingList:u,loading:d},o)))))}}]),t}(v.PureComponent))||h)||h),A=E;t.default=A}}]);