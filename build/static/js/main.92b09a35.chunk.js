(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{107:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),s=a(9),l=a(5),i=a(8),u=a(7),m=a(6),d=a(23),p=a(27),v=a(22),h=a(3),f=a.n(h),b=a(13),g=a(54),y=a.n(g),E=a(25),k=a.n(E);var j={init:function(){},log:function(e){console.log(e)}};k.a.defaults.baseURL="https://yaniv-vidly-api.herokuapp.com/api",k.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(j.log(e),p.toast.error("An unexpected error occurred")),Promise.reject(e)}));var w={get:k.a.get,post:k.a.post,put:k.a.put,delete:k.a.delete,setJwt:function(e){k.a.defaults.headers.common["x-auth-token"]=e}};function S(){return localStorage.getItem("token")}function O(){return(O=Object(b.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("/auth",{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem("token",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w.setJwt(S());var C={login:function(e,t){return O.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem("token",e)},logout:function(){localStorage.removeItem("token")},getCurrentUser:function(){try{var e=localStorage.getItem("token");return y()(e)}catch(t){return null}},getJwt:S},N=function(e){var t=e.component,a=e.render,n=Object(v.a)(e,["component","render"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return C.getCurrentUser()?t?r.a.createElement(t,e):a(e):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},x=a(14),I=a(41),P=a(20),R=a.n(P),M=function(e){var t=e.liked,a=e.onLike;return r.a.createElement("i",{onClick:a,className:t?"clickable fa fa-heart":"clickable fa fa-heart-o","aria-hidden":"true"})},_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).raiseSort=function(t){if(!t.key){var a=Object(x.a)({},e.props.sortColumn);a.path===t.path?a.order="asc"===a.order?"desc":"asc":(a.path=t.path,a.order="asc"),e.props.onSort(a)}},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t)}},t.label," ",e.renderSortIcon(t))}))))}}]),a}(n.Component),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){if(t.content)return t.content(e);var a=R.a.get(e,t.path);return"number"===typeof a?(new Intl.NumberFormat).format(a):a},e.createKey=function(e,t,a){return e[a]+(t.path||t.key)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns,o=t.idProperty;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t[o]},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a,o)},e.renderCell(t,a))})))})))}}]),a}(n.Component);G.defaultProps={idProperty:"_id"};var D=G,L=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,o=e.data,c=Object(v.a)(e,["columns","sortColumn","onSort","data"]);return r.a.createElement("table",{className:"table"},r.a.createElement(_,{columns:t,sortColumn:a,onSort:n}),r.a.createElement(D,Object.assign({columns:t,data:o},c)))},T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a),(e=t.call(this)).columns=[{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(M,{liked:t.liked,onLike:function(){return e.props.onLike(t)}})}}];var n=C.getCurrentUser();return e.addTitleColumn(n),n&&n.isAdmin&&e.addDeleteColumn(),e}return Object(i.a)(a,[{key:"addTitleColumn",value:function(e){var t={path:"title",label:"Title"};e&&(t.content=function(e){return r.a.createElement(s.b,{to:"/movies/".concat(e._id)},e.title)}),this.columns.unshift(t)}},{key:"addDeleteColumn",value:function(){var e=this;this.columns.push({key:"delete",content:function(t){return r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.props.onDelete(t)}},"Delete")}})}},{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortColumn;return r.a.createElement(L,{columns:this.columns,sortColumn:n,onSort:a,data:t})}}]),a}(n.Component),A=function(e){var t=e.items,a=e.textProperty,n=e.idProperty,o=e.onItemSelect,c=e.selectedItem;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e[n],className:e===c?"list-group-item active":"list-group-item",onClick:function(){return o(e)}},e[a])})))};A.defaultProps={textProperty:"name",idProperty:"_id"};var U=A,q=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})};function B(e,t,a){var n=(t-1)*a;return R()(e).slice(n).take(a).value()}function F(e,t){return Math.ceil(e/t)}var J=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,o=e.onPageChange,c=F(t,a);if(1===c)return null;var s=R.a.range(1,c+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination justify-content-center"},s.map((function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("button",{className:"page-link",onClick:function(){return o(e)}},e))}))))};function z(e){return"".concat("/movies","/").concat(e)}var Q={getMovies:function(){return w.get("/movies")},getMovie:function(e){return w.get(z(e))},saveMovie:function(e){if(e._id){var t=Object(x.a)({},e);return delete t._id,w.put(z(e._id),t)}return w.post("/movies",e)},deleteMovie:function(e){return w.delete(z(e))}};var W={getGenres:function(){return w.get("/genres")}},V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],currentPage:1,pageSize:4,genres:[],sortColumn:{path:"title",order:"asc"},selectedGenre:null,searchQuery:""},e.handleLike=function(t){var a=Object(I.a)(e.state.movies),n=a.indexOf(t);t[n]=Object(x.a)({},t[n]),a[n].liked=!a[n].liked,e.setState({movies:a})},e.handleDelete=function(){var t=Object(b.a)(f.a.mark((function t(a){var n,r,o,c,s,l,i,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.movies,r=e.state,o=r.movies,c=r.currentPage,s=r.pageSize,l=F(o.length,s),i=o.filter((function(e){return e._id!==a._id})),u=i.length&&c===l&&i.length%s===0?c-1:c,e.setState({movies:i,currentPage:u}),t.prev=6,t.next=9,Q.deleteMovie(a._id);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(6),t.t0.response&&404===t.t0.response.status&&p.toast.error("This movie has already been deleted"),e.setState({movies:n});case 15:case"end":return t.stop()}}),t,null,[[6,11]])})));return function(e){return t.apply(this,arguments)}}(),e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,searchQuery:"",currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:null,currentPage:1})},e.getPagedData=function(){var t=e.state,a=t.pageSize,n=t.currentPage,r=t.sortColumn,o=t.selectedGenre,c=t.searchQuery,s=t.movies,l=s;c?l=s.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())})):o&&o._id&&(l=s.filter((function(e){return e.genre._id===o._id})));var i=B(R.a.orderBy(l,[r.path],[r.order]),n,a);return{totalCount:l.length,data:i}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getGenres();case 2:return t=e.sent,a=t.data,n=[{_id:"",name:"All Genres"}].concat(Object(I.a)(a)),e.next=7,Q.getMovies();case 7:r=e.sent,o=r.data,this.setState({movies:o,genres:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pageSize,a=e.currentPage,n=e.genres,o=e.selectedGenre,c=e.sortColumn,l=e.searchQuery,i=this.props.user,u=this.getPagedData(),m=u.totalCount,d=u.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(U,{items:n,selectedItem:o,onItemSelect:this.handleGenreSelect})),r.a.createElement("div",{className:"col"},i&&r.a.createElement(s.b,{to:"/movies/new",className:"btn btn-primary m-bottom"},"New Movie"),r.a.createElement("p",null,"Showing ",m," movies in the database"),r.a.createElement(q,{value:l,onChange:this.handleSearch}),r.a.createElement(T,{movies:d,onLike:this.handleLike,onDelete:this.handleDelete,sortColumn:c,onSort:this.handleSort}),r.a.createElement(J,{itemsCount:m,pageSize:t,currentPage:a,onPageChange:this.handlePageChange})))}}]),a}(n.Component),K=a(12),$=a.n(K),H=a(28),X=a(57),Y=function(e){var t=e.name,a=e.label,n=e.error,o=Object(v.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},o,{id:t,name:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},Z=function(e){var t=e.name,a=e.label,n=e.options,o=e.error,c=Object(v.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({className:"form-control",id:t,name:t},c),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),o&&r.a.createElement("div",{className:"alert alert-danger"},o))},ee=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:{},errors:{}},e.validate=function(){var t=$.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(X.a)(t.details);try{for(r.s();!(a=r.n()).done;){var o=a.value;n[o.path[0]]=o.message}}catch(c){r.e(c)}finally{r.f()}return n},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(H.a)({},a,n),o=Object(H.a)({},a,e.schema[a]),c=$.a.validate(r,o).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,n=Object(x.a)({},e.state.errors),r=e.validateProperty(a);r?n[a.name]=r:delete n[a.name];var o=Object(x.a)({},e.state.data);o[a.name]=a.value,e.setState({data:o,errors:n})},e.renderButton=function(t){return r.a.createElement("button",{disabled:e.validate(),className:"btn btn-primary"},t)},e.renderInput=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",o=e.state,c=o.data,s=o.errors;return r.a.createElement(Y,{name:t,label:a,type:n,value:c[t],onChange:e.handleChange,error:s[t]})},e.renderSelect=function(t,a,n){var o=e.state,c=o.data,s=o.errors;return r.a.createElement(Z,{name:t,label:a,options:n,value:c[t],onChange:e.handleChange,error:s[t]})},e}return a}(n.Component),te=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},errors:{},genres:[]},e.schema={_id:$.a.string(),title:$.a.string().required().label("Title"),genreId:$.a.string().label("Genre"),numberInStock:$.a.number().integer().min(0).max(100).required().label("Number in Stock"),dailyRentalRate:$.a.number().min(0).max(10).required().label("Daily Rental Rate")},e.doSubmit=Object(b.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.saveMovie(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateGenres",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getGenres();case 2:t=e.sent,a=t.data,this.setState({genres:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateMovie",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Q.getMovie(t);case 6:a=e.sent,n=a.data,this.setState({data:this.mapToViewModel(n)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))}}]),a}(ee),ae=function(){return r.a.createElement("h1",null,"Customers")},ne=function(){return r.a.createElement("h1",null,"Rentals")},re=function(){return r.a.createElement("h1",null,"404 Not Found")},oe=a(30),ce=a(59),se=function(e){var t=e.user;return r.a.createElement(oe.a,{bg:"light",expand:"lg"},r.a.createElement(oe.a.Brand,{href:"/"},"Vidly"),r.a.createElement(oe.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(oe.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ce.a,{className:"mr-auto"},r.a.createElement(s.c,{className:"nav-item nav-link",to:"/movies"},"Movies"),r.a.createElement(s.c,{className:"nav-item nav-link",to:"/customers"},"Customers"),r.a.createElement(s.c,{className:"nav-item nav-link",to:"/rentals"},"Rentals"),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,{className:"nav-item nav-link",to:"/login"},"Login"),r.a.createElement(s.c,{className:"nav-item nav-link",to:"/register"},"Register")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,{className:"nav-item nav-link",to:"/profile"},t.name),r.a.createElement(s.c,{className:"nav-item nav-link",to:"/logout"},"Logout")))))},le=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:$.a.string().min(3).required().label("Username"),password:$.a.string().min(3).required().label("Password")},e.doSubmit=Object(b.a)(f.a.mark((function t(){var a,n,r,o,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state.data,n=a.username,r=a.password,t.next=4,C.login(n,r);case 4:o=e.props.location.state,window.location=o?o.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((c=Object(x.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:c}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return C.getCurrentUser()?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),a}(ee);var ie={register:function(e){return w.post("/users",{email:e.username,password:e.password,name:e.name})}},ue=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:$.a.string().email().required().label("Username"),password:$.a.string().min(5).required().label("Password"),name:$.a.string().required().label("Name")},e.doSubmit=Object(b.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ie.register(e.state.data);case 3:a=t.sent,C.loginWithJwt(a.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((n=Object(x.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:n}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),a}(ee),me=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){C.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component),de=(a(106),a(107),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="Vidly";var e=C.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.ToastContainer,null),r.a.createElement(se,{user:e}),r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/register",component:ue}),r.a.createElement(d.b,{path:"/login",component:le}),r.a.createElement(d.b,{path:"/logout",component:me}),r.a.createElement(N,{path:"/movies/:id",component:te}),r.a.createElement(d.b,{path:"/movies",render:function(t){return r.a.createElement(V,Object.assign({},t,{user:e}))}}),r.a.createElement(d.b,{path:"/customers",component:ae}),r.a.createElement(d.b,{path:"/rentals",component:ne}),r.a.createElement(d.b,{path:"/not-found",component:re}),r.a.createElement(d.a,{from:"/",exact:!0,to:"/movies"}),r.a.createElement(d.a,{to:"/not-found"}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108),a(109),a(110);j.init(),c.a.render(r.a.createElement(s.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(111)}},[[60,1,2]]]);
//# sourceMappingURL=main.92b09a35.chunk.js.map