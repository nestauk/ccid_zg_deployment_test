(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4966],{78775:function(t,e,n){Promise.resolve().then(n.bind(n,78920))},41665:function(t,e,n){"use strict";n.d(e,{Z:function(){return j}});var r=n(23950),o=n(22988),i=n(2265),a=n(44839),u=n(76990),c=n(12272),s=n(48024),l=n(95885),d=n(86850),h=n(60909),p=n(80511),f=n(72296),m=n(70587);function g(t){return(0,m.ZP)("MuiLink",t)}let v=(0,f.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var y=n(95166),Z=n(10317);let b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=t=>b[t]||t;var w=t=>{let{theme:e,ownerState:n}=t,r=x(n.color),o=(0,y.DW)(e,"palette.".concat(r),!1)||n.color,i=(0,y.DW)(e,"palette.".concat(r,"Channel"));return"vars"in e&&i?"rgba(".concat(i," / 0.4)"):(0,Z.Fq)(o,.4)},k=n(57437);let E=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],B=t=>{let{classes:e,component:n,focusVisible:r,underline:o}=t,i={root:["root","underline".concat((0,c.Z)(o)),"button"===n&&"button",r&&"focusVisible"]};return(0,u.Z)(i,g,e)},M=(0,s.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,e["underline".concat((0,c.Z)(n.underline))],"button"===n.component&&e.button]}})(t=>{let{theme:e,ownerState:n}=t;return(0,o.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:w({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(v.focusVisible)]:{outline:"auto"}})});var j=i.forwardRef(function(t,e){let n=(0,l.i)({props:t,name:"MuiLink"}),{className:u,color:c="primary",component:s="a",onBlur:p,onFocus:f,TypographyClasses:m,underline:g="always",variant:v="inherit",sx:y}=n,Z=(0,r.Z)(n,E),{isFocusVisibleRef:x,onBlur:w,onFocus:j,ref:C}=(0,d.Z)(),[R,T]=i.useState(!1),A=(0,h.Z)(e,C),L=(0,o.Z)({},n,{color:c,component:s,focusVisible:R,underline:g,variant:v}),N=B(L);return(0,k.jsx)(M,(0,o.Z)({color:c,className:(0,a.Z)(N.root,u),classes:m,component:s,onBlur:t=>{w(t),!1===x.current&&T(!1),p&&p(t)},onFocus:t=>{j(t),!0===x.current&&T(!0),f&&f(t)},ref:A,ownerState:L,variant:v,sx:[...Object.keys(b).includes(c)?[]:[{color:c}],...Array.isArray(y)?y:[y]]},Z))})},80511:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var r=n(23950),o=n(22988),i=n(2265),a=n(44839),u=n(40261),c=n(76990),s=n(48024),l=n(95885),d=n(12272),h=n(72296),p=n(70587);function f(t){return(0,p.ZP)("MuiTypography",t)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=n(57437);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=t=>{let{align:e,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=t,u={root:["root",i,"inherit"!==t.align&&"align".concat((0,d.Z)(e)),n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,c.Z)(u,f,a)},y=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e["align".concat((0,d.Z)(n.align))],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(t=>{let{theme:e,ownerState:n}=t;return(0,o.Z)({margin:0},"inherit"===n.variant&&{font:"inherit"},"inherit"!==n.variant&&e.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})}),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=t=>b[t]||t;var w=i.forwardRef(function(t,e){let n=(0,l.i)({props:t,name:"MuiTypography"}),i=x(n.color),c=(0,u.Z)((0,o.Z)({},n,{color:i})),{align:s="inherit",className:d,component:h,gutterBottom:p=!1,noWrap:f=!1,paragraph:b=!1,variant:w="body1",variantMapping:k=Z}=c,E=(0,r.Z)(c,g),B=(0,o.Z)({},c,{align:s,color:i,className:d,component:h,gutterBottom:p,noWrap:f,paragraph:b,variant:w,variantMapping:k}),M=h||(b?"p":k[w]||Z[w])||"span",j=v(B);return(0,m.jsx)(y,(0,o.Z)({as:M,ref:e,ownerState:B,className:(0,a.Z)(j.root,d)},E))})},60909:function(t,e,n){"use strict";var r=n(7740);e.Z=r.Z},86850:function(t,e,n){"use strict";var r=n(98929);e.Z=r.Z},72296:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(70587);function o(t,e,n="Mui"){let o={};return e.forEach(e=>{o[e]=(0,r.ZP)(t,e,n)}),o}},49969:function(t,e,n){"use strict";function r(t,e){"function"==typeof t?t(e):t&&(t.current=e)}n.d(e,{Z:function(){return r}})},7740:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(2265),o=n(49969);function i(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.useMemo(()=>e.every(t=>null==t)?null:t=>{e.forEach(e=>{(0,o.Z)(e,t)})},e)}},98929:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(2265),o=n(63811);let i=!0,a=!1,u=new o.V,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(t){t.metaKey||t.altKey||t.ctrlKey||(i=!0)}function l(){i=!1}function d(){"hidden"===this.visibilityState&&a&&(i=!0)}function h(){let t=r.useCallback(t=>{if(null!=t){var e;(e=t.ownerDocument).addEventListener("keydown",s,!0),e.addEventListener("mousedown",l,!0),e.addEventListener("pointerdown",l,!0),e.addEventListener("touchstart",l,!0),e.addEventListener("visibilitychange",d,!0)}},[]),e=r.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(t){return!!function(t){let{target:e}=t;try{return e.matches(":focus-visible")}catch(t){}return i||function(t){let{type:e,tagName:n}=t;return"INPUT"===n&&!!c[e]&&!t.readOnly||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}(e)}(t)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(a=!0,u.start(100,()=>{a=!1}),e.current=!1,!0)},ref:t}}},98553:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(2265);let o={};function i(t,e){let n=r.useRef(o);return n.current===o&&(n.current=t(e)),n}},11105:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(2265);let o=[];function i(t){r.useEffect(t,o)}},63811:function(t,e,n){"use strict";n.d(e,{V:function(){return i},Z:function(){return a}});var r=n(98553),o=n(11105);class i{static create(){return new i}start(t,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},t)}constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}}function a(){let t=(0,r.Z)(i.create).current;return(0,o.Z)(t.disposeEffect),t}},78920:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(57437),o=n(41665),i=n(2265);let a="https://www.nesta.org.uk/project/centre-collective-intelligence-design/";function u(){return(0,i.useEffect)(()=>{a&&window.location.replace(a)},[]),(0,r.jsxs)(r.Fragment,{children:[a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Navigating to the sign up page..."}),(0,r.jsxs)("p",{children:["If this page does not change in the next few seconds, please",(0,r.jsx)(o.Z,{href:a,children:"click here"}),"."]})]}),!a&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("p",{children:"Sign up is not available."})})]})}}},function(t){t.O(0,[3732,7761,2971,7023,1744],function(){return t(t.s=78775)}),_N_E=t.O()}]);