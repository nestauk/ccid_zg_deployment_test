"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{60658:function(t,e,i){i.d(e,{L:function(){return s},P:function(){return o}});var n=i(2057);let s=t=>{let e=async()=>{var e;let i={method:t.method,headers:{"Content-Type":null!==(e=t.contentType)&&void 0!==e?e:"application/json"}};void 0!==t.body&&(i.body=JSON.stringify(t.body)),void 0!==t.accessToken&&(i.headers.Authorization="Bearer ".concat(t.accessToken)),void 0!==t.sessionToken&&(i.headers["X-Deliberation-Session-Token"]=t.sessionToken);let n=await fetch("".concat(t.baseUri).concat(t.path),i);if(n.ok)return JSON.parse(await n.text());throw n.statusText};return new n.Z({title:t.title,description:t.description,action:e,retries:t.indefinite?"indefinite":3,delay_ms:2e3,max_delay_ms:6e3,group:t.group,indicator:t.indicator})},o=(t,e,i,s,o)=>{if(0===t.size)throw"Blob is empty";let a=async()=>{console.debug("Ready to upload ".concat(t.size," bytes..."));let n=await fetch(i,{method:"PUT",headers:{"Content-Type":e},body:t});if(!n.ok)throw n.statusText;return console.debug("Upload complete."),{size:t.size,target:i,method:"PUT",response:n}};return new n.Z({title:"Put: ".concat(i),description:"".concat(t.size," bytes"),action:a,retries:s?"indefinite":3,delay_ms:2e3,indicator:o})}},2057:function(t,e,i){i.d(e,{Z:function(){return a},l:function(){return s}});var n,s,o=i(20920);(n=s||(s={}))[n.Ready=0]="Ready",n[n.Running=1]="Running",n[n.Success=2]="Success",n[n.Waiting=3]="Waiting",n[n.Failed=4]="Failed",n[n.Cancelled=5]="Cancelled";class a{isFinished(){return 2===this.state||4===this.state||5===this.state}getResult(){switch(this.state){case 2:return this.result;case 4:var t;throw null!==(t=this.error)&&void 0!==t?t:"Task state: Failed";case 5:return;default:throw"Task state: ".concat(s[this.state])}}getNextDelay(){var t,e,i;return Math.min((null!==(t=this.initProps.delay_ms)&&void 0!==t?t:0)*this.attempts,null!==(i=null!==(e=this.initProps.max_delay_ms)&&void 0!==e?e:this.initProps.delay_ms)&&void 0!==i?i:0)}getLogDescription(){return"".concat(this.initProps.title,": ").concat(this.initProps.description," (").concat(this.initProps.indicator,")")}supersedes(t){return!this.isFinished()&&!t.isFinished()&&this.id!==t.id&&this.group===t.group&&this.created>t.created}constructor(t){var e;this.created=Date.now(),this.state=0,this.attempts=0,this.willTryAgain=()=>this.attempts<=("indefinite"===this.initProps.retries?50:this.initProps.retries),this.id=(0,o.Z)(),this.group=null!==(e=t.group)&&void 0!==e?e:(0,o.Z)(),this.created=Date.now(),this.initProps=t}}},23447:function(t,e,i){i.d(e,{E:function(){return d},Z:function(){return u}});var n=i(57437),s=i(2265),o=i(2057);let a=t=>{switch(t.action){case"close":return"closing workshop";case"fullscreen":return"adjusting workshop settings";case"init-meeting":return"renewing video call";case"open":return"opening workshop";case"refresh-all":return"refreshing";case"reset":return"opening waiting room";case"set-slide-position":return"update position: ".concat(t.parameters.indexh+1);case"set-video-sync":return"synchronising video";case"start-transcription":return"starting transcription";case"stop-transcription":return"stopping transcription";case"refresh":return"refreshing state";case"video-readiness-update":return"updating video readiness";case"mute":return"muting participant";case"kick":return"removing participant";default:return"submitting data"}};var r=i(94547),c=i(60658);class l{getServerTime(){return(0,c.L)({baseUri:this.baseUri,title:"getServerTime",method:"GET",path:"/utils/servertime",indefinite:!1,indicator:"checking server time"})}postDeliberationSessionAdmin(t,e){return(0,c.L)({baseUri:this.baseUri,title:"postDeliberationSessionAdmin",method:"POST",path:"/sessions/admin",body:e,accessToken:t,indefinite:!0,indicator:"creating session"})}putDeliberationSessionAdmin(t,e){return(0,c.L)({baseUri:this.baseUri,title:"putDeliberationSessionAdmin",method:"PUT",path:"/sessions/admin/".concat(e.id),body:e,accessToken:t,indefinite:!0,indicator:"updating session"})}postParticipantAction(t,e){let i=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return(0,c.L)({baseUri:this.baseUri,title:"postParticipantAction",description:e.action,method:"POST",path:"/sessions/".concat(e.sessionId,"/actions"),body:e,group:"postParticipantAction.".concat(e.action),sessionToken:t,indefinite:i,indicator:a(e)})}postFacilitatorAction(t,e,i){let n=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return(0,c.L)({baseUri:this.baseUri,title:"postFacilitatorAction",description:i.action,method:"POST",path:"/sessions/admin/actions/".concat(i.sessionId),body:i,group:"postFacilitatorAction.".concat(i.action),accessToken:t,sessionToken:e,indefinite:n,indicator:a(i)})}getDeliberationSessionAdmin(t,e,i,n){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationSessionAdmin",description:"with access token",method:"GET",path:"/sessions/admin/".concat(t),sessionToken:e,accessToken:i,group:n,indefinite:!1,indicator:"checking workshop state"})}listDeliberationSessions(t,e,i){return(0,c.L)({baseUri:this.baseUri,title:"listDeliberationSessions",description:r.yI[e],method:"GET",path:"/sessions/list/".concat(r.yI[e]),accessToken:t,group:i,indefinite:!1,indicator:"listing sessions"})}getDeliberationSession(t,e,i){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationSession",method:"GET",path:"/sessions/".concat(t),sessionToken:e,group:i,indefinite:!1,indicator:"checking workshop state"})}postMeetingJoinRequest(t,e,i,n,s,o){return(0,c.L)({baseUri:this.baseUri,title:"postMeetingJoinRequest",method:"POST",path:void 0!==o?"/sessions/admin/".concat(t,"/attendee"):"/sessions/".concat(t,"/attendee"),body:{name:s,participantId:i,preview:n},sessionToken:e,accessToken:o,indefinite:!1,indicator:n?"preparing preview":"joining video call"})}exchangeJoinCodeForSessionToken(t,e){var i=void 0!==e?"/sessions/admin/".concat(t.sessionId,"/token"):"/sessions/".concat(t.sessionId,"/token");return(0,c.L)({baseUri:this.baseUri,title:"exchangeJoinCodeForSessionToken",method:"POST",path:i,body:t,indefinite:!1,indicator:"checking join code",accessToken:e})}postDeliberationAnswer(t,e,i){let n=e.questionId;return(0,c.L)({baseUri:this.baseUri,title:"postDeliberationAnswer",method:"POST",path:"/sessions/".concat(t,"/questions/").concat(n,"/answers"),body:e,sessionToken:i,indefinite:!0,indicator:"sending answer"})}getDeliberationAnswer(t,e,i,n,s){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationAnswer",method:"GET",path:"/sessions/".concat(t,"/questions/").concat(e,"/answers?pid=").concat(i),sessionToken:n,group:s,indefinite:!0,indicator:void 0})}getDeliberationAnswersForQuestion(t,e,i,n){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationAnswersForQuestion",method:"GET",path:"/sessions/".concat(t,"/questions/").concat(e,"/answers"),sessionToken:i,group:n,indefinite:!0,indicator:void 0})}getDeliberationAnswersForParticipant(t,e,i,n){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationAnswersForParticipant",method:"GET",path:"/sessions/".concat(t,"/participants/").concat(e,"/answers"),sessionToken:i,group:n,indefinite:!0,indicator:void 0})}postWorkshopContentAccessRequest(t,e,i){return(0,c.L)({baseUri:this.baseUri,title:"postWorkshopContentAccessRequest",description:"".concat(i.objectKeys.length," items"),method:"POST",path:"/sessions/".concat(t,"/content"),body:i,sessionToken:e,indefinite:!0,indicator:void 0})}postPublicContentAccessRequest(t,e){return(0,c.L)({baseUri:this.baseUri,title:"postPublicContentAccessRequest",description:"".concat(e.workshopDirectory),method:"POST",path:"/sessions/".concat(t,"/content/public"),body:e,indefinite:!0,indicator:void 0})}getReport(t,e,i){return(0,c.L)({baseUri:this.baseUri,title:"getReport",description:r.gY[i],method:"GET",path:"/sessions/admin/".concat(t,"/report/").concat(r.gY[i]),accessToken:e,indefinite:!1,indicator:"retrieving report"})}getMediaUploadUrl(t,e,i,n,s,o){return(0,c.L)({baseUri:this.baseUri,title:"getMediaUploadUrl",method:"POST",path:"/sessions/admin/".concat(t,"/upload"),body:{sessionId:t,section:n,filenamePart:s,filenameSuffix:o},accessToken:i,sessionToken:e,indefinite:!0,indicator:"preparing to upload"})}postAnalystAction(t,e){return(0,c.L)({baseUri:this.baseUri,title:"postAnalystActionRequest",method:"POST",path:"/sessions/analysis",body:t,accessToken:e,indefinite:!1,indicator:"action: "+t.action})}constructor(t){this.baseUri=t}}let d=(0,s.createContext)({});function u(t){let[e,i]=(0,s.useState)(new l("https://xjlnrggeb0.execute-api.eu-west-2.amazonaws.com/test")),[a,r]=(0,s.useState)([]),[c,u]=(0,s.useState)([]),[p,h]=(0,s.useState)([]),[g,b]=(0,s.useState)([]),[m,f]=(0,s.useState)([]),[y,S]=(0,s.useState)([]),[v,w]=(0,s.useState)([]),[k,T]=(0,s.useState)(0),C=(0,s.useCallback)(async t=>(r(e=>[...e,t]),T(Date.now()),A(t)),[a,r,k,T]);(0,s.useEffect)(()=>{u([...a.filter(t=>t.state===o.l.Ready)]),h([...a.filter(t=>t.state===o.l.Running)]),b([...a.filter(t=>t.state===o.l.Waiting)]),f([...a.filter(t=>t.state===o.l.Success)]),S([...a.filter(t=>t.state===o.l.Failed)]),w([...a.filter(t=>t.state===o.l.Cancelled)])},[a,k]);let x=(0,s.useCallback)(t=>!t.isFinished()&&!a.some(e=>e.id!==t.id&&e.state===o.l.Running&&e.group===t.group),[a]),D=(0,s.useCallback)(t=>!t.isFinished()&&a.some(e=>e.supersedes(t)),[a]),R=t=>{console.debug("Superseding task: ".concat(t.getLogDescription()),t),t.state=o.l.Cancelled,T(Date.now())},U=(0,s.useCallback)(()=>{let t=a.filter(t=>D(t));t.length>0&&t.forEach(t=>{R(t)})},[a]),A=(0,s.useCallback)(async t=>{do try{if(t.isFinished())return t.getResult();D(t)?(R(t),T(Date.now())):x(t)?(console.debug("Starting task: ".concat(t.getLogDescription()),t),t.state=o.l.Running,t.started=Date.now(),T(Date.now()),U(),t.attempts++,t.promise=t.initProps.action(),t.result=await t.promise,console.debug("Completed task: ".concat(t.getLogDescription()),t),t.state=o.l.Success,T(Date.now())):(console.debug("Task ".concat(t.getLogDescription()," not ready to start"),t),t.state=o.l.Waiting,T(Date.now()),await new Promise(t=>setTimeout(t,1e3)))}catch(e){t.error=e,t.willTryAgain()?(t.state=o.l.Waiting,T(Date.now()),console.warn("Task ".concat(t.getLogDescription()," will retry in ").concat(t.getNextDelay(),"ms"),t,e),await new Promise(e=>setTimeout(e,t.getNextDelay()))):(t.state=o.l.Failed,console.error("Task ".concat(t.getLogDescription()," failed"),t,e),T(Date.now()))}while(!t.isFinished());return t.getResult()},[a,r,k,T]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.Provider,{value:{api:e,start:C,tasks:a,readyTasks:c,runningTasks:p,waitingTasks:g,succeededTasks:m,failedTasks:y,cancelledTasks:v},children:t.children})})}},94547:function(t,e,i){var n,s,o,a,r,c,l,d,u,p,h,g,b,m,f,y,S,v;i.d(e,{EQ:function(){return s},SC:function(){return d},VS:function(){return a},_b:function(){return n},_y:function(){return o},gY:function(){return c},tB:function(){return u},um:function(){return r},yI:function(){return l}}),(p=n||(n={}))[p.Controller=0]="Controller",p[p.Client=1]="Client",(h=s||(s={}))[h.LiveWorkshop=0]="LiveWorkshop",h[h.AutomatedTests=1]="AutomatedTests",h[h.TestingWorkshop=2]="TestingWorkshop",h[h.DemoWorkshop=3]="DemoWorkshop",(g=o||(o={}))[g.Absent=0]="Absent",g[g.Ready=1]="Ready",g[g.Open=2]="Open",g[g.Closed=3]="Closed",(b=a||(a={}))[b.InPerson=0]="InPerson",b[b.Remote=1]="Remote",b[b.RemoteWithVideoCall=2]="RemoteWithVideoCall",(m=r||(r={}))[m.Offline=0]="Offline",m[m.Online=1]="Online",m[m.Connecting=2]="Connecting",m[m.Connected=3]="Connected",m[m.Joining=4]="Joining",m[m.Joined=5]="Joined",m[m.Disconnecting=6]="Disconnecting",m[m.Disconnected=7]="Disconnected",m[m.Error=8]="Error",(f=c||(c={}))[f.ContactAndConsent=0]="ContactAndConsent",f[f.EnjoymentAndSatisfaction=1]="EnjoymentAndSatisfaction",f[f.FullReport_v1=2]="FullReport_v1",f[f.FullReport_v2=3]="FullReport_v2",f[f.FullReport_v3=4]="FullReport_v3",(y=l||(l={}))[y.All=0]="All",y[y.Upcoming=1]="Upcoming",y[y.Past=2]="Past",y[y.Answered=3]="Answered",(S=d||(d={})).facilitators="facilitators",S.analysts="analysts",S.administrators="administrators",(v=u||(u={}))[v.NotStarted=0]="NotStarted",v[v.Playing=1]="Playing",v[v.Paused=2]="Paused",v[v.Ended=3]="Ended"},83593:function(t,e,i){i.d(e,{M:function(){return s}});var n,s,o=i(37836),a=i.n(o);(n=s||(s={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",n.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",n.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",n.Content_Progress_Update="CONTENT_PROGRESS_UPDATE",n.Media_Playback_Update="MEDIA_PLAYBACK_UPDATE",n.WSS_Refresh_Session="WSS_REFRESH_SESSION",n.WSS_Request_Reconnect="WSS_REQUEST_RECONNECT";let r=new(a()),c={on:(t,e)=>r.on(t,e),once:(t,e)=>r.once(t,e),off:(t,e)=>r.off(t,e),emit:t=>r.emit(t.type,t)};Object.freeze(c),e.Z=c},4087:function(t,e,i){i.d(e,{Z:function(){return c}});var n=i(57437),s=i(2265),o=i(90089),a=i(20920);let r=()=>"t-".concat((0,a.Z)());function c(t){var e,i,a;let{i18nKey:c,options:l}=t,{t:d}=(0,o.$G)();return(0,n.jsx)(n.Fragment,{children:(i=null!==(e=t.wrapper)&&void 0!==e?e:(0,n.jsx)(n.Fragment,{}),Array.isArray(a=d(c,l))?a.map(t=>s.cloneElement(i,{key:r()},t)):"string"==typeof a?s.cloneElement(i,{key:r()},a):s.cloneElement(i,{key:r()},a.toString()))})}},53771:function(t,e,i){i.d(e,{Z:function(){return d}});var n=i(57437),s=i(22960),o=i(31193),a=i(40468),r=i(2265),c=i(2057),l=i(23447);function d(t){let{runningTasks:e,waitingTasks:i,failedTasks:d}=(0,r.useContext)(l.E),u=(0,s.Z)(),p={[c.l.Waiting]:u.palette.taskWaiting.main,[c.l.Ready]:u.palette.taskReady.main,[c.l.Running]:u.palette.taskRunning.main,[c.l.Success]:u.palette.taskSuccess.main,[c.l.Failed]:u.palette.taskFailed.main,[c.l.Cancelled]:u.palette.taskCancelled.main},h=t=>{let{task:e}=t,i=e.initProps.indicator,s=!1;switch(e.state){case c.l.Waiting:i+=" (waiting)",s=!0;break;case c.l.Ready:case c.l.Running:i+="...",s=!0}return(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center",borderRadius:1,backgroundColor:"white",border:1,borderColor:p[e.state],borderBottom:4,borderBottomColor:p[e.state],opacity:.75,py:1,px:2},children:[s&&(0,n.jsx)(a.Z,{size:"1rem"}),i]})};return(0,r.useEffect)(()=>{e.length>0&&console.info("Running tasks: ".concat(e.length),e.map(t=>({is:t.getLogDescription(),task:t})))},[e]),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[t.showRunning&&e.filter(t=>void 0!==t.initProps.indicator).map(t=>(0,n.jsx)(h,{task:t},"task-vis-".concat(t.id,"-").concat(c.l[t.state]))),i.filter(t=>void 0!==t.initProps.indicator).map(t=>(0,n.jsx)(h,{task:t},"task-vis-".concat(t.id,"-").concat(c.l[t.state])))]})}},40395:function(t,e,i){i.d(e,{Z:function(){return h}});var n=i(57437),s=i(7630),o=i(69065),a=i(80824),r=i(66124),c=i(31193),l=i(60335),d=i(80511),u=i(2265),p=i(9646);function h(t){var e,i,h;let g=()=>{if(!1!==t.dismissible){var e;t.setOpen(!1),null===(e=t.onClose)||void 0===e||e.call(t)}},b=e=>{var i,n;t.setOpen(!1),null===(i=t.onClose)||void 0===i||i.call(t),null===(n=t.onSelect)||void 0===n||n.call(t,e)},m=(0,u.useId)();return(0,u.useEffect)(()=>{console.debug("dialog open",t.open)},[t.open]),(0,n.jsxs)(o.Z,{fullWidth:null===(e=t.fullWidth)||void 0===e||e,maxWidth:null!==(i=t.maxWidth)&&void 0!==i?i:"sm",open:t.open,disableEscapeKeyDown:!t.dismissible,onClose:g,children:[t.title&&(0,n.jsx)(a.Z,{align:"center",children:t.title}),(0,n.jsxs)(r.Z,{children:[(null===(h=t.showCloseButton)||void 0===h||h)&&(0,n.jsx)(c.Z,{style:{position:"absolute",top:0,right:0},children:(0,n.jsx)(l.Z,{"aria-label":"close",onClick:g,children:(0,n.jsx)(s.Z,{})})}),(0,n.jsxs)(c.Z,{sx:{p:2,gap:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(d.Z,{variant:"body1",sx:{width:"75%",mb:2,textAlign:"center",textWrap:"balance"},children:t.prompt}),t.options.map(e=>(0,n.jsx)(p.Z,{btnKey:"dialog-".concat(m,"-option-").concat(e.key),sx:{width:"66%"},variant:e.filled?"contained":"outlined",color:"buttonStandard",onClick:()=>b(e.key),btnText:e.text,busy:t.busy},"dialog-".concat(m,"-option-").concat(e.key)))]})]})]})}},9646:function(t,e,i){i.d(e,{Z:function(){return r}});var n=i(57437),s=i(42555),o=i(80511),a=i(4087);function r(t){var e,i,r;return(0,n.jsxs)(s.Z,{disableFocusRipple:t.disableFocusRipple,type:"submit",variant:null!==(e=t.variant)&&void 0!==e?e:"contained",size:t.size,color:null!==(i=t.color)&&void 0!==i?i:"buttonStandard",onClick:()=>{t.onClick(t.btnKey)},loading:t.busy,disabled:t.disabled||t.busy,startIcon:t.startIcon,endIcon:t.endIcon,sx:t.sx,children:[t.content,(0,n.jsx)(o.Z,{variant:"submitButton",sx:{textWrap:"balance"},children:null!==(r=t.btnText)&&void 0!==r?r:(0,n.jsx)(a.Z,{i18nKey:"button.submit"})})]})}},71432:function(t,e,i){i.d(e,{r:function(){return n}});function n(t){return null!=t}},20909:function(t,e,i){i.d(e,{X:function(){return n}});let n=t=>t.split("/").at(-2)}}]);