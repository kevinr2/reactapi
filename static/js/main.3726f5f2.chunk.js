(this.webpackJsonppaciente=this.webpackJsonppaciente||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),o=a(28),r=a.n(o),s=(a(70),a(7)),i=(a(71),a(72),a(46)),l=a.n(i),d=a(21),j=a(58),h=a(13),m=a(14),b=a(16),u=a(15),p=(a(74),a.p+"static/media/logo.57a52053.png"),O="https://api.solodata.es/",x=a(17),f=a.n(x),g=a(1),v=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={form:{usuario:"",password:""},error:!1,errorMsg:""},n.manejadorSubmit=function(e){e.preventDefault()},n.manejadorBoton=function(){console.log(n.state.form),f.a.post("https://api.solodata.es/auth",n.state.form).then((function(e){"ok"===e.data.status?(localStorage.setItem("token",e.data.result.token),n.props.history.push("/dashboard")):n.setState({error:!0,errorMsg:e.data.result.error_msg})})).catch((function(e){console.log(e),n.setState({error:!0,errorMsg:"Error al conectar con el api"})}))},n.manejadorChange=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({form:Object(s.a)(Object(s.a)({},n.state.form),{},Object(d.a)({},t.target.name,t.target.value))});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(a,[{key:"render",value:function(){return Object(g.jsx)(c.a.Fragment,{children:Object(g.jsx)("div",{className:"wrapper fadeInDown",children:Object(g.jsxs)("div",{id:"formContent",children:[Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"fadeIn first",children:Object(g.jsx)("img",{src:p,width:"100",height:"150",alt:"User Icon"})}),Object(g.jsxs)("form",{onSubmit:this.manejadorSubmit,children:[Object(g.jsx)("input",{type:"text",id:"login",className:"fadeIn second",name:"usuario",placeholder:"usuario",onChange:this.manejadorChange}),Object(g.jsx)("input",{type:"password",id:"password",className:"fadeIn third",name:"password",placeholder:"password",onChange:this.manejadorChange}),Object(g.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Log In",onClick:this.manejadorBoton})]}),!0===this.state.error&&Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:this.state.errorMsg})]})})})}}]),a}(c.a.Component),N=a(62),C=a(5),y=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(g.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(g.jsx)("a",{className:"navbar-brand",href:"#",children:"React APi"})})}}]),a}(c.a.Component),k=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={pacientes:[]},e}return Object(m.a)(a,[{key:"clickPaceinte",value:function(e){this.props.history.push("/editar/"+e)}},{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.solodata.es/pacientes?page=1").then((function(t){e.setState({pacientes:t.data})}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("table",{className:"table",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"ID"}),Object(g.jsx)("th",{scope:"col",children:"Nombre"}),Object(g.jsx)("th",{scope:"col",children:"DNI"}),Object(g.jsx)("th",{scope:"col",children:"Telefono"}),Object(g.jsx)("th",{scope:"col",children:"correo"})]})}),Object(g.jsx)("tbody",{children:this.state.pacientes.map((function(t,a){return Object(g.jsxs)("tr",{onClick:function(){return e.clickPaceinte(t.PacienteId)},children:[Object(g.jsx)("th",{children:t.PacienteId}),Object(g.jsx)("td",{children:t.Nombre}),Object(g.jsx)("td",{children:t.DNI}),Object(g.jsx)("td",{children:t.Telefono}),Object(g.jsx)("td",{children:t.Correo})]},a)}))})]}),Object(g.jsx)("a",{className:"btn btn-success",href:"/nuevo",children:"nuevo"})]})]})}}]),a}(c.a.Component),S=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={form:{nombre:"",direccion:"",dni:"",correo:"",codigoPostal:"",genero:"",telefono:"",fechaNacimiento:"",token:"",pacienteId:""},error:!1,errorMSG:""},e.manejadorChange=function(t){e.setState({form:Object(s.a)(Object(s.a)({},e.state.form),{},Object(d.a)({},t.target.name,t.target.value))}),console.log(t.target.value)},e.manejadorSubmit=function(e){e.preventDefault()},e.put=function(){f.a.put("https://api.solodata.es/pacientes",e.state.form).then((function(e){console.log(e)}))},e.delete=function(){var t=e.props.match.params.id,a={token:localStorage.getItem("token"),pacienteId:t};f.a.delete("https://api.solodata.es/pacientes",{headers:a}).then((function(t){e.props.history.push("/dashboard")}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a=O+"/pacientes?id="+t;f.a.get(a).then((function(a){e.setState({form:{nombre:a.data[0].Nombre,direccion:a.data[0].Direccion,dni:a.data[0].DNI,correo:a.data[0].Correo,codigoPostal:a.data[0].CodigoPostal,genero:a.data[0].Genero,telefono:a.data[0].Telefono,fechaNacimiento:a.data[0].FechaNacimiento,token:localStorage.getItem("token"),pacienteId:t}})}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(y,{}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("h3",{children:"Editar paciente"})}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("form",{className:"form-horizontal",onSubmit:this.manejadorSubmit,children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-sm-12",children:Object(g.jsx)("div",{className:"col-md-10",children:Object(g.jsx)("input",{className:"form-control",name:"nombre",placeholder:"Nombre",type:"text",value:this.state.form.nombre,onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-12",children:Object(g.jsx)("div",{className:"col-md-10",children:Object(g.jsx)("input",{className:"form-control",name:"direccion",placeholder:"Direccion",type:"text",value:this.state.form.direccion,onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"dni",placeholder:"DNI",type:"text",value:this.state.form.dni,onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"telefono",placeholder:"Telefono",type:"text",value:this.state.form.telefono,onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"codigoPostal",placeholder:"Codigo Postal",type:"text",value:this.state.form.codigoPostal,onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"genero",placeholder:"Genero",type:"text",value:this.state.form.genero,onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"correo",placeholder:"Correo",type:"text",value:this.state.form.correo,onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",type:"text",name:"fechaNacimiento",placeholder:"fecha de nacimiento",value:this.state.form.fechaNacimiento,onChange:this.manejadorChange})})})]}),Object(g.jsxs)("div",{style:{marginTop:"30px"},children:[Object(g.jsx)("button",{type:"submit",className:"btn  btn-primary",style:{marginRight:"10px"},onClick:function(){return e.put()},children:"Editar"}),Object(g.jsx)("button",{type:"submit",className:"btn  btn-danger",style:{marginRight:"10px"},onClick:function(){return e.delete()},children:"Eliminar"}),Object(g.jsx)("a",{className:"btn  btn-dark",href:"/dashboard",children:"Salir"})]})]})})]})}}]),a}(c.a.Component),I=a(59),w=a.n(I),D=(a(94),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={form:{nombre:"",direccion:"",dni:"",correo:"",codigoPostal:"",genero:"",telefono:"",fechaNacimiento:"",token:localStorage.getItem("token"),pacienteId:""},error:!1,errorMSG:"",fecha:new Date("2000","08","25")},e.manejadorChange=function(t){e.setState({form:Object(s.a)(Object(s.a)({},e.state.form),{},Object(d.a)({},t.target.name,t.target.value))}),console.log(t.target.value)},e.manejadorSubmit=function(e){e.preventDefault()},e.post=function(){f.a.post("https://api.solodata.es/pacientes",e.state.form).then((function(t){console.log(t),e.props.history.push("/dashboard")}))},e.onChange=function(t){var a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate(),o="".concat(a,"-").concat(n<10?"0".concat(n):"".concat(n),"-").concat(c<10?"0".concat(c):"".concat(c));console.log(o),e.setState({fecha:t}),e.setState({form:{fechaNacimiento:o}})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(y,{}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("h3",{children:"Nuevo paciente"})}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("form",{className:"form-horizontal",onSubmit:this.manejadorSubmit,children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-sm-12",children:Object(g.jsx)("div",{className:"col-md-10",children:Object(g.jsx)("input",{className:"form-control",name:"nombre",placeholder:"Nombre",type:"text",onChange:this.manejadorChange,required:!0})})}),Object(g.jsx)("div",{className:"col-sm-12",children:Object(g.jsx)("div",{className:"col-md-10",children:Object(g.jsx)("input",{className:"form-control",name:"direccion",placeholder:"Direccion",type:"text",onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"dni",placeholder:"DNI",type:"text",onChange:this.manejadorChange,required:!0})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"telefono",placeholder:"Telefono",type:"text",onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"codigoPostal",placeholder:"Codigo Postal",type:"text",onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"genero",placeholder:"Genero",type:"text",onChange:this.manejadorChange})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("input",{className:"form-control",name:"correo",placeholder:"Correo",type:"text",onChange:this.manejadorChange,required:!0})})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsxs)("div",{className:"col-md-12",children:[Object(g.jsx)("label",{className:"label-control",children:" fecha nacimiento"}),Object(g.jsx)(w.a,{id:"fechaNacimiento",showYearDropdown:!0,yearDropdownItemNumber:50,scrollableYearDropdown:!0,selected:this.state.fecha,onChange:this.onChange,className:"form-control"})]})})]}),Object(g.jsxs)("div",{style:{marginTop:"30px"},children:[Object(g.jsx)("button",{type:"submit",className:"btn  btn-primary",style:{marginRight:"10px"},onClick:function(){return e.post()},children:"Crear"}),Object(g.jsx)("a",{className:"btn  btn-dark",href:"/dashboard",children:"Salir"})]})]})})]})}}]),a}(c.a.Component));var P=function(){return Object(g.jsx)(c.a.Fragment,{children:Object(g.jsx)(N.a,{children:Object(g.jsxs)(C.c,{children:[Object(g.jsx)(C.a,{path:"/",exact:!0,render:function(e){return Object(g.jsx)(v,Object(s.a)({},e))}}),Object(g.jsx)(C.a,{path:"/dashboard",exact:!0,render:function(e){return Object(g.jsx)(k,Object(s.a)({},e))}}),Object(g.jsx)(C.a,{path:"/editar/:id",exact:!0,render:function(e){return Object(g.jsx)(S,Object(s.a)({},e))}}),Object(g.jsx)(C.a,{path:"/nuevo",exact:!0,render:function(e){return Object(g.jsx)(D,Object(s.a)({},e))}})]})})})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))},70:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){}},[[146,1,2]]]);
//# sourceMappingURL=main.3726f5f2.chunk.js.map