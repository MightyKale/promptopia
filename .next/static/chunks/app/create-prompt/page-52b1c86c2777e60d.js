(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{6556:function(e,t,a){Promise.resolve().then(a.bind(a,7622))},7622:function(e,t,a){"use strict";a.r(t);var s=a(7437),l=a(2265),r=a(2749),n=a(4033),o=a(5866);t.default=()=>{let e=(0,n.useRouter)(),{data:t}=(0,r.useSession)(),[a,i]=(0,l.useState)(!1),[c,m]=(0,l.useState)({prompt:"",tag:""}),u=async a=>{a.preventDefault(),i(!0);try{let a=await fetch("/api/prompt/new",{method:"POST",body:JSON.stringify({prompt:c.prompt,userId:null==t?void 0:t.user.id,tag:c.tag})});a.ok&&e.push("/")}catch(e){console.log(e)}finally{i(!1)}};return(0,s.jsx)(o.Z,{type:"Create",post:c,setPost:m,submitting:a,handleSubmit:u})}},5866:function(e,t,a){"use strict";var s=a(7437),l=a(1396),r=a.n(l);t.Z=e=>{let{type:t,post:a,setPost:l,submitting:n,handleSubmit:o}=e;return(0,s.jsxs)("section",{className:"w-full max-w-full flex-start flex-col",children:[(0,s.jsx)("h1",{className:"head_text text-left",children:(0,s.jsxs)("span",{className:"blue_gradient",children:[t," Post"]})}),(0,s.jsxs)("p",{className:"desc text-left max-w-md",children:[t," and share amzing prompts with the world, and let your imagination run wilde with any AI-powered platform."]}),(0,s.jsxs)("form",{onSubmit:o,className:"mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"font-satoshi font-semibold text-base text-gray-700",children:"Your AI Prompt"}),(0,s.jsx)("textarea",{value:a.prompt,onChange:e=>l({...a,prompt:e.target.value}),placeholder:"Write your prompt here...",required:!0,className:"form_textarea"})]}),(0,s.jsxs)("label",{children:[(0,s.jsxs)("span",{className:"font-satoshi font-semibold text-base text-gray-700",children:["Tag",(0,s.jsx)("span",{className:"font-normal",children:" (#product, #webdevelopment, #idea)"})]}),(0,s.jsx)("input",{value:a.tag,onChange:e=>l({...a,tag:e.target.value}),placeholder:"#tag",required:!0,className:"form_input"})]}),(0,s.jsxs)("div",{className:"flex-end mx-3 mb-5 gap-4",children:[(0,s.jsx)(r(),{href:"/",className:"text-gray-500 text-sm",children:"Cancel"}),(0,s.jsx)("button",{type:"submit",disabled:n,className:"px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white",children:n?"".concat(t,"..."):t})]})]})]})}},4033:function(e,t,a){e.exports=a(8165)}},function(e){e.O(0,[601,396,971,596,744],function(){return e(e.s=6556)}),_N_E=e.O()}]);