(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{59870:function(e,t,n){Promise.resolve().then(n.bind(n,14450))},14450:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return e5}});var i,o,r,s,a=n(57437),l=n(53622),c=n(63858),d=n(94547),u=n(56832),x=n(78364),p=n(11144),h=n(4766),f=n(93191),g=n(4087),m=n(55712),j=n(89504),v=n(6519),w=n(61190),b=n(44100),y=n(31193),Z=n(80511);function C(e){return(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",background:"white",borderRadius:2,p:1,...e.sx},children:[(e.title||e.tools)&&(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",mb:1},children:[e.title&&(0,a.jsx)(Z.Z,{variant:"h6",children:e.title}),e.tools]}),(0,a.jsx)(y.Z,{sx:{flexGrow:1,overflowY:"hidden"},children:(0,a.jsx)(y.Z,{sx:{width:"100%",height:"100%",overflowY:e.scrolling?"auto":"hidden"},children:e.children})})]})}var S=n(2265),I=n(56019),k=n(74130);let E=e=>"".concat(Math.floor(e/60).toString().padStart(2,"0"),":").concat((e%60).toString().padStart(2,"0"),":00"),R=e=>{let t=Math.floor(e/36e5),n=Math.floor((e-=36e5*t)/6e4),i=Math.floor((e-=6e4*n)/1e3);return e-=1e3*i,"".concat(t.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"))};function _(){let{session:e}=(0,S.useContext)(p.z),[t,n]=(0,S.useState)({}),[i,o]=(0,S.useState)(""),r=(0,S.useRef)();(0,S.useEffect)(()=>{n({startTime:(0,k.P)(e.sessionStartedAt),duration_mins:e.sessionDurationMins})},[e]),(0,S.useEffect)(()=>(t.startTime?(r.current&&clearInterval(r.current),r.current=setInterval(s,1e3),s()):o(t.duration_mins?E(t.duration_mins):"Unknown"),()=>{r.current&&clearInterval(r.current)}),[t]);let s=(0,S.useCallback)(()=>{if(t.startTime){let e=new Date().getTime()-t.startTime.getTime();t.duration_mins&&(e=Math.max(6e4*t.duration_mins-e,0)),o(R(e))}else o(t.duration_mins?E(t.duration_mins):"Unknown")},[t]);return(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)("img",{src:"/icons/clock.svg",style:{height:"1.25rem",width:"auto"}}),(0,a.jsx)(Z.Z,{variant:"body1",children:i})]})}var D=n(60658),P=n(65301);(i=r||(r={}))[i.Ready=0]="Ready",i[i.InitError=1]="InitError",i[i.Recording=2]="Recording",i[i.Saving=3]="Saving",i[i.UploadSuccess=4]="UploadSuccess",i[i.UploadError=5]="UploadError";var F=n(5085),A=n(23447),O=n(15785),T=n(83040),U=n(96537),N=n(18502),z=n(24072),V=n(76396);function W(e){let t=(0,S.useId)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(z.ZP,{variant:"popover",popupId:t,children:t=>{var n,i,o;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(U.Z,{startIcon:!1!==e.startIcon?e.startIcon:void 0,endIcon:null!==(n=e.endIcon)&&void 0!==n?n:(0,a.jsx)(T.Z,{color:"action"}),variant:"text",color:"buttonStandard","aria-label":e.ariaLabel,sx:e.sx,...(0,V.LI)(t),children:e.text}),(0,a.jsx)(N.ZP,{...(0,V.ZW)(t),anchorOrigin:null!==(i=e.anchorOrigin)&&void 0!==i?i:{vertical:"bottom",horizontal:"center"},transformOrigin:null!==(o=e.transformOrigin)&&void 0!==o?o:{vertical:"top",horizontal:"center"},children:(0,a.jsx)(y.Z,{sx:{p:2},children:e.children})})]})}})})}var G=n(63375),M=n(22960),q=n(49),K=n(44908),L=n(74583);let $=(e,t)=>{var n;return"".concat(null!==(n=t.recordingId)&&void 0!==n?n:"slide-"+"".concat((null!=e?e:0)+1).padStart(3,"0"))};function B(){let{api:e,start:t}=(0,S.useContext)(A.E),{session:n}=(0,S.useContext)(p.z),i=(0,S.useContext)(F.rZ),{slideIndex:o,slideData:r}=(0,S.useContext)(h.X),[s,l]=(0,S.useState)(!1),[c,u]=(0,S.useState)(()=>n.audience===d.EQ.LiveWorkshop),[x,f]=(0,S.useState)(!1);(0,S.useEffect)(()=>{l(n.facilitationState===d._y.Open&&n.remoteConfiguration===d.VS.InPerson&&r.activity===O.S.deliberation),f(n.facilitationState===d._y.Open&&n.remoteConfiguration===d.VS.InPerson&&r.activity===O.S.deliberation&&void 0!==r.recordingId)},[r.activity,r.recordingId,n.facilitationState,n.remoteConfiguration]);let[g,m]=(0,S.useState)($(o,r)),[j,v]=(0,S.useState)(!1),[w,b]=(0,S.useState)(!1),[C,I]=(0,S.useState)(!1),{record:k,stop:E,isRecording:R,recordingTime:_,audioBlob:N,filenamePart:z,filenameSuffix:V,clearRecording:B}=function(){let[e,t]=(0,S.useState)(0),[n,i]=(0,S.useState)(void 0),[o,r]=(0,S.useState)(),{startRecording:s,stopRecording:a,togglePauseResume:l,recordingBlob:c,isRecording:d,isPaused:u,recordingTime:x,mediaRecorder:p}=(0,P.I)({noiseSuppression:!0,autoGainControl:!0},e=>{t(1)},{mimeType:"audio/webm"}),h=e=>"audio-recording-".concat(e);return(0,S.useEffect)(()=>{t(d?2:0)},[d]),(0,S.useEffect)(()=>{void 0!==c&&i(c)},[c]),{record:e=>{r(h(e)),s()},stop:()=>{a()},state:e,audioBlob:n,recordingTime:x,isRecording:d,filenamePart:o,filenameSuffix:"webm",clearRecording:()=>{i(void 0),r(void 0)}}}();(0,S.useEffect)(()=>{R&&(console.debug("Stopping recording due to slide change."),f(!1),E())},[o]),(0,S.useEffect)(()=>{m($(o,r))},[o,r]),(0,S.useEffect)(()=>{c&&x&&!R&&(console.debug("Starting automatic recording."),k(g))},[c,R,x,g]),(0,S.useEffect)(()=>{v(R),R&&I(!1)},[R]),(0,S.useEffect)(()=>{R||void 0===N||void 0===z||Y()},[N]);let Y=()=>{if(void 0===N||void 0===z){console.debug("Audio blob or filename part empty. Skipping upload.");return}if(0===N.size){console.debug("Audio recording is empty. Skipping upload.");return}console.debug("Initiating upload for recording: ".concat(z," (").concat(V,")")),I(!1),b(!0),H(N,z,V).then(()=>{console.debug("Upload complete"),I(!1),B()}).catch(e=>{console.error("Upload failed",e),I(!0)}).finally(()=>{b(!1)})},H=async(o,r,s)=>{console.debug("Retrieving recording upload info...");let a=await t(e.getMediaUploadUrl(n.id,i.sessionToken,i.user.access_token,"deliberation",r,s));console.debug("Uploading recording...",a),await t((0,D.P)(o,a.uploadUrl,!0,"uploading recording")),console.debug("Upload recording complete.")},Q=()=>{if(void 0===N||0===N.size){console.debug("Audio blob empty. Skipping download.");return}let e="recording-".concat(null!=z?z:"unknown",".").concat(V);console.debug("Downloading audio recording..."),function(e,t){let n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t;try{document.body.appendChild(i),i.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}catch(e){console.error("Error downloading blob",e)}finally{document.body.removeChild(i)}}(N,e)},X=(0,M.Z)(),J=j||w||C;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(W,{startIcon:J&&(0,a.jsx)(G.Z,{htmlColor:j?X.palette.recordingEnabled.main:w?X.palette.recordingUploading.main:C?X.palette.recordingFailed.main:X.palette.recordingDisabled.main}),endIcon:(0,a.jsx)(T.Z,{color:"action"}),sx:{opacity:s?1:.3},text:"Recording: ".concat(j?"Active":w?"Uploading...":C?"Upload error":"Inactive"),ariaLabel:"Recording information",children:(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[!R&&(0,a.jsx)(U.Z,{variant:s?"contained":"outlined",color:s?"primary":"buttonStandard",onClick:()=>k(g),children:"Start Recording"}),R&&(0,a.jsx)(U.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{E(),f(!1)},children:"Stop Recording"}),r.recordingId&&(0,a.jsxs)(Z.Z,{variant:"body2",children:["Recording id: ",g,(0,a.jsx)("br",{})]}),R&&(0,a.jsxs)(Z.Z,{variant:"body2",sx:{fontSize:"0.5rem"},children:["Recording: ",_]}),(0,a.jsx)(q.Z,{sx:{marginTop:"0.5rem"},children:(0,a.jsx)(K.Z,{control:(0,a.jsx)(L.Z,{checked:c,onChange:()=>{u(e=>!e)},sx:{margin:"0 0.5rem 0 0.75rem"}}),label:"Automatic recording",sx:{userSelect:"none"}})}),C&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)(G.Z,{htmlColor:X.palette.recordingFailed.main}),(0,a.jsx)(Z.Z,{variant:"body1",children:"Recording upload failed"})]}),(0,a.jsx)(Z.Z,{variant:"body2",children:"The recording could not be uploaded."}),N&&z&&V&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(U.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>Y(),children:"Retry upload"}),(0,a.jsx)(U.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>Q(),children:"Download audio"})]})]})]})})})}var Y=n(70883),H=n(44228),Q=n(9646),X=n(10105),J=n(79393);function ee(e){var t;let n=e.message instanceof Error?e.message.message:e.message;return(0,a.jsx)(J.Z,{open:e.show,autoHideDuration:null!==(t=e.autoHideDuration)&&void 0!==t?t:3e3,onClose:()=>e.setShow(!1),message:(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[e.icon,n]})})}function et(e){let[t,n]=(0,S.useState)(!1),i=()=>{var t;null===(t=navigator)||void 0===t||t.clipboard.writeText((0,X.v)(e.session)),n(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Q.Z,{sx:{alignSelf:"flex-end"},variant:"outlined",onClick:()=>{i()},btnText:"Copy participant link",btnKey:"copy-participant-link"}),(0,a.jsx)(ee,{show:t,setShow:n,message:"Copied participant link to clipboard.",icon:(0,a.jsx)(H.Z,{})})]})}var en=n(40395),ei=n(60335),eo=n(21395),er=n(42748),es=n(11656),ea=n(47905),el=n(86917),ec=n(58433),ed=n(14874),eu=n(6722);function ex(){let{session:e}=(0,S.useContext)(p.z),{subscriptions:t,thisUser:n}=(0,S.useContext)(Y.l),{api:i,start:o}=(0,S.useContext)(A.E),{user:r,sessionToken:s}=(0,S.useContext)(F.rZ),[l,c]=(0,S.useState)([]),[u,x]=(0,S.useState)(!1),h=(0,ed.Z)(),f=async()=>{try{x(!0);let t={action:"mute",sessionId:e.id,ticks:Date.now(),parameters:{pids:["*"]}};o(i.postFacilitatorAction(r.access_token,s,t,!1))}finally{x(!1)}},g=async(t,n)=>{try{x(!0);let t={action:"mute",sessionId:e.id,ticks:Date.now(),parameters:{pids:[n.deviceId]}};o(i.postFacilitatorAction(r.access_token,s,t,!1))}catch(e){console.warn(e)}finally{x(!1)}},m=async(t,n)=>{try{x(!0);let t={action:"kick",sessionId:e.id,ticks:Date.now(),parameters:{pid:n.deviceId}};o(i.postFacilitatorAction(r.access_token,s,t,!1))}catch(e){console.warn(e)}finally{x(!1)}},j=t=>{var n,i;let{subscription:o}=t,r=k(o),s=null!==(i=null===(n=e.deviceIdBanList)||void 0===n?void 0:n.includes(o.deviceId))&&void 0!==i&&i;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(y.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"row",gap:1,alignItems:"center",opacity:s?.5:1},children:[(0,a.jsx)(I,{connected:!s&&o.enabled}),(0,a.jsxs)(Z.Z,{variant:"h6",component:"span",sx:{flexGrow:1},children:[r,s?" (banned)":void 0]})]})})},v=t=>{var n,i,o;let{subscription:r}=t,{roster:s}=(0,eu.dJs)(),l=s?null===(n=Object.entries(s).find(e=>{let[t,n]=e;return n.externalUserId===r.deviceId}))||void 0===n?void 0:n[1]:void 0,c=k(r),d=null!==(o=null===(i=e.deviceIdBanList)||void 0===i?void 0:i.includes(r.deviceId))&&void 0!==o&&o;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(y.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"row",gap:1,alignItems:"center",opacity:d?.5:1},children:[(0,a.jsx)(I,{connected:!d&&r.enabled}),(0,a.jsxs)(Z.Z,{variant:"h6",component:"span",sx:{flexGrow:1},children:[c,d?" (banned)":void 0]}),l&&!d&&(0,a.jsx)(w,{attendee:l,subscription:r})]})})},w=e=>{let{attendee:t,subscription:i}=e;return(0,a.jsx)(a.Fragment,{children:i.subscriptionId!==(null==n?void 0:n.subscriptionId)&&(0,a.jsx)(b,{attendee:t,subscription:i})})},b=e=>{let{attendee:t,subscription:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(z.ZP,{variant:"popover",popupId:"attendee-controls-menu-items-".concat(n.subscriptionId),children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ei.Z,{"aria-label":"settings",...(0,V.vW)(e),children:(0,a.jsx)("img",{src:"/icons/triple-dots-vertical.svg"})}),(0,a.jsx)(eo.Z,{...(0,V.wK)(e),children:(0,a.jsx)(C,{attendee:t,subscription:n,requestClose:e.close})})]})})})},C=e=>{let{attendee:t,subscription:n,requestClose:i}=e,[o,r]=(0,S.useState)(!1),s=(0,eu.ZzJ)(t.chimeAttendeeId).muted;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(er.Z,{children:[(0,a.jsx)(es.Z,{children:(0,a.jsx)(ea.Z,{children:(0,a.jsx)("b",{children:n.participantName})})},"attendee-control-menu-header-".concat(n.subscriptionId)),(0,a.jsxs)(es.Z,{disabled:u||s,onClick:s?void 0:()=>{i(),g(t,n)},children:[(0,a.jsx)(el.Z,{children:s?(0,a.jsx)("img",{src:"/icons/controls/participant-muted.svg"}):(0,a.jsx)("img",{src:"/icons/controls/mute-participant.svg"})}),(0,a.jsx)(ea.Z,{inset:!1,children:s?"Participant muted":"Mute participant"})]},"attendee-control-menu-item-".concat(n.subscriptionId,"-mute")),(0,a.jsxs)(es.Z,{disabled:u,onClick:()=>{r(!0)},children:[(0,a.jsx)(el.Z,{children:(0,a.jsx)("img",{src:"/icons/controls/remove-participant.svg"})}),(0,a.jsx)(ea.Z,{inset:!1,children:"Remove participant"})]},"attendee-control-menu-item-".concat(n.subscriptionId,"-kick"))]}),(0,a.jsx)(en.Z,{prompt:"Remove the participant from the call?",options:[{key:"kick",text:"Remove participant",filled:!0},{key:"cancel",text:"Cancel",filled:!1}],onSelect:e=>{"kick"===e&&m(t,n)},open:o,setOpen:r,onClose:i})]})},I=e=>{let{connected:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(y.Z,{sx:{p:1,borderRadius:4,height:42,background:t?h.palette.connected.main:h.palette.disconnected.main},children:(0,a.jsx)("img",{style:{height:26,margin:0,padding:0},src:t?"/icons/device-connected.svg":"/icons/device-disconnected.svg"})})})},k=e=>{let t=e.subscriptionId===(null==n?void 0:n.subscriptionId)?"(You) ":"",i=e.participantName&&e.participantName.length>0?e.participantName:"Unknown";return"".concat(t).concat(i)};return(0,S.useEffect)(()=>{c([...t].sort((e,t)=>e.role===t.role?0:e.role===d._b.Controller?-1:t.role===d._b.Controller?1:e.participantName.localeCompare(t.participantName)))},[t]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",gap:4},children:[(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"row",gap:1,justifyContent:"flex-end"},children:[e.remoteConfiguration===d.VS.RemoteWithVideoCall&&(0,a.jsx)(Q.Z,{variant:"outlined",startIcon:(0,a.jsx)("img",{src:"/icons/controls/participant-muted.svg"}),btnKey:"mute-all",btnText:"Mute all",sx:{alignSelf:"flex-end"},busy:u,onClick:e=>{f()}}),(0,a.jsx)(et,{session:e})]}),(0,a.jsx)(ec.ZP,{container:!0,spacing:2,children:l.map(t=>(0,a.jsxs)(ec.ZP,{item:!0,xs:6,children:[e.remoteConfiguration===d.VS.RemoteWithVideoCall&&(0,a.jsx)(v,{subscription:t}),e.remoteConfiguration!==d.VS.RemoteWithVideoCall&&(0,a.jsx)(j,{subscription:t})]},"participant-subscription-indicator-".concat(t.subscriptionId)))})]})})}function ep(){let{subscriptions:e,thisUser:t}=(0,S.useContext)(Y.l);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(W,{startIcon:(0,a.jsx)("img",{src:"/icons/session-participants.svg",style:{height:"1.45rem",width:"auto"}}),text:"".concat(e.filter(e=>e.deviceId!==(null==t?void 0:t.deviceId)).length," participants"),children:(0,a.jsx)(y.Z,{sx:{width:"55vw"},children:(0,a.jsx)(ex,{})})})})}var eh=n(8260),ef=n(47656),eg=n(35231),em=n(50467),ej=n(2842),ev=n(9542),ew=n(13971);function eb(e){let{colours:t,data:n}=e,i=e=>{let t={true:{l:!0,r:!1},false:{l:!1,r:!0}};return 0===e.true&&(t.false.l=!0),0===e.false&&(t.true.r=!0),t},[o,r]=(0,S.useState)(i(n));(0,S.useEffect)(()=>{r(i(n))},[n]);let s=e=>[e.l?16:0,e.r?16:0,e.r?16:0,e.l?16:0];return(0,a.jsx)(eg.h,{width:"100%",height:40,children:(0,a.jsxs)(em.v,{layout:"vertical",margin:{left:0,right:0},height:40,data:[{name:"completion",complete:n.true,incomplete:n.false}],children:[(0,a.jsx)(ej.K,{hide:!0,type:"number",max:n.true+n.false}),(0,a.jsx)(ev.B,{hide:!0,dataKey:"name",type:"category"}),(0,a.jsx)(ew.$,{dataKey:"complete",stackId:"completion",fill:t[0],radius:s(o.true)}),(0,a.jsx)(ew.$,{dataKey:"incomplete",stackId:"completion",fill:t[1],radius:s(o.false)})]})})}var ey=n(37570),eZ=n(37552),eC=n(79617),eS=n(51847),eI=n(33578);(o=s||(s={}))[o.NotAnswered=0]="NotAnswered",o[o.Answered=1]="Answered";let ek=(e,t,n,i,o,r)=>{var s;let a=eE(null!==(s=n?null==e?void 0:e.filter(e=>e.questionId===n):e)&&void 0!==s?s:[]),l=a.length,c=t.filter(e=>e.enabled&&e.role===d._b.Client),u=c.filter(e=>!a.find(t=>t.participantId===e.deviceId));if(void 0!==r&&!0===r.noselfvoting&&void 0!==o&&0!==o.length){let e=o.filter(e=>e.id===i);if(1===e.length){let t=e[0].participantId;u=c.filter(e=>e.deviceId!==t).filter(e=>!a.find(t=>t.participantId===e.deviceId))}}let x=a.length+u.length;return{allAnswers:a,relevantParticipants:c,answeredCount:l,participantsWithoutAnswers:u,maxAnswers:x,complete:l===x}},eE=e=>e.sort((e,t)=>new Date(e.created).getTime()-new Date(t.created).getTime()),eR=(e,t)=>{var n;return[...e.allAnswers.map((e,n)=>({description:e_(e,t),answered:1})),...null!==(n=e.participantsWithoutAnswers.map(e=>({description:eD(e),answered:0})))&&void 0!==n?n:[]]},e_=(e,t)=>eD(t.find(t=>t.deviceId===e.participantId)),eD=e=>{var t,n;return null!==(n=null!==(t=null==e?void 0:e.participantName)&&void 0!==t?t:null==e?void 0:e.deviceName)&&void 0!==n?n:"Unknown"};function eP(e){let{sid:t}=(0,S.useContext)(ey.H),{answers:n}=(0,eh.ZP)(e.qid),i=(0,S.useContext)(Y.l),[o,r]=(0,S.useState)(i.subscriptions),[s,l]=(0,S.useState)(ek(n,o,e.qid,e.answerQid,e.allParticipantInput,e.answerRules)),[c,d]=(0,S.useState)([]);(0,S.useEffect)(()=>{r(i.subscriptions)},[i]),(0,S.useEffect)(()=>{l(ek(n,o,e.qid,e.answerQid,e.allParticipantInput,e.answerRules))},[n,o]),(0,S.useEffect)(()=>{d(eR(s,o))},[s,o]);let u=e=>(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:2,background:"white",border:"1px solid #EFEFEF",p:2},children:[(0,a.jsx)(Z.Z,{variant:"body1",sx:{borderRight:"1px solid black",overflowX:"scroll",textWrap:"nowrap",flexGrow:1,mr:.5,pr:.5},children:e.description}),1===e.answered&&(0,a.jsx)("img",{src:"/icons/checkbox-filled.svg"}),1!==e.answered&&(0,a.jsx)("img",{src:"/icons/checkbox.svg"})]}),x=(0,ed.Z)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",gap:1,alignItems:"stretch"},children:[e.qid&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)("img",{src:"/icons/busts.svg",style:{height:"1.5rem",width:"auto"}}),(0,a.jsxs)(Z.Z,{variant:"body1",children:[e.label&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("b",{children:[e.label,":"]})," "]}),"".concat(s.answeredCount," of ").concat(s.maxAnswers," ")," ",1!==s.answeredCount?"have":"has"," voted"]})]}),(0,a.jsxs)(eC.Z,{elevation:0,disableGutters:!0,sx:{"&:before":{display:"none"}},children:[(0,a.jsxs)(eS.Z,{expandIcon:(0,a.jsx)(eZ.Z,{}),sx:{p:0},children:[s.answeredCount+s.participantsWithoutAnswers.length>0&&(0,a.jsx)(eb,{colours:[x.palette.primary.main,"#ededff"],data:{true:s.answeredCount,false:s.participantsWithoutAnswers.length}}),s.answeredCount+s.participantsWithoutAnswers.length===0&&(0,a.jsx)(eb,{colours:[x.palette.primary.main,"#ededff"],data:{true:0,false:100}})]}),(0,a.jsx)(eI.Z,{sx:{p:0},children:(0,a.jsx)(ec.ZP,{container:!0,spacing:1,sx:{mb:2},children:c.map((t,n)=>(0,a.jsx)(ec.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,a.jsx)(u,{description:t.description,answered:t.answered})},"answer-indicator-grid-item-".concat(e.qid,"-").concat(n)))})})]})]}),!e.qid&&(0,a.jsx)(Z.Z,{variant:"body1",children:"Not a polling slide"})]})})}let eF="".concat(ef.O,"[PARTICIPANT_INPUT]"),eA=eF.replace(/[\]\[]/g,"\\$&"),eO=new RegExp("^[a-z0-9-]+".concat(eA,"$")),eT=e=>e.replace(new RegExp("^([a-z0-9-]+)(".concat(ef.O,"[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$")),"$1"),eU=e=>e.replace(new RegExp("^([a-z0-9-]+".concat(ef.O,")([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$")),"$2"),eN=e=>e.replace(eF,""),ez=(e,t)=>e[t]||[];function eV(){let{allSlideAnswerRules:e,slideData:t}=(0,S.useContext)(h.X),{subscriptions:n}=(0,S.useContext)(Y.l),{allAnswers:i}=(0,eh.ZP)(),[o,r]=(0,S.useState)(!1),[s,l]=(0,S.useState)({}),[c,d]=(0,S.useState)(!1),[u,x]=(0,S.useState)(),[p,f]=(0,S.useState)(t.qids);(0,S.useEffect)(()=>{let e=[];t.qids.forEach(t=>{if(!0===eO.test(t)){let n=eN(t),o=eE(ez(i,n));if(void 0!==o&&0!==o.length)for(let t=0;t<o.length;t++)e.push("".concat(n).concat(ef.O).concat(o[t].id))}else e.push(t)}),f(e)},[i,t]),(0,S.useEffect)(()=>{r(p.length>0)},[p]),(0,S.useEffect)(()=>{l(Object.fromEntries(p.map(t=>[t,ek(i[t],n,t,eU(t),ez(i,eT(t)),e?e[eT(t)]:void 0)])))},[i,p,e,t,n]),(0,S.useEffect)(()=>{d(Object.values(s).every(e=>e.complete))},[s]);let g=(0,M.Z)();return(0,S.useEffect)(()=>{let e=c?g.palette.pollingComplete.main:g.palette.pollingInProgress.main;x(o?{icon:(0,a.jsx)(G.Z,{htmlColor:e}),text:c?"Polling complete":"Polling in progress"}:void 0)},[c,o]),(0,a.jsx)(a.Fragment,{children:o&&u&&(0,a.jsx)(W,{startIcon:u.icon,text:u.text,sx:{backgroundColor:g.palette.pollingInProgressBackground.main},children:(0,a.jsx)(y.Z,{sx:{width:"55vw",display:"flex",flexDirection:"column",gap:1},children:p.map((t,n)=>{let o=p.length>1?0===n?"First question":n===p.length-1?"Last question":void 0:void 0;return(0,a.jsx)(eP,{qid:t,label:o,answerQid:eU(t),allParticipantInput:ez(i,eT(t)),answerRules:e?e[eT(t)]:void 0},"facilitator-polling-monitor-".concat(t,"-").concat(n))})})})})}function eW(){let{sessionToken:e,user:t}=(0,S.useContext)(F.rZ),{session:n}=(0,S.useContext)(p.z),{api:i,start:o}=(0,S.useContext)(A.E),[r,s]=(0,S.useState)(!1),[l,c]=(0,S.useState)(!1),[u,x]=(0,S.useState)({key:"",text:"Please wait...",variant:"outlined"});(0,S.useEffect)(()=>{switch(n.facilitationState){case d._y.Ready:x({key:"open-session",text:"Open workshop",variant:"contained"});break;case d._y.Open:x({key:"close-session",text:"Close workshop",variant:"outlined"});break;case d._y.Closed:x({key:"open-waiting",text:"Open waiting room",variant:"contained"})}},[n]);let h=async r=>{try{s(!0);var a={action:r===d._y.Open?"open":r===d._y.Ready?"reset":"close",sessionId:n.id,ticks:Date.now()};await o(i.postFacilitatorAction(t.access_token,e,a))}catch(e){console.error(e)}finally{s(!1)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Q.Z,{busy:r,variant:u.variant,btnKey:u.key,btnText:u.text,onClick:e=>{switch(e){case"open-waiting":h(d._y.Ready);break;case"open-session":h(d._y.Open);break;case"close-session":c(!0);break;default:console.warn("Unexpected facilitation switch from menu.")}}}),(0,a.jsx)(en.Z,{open:l,setOpen:c,prompt:"Are you sure you want to close the workshop?",onSelect:e=>{"close"===e&&h(d._y.Closed)},options:[{key:"close",text:"Close",filled:!0},{key:"cancel",text:"Cancel",filled:!1}]})]})}function eG(){let{session:e}=(0,S.useContext)(p.z);return(0,a.jsxs)(y.Z,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:"white",p:1,borderRadius:2},children:[(0,a.jsx)(t=>{let{showBadge:n}=t;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(y.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:[(0,a.jsx)("img",{src:"/icons/home.svg",style:{height:"2rem",width:"auto",verticalAlign:"middle",marginRight:12,paddingBottom:4}}),n&&(0,a.jsx)(I.Z,{color:"primary",badgeContent:d._y[e.facilitationState],anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,a.jsx)(Z.Z,{variant:"h5",component:"h1",children:e.sessionName})}),!n&&(0,a.jsx)(Z.Z,{variant:"h5",component:"h1",children:e.sessionName})]})})},{showBadge:!1}),(0,a.jsxs)(y.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",gap:4},children:[(0,a.jsx)(eV,{}),e.remoteConfiguration===d.VS.InPerson?(0,a.jsx)(B,{}):null,(0,a.jsx)(ep,{}),(0,a.jsx)(_,{}),(0,a.jsx)(eW,{})]})]})}function eM(e){let{notes:t}=e;return(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})}var eq=n(7630),eK=n(69065),eL=n(80824),e$=n(66124);function eB(e){let{session:t}=(0,S.useContext)(p.z),[n,i]=(0,S.useState)(!1),[o,r]=(0,S.useState)(!1),[s,l]=(0,S.useState)(!1);return(0,S.useEffect)(()=>{r(t.facilitationState===d._y.Open)},[t.facilitationState]),(0,S.useEffect)(()=>{l(t.remoteConfiguration===d.VS.InPerson)},[t.remoteConfiguration]),(0,S.useEffect)(()=>{i(o&&s)},[o,s]),(0,a.jsxs)(eK.Z,{fullWidth:!0,maxWidth:"sm",open:n,onClose:()=>i(!1),children:[(0,a.jsxs)(eL.Z,{children:["The workshop is now open",(0,a.jsx)(y.Z,{style:{position:"absolute",top:0,right:0},children:(0,a.jsx)(ei.Z,{"aria-label":"close",onClick:()=>i(!1),children:(0,a.jsx)(eq.Z,{})})})]}),(0,a.jsx)(e$.Z,{children:(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)("ul",{children:[o&&(0,a.jsx)("li",{children:"Participants will now be able to enter the session."}),s&&(0,a.jsxs)("li",{children:["Relevant sections will be ",(0,a.jsx)("b",{children:"automatically recorded"}),", unless you disable this feature."]})]}),(0,a.jsx)(U.Z,{variant:"contained",sx:{alignSelf:"center",textTransform:"uppercase"},onClick:()=>i(!1),children:"Continue"})]})})]})}let eY=e=>e.remoteConfiguration===d.VS.RemoteWithVideoCall?"left":"right",eH=e=>e.remoteConfiguration===d.VS.RemoteWithVideoCall,eQ=e=>e.remoteConfiguration!==d.VS.RemoteWithVideoCall;function eX(){let{presentation:e,previews:t}=(0,S.useContext)(f.N),{slideData:n}=(0,S.useContext)(h.X),{session:i}=(0,S.useContext)(p.z),[o,r]=(0,S.useState)(eQ(i)),[s,l]=(0,S.useState)(eH(i)),[c,u]=(0,S.useState)(eY(i));return(0,S.useEffect)(()=>{r(eQ(i)),l(eH(i)),u(eY(i))},[i]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(y.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:1,p:1,overflow:"hidden"},children:[(0,a.jsx)(y.Z,{children:(0,a.jsx)(eG,{})}),(0,a.jsxs)(y.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row",gap:1,overflowY:"hidden"},children:[(0,a.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",width:"50vw",gap:1,flexShrink:0},children:[(0,a.jsx)(C,{sx:{flexGrow:1,overflow:"hidden",minHeight:"50vh"},children:e}),o&&(0,a.jsx)(C,{children:t}),"left"===c&&(0,a.jsx)(y.Z,{sx:{flexGrow:1,display:"block",overflowY:"hidden"},children:(0,a.jsx)(C,{scrolling:!0,sx:{height:"100%"},children:(0,a.jsx)(eM,{notes:n.notes})})})]}),(0,a.jsxs)(y.Z,{sx:{flexGrow:1,width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:1},children:[s&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(w.Z,{sx:{flexGrow:1},joinView:(0,a.jsx)(()=>(0,a.jsx)(b.Z,{preTitle:(0,a.jsx)(g.Z,{i18nKey:"onboarding.thanks"}),title:(0,a.jsx)(g.Z,{i18nKey:"onboarding.almostThere"}),bar:"Connecting your video call..."}),{}),children:(0,a.jsxs)(y.Z,{sx:{height:"100%",width:"100%",display:"flex",flexDirection:"column",gap:1},children:[(0,a.jsx)(j.ZP,{role:d._b.Controller,children:(0,a.jsx)(v.Z,{sx:{flexGrow:1},isPreview:!1})}),(0,a.jsx)(y.Z,{className:"call-controls-container",sx:{backgroundColor:"callControlPanelBackground.main",borderRadius:"0.5rem"},children:(0,a.jsx)(m.ZP,{direction:"row",showAudioConfigMenu:!0,showCameraConfigMenu:!0,busy:!1})})]})})}),"right"===c&&(0,a.jsx)(y.Z,{sx:{flexGrow:1,display:"block",overflowY:"hidden"},children:(0,a.jsx)(C,{scrolling:!0,sx:{height:"100%"},children:(0,a.jsx)(eM,{notes:n.notes})})})]})]})]}),(0,a.jsx)(eB,{})]})}var eJ=n(96608),e0=n(25907);function e1(e){return(0,a.jsx)(a.Fragment,{children:c.UA?(0,a.jsx)(eJ.Z,{}):(0,a.jsx)(e0.Z,{sid:e.sid,joinCode:e.joinCode,refresh:e.refresh,role:d._b.Controller,children:(0,a.jsxs)(u.Z,{role:d._b.Controller,children:[(0,a.jsx)(x.Z,{}),(0,a.jsx)(eX,{})]})})})}var e4=n(16463);function e5(){let e=(0,e4.useSearchParams)(),t=e.get("sid"),n=e.get("code"),i="true"===e.get("refresh");return null===t||null===n?(0,a.jsx)("p",{children:"Missing session id or join code"}):(0,a.jsx)(l.Z,{searchParams:e,children:(0,a.jsx)(e1,{sid:t,joinCode:n,refresh:i})})}},74130:function(e,t,n){"use strict";function i(e){if(e)return new Date(e)}n.d(t,{P:function(){return i}})},10105:function(e,t,n){"use strict";n.d(t,{k:function(){return o},v:function(){return i}});let i=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/participant/session?sid=").concat(e.id,"&code=").concat(e.joinCode),o=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/facilitator/session?sid=").concat(e.id,"&code=").concat(e.joinCode)}},function(e){e.O(0,[908,444,866,221,732,403,964,747,585,673,452,920,335,971,23,744],function(){return e(e.s=59870)}),_N_E=e.O()}]);