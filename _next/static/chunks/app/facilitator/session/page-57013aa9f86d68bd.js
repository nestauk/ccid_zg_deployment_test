(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5044],{59870:function(e,t,n){Promise.resolve().then(n.bind(n,21318))},21318:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eY}});var i,o,s,r,a=n(57437),l=n(53622),c=n(63858),d=n(94547),u=n(78364),x=n(11144),p=n(4766),h=n(93191),f=n(31193),m=n(2265),g=n(2215);let j={0:{columns:1,rows:1},1:{columns:1,rows:1},2:{columns:1,rows:2},3:{columns:1,rows:3},4:{columns:2,rows:2},5:{columns:2,rows:3},6:{columns:2,rows:3},7:{columns:2,rows:4},8:{columns:2,rows:4},9:{columns:3,rows:3},10:{columns:3,rows:4},11:{columns:3,rows:4},12:{columns:3,rows:4},13:{columns:4,rows:4},14:{columns:4,rows:4},15:{columns:4,rows:4},16:{columns:4,rows:4}};function v(){let{tiles:e}=(0,m.useContext)(g.fp),[t,n]=(0,m.useState)({rows:1,columns:1});return(0,m.useEffect)(()=>{let t=e.length;if(t<=16)n({rows:j[t].rows,columns:j[t].columns});else{let e=Math.ceil(Math.sqrt(t));n({rows:e,columns:Math.ceil(t/e)})}},[e]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(f.Z,{sx:{width:"100%",height:"100%",display:"grid",gap:1,gridTemplateRows:"repeat(".concat(t.rows,", 1fr)"),gridTemplateColumns:"repeat(".concat(t.columns,", 1fr)")},children:e})})}var w=n(43670),b=n(17882),y=n(16003),Z=n(80511);function C(e){return(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",background:"white",borderRadius:2,p:1,...e.sx},children:[(e.title||e.tools)&&(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",mb:1},children:[e.title&&(0,a.jsx)(Z.Z,{variant:"h6",children:e.title}),e.tools]}),(0,a.jsx)(f.Z,{sx:{flexGrow:1,overflowY:"hidden"},children:(0,a.jsx)(f.Z,{sx:{width:"100%",height:"100%",overflowY:e.scrolling?"auto":"hidden"},children:e.children})})]})}var S=n(56019),k=n(74130);let I=e=>"".concat(Math.floor(e/60).toString().padStart(2,"0"),":").concat((e%60).toString().padStart(2,"0"),":00"),E=e=>{let t=Math.floor(e/36e5),n=Math.floor((e-=36e5*t)/6e4),i=Math.floor((e-=6e4*n)/1e3);return e-=1e3*i,"".concat(t.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"))};function R(){let{session:e}=(0,m.useContext)(x.z),[t,n]=(0,m.useState)({}),[i,o]=(0,m.useState)(""),s=(0,m.useRef)();(0,m.useEffect)(()=>{n({startTime:(0,k.P)(e.sessionStartedAt),duration_mins:e.sessionDurationMins})},[e]),(0,m.useEffect)(()=>(t.startTime?(s.current&&clearInterval(s.current),s.current=setInterval(r,1e3),r()):o(t.duration_mins?I(t.duration_mins):"Unknown"),()=>{s.current&&clearInterval(s.current)}),[t]);let r=(0,m.useCallback)(()=>{if(t.startTime){let e=new Date().getTime()-t.startTime.getTime();t.duration_mins&&(e=Math.max(6e4*t.duration_mins-e,0)),o(E(e))}else o(t.duration_mins?I(t.duration_mins):"Unknown")},[t]);return(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)("img",{src:"/icons/clock.svg",style:{height:"1.25rem",width:"auto"}}),(0,a.jsx)(Z.Z,{variant:"body1",children:i})]})}var _=n(60658),D=n(65301);(i=s||(s={}))[i.Ready=0]="Ready",i[i.InitError=1]="InitError",i[i.Recording=2]="Recording",i[i.Saving=3]="Saving",i[i.UploadSuccess=4]="UploadSuccess",i[i.UploadError=5]="UploadError";var F=n(5085),P=n(23447),A=n(15785),U=n(83040),O=n(96537),T=n(18502),N=n(24072),q=n(76396);function V(e){let t=(0,m.useId)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(N.ZP,{variant:"popover",popupId:t,children:t=>{var n,i,o;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(O.Z,{startIcon:!1!==e.startIcon?e.startIcon:void 0,endIcon:null!==(n=e.endIcon)&&void 0!==n?n:(0,a.jsx)(U.Z,{color:"action"}),variant:"text",color:"buttonStandard","aria-label":e.ariaLabel,sx:e.sx,...(0,q.LI)(t),children:e.text}),(0,a.jsx)(T.ZP,{...(0,q.ZW)(t),anchorOrigin:null!==(i=e.anchorOrigin)&&void 0!==i?i:{vertical:"bottom",horizontal:"center"},transformOrigin:null!==(o=e.transformOrigin)&&void 0!==o?o:{vertical:"top",horizontal:"center"},children:(0,a.jsx)(f.Z,{sx:{p:2},children:e.children})})]})}})})}var W=n(63375),M=n(22960),z=n(49),G=n(44908),L=n(74583);let K=(e,t)=>{var n;return"".concat(null!==(n=t.recordingId)&&void 0!==n?n:"slide-"+"".concat((null!=e?e:0)+1).padStart(3,"0"))};function B(){let{api:e,start:t}=(0,m.useContext)(P.E),{session:n}=(0,m.useContext)(x.z),i=(0,m.useContext)(F.rZ),{slideIndex:o,slideData:s}=(0,m.useContext)(p.X),[r,l]=(0,m.useState)(!1),[c,u]=(0,m.useState)(()=>n.audience===d.EQ.LiveWorkshop),[h,g]=(0,m.useState)(!1);(0,m.useEffect)(()=>{l(n.facilitationState===d._y.Open&&n.remoteConfiguration===d.VS.InPerson&&s.activity===A.S.deliberation),g(n.facilitationState===d._y.Open&&n.remoteConfiguration===d.VS.InPerson&&s.activity===A.S.deliberation&&void 0!==s.recordingId)},[s.activity,s.recordingId,n.facilitationState,n.remoteConfiguration]);let[j,v]=(0,m.useState)(K(o,s)),[w,b]=(0,m.useState)(!1),[y,C]=(0,m.useState)(!1),[S,k]=(0,m.useState)(!1),{record:I,stop:E,isRecording:R,recordingTime:T,audioBlob:N,filenamePart:q,filenameSuffix:B,clearRecording:Y}=function(){let[e,t]=(0,m.useState)(0),[n,i]=(0,m.useState)(void 0),[o,s]=(0,m.useState)(),{startRecording:r,stopRecording:a,togglePauseResume:l,recordingBlob:c,isRecording:d,isPaused:u,recordingTime:x,mediaRecorder:p}=(0,D.I)({noiseSuppression:!0,autoGainControl:!0},e=>{t(1)},{mimeType:"audio/webm"}),h=e=>"audio-recording-".concat(e);return(0,m.useEffect)(()=>{t(d?2:0)},[d]),(0,m.useEffect)(()=>{void 0!==c&&i(c)},[c]),{record:e=>{s(h(e)),r()},stop:()=>{a()},state:e,audioBlob:n,recordingTime:x,isRecording:d,filenamePart:o,filenameSuffix:"webm",clearRecording:()=>{i(void 0),s(void 0)}}}();(0,m.useEffect)(()=>{R&&(console.debug("Stopping recording due to slide change."),g(!1),E())},[o]),(0,m.useEffect)(()=>{v(K(o,s))},[o,s]),(0,m.useEffect)(()=>{c&&h&&!R&&(console.debug("Starting automatic recording."),I(j))},[c,R,h,j]),(0,m.useEffect)(()=>{b(R),R&&k(!1)},[R]),(0,m.useEffect)(()=>{R||void 0===N||void 0===q||H()},[N]);let H=()=>{if(void 0===N||void 0===q){console.debug("Audio blob or filename part empty. Skipping upload.");return}if(0===N.size){console.debug("Audio recording is empty. Skipping upload.");return}console.debug("Initiating upload for recording: ".concat(q," (").concat(B,")")),k(!1),C(!0),X(N,q,B).then(()=>{console.debug("Upload complete"),k(!1),Y()}).catch(e=>{console.error("Upload failed",e),k(!0)}).finally(()=>{C(!1)})},X=async(o,s,r)=>{console.debug("Retrieving recording upload info...");let a=await t(e.getMediaUploadUrl(n.id,i.sessionToken,i.user.access_token,"deliberation",s,r));console.debug("Uploading recording...",a),await t((0,_.P)(o,a.uploadUrl,!0,"uploading recording")),console.debug("Upload recording complete.")},J=()=>{if(void 0===N||0===N.size){console.debug("Audio blob empty. Skipping download.");return}let e="recording-".concat(null!=q?q:"unknown",".").concat(B);console.debug("Downloading audio recording..."),function(e,t){let n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t;try{document.body.appendChild(i),i.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}catch(e){console.error("Error downloading blob",e)}finally{document.body.removeChild(i)}}(N,e)},$=(0,M.Z)(),Q=w||y||S;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(V,{startIcon:Q&&(0,a.jsx)(W.Z,{htmlColor:w?$.palette.recordingEnabled.main:y?$.palette.recordingUploading.main:S?$.palette.recordingFailed.main:$.palette.recordingDisabled.main}),endIcon:(0,a.jsx)(U.Z,{color:"action"}),sx:{opacity:r?1:.3},text:"Recording: ".concat(w?"Active":y?"Uploading...":S?"Upload error":"Inactive"),ariaLabel:"Recording information",children:(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[!R&&(0,a.jsx)(O.Z,{variant:r?"contained":"outlined",color:r?"primary":"buttonStandard",onClick:()=>I(j),children:"Start Recording"}),R&&(0,a.jsx)(O.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{E(),g(!1)},children:"Stop Recording"}),s.recordingId&&(0,a.jsxs)(Z.Z,{variant:"body2",children:["Recording id: ",j,(0,a.jsx)("br",{})]}),R&&(0,a.jsxs)(Z.Z,{variant:"body2",sx:{fontSize:"0.5rem"},children:["Recording: ",T]}),(0,a.jsx)(z.Z,{sx:{marginTop:"0.5rem"},children:(0,a.jsx)(G.Z,{control:(0,a.jsx)(L.Z,{checked:c,onChange:()=>{u(e=>!e)},sx:{margin:"0 0.5rem 0 0.75rem"}}),label:"Automatic recording",sx:{userSelect:"none"}})}),S&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)(W.Z,{htmlColor:$.palette.recordingFailed.main}),(0,a.jsx)(Z.Z,{variant:"body1",children:"Recording upload failed"})]}),(0,a.jsx)(Z.Z,{variant:"body2",children:"The recording could not be uploaded."}),N&&q&&B&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(O.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>H(),children:"Retry upload"}),(0,a.jsx)(O.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>J(),children:"Download audio"})]})]})]})})})}var Y=n(70883),H=n(44228),X=n(9646),J=n(10105),$=n(79393);function Q(e){var t;let n=e.message instanceof Error?e.message.message:e.message;return(0,a.jsx)($.Z,{open:e.show,autoHideDuration:null!==(t=e.autoHideDuration)&&void 0!==t?t:3e3,onClose:()=>e.setShow(!1),message:(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[e.icon,n]})})}function ee(e){let[t,n]=(0,m.useState)(!1),i=()=>{var t;null===(t=navigator)||void 0===t||t.clipboard.writeText((0,J.v)(e.session)),n(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(X.Z,{sx:{alignSelf:"flex-end"},variant:"outlined",onClick:()=>{i()},btnText:"Copy participant link",btnKey:"copy-participant-link"}),(0,a.jsx)(Q,{show:t,setShow:n,message:"Copied participant link to clipboard.",icon:(0,a.jsx)(H.Z,{})})]})}var et=n(40395),en=n(60335),ei=n(21395),eo=n(42748),es=n(11656),er=n(47905),ea=n(86917),el=n(58433),ec=n(14874),ed=n(6722);function eu(){let{session:e}=(0,m.useContext)(x.z),{subscriptions:t,thisUser:n}=(0,m.useContext)(Y.l),{api:i,start:o}=(0,m.useContext)(P.E),{user:s,sessionToken:r}=(0,m.useContext)(F.rZ),[l,c]=(0,m.useState)([]),[u,p]=(0,m.useState)(!1),h=(0,ec.Z)(),g=async()=>{try{p(!0);let t={action:"mute",sessionId:e.id,ticks:Date.now(),parameters:{pids:["*"]}};o(i.postFacilitatorAction(s.access_token,r,t,!1))}finally{p(!1)}},j=async(t,n)=>{try{p(!0);let t={action:"mute",sessionId:e.id,ticks:Date.now(),parameters:{pids:[n.deviceId]}};o(i.postFacilitatorAction(s.access_token,r,t,!1))}catch(e){console.warn(e)}finally{p(!1)}},v=async(t,n)=>{try{p(!0);let t={action:"kick",sessionId:e.id,ticks:Date.now(),parameters:{pid:n.deviceId}};o(i.postFacilitatorAction(s.access_token,r,t,!1))}catch(e){console.warn(e)}finally{p(!1)}},w=t=>{var n,i;let{subscription:o}=t,s=I(o),r=null!==(i=null===(n=e.deviceIdBanList)||void 0===n?void 0:n.includes(o.deviceId))&&void 0!==i&&i;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(f.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"row",gap:1,alignItems:"center",opacity:r?.5:1},children:[(0,a.jsx)(k,{connected:!r&&o.enabled}),(0,a.jsxs)(Z.Z,{variant:"h6",component:"span",sx:{flexGrow:1},children:[s,r?" (banned)":void 0]})]})})},b=t=>{var n,i,o;let{subscription:s}=t,{roster:r}=(0,ed.dJs)(),l=r?null===(n=Object.entries(r).find(e=>{let[t,n]=e;return n.externalUserId===s.deviceId}))||void 0===n?void 0:n[1]:void 0,c=I(s),d=null!==(o=null===(i=e.deviceIdBanList)||void 0===i?void 0:i.includes(s.deviceId))&&void 0!==o&&o;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(f.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"row",gap:1,alignItems:"center",opacity:d?.5:1},children:[(0,a.jsx)(k,{connected:!d&&s.enabled}),(0,a.jsxs)(Z.Z,{variant:"h6",component:"span",sx:{flexGrow:1},children:[c,d?" (banned)":void 0]}),l&&!d&&(0,a.jsx)(y,{attendee:l,subscription:s})]})})},y=e=>{let{attendee:t,subscription:i}=e;return(0,a.jsx)(a.Fragment,{children:i.subscriptionId!==(null==n?void 0:n.subscriptionId)&&(0,a.jsx)(C,{attendee:t,subscription:i})})},C=e=>{let{attendee:t,subscription:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(N.ZP,{variant:"popover",popupId:"attendee-controls-menu-items-".concat(n.subscriptionId),children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(en.Z,{"aria-label":"settings",...(0,q.vW)(e),children:(0,a.jsx)("img",{src:"/icons/triple-dots-vertical.svg"})}),(0,a.jsx)(ei.Z,{...(0,q.wK)(e),children:(0,a.jsx)(S,{attendee:t,subscription:n,requestClose:e.close})})]})})})},S=e=>{let{attendee:t,subscription:n,requestClose:i}=e,[o,s]=(0,m.useState)(!1),r=(0,ed.ZzJ)(t.chimeAttendeeId).muted;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(eo.Z,{children:[(0,a.jsx)(es.Z,{children:(0,a.jsx)(er.Z,{children:(0,a.jsx)("b",{children:n.participantName})})},"attendee-control-menu-header-".concat(n.subscriptionId)),(0,a.jsxs)(es.Z,{disabled:u||r,onClick:r?void 0:()=>{i(),j(t,n)},children:[(0,a.jsx)(ea.Z,{children:r?(0,a.jsx)("img",{src:"/icons/controls/participant-muted.svg"}):(0,a.jsx)("img",{src:"/icons/controls/mute-participant.svg"})}),(0,a.jsx)(er.Z,{inset:!1,children:r?"Participant muted":"Mute participant"})]},"attendee-control-menu-item-".concat(n.subscriptionId,"-mute")),(0,a.jsxs)(es.Z,{disabled:u,onClick:()=>{s(!0)},children:[(0,a.jsx)(ea.Z,{children:(0,a.jsx)("img",{src:"/icons/controls/remove-participant.svg"})}),(0,a.jsx)(er.Z,{inset:!1,children:"Remove participant"})]},"attendee-control-menu-item-".concat(n.subscriptionId,"-kick"))]}),(0,a.jsx)(et.Z,{prompt:"Remove the participant from the call?",options:[{key:"kick",text:"Remove participant",filled:!0},{key:"cancel",text:"Cancel",filled:!1}],onSelect:e=>{"kick"===e&&v(t,n)},open:o,setOpen:s,onClose:i})]})},k=e=>{let{connected:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(f.Z,{sx:{p:1,borderRadius:4,height:42,background:t?h.palette.connected.main:h.palette.disconnected.main},children:(0,a.jsx)("img",{style:{height:26,margin:0,padding:0},src:t?"/icons/device-connected.svg":"/icons/device-disconnected.svg"})})})},I=e=>{let t=e.subscriptionId===(null==n?void 0:n.subscriptionId)?"(You) ":"",i=e.participantName&&e.participantName.length>0?e.participantName:"Unknown";return"".concat(t).concat(i)};return(0,m.useEffect)(()=>{c([...t].sort((e,t)=>e.role===t.role?0:e.role===d._b.Controller?-1:t.role===d._b.Controller?1:e.participantName.localeCompare(t.participantName)))},[t]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",gap:4},children:[(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"row",gap:1,justifyContent:"flex-end"},children:[e.remoteConfiguration===d.VS.RemoteWithVideoCall&&(0,a.jsx)(X.Z,{variant:"outlined",startIcon:(0,a.jsx)("img",{src:"/icons/controls/participant-muted.svg"}),btnKey:"mute-all",btnText:"Mute all",sx:{alignSelf:"flex-end"},busy:u,onClick:e=>{g()}}),(0,a.jsx)(ee,{session:e})]}),(0,a.jsx)(el.ZP,{container:!0,spacing:2,children:l.map(t=>(0,a.jsxs)(el.ZP,{item:!0,xs:6,children:[e.remoteConfiguration===d.VS.RemoteWithVideoCall&&(0,a.jsx)(b,{subscription:t}),e.remoteConfiguration!==d.VS.RemoteWithVideoCall&&(0,a.jsx)(w,{subscription:t})]},"participant-subscription-indicator-".concat(t.subscriptionId)))})]})})}function ex(){let{subscriptions:e,thisUser:t}=(0,m.useContext)(Y.l);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(V,{startIcon:(0,a.jsx)("img",{src:"/icons/session-participants.svg",style:{height:"1.45rem",width:"auto"}}),text:"".concat(e.filter(e=>e.deviceId!==(null==t?void 0:t.deviceId)).length," participants"),children:(0,a.jsx)(f.Z,{sx:{width:"55vw"},children:(0,a.jsx)(eu,{})})})})}var ep=n(8260),eh=n(35231),ef=n(50467),em=n(2842),eg=n(9542),ej=n(13971);function ev(e){let{colours:t,data:n}=e,i=e=>{let t={true:{l:!0,r:!1},false:{l:!1,r:!0}};return 0===e.true&&(t.false.l=!0),0===e.false&&(t.true.r=!0),t},[o,s]=(0,m.useState)(i(n));(0,m.useEffect)(()=>{s(i(n))},[n]);let r=e=>[e.l?16:0,e.r?16:0,e.r?16:0,e.l?16:0];return(0,a.jsx)(eh.h,{width:"100%",height:40,children:(0,a.jsxs)(ef.v,{layout:"vertical",margin:{left:0,right:0},height:40,data:[{name:"completion",complete:n.true,incomplete:n.false}],children:[(0,a.jsx)(em.K,{hide:!0,type:"number",max:n.true+n.false}),(0,a.jsx)(eg.B,{hide:!0,dataKey:"name",type:"category"}),(0,a.jsx)(ej.$,{dataKey:"complete",stackId:"completion",fill:t[0],radius:r(o.true)}),(0,a.jsx)(ej.$,{dataKey:"incomplete",stackId:"completion",fill:t[1],radius:r(o.false)})]})})}var ew=n(37570),eb=n(37552),ey=n(79617),eZ=n(51847),eC=n(33578);(o=r||(r={}))[o.NotAnswered=0]="NotAnswered",o[o.Answered=1]="Answered";let eS=(e,t,n)=>{var i,o;let s=null!==(o=ek(null!==(i=n?null==e?void 0:e.filter(e=>e.questionId===n):e)&&void 0!==i?i:[]))&&void 0!==o?o:[],r=s.length,a=t.filter(e=>e.enabled&&e.role===d._b.Client),l=a.filter(e=>!s.find(t=>t.participantId===e.deviceId)),c=s.length+l.length;return{allAnswers:s,relevantParticipants:a,answeredCount:r,participantsWithoutAnswers:l,maxAnswers:c,complete:r===c}},ek=e=>null==e?void 0:e.sort((e,t)=>new Date(e.created).getTime()-new Date(t.created).getTime()),eI=(e,t)=>{var n;return[...e.allAnswers.map((e,n)=>({description:eE(e,t),answered:1})),...null!==(n=e.participantsWithoutAnswers.map(e=>({description:eR(e),answered:0})))&&void 0!==n?n:[]]},eE=(e,t)=>eR(t.find(t=>t.deviceId===e.participantId)),eR=e=>{var t,n;return null!==(n=null!==(t=null==e?void 0:e.participantName)&&void 0!==t?t:null==e?void 0:e.deviceName)&&void 0!==n?n:"Unknown"};function e_(e){let{sid:t}=(0,m.useContext)(ew.H),{answers:n}=(0,ep.ZP)(e.qid),i=(0,m.useContext)(Y.l),[o,s]=(0,m.useState)(i.subscriptions),[r,l]=(0,m.useState)(eS(n,o,e.qid)),[c,d]=(0,m.useState)([]);(0,m.useEffect)(()=>{s(i.subscriptions)},[i]),(0,m.useEffect)(()=>{l(eS(n,o))},[n,o]),(0,m.useEffect)(()=>{d(eI(r,o))},[r,o]);let u=e=>(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:2,background:"white",border:"1px solid #EFEFEF",p:2},children:[(0,a.jsx)(Z.Z,{variant:"body1",sx:{borderRight:"1px solid black",overflowX:"scroll",textWrap:"nowrap",flexGrow:1,mr:.5,pr:.5},children:e.description}),1===e.answered&&(0,a.jsx)("img",{src:"/icons/checkbox-filled.svg"}),1!==e.answered&&(0,a.jsx)("img",{src:"/icons/checkbox.svg"})]}),x=(0,ec.Z)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",gap:1,alignItems:"stretch"},children:[e.qid&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)("img",{src:"/icons/busts.svg",style:{height:"1.5rem",width:"auto"}}),(0,a.jsxs)(Z.Z,{variant:"body1",children:[e.label&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("b",{children:[e.label,":"]})," "]}),"".concat(r.answeredCount," of ").concat(r.maxAnswers," ")," ",1!==r.answeredCount?"have":"has"," voted"]})]}),(0,a.jsxs)(ey.Z,{elevation:0,disableGutters:!0,sx:{"&:before":{display:"none"}},children:[(0,a.jsxs)(eZ.Z,{expandIcon:(0,a.jsx)(eb.Z,{}),sx:{p:0},children:[r.answeredCount+r.participantsWithoutAnswers.length>0&&(0,a.jsx)(ev,{colours:[x.palette.primary.main,"#ededff"],data:{true:r.answeredCount,false:r.participantsWithoutAnswers.length}}),r.answeredCount+r.participantsWithoutAnswers.length===0&&(0,a.jsx)(ev,{colours:[x.palette.primary.main,"#ededff"],data:{true:0,false:100}})]}),(0,a.jsx)(eC.Z,{sx:{p:0},children:(0,a.jsx)(el.ZP,{container:!0,spacing:1,sx:{mb:2},children:c.map((t,n)=>(0,a.jsx)(el.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,a.jsx)(u,{description:t.description,answered:t.answered})},"answer-indicator-grid-item-".concat(e.qid,"-").concat(n)))})})]})]}),!e.qid&&(0,a.jsx)(Z.Z,{variant:"body1",children:"Not a polling slide"})]})})}function eD(){let{slideData:e}=(0,m.useContext)(p.X),{subscriptions:t}=(0,m.useContext)(Y.l),{allAnswers:n}=(0,ep.ZP)(),[i,o]=(0,m.useState)(!1),[s,r]=(0,m.useState)({}),[l,c]=(0,m.useState)(!1),[d,u]=(0,m.useState)();(0,m.useEffect)(()=>{o(e.qids.length>0)},[e]),(0,m.useEffect)(()=>{r(Object.fromEntries(e.qids.map(e=>[e,eS(n[e],t,e)])))},[n,e,t]),(0,m.useEffect)(()=>{c(Object.values(s).every(e=>e.complete))},[s]);let x=(0,M.Z)();return(0,m.useEffect)(()=>{let e=l?x.palette.pollingComplete.main:x.palette.pollingInProgress.main;u(i?{icon:(0,a.jsx)(W.Z,{htmlColor:e}),text:l?"Polling complete":"Polling in progress"}:void 0)},[l,i]),(0,a.jsx)(a.Fragment,{children:i&&d&&(0,a.jsx)(V,{startIcon:d.icon,text:d.text,sx:{backgroundColor:x.palette.pollingInProgressBackground.main},children:(0,a.jsx)(f.Z,{sx:{width:"55vw",display:"flex",flexDirection:"column",gap:1},children:e.qids.map((t,n)=>{let i=e.qids.length>1?0===n?"First question":n===e.qids.length-1?"Last question":void 0:void 0;return(0,a.jsx)(e_,{qid:t,label:i},"facilitator-polling-monitor-".concat(t,"-").concat(n))})})})})}function eF(){let{sessionToken:e,user:t}=(0,m.useContext)(F.rZ),{session:n}=(0,m.useContext)(x.z),{api:i,start:o}=(0,m.useContext)(P.E),[s,r]=(0,m.useState)(!1),[l,c]=(0,m.useState)(!1),[u,p]=(0,m.useState)({key:"",text:"Please wait...",variant:"outlined"});(0,m.useEffect)(()=>{switch(n.facilitationState){case d._y.Ready:p({key:"open-session",text:"Open workshop",variant:"contained"});break;case d._y.Open:p({key:"close-session",text:"Close workshop",variant:"outlined"});break;case d._y.Closed:p({key:"open-waiting",text:"Open waiting room",variant:"contained"})}},[n]);let h=async s=>{try{r(!0);var a={action:s===d._y.Open?"open":s===d._y.Ready?"reset":"close",sessionId:n.id,ticks:Date.now()};await o(i.postFacilitatorAction(t.access_token,e,a))}catch(e){console.error(e)}finally{r(!1)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(X.Z,{busy:s,variant:u.variant,btnKey:u.key,btnText:u.text,onClick:e=>{switch(e){case"open-waiting":h(d._y.Ready);break;case"open-session":h(d._y.Open);break;case"close-session":c(!0);break;default:console.warn("Unexpected facilitation switch from menu.")}}}),(0,a.jsx)(et.Z,{open:l,setOpen:c,prompt:"Are you sure you want to close the workshop?",onSelect:e=>{"close"===e&&h(d._y.Closed)},options:[{key:"close",text:"Close",filled:!0},{key:"cancel",text:"Cancel",filled:!1}]})]})}function eP(){let{session:e}=(0,m.useContext)(x.z);return(0,a.jsxs)(f.Z,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:"white",p:1,borderRadius:2},children:[(0,a.jsx)(t=>{let{showBadge:n}=t;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(f.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:[(0,a.jsx)("img",{src:"/icons/home.svg",style:{height:"2rem",width:"auto",verticalAlign:"middle",marginRight:12,paddingBottom:4}}),n&&(0,a.jsx)(S.Z,{color:"primary",badgeContent:d._y[e.facilitationState],anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,a.jsx)(Z.Z,{variant:"h5",component:"h1",children:e.sessionName})}),!n&&(0,a.jsx)(Z.Z,{variant:"h5",component:"h1",children:e.sessionName})]})})},{showBadge:!1}),(0,a.jsxs)(f.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",gap:4},children:[(0,a.jsx)(eD,{}),e.remoteConfiguration===d.VS.InPerson?(0,a.jsx)(B,{}):null,(0,a.jsx)(ex,{}),(0,a.jsx)(R,{}),(0,a.jsx)(eF,{})]})]})}function eA(e){let{notes:t}=e;return(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})}var eU=n(7630),eO=n(69065),eT=n(80824),eN=n(66124);function eq(e){let{session:t}=(0,m.useContext)(x.z),[n,i]=(0,m.useState)(!1),[o,s]=(0,m.useState)(!1),[r,l]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{s(t.facilitationState===d._y.Open)},[t.facilitationState]),(0,m.useEffect)(()=>{l(t.remoteConfiguration===d.VS.InPerson)},[t.remoteConfiguration]),(0,m.useEffect)(()=>{i(o&&r)},[o,r]),(0,a.jsxs)(eO.Z,{fullWidth:!0,maxWidth:"sm",open:n,onClose:()=>i(!1),children:[(0,a.jsxs)(eT.Z,{children:["The workshop is now open",(0,a.jsx)(f.Z,{style:{position:"absolute",top:0,right:0},children:(0,a.jsx)(en.Z,{"aria-label":"close",onClick:()=>i(!1),children:(0,a.jsx)(eU.Z,{})})})]}),(0,a.jsx)(eN.Z,{children:(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)("ul",{children:[o&&(0,a.jsx)("li",{children:"Participants will now be able to enter the session."}),r&&(0,a.jsxs)("li",{children:["Relevant sections will be ",(0,a.jsx)("b",{children:"automatically recorded"}),", unless you disable this feature."]})]}),(0,a.jsx)(O.Z,{variant:"contained",sx:{alignSelf:"center",textTransform:"uppercase"},onClick:()=>i(!1),children:"Continue"})]})})]})}let eV=e=>e.remoteConfiguration===d.VS.RemoteWithVideoCall?"left":"right",eW=e=>e.remoteConfiguration===d.VS.RemoteWithVideoCall,eM=e=>e.remoteConfiguration!==d.VS.RemoteWithVideoCall;function ez(){let{presentation:e,previews:t}=(0,m.useContext)(h.N),{slideData:n}=(0,m.useContext)(p.X),{session:i}=(0,m.useContext)(x.z),o=(0,m.useContext)(y.ui),[s,r]=(0,m.useState)(eM(i)),[l,c]=(0,m.useState)(eW(i)),[u,j]=(0,m.useState)(eV(i));return(0,m.useEffect)(()=>{r(eM(i)),c(eW(i)),j(eV(i))},[i]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(f.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:1,p:1,overflow:"hidden"},children:[(0,a.jsx)(f.Z,{children:(0,a.jsx)(eP,{})}),(0,a.jsxs)(f.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row",gap:1,overflowY:"hidden"},children:[(0,a.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",width:"50vw",gap:1,flexShrink:0},children:[(0,a.jsx)(C,{sx:{flexGrow:1,overflow:"hidden",minHeight:"50vh"},children:e}),s&&(0,a.jsx)(C,{children:t}),"left"===u&&(0,a.jsx)(f.Z,{sx:{flexGrow:1,display:"block",overflowY:"hidden"},children:(0,a.jsx)(C,{scrolling:!0,sx:{height:"100%"},children:(0,a.jsx)(eA,{notes:n.notes})})})]}),(0,a.jsxs)(f.Z,{sx:{flexGrow:1,width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:1},children:[l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.Z,{sx:{flexGrow:1},children:(0,a.jsx)(w.Z,{initialCallPreferences:o.call,sx:{width:"100%",height:"100%"},children:(0,a.jsx)(g.ZP,{role:d._b.Controller,children:(0,a.jsx)(v,{})})})}),(0,a.jsx)(b.Z,{orientation:"row"})]}),"right"===u&&(0,a.jsx)(f.Z,{sx:{flexGrow:1,display:"block",overflowY:"hidden"},children:(0,a.jsx)(C,{scrolling:!0,sx:{height:"100%"},children:(0,a.jsx)(eA,{notes:n.notes})})})]})]})]}),(0,a.jsx)(eq,{})]})}var eG=n(96608),eL=n(81764);function eK(e){return(0,a.jsx)(a.Fragment,{children:c.UA?(0,a.jsx)(eG.Z,{}):(0,a.jsxs)(eL.Z,{sid:e.sid,joinCode:e.joinCode,refresh:e.refresh,role:d._b.Controller,children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)(ez,{})]})})}var eB=n(16463);function eY(){let e=(0,eB.useSearchParams)(),t=e.get("sid"),n=e.get("code"),i="true"===e.get("refresh");return null===t||null===n?(0,a.jsx)("p",{children:"Missing session id or join code"}):(0,a.jsx)(l.Z,{searchParams:e,children:(0,a.jsx)(eK,{sid:t,joinCode:n,refresh:i})})}},74130:function(e,t,n){"use strict";function i(e){if(e)return new Date(e)}n.d(t,{P:function(){return i}})},10105:function(e,t,n){"use strict";n.d(t,{k:function(){return o},v:function(){return i}});let i=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/participant/session?sid=").concat(e.id,"&code=").concat(e.joinCode),o=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/facilitator/session?sid=").concat(e.id,"&code=").concat(e.joinCode)}},function(e){e.O(0,[2908,6444,6221,1866,3732,7761,4403,7357,8965,4807,6990,6077,5221,984,9393,2568,3447,1957,4914,2971,7023,1744],function(){return e(e.s=59870)}),_N_E=e.O()}]);