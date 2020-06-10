(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},134:function(e,t){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n,s=a(0),o=a.n(s),r=a(32),i=a.n(r),c=a(20),l=a(12),m=a(13),u=a(10),h=a(15),d=a(14),g=a(11),p=a.n(g),b=a(47),f=a.n(b),v=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={isSentByCurrentUser:!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=p.a.get("state").name;console.log("".concat(this.props.user," ===  ").concat(e)),this.props.user===e&&this.setState({isSentByCurrentUser:!0})}},{key:"componentWillReceiveProps",value:function(){var e=p.a.get("state").name;console.log("".concat(this.props.user," ===  ").concat(e)),this.props.user===e&&this.setState({isSentByCurrentUser:!0})}},{key:"componentWillUnmount",value:function(){this.setState({isSentByCurrentUser:!1})}},{key:"render",value:function(){return this.state.isSentByCurrentUser?o.a.createElement("div",{className:" messageContainer justifyEnd"},o.a.createElement("p",{className:"message-username sentText pr-10"},this.props.user),o.a.createElement("div",{className:"messageBox backgroundBlue"},o.a.createElement("p",{className:"messageText colorWhite"},f.a.emojify(this.props.text)))):o.a.createElement("div",{className:" messageContainer justifyStart"},o.a.createElement("div",{className:"messageBox backgroundLight"},o.a.createElement("p",{className:"messageText colorDark"},f.a.emojify(this.props.text))),o.a.createElement("p",{className:"message-username sentText pl-10 "},this.props.user))}}]),a}(o.a.Component),E=(a(95),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentWillUpdate",value:function(){var e=i.a.findDOMNode(this);this.shouldScrollBottom=e.scrollTop+e.clientHeight+50>=e.scrollHeight}},{key:"componentDidUpdate",value:function(){if(this.shouldScrollBottom){var e=i.a.findDOMNode(this);e.scrollTop=e.scrollHeight}}},{key:"render",value:function(){return this.props.currentRoomId?o.a.createElement("div",{className:"message-list"},this.props.messages.map((function(e,t){return o.a.createElement(v,{key:e.user+e.text,user:e.user,text:e.text})}))):o.a.createElement("div",{className:"message-list"},o.a.createElement("div",{className:"join-room"},"\u2190 Enter in a room!"))}}]),a}(o.a.Component)),j=a(75),y=a.n(j),O=(a(96),a(78)),S=(a(100),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).showEmojis=function(t){e.setState({showEmojis:!0},(function(){return document.addEventListener("click",e.closeMenu)}))},e.closeMenu=function(t){console.log(e.emojiPicker),null===e.emojiPicker||e.emojiPicker.contains(t.target)||e.setState({showEmojis:!1},(function(){return document.removeEventListener("click",e.closeMenu)}))},e.addEmoji=function(t){var a=t.unified.split("-"),n=[];a.forEach((function(e){return n.push("0x"+e)}));var s=String.fromCodePoint.apply(String,n);e.setState({message:e.state.message+s})},e.state={message:"",showEmojis:!1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.sendMessage(this.state.message),this.setState({message:""})}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{className:"send-message-form",onSubmit:this.handleSubmit},this.state.showEmojis?o.a.createElement("span",{style:C.emojiPicker,ref:function(t){return e.emojiPicker=t}},o.a.createElement(O.a,{onSelect:this.addEmoji,emojiTooltip:!0,title:"weChat"})):o.a.createElement("p",{style:C.getEmojiButton,onClick:this.showEmojis},String.fromCodePoint(128522)),o.a.createElement("input",{placeholder:"Type message and hit ENTER",type:"text",onChange:this.handleChange,value:this.state.message,disabled:this.props.disabled}),o.a.createElement(y.a,{onClick:this.handleSubmit,className:"sendBtn"}))}}]),a}(o.a.Component)),C={getEmojiButton:{cssFloat:"right",border:"none",cursor:"pointer"},emojiPicker:{position:"absolute",bottom:10,right:0,cssFloat:"right",marginLeft:"200px"}},k=a(76),N=a.n(k),I=(a(102),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=Object(c.a)(this.props.rooms).sort((function(e,t){return e.id>t.id}));return o.a.createElement("div",{className:"rooms-list"},o.a.createElement("div",{className:"logout"},o.a.createElement(N.a,{onClick:this.props.logout,className:"logout-btn"},"Logout"),o.a.createElement("h4",{className:"logout-txt"},"Logout")),o.a.createElement("h3",null,"Your rooms:"),o.a.createElement("ul",null,t.map((function(t,a){var n=e.props.currentRoomId===t.id?"active":"";return o.a.createElement("li",{key:t.notify+t.name,className:"room "+n},o.a.createElement("a",{onClick:function(){return e.props.subscribeToRoom(t.id)}},"# ",t.name))}))))}}]),a}(o.a.Component)),R=(a(103),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={roomName:""},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({roomName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.roomName),this.setState({roomName:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:"new-room-form"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Join a room",value:this.state.roomName,onChange:this.handleChange,required:!0}),o.a.createElement("button",{id:"create-room-btn",type:"submit"},"+")))}}]),a}(o.a.Component)),F=(a(104),a(77)),x=a.n(F),w=a(6),M=a(28),T=a.n(M),B=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={currentRoomId:null,joinedRooms:[],messages:[],currentMessages:[],loggedIn:!0},e.subscribeToRoom=e.subscribeToRoom.bind(Object(u.a)(e)),e.sendMessage=e.sendMessage.bind(Object(u.a)(e)),e.subscribeToRoom=e.subscribeToRoom.bind(Object(u.a)(e)),e.handleLogout=e.handleLogout.bind(Object(u.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;n=x()("http://localhost:5000");var t=p.a.get("state").email;console.log(t),T.a.get("http://localhost:5000/api/v1/chatup/join/"+t).then((function(t){console.log(t.data.rooms),console.log(t.data.joinedrooms);var a,s=t.data.rooms;t.data.joinedrooms.forEach((function(t){var o=s.find((function(e){return e.name===t}));a=o._id.valueOf();var r=o.name;e.setState({joinedRooms:[].concat(Object(c.a)(e.state.joinedRooms),[{id:a,name:r,notify:0}]),currentRoomId:a}),e.setState({messages:[].concat(Object(c.a)(e.state.messages),[{roomId:a,message:[]}])});var i=p.a.get("state").name;n.emit("join",{Username:i,roomId:a},(function(e){e&&alert(e)}))})),e.subscribeToRoom(a)})),n.on("message",(function(t,a){var n=t.user,s=t.text,o=t.roomId;o===e.state.currentRoomId?e.setState({currentMessages:[].concat(Object(c.a)(e.state.currentMessages),[{user:n,text:s}])}):(e.state.joinedRooms.forEach((function(e){e.id===o&&(e.notify++,console.log("".concat(o," and ").concat(e.notify)))})),e.state.messages.forEach((function(e){e.roomId===o&&(e.message=[].concat(Object(c.a)(e.message),[{user:n,text:s}]))})))}))}},{key:"componentWillUnmount",value:function(){n.emit("disconnect"),n.off()}},{key:"sendMessage",value:function(e){if(e){var t={message:e,user:p.a.get("state").name,roomId:this.state.currentRoomId};n.emit("sendMessage",t)}}},{key:"handleLogout",value:function(){p.a.remove("loggedIn"),this.setState({loggedIn:!1})}},{key:"joinRoom",value:function(e){var t=this,a={name:e,emailId:p.a.get("state").email};T.a.post("http://localhost:5000/api/v1/chatup/join/joinroom",a).then((function(a){if(!0===a.data.success){var s=p.a.get("state").name,o=a.data.id;n.emit("join",{Username:s,roomId:o},(function(e){e&&alert(e)}));var r=a.data.id;t.setState({messages:[].concat(Object(c.a)(t.state.messages),[{roomId:r,message:[]}])}),t.setState({joinedRooms:[].concat(Object(c.a)(t.state.joinedRooms),[{id:r,name:e,notify:0}])}),t.subscribeToRoom(r)}else console.log(a),console.log("Error")}))}},{key:"subscribeToRoom",value:function(e){var t=this;this.state.messages.forEach((function(e){e.roomId===t.state.currentRoomId&&(e.message=Object(c.a)(t.state.currentMessages))})),this.state.joinedRooms.forEach((function(t){e===t.id&&(t.notify=0)})),this.state.messages.forEach((function(a){a.roomId===e&&t.setState({currentMessages:Object(c.a)(a.message),currentRoomId:e})}))}},{key:"render",value:function(){return p.a.get("loggedIn")&&this.state.loggedIn?o.a.createElement("div",{className:"chat"},o.a.createElement(I,{logout:this.handleLogout,rooms:Object(c.a)(this.state.joinedRooms),subscribeToRoom:this.subscribeToRoom,currentRoomId:this.state.currentRoomId}),o.a.createElement(E,{currentRoomId:this.state.currentRoomId,messages:this.state.currentMessages}),o.a.createElement(R,{onSubmit:this.joinRoom.bind(this)}),o.a.createElement(S,{sendMessage:this.sendMessage,disabled:!this.state.currentRoomId})):o.a.createElement(w.a,{to:"/"})}}]),a}(o.a.Component),_=a(36),L=a(27),U=(a(154),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",password:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t,a=this;e.preventDefault();var n=this.props.history;console.log("On submit pressed"),T.a.post("http://localhost:5000/api/v1/chatup/auth/login",this.state).then((function(e){console.log(e),!0===(t=e.data).success&&(console.log("Hello"),a.setState({name:t.user.name}),p.a.set("loggedIn",!0),p.a.set("state",a.state),n.push("/chat"))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"FormCenter"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields box"},o.a.createElement("h1",null,"Login"),o.a.createElement("div",{className:"FormField"},o.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your email",name:"email",value:this.state.email,onChange:this.handleChange})),o.a.createElement("div",{className:"FormField"},o.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange})),o.a.createElement("div",{className:"FormField"},o.a.createElement("button",{className:"FormField__Button mr-20"},"Sign In"),o.a.createElement(L.b,{to:"/register"},o.a.createElement("h6",null,"Register")))))}}]),a}(s.Component)),D=(a(155),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",password:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.props.history;console.log("On submit pressed"),T.a.post("http://localhost:5000/api/v1/chatup/auth/register",this.state).then((function(e){console.log(e),!0===e.data.success&&(console.log("Hello"),p.a.set("loggedIn",!0),p.a.set("state",t.state),a.push("/chat"))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"FormCenter"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields box"},o.a.createElement("h1",null,"Register"),o.a.createElement("div",{className:"FormField"},o.a.createElement("input",{type:"text",id:"name",className:"FormField__Input",placeholder:"Enter your full name",name:"name",value:this.state.name,onChange:this.handleChange})),o.a.createElement("div",{className:"FormField"},o.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your email",name:"email",value:this.state.email,onChange:this.handleChange})),o.a.createElement("div",{className:"FormField"},o.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange})),o.a.createElement("div",{className:"FormField"},o.a.createElement("button",{className:"FormField__Button mr-20"},"Sign Up"),o.a.createElement(L.b,{to:"/"},o.a.createElement("h6",null,"Login")))))}}]),a}(s.Component)),P=(a(156),function(){return o.a.createElement(L.a,null,o.a.createElement(w.d,null,o.a.createElement(w.b,{path:"/",exact:!0,component:U}),o.a.createElement(w.b,{path:"/register",component:D}),o.a.createElement(w.b,{path:"/chat",component:B})))});i.a.render(o.a.createElement(P,null),document.getElementById("root"))},80:function(e,t,a){e.exports=a(158)},95:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.7c41ad61.chunk.js.map