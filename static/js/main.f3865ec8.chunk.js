(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(n,e,t){"use strict";t.r(e),t.d(e,"ALLOWED_KEYS",function(){return h}),t.d(e,"hook",function(){return m}),t.d(e,"go",function(){return g}),t.d(e,"play",function(){return b}),t.d(e,"load",function(){return v}),t.d(e,"save",function(){return w}),t.d(e,"print",function(){return k}),t.d(e,"yes_or_no",function(){return E}),t.d(e,"choose",function(){return x}),t.d(e,"change_mana",function(){return _}),t.d(e,"execute",function(){return O});var r=t(2),o=t.n(r),a=t(3),i=t(15);t(6);var u=t(1),c=t(5),s=c.scenes,l=c.rooms,h=["1","2","3","4","5","q","w","e","r","t","a","s","d","f","g"],f=null,d=null,p=null,y=null;function m(n){f=n,v()}function g(n){null!=d&&d.onExit&&b(d.onExit),"string"===typeof n&&(n=l[n]),console.log(l),console.log(n),d=n.name;n.has_entered?n.onEnter:n.onFirstEnter||n.onEnter;n.onEnter&&b(n.onEnter),n.has_entered=!0}function b(n){y=null,null!=p&&f.print(u.createElement("span",null,"\n")),"string"===typeof n&&(n=n in l[d]?l[d][n]:s[n]),p=n.name,n()}function v(){try{var n=JSON.parse(localStorage.getItem("save"));console.log(n),c.loadState(n),d=n.cur_room,b(n.cur_scene)}catch(e){console.error(e),b(s.aphex_intro)}}function w(){try{JSON.parse(localStorage.getItem("save"))}catch(t){({})}var n=c.saveState(),e=Object(i.a)({},n,{cur_room:d,cur_scene:p});console.log(e),localStorage.setItem("save",JSON.stringify(e))}function k(n){f.print(n),f.print("\n")}function E(n,e){x([{label:"Yes",action:n},{label:"No",action:e}])}function x(n){Object.keys(n).every(function(n){return h.includes(n)})?(f.setChoices(n),y=n):Array.isArray(n)?x(n=n.reduce(function(n,e,t){return n[t+1]=e,n},{})):x(n=Object.keys(n).map(function(e){return{label:e,action:n[e]}}))}function _(){}function O(n){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(o.a.mark(function n(e){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e in y&&(!0===y[e].disabled||"string"===typeof y[e].disabled||(k(u.createElement("span",null,"\n",u.createElement("b",null,"> ",y[e].label),"\n")),y[e].action()),w());case 1:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}},function(n,e,t){var r=t(28).default,o={},a={};n.exports={scenes:o,rooms:a};var i=r(t(29)),u=r(t(31));Object.keys(i).forEach(function(n){var e=i[n];Object.keys(e).forEach(function(t){if("function"===typeof e[t]){var r=e[t];r.name=n,o[t]=r}})}),Object.keys(u).forEach(function(n){var e=u[n];e.has_entered=!1,e.name=n,Object.keys(e).forEach(function(t){"function"===typeof e[t]&&(/^on[^a-z]/.test(e[t].name)?a[n]=e:o[t]=e[t])})}),n.exports.saveState=function(){var n={scene_state:{},room_state:{}};return Object.keys(i).forEach(function(e){var t=i[e];Object.keys(t).forEach(function(e){t[e]&&"function"!==typeof t[e]&&(n.scene_state[e]=t[e])})}),Object.keys(u).forEach(function(e){var t=u[e];Object.keys(t).forEach(function(r){t[r]&&"name"!==r&&"function"!==typeof t[r]&&(e in n.room_state||(n.room_state[e]={}),n.room_state[e][r]=t[r])})}),n},n.exports.loadState=function(n){Object.keys(i).forEach(function(e){i[e].loadState(n.scene_state)}),Object.keys(u).forEach(function(e){var t=u[e];n.room_state[e]&&t.loadState(n.room_state[e])})}},function(n,e){String.prototype.stripLeft=function(n){return this.replace(new RegExp("^["+n+"]+"),"")},String.prototype.stripRight=function(n){return this.replace(new RegExp("["+n+"]+$"),"")},String.prototype.replaceAll=function(n,e){return this.replace(new RegExp(n,"g"),e)}},function(n,e,t){"use strict";t.r(e),t.d(e,"text",function(){return i}),t.d(e,"normal",function(){return u}),t.d(e,"pink",function(){return c});t(6);var r=t(1),o=t.n(r),a=function(n){return o.a.createElement("span",null,n)};function i(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=n.map(function(e,r){if(e=(e=e.replaceAll(/\n +/,"\n")).replaceAll(/\n\n+/,"\n\n"),0===r&&(e=e.trimLeft("\n")),r===n.length-1&&(e=e.trimRight("\n")),"function"===typeof t[r]){e=e.replaceAll(/\n$/,"");var i=a(e);return t[r](),o.a.createElement(o.a.Fragment,null,i)}return null==t[r]?o.a.createElement(o.a.Fragment,null,a(e)):o.a.createElement(o.a.Fragment,null,a(e),o.a.createElement("span",null,t[r]))});return o.a.createElement(o.a.Fragment,null,i)}function u(){a=function(n){return o.a.createElement("span",null,n)}}function c(){a=function(n){return o.a.createElement("span",{className:"pink"},n)}}},,,,,,,,,function(n,e,t){n.exports=t(38)},,,,,,function(n,e,t){},,,,,,function(n,e,t){"use strict";t.r(e),t(6);e.default=function(n){var e={};return n.keys().forEach(function(t){var r=t.split("/"),o=r[r.length-1].split(".")[0],a=n(t);e[o]=a}),e}},function(n,e,t){var r={"./aphex_intro.js":30};function o(n){var e=a(n);return t(e)}function a(n){var e=r[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,n.exports=o,o.id=29},function(n,e,t){"use strict";t.r(e),t.d(e,"willingness",function(){return l}),t.d(e,"aphex_intro",function(){return y}),t.d(e,"loadState",function(){return g});var r=t(0);function o(){var n=Object(r.a)(["\n    ",'\n    "I thank you for your service. And the world does not know it yet, but it thanks you, too."\n    ',"\n\n    She stands up and puts her hand on your shoulder.\n\n    ",'\n    "I will bestow your body with the mana I can sacrifice. However, your body has no ability to regenerate it.\n    ',"\n\n    You can feel a rush of energy enter your body, awakening nerves you never knew you had.\n\n    You blink and find yourself in a totally different place.\n  "]);return o=function(){return n},n}function a(){var n=Object(r.a)(["\n              You open your mouth, but find yourself incapable of refusing her. You agree to help her out as best you can.\n\n              ",'\n              "Thank you, adventurer. Now go and be on your way! Can\'t be wasting time."\n              ',"\n\n              You blink and find yourself in a totally different place.\n            "]);return a=function(){return n},n}function i(){var n=Object(r.a)(["\n        You say that she's definitely looking for another person--there's no way that someone like you would do this, let alone be able to! You're just a regular person.\n\n        Her expression tightens and you feel like she may not be entirely interested in sending you home.\n\n        ",'\n        "It is beyond a mortal to summon across the planes. Wouldn\'t you like to take this unique opportunity to explore the world?"\n        ',"\n\n        A glint of light reflects from her eyes. You feel like someone is watching you from behind.\n\n        ",'\n        "Will you accept my quest, kind soul?"\n        ',"\n      "]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n        You agree to help her out, but you keep silent that you're pretty sure you'll ditch the moment it gets dangerous for you.\n      "]);return u=function(){return n},n}function c(){var n=Object(r.a)(["\n        You agree that you will do it. You're not sure what you need to do or if you can succeed, but you will try your best to help her.\n      "]);return c=function(){return n},n}function s(){var n=Object(r.a)(["\n    You try to open your eyes but see only darkness. You instinctively blink a few times, but you can't feel your eyelids. But you know there to be a silhouette in front of you--its very existence exuding power into your soul.\n\n    It speaks a command that you cannot hear and your body lurches forward in response, pushing you through a ethereal fabric, tearing a hole for you to enter. Passing through, your body feels heavy and you fall to your knees, gasping for air as your lungs fill with air for what seems like the first time. Your "," entry knocks over a candle on the floor.\n\n    You look up and see what looks to be a medieval-themed room. The walls are stone, the furniture is made out of hewn wood, and the various religious iconography are scattered around the room, although none from a religion that you've ever seen. A young human woman is standing in front of you, wearing what looks like a nightgown, seems to be almost... glowing.\n\n    Dazed, you stammer at her, asking what's happening, and where you are.\n\n    ",'\n    "I have summoned you from your plane and I require your assistance. I am Aphex, the goddess of romance.\n    ',"\n\n    You pinch yourself and feel pain.\n\n    ",'\n    "This world is crumbling. Mana was innate in all creatures, and humanoids were no exception. But a catastrophe years ago wracked the magical balance, causing an imbalance to occur. Now, women have become unable to regenerate mana.\n\n    "In some parts of the world, they were able to overcome this challenge with their technology. In most, it has caused a destruction in status quo, the new culture reflecting the clear power imbalance. And with it, my power wanes, and so too my influence, causing a vicious cycle that soon I will be completely unable to stop.\n\n    "But we have time. If you are able to aid me, we can change course and I can guide civilization back from the brink of collapse.\n    ',"\n\n    She lowers herself to kneel on one knee, pointing her head towards your feet.\n\n    ",'\n    "I beg of you, will you accept my quest and restore order to this world?\n    ',"\n  "]);return s=function(){return n},n}var l,h=t(7),f=t(4),d=t(5),p=(d.scenes,d.rooms);function y(){f.print(h.text(s(),"rough",h.pink,h.normal,h.pink,h.normal,h.pink,h.normal)),f.choose({Yes:function(){f.print(h.text(c())),l="yes",m(),f.go(p.church)},"Yes (lie)":function(){f.print(h.text(u())),l="tentative",m(),f.go(p.church)},No:function(){f.print(h.text(i(),h.pink,h.normal,h.pink,h.normal)),l="no",f.choose([{label:"Yes",action:function(){f.print(h.text(a(),h.pink,h.normal)),f.go(p.church)}},{label:"No",disabled:!0}])}})}function m(){f.print(h.text(o(),h.pink,h.normal,h.pink,h.normal))}function g(n){l=n.willingness}},function(n,e,t){var r={"./church.js":32,"./church_north_wing.js":33,"./church_west_wing.js":34};function o(n){var e=a(n);return t(e)}function a(n){var e=r[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,n.exports=o,o.id=31},function(n,e,t){"use strict";t.r(e),t.d(e,"has_called_aphex",function(){return y}),t.d(e,"onFirstEnter",function(){return m}),t.d(e,"onEnter",function(){return g}),t.d(e,"onExit",function(){return b}),t.d(e,"loadState",function(){return v});var r=t(0);function o(){var n=Object(r.a)(["\n      You already tried to call Aphex but you do it again. There is no reply.\n    "]);return o=function(){return n},n}function a(){var n=Object(r.a)(["\n      You call Aphex but there is no reply.\n    "]);return a=function(){return n},n}function i(){var n=Object(r.a)(["\n    You leave the church.\n  "]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n          You head towards the west wing.\n        "]);return u=function(){return n},n}function c(){var n=Object(r.a)(["\n          You head towards the north wing.\n        "]);return c=function(){return n},n}function s(){var n=Object(r.a)(["\n    The church is empty. The building looks like nobody has been in here for decades. You are in the main area of the church with the pews laying empty.\n  "]);return s=function(){return n},n}function l(){var n=Object(r.a)(["\n    You're in a church.\n  "]);return l=function(){return n},n}var h=t(7),f=t(4),d=t(5),p=(d.scenes,d.rooms),y=!1;function m(){f.print(h.text(l()))}function g(){f.print(h.text(s())),f.choose({1:{label:"Call Aphex",action:function(){y?f.print(h.text(o())):(f.print(h.text(a())),y=!0)}},w:{label:"North Wing",action:function(){f.print(h.text(c())),f.go(p.church_north_wing)}},a:{label:"West Wing",action:function(){f.print(h.text(u())),f.go(p.church_west_wing)}}})}function b(){f.print(h.text(i()))}function v(n){y=n.has_called_aphex}},function(n,e,t){"use strict";t.r(e),t.d(e,"onEnter",function(){return l}),t.d(e,"loadState",function(){return h});var r=t(0);function o(){var n=Object(r.a)(["\n          You go back to the main church area.\n        "]);return o=function(){return n},n}function a(){var n=Object(r.a)(["\n    A nondescript north wing.\n  "]);return a=function(){return n},n}var i=t(7),u=t(4),c=t(5),s=(c.scenes,c.rooms);function l(){u.print(i.text(a())),u.choose({s:{label:"Church Hall",action:function(){u.print(i.text(o())),u.go(s.church)}}})}function h(n){}},function(n,e,t){"use strict";t.r(e),t.d(e,"onEnter",function(){return l}),t.d(e,"loadState",function(){return h});var r=t(0);function o(){var n=Object(r.a)(["\n          You go back to the main church area.\n        "]);return o=function(){return n},n}function a(){var n=Object(r.a)(["\n    A nondescript west wing.\n  "]);return a=function(){return n},n}var i=t(7),u=t(4),c=t(5),s=(c.scenes,c.rooms);function l(){u.print(i.text(a())),u.choose({d:{label:"Church Hall",action:function(){u.print(i.text(o())),u.go(s.church)}}})}function h(n){}},function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(n,e,t){},,function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),a=t(9),i=t.n(a),u=(t(22),t(2)),c=t.n(u),s=t(3),l=t(10),h=t(11),f=t(13),d=t(12),p=t(14);t(6);var y=t(1),m=t(26),g=t(4),b=t(35);t(36);var v=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(f.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(o)))).state={history:[],choices:{}},t}return Object(p.a)(e,n),Object(h.a)(e,[{key:"componentDidMount",value:function(){var n=Object(s.a)(c.a.mark(function n(){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.hook(this);case 2:document.addEventListener("keydown",this.onKeyDown.bind(this)),document.title="Alpha",this.historyRef.scrollTop=0;case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"sanitizeNode",value:function(n){var e=this;return null==n?null:m.isFragment(n)?y.Children.map(n.props.children,function(n){return e.sanitizeNode(n)}):n}},{key:"print",value:function(){var n=Object(s.a)(c.a.mark(function n(e){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.sanitizeNode(e),n.next=3,this.setState(function(n){return n.history.push(e),{history:n.history}});case 3:this.historyRef.scrollTop=this.historyRef.scrollHeight;case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"setChoices",value:function(){var n=Object(s.a)(c.a.mark(function n(e){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.setState(function(n){return{choices:e}});case 2:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"onKeyDown",value:function(){var n=Object(s.a)(c.a.mark(function n(e){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(g.ALLOWED_KEYS.includes(e.key)){n.next=2;break}return n.abrupt("return");case 2:g.execute(e.key);case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"_renderButton",value:function(n){var e=this.state.choices;if(null==e[n])return y.createElement("button",{disabled:!0,style:{opacity:.3}},n);var t=!0===e[n].disabled||"string"===typeof e[n].disabled;return t?y.createElement("button",{disabled:t,style:{opacity:.6}},e[n].label):y.createElement("button",{onClick:function(){return g.execute(n)},style:{opacity:1}},e[n].label)}},{key:"render",value:function(){var n=this;return y.createElement("div",{className:"root"},y.createElement("div",{className:"topbar"},y.createElement("img",{src:b,className:"logo",alt:"logo"}),y.createElement("div",null,"Alpha")),y.createElement("div",{className:"gameWindow",ref:function(e){n.historyRef=e}},y.createElement("div",{className:"gameWindowContent"},this.state.history)),y.createElement("div",{className:"inputButtons"},y.createElement("div",{className:"inputRow"},this._renderButton("1"),this._renderButton("2"),this._renderButton("3"),this._renderButton("4"),this._renderButton("5")),y.createElement("div",{className:"inputRow"},this._renderButton("q"),this._renderButton("w"),this._renderButton("e"),this._renderButton("r"),this._renderButton("t")),y.createElement("div",{className:"inputRow"},this._renderButton("a"),this._renderButton("s"),this._renderButton("d"),this._renderButton("f"),this._renderButton("g"))))}}]),e}(y.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.f3865ec8.chunk.js.map