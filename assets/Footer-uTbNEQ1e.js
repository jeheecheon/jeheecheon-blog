import{r as s,b as f,d as w,c as C,j as e,o as S,m as L,L as b,p as W,q as H,N as E,n as P,v as Z,w as z,x as O,y as F,z as Y,A as U,B as J,C as q,D as j}from"./index-ksOw34XG.js";import{A as G}from"./Avatar-prS2V9iH.js";import{c as N,u as X,R as K}from"./modal-w9exgDL7.js";const Q="/assets/me-4o5NXEZx.png",_=[{name:"Home",to:"/"},{name:"Portfolio",to:"https://jeheecheon.com"}],ee=[{name:"Recent Posts",to:"/recent-posts/pages/1"},{name:"Algorithm",to:"/categories/Algorithm/pages/1"},{name:"Web Development",to:"/categories/Web-Development/pages/1"},{name:"Uncategorized",to:"/categories/Uncategorized/pages/1"}],te=({isOpen:t,setIsOpen:a})=>{const[l,o]=s.useState(N()),d=X(),u=f(x=>x.theme.isDarkMode),m=w(),i=f(C);s.useEffect(()=>{const x=()=>o(N());return d===!0&&window.addEventListener("resize",()=>x()),()=>window.removeEventListener("resize",x)},[l]);function c(x,p){return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-orange-400 text-lg",children:p}),e.jsx("nav",{className:"flex flex-col text-default-18-dark text-sm dark:text-default-10 mt-1",children:x.map((h,g)=>{var v;const k="w-full py-2 border-b-[1.6px] dark:border-y-default-7-dark border-y-default-5";return e.jsx("div",{children:(v=h.to)!=null&&v.includes("Portfolio")?e.jsx("a",{href:h.to,className:k,children:h.name}):e.jsx(b,{to:h.to,className:k,onClick:()=>a(!1),children:h.name})},g)})})]})}return e.jsx(K,{visible:t,customStyles:{borderRadius:"22px",backgroundColor:`${u?"rgb(24, 24, 27)":"rgb(250, 250, 250)"}`,padding:"25px 30px 25px 30px"},width:l,height:400,onClose:()=>a(!t),children:e.jsxs("div",{className:"h-full flex flex-col justify-between",children:[e.jsxs("div",{children:[c(_,"Navigation"),e.jsx("button",{className:`text-default-18-dark text-sm dark:text-default-10 w-full text-left py-2 \r
                        border-b-[1.6px] border-y-default-5 dark:border-y-default-7-dark`,onClick:()=>{a(!1),i?S():m(L())},children:i?"Sign-out":"Sign-in"})]}),e.jsx("div",{className:"mt-5",children:c(ee,"Category")})]})})},se=t=>s.createElement("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...t},s.createElement("path",{className:"mx-auto",d:"M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ae=t=>s.createElement("svg",{viewBox:"0 0 24 24",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...t},s.createElement("path",{d:"M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"}),s.createElement("path",{d:"M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",fill:"none"}));function ne({className:t}){const a=w(),l=f(W),o=()=>{a(H(!l))};return e.jsx(e.Fragment,{children:e.jsxs("button",{onClick:o,className:`rounded-full h-fit p-2 shadow-xl dark:shadow-lg dark:shadow-black/60 dark:bg-default-5-dark bg-default-2
                    border-[1px] border-slate-300 dark:border-default-18-dark ring-[0.4px] ring-orange-300 pointer-events-auto
                    ${t}`,children:[e.jsx(se,{className:"hidden dark:block fill-orange-300 w-[20px] stroke-orange-300"}),e.jsx(ae,{className:"dark:hidden fill-orange-300 stroke-orange-300 w-[20px] "})]})})}const I=t=>s.createElement("svg",{viewBox:"0 0 8 6","aria-hidden":"true",...t},s.createElement("path",{d:"M1.75 1.75 4 4.25l2.25-2.5",fill:"none",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),re=[{name:"😎 Portfolio",to:"https://jeheecheon.com",class:"border-b-0"},{name:"✏️ Recent Posts",to:"/recent-posts/pages/1",class:"mt-4"},{name:"🔢 Algorithm",to:"/categories/Algorithm/pages/1"},{name:"🕸️ Web Development",to:"/categories/Web-Development/pages/1"},{name:"❓ Uncategorized",to:"/categories/Uncategorized/pages/1"}],y=t=>{const{isActive:a}=t||{isActive:!1};return a?"text-orange-400":"dark:text-default-7 text-default-18-dark font-[500]"};function A(t){return t.map((a,l)=>{var o;return e.jsxs("div",{className:`flex flex-col text-nowrap border-b-[1px] last:border-b-0 pb-2 px-1 text-sm 
                border-b-gray-400/60 dark:border-b-default-18 ${a.class}`,children:[a.to&&((o=a.to)!=null&&o.includes("Portfolio"))?e.jsxs("a",{href:a.to,className:y({isActive:!1,isPending:!1,isTransitioning:!1}),children:[a.name,"asd"]}):e.jsx(E,{to:a.to,className:y,children:a.name}),a.subLinks&&e.jsx("div",{className:"ml-4",children:A(a.subLinks)})]},l)})}function oe({isCategoryOpen:t}){return e.jsx("div",{className:`fixed flex flex-col mt-2 
            drop-shadow-xl border-[1px] border-slate-300 dark:border-default-18-dark ring-[0.4px] ring-orange-300 bg-default-2 dark:bg-default-5-dark
            rounded-xl p-4 dark:text-orange-50 text-default-10-dark text-base gap-2 transition-opacity duration-500
            ${t?"opacity-100":"opacity-0 pointer-events-none"}`,children:A(re)})}const M=t=>{const{isActive:a}=t;return a?"text-orange-400":"dark:text-default-7 text-default-10-dark"};function le({isCategoryOpen:t,setIsCategoryOpen:a,className:l}){const o=w(),d=f(C),u=P(),m=s.useMemo(()=>u.pathname.startsWith("/blog/categories/")||u.pathname.startsWith("/blog/recent-posts/pages/1"),[u.pathname]),i=s.useMemo(()=>m?"text-orange-400":"text-default-10-dark dark:text-default-7",[m]);return e.jsxs("nav",{className:`dark:bg-default-5-dark bg-default-2 pointer-events-auto
                        shadow-xl dark:shadow-lg dark:shadow-black/40 border-[1px] border-slate-300 dark:border-default-18-dark ring-[0.4px] ring-orange-300
                        flex-row items-center gap-5 px-4 font-medium  dark:font-medium
                        rounded-full h-fit py-2 text-[0.8125rem] ${l}`,children:[e.jsx(E,{to:"/",className:M,end:!0,children:"Home"}),e.jsx("a",{href:"https://jeheecheon.com",className:`cursor-pointer ${M({isActive:!1,isPending:!1,isTransitioning:!1})}`,children:"Portfolio"}),e.jsxs("div",{children:[e.jsxs("button",{id:"categories-button",className:`flex flex-row items-center w-fit h-fit font-medium ${i}`,onClick:()=>a(!t),children:["Categories  ",e.jsx("p",{className:"text-[9px]",children:e.jsx(I,{className:`${m?"stroke-orange-400":"stroke-default-10-dark dark:stroke-default-7"} relative top-[2.5px] w-[13px] ${t&&"rotate-180"} transition-transform`})})]}),e.jsx(oe,{isCategoryOpen:t})]}),e.jsx("button",{className:`dark:text-default-7 text-default-10-dark ${d&&"font-medium"}`,onClick:()=>{d?S():o(L())},children:d?"Sign-out":"Sign-in"})]})}const ie=["/blog/post/edit"],ke=()=>{const t=s.useRef(0),[a,l]=s.useState(!1),[o,d]=s.useState(!1),u=P(),m=s.useMemo(()=>!ie.includes(u.pathname),[u.pathname]),i=s.useRef(null),c=s.useRef(!1),x=s.useRef(0);s.useEffect(()=>(document.addEventListener("scroll",p),document.addEventListener("click",h=>{const g=h.target;g&&g.id!=="categories-button"&&l(!1)}),()=>{document.removeEventListener("scroll",p)})),s.useEffect(()=>{l(!1),d(!1)},[u.pathname]);const p=()=>{l(!1),t.current<window.scrollY?(c.current||(x.current=window.scrollY),c.current=!0):(c.current&&(x.current=window.scrollY),c.current=!1),Math.abs(window.scrollY-x.current)>100&&(c.current?(i.current.classList.add("animate-header-hide-up"),i.current.classList.remove("animate-header-show-down")):(i.current.classList.remove("animate-header-hide-up"),i.current.classList.add("animate-header-show-down"))),t.current=window.scrollY};return e.jsxs(e.Fragment,{children:[e.jsx(te,{isOpen:o,setIsOpen:d}),e.jsx("header",{ref:i,className:`fixed top-0 left-0 mt-[13px] w-[100%] z-30 pointer-events-none animate-header-show-down
                    ${!m&&"hidden"}`,children:e.jsxs("div",{className:`max-w-[1050px] sm:mx-[30px] md:mx-[30px] lg:mx-[60px] xl:mx-auto px-3 md:px-10\r
                    flex items-center justify-between`,children:[e.jsx(b,{to:"/",className:"pointer-events-auto rounded-full shadow-lg dark:shadow-black/50 shadow-gray-400/80",children:e.jsx(G,{avatar:Q,size:50,className:"ring-[2.5px] ring-orange-200 border-[1px] border-transparent"})}),e.jsxs("button",{className:`navbar:hidden pointer-events-auto overflow-visible dark:shadow-black/35\r
                        group ml-auto mr-5 flex flex-row items-center dark:bg-default-5-dark bg-default-2\r
                        shadow-lg border-[1px] border-slate-300 dark:border-default-18-dark ring-[0.4px] ring-orange-300\r
                        rounded-full h-fit py-2 text-sm px-4 font-medium text-default-14-dark dark:text-default-10`,onClick:()=>d(!o),children:["Menu  ",e.jsx(I,{className:`stroke-default-10-dark dark:stroke-default-13-dark relative top-[2px] w-[13px] ${o&&"rotate-180"} transition-transform`})]}),e.jsx(le,{isCategoryOpen:a,setIsCategoryOpen:l,className:"navbar:flex hidden"}),e.jsx(ne,{})]})})]})},de=({isOn:t,onClick:a,switchId:l,buttonId:o})=>e.jsx("div",{id:l,className:`dark:bg-default-10-dark bg-default-3 border-stone-400 border-[1px]\r
            w-[44px] flex rounded-full px-[2px] h-fit`,onClick:a,children:e.jsx("button",{id:o,className:`inline-block rounded-full my-[2px] h-[15px] w-[15px] relative transition-transform
            bg-stone-500/85 dark:bg-default-9 ${t&&"translate-x-[23px]"}`})}),ce=t=>s.createElement("svg",{width:21,height:20,viewBox:"0 0 25 24",xmlns:"http://www.w3.org/2000/svg",...t},s.createElement("path",{className:"pointer-events-none",d:"M20.74 7.22006V16.7901C20.74 18.7501 18.61 19.9801 16.91 19.0001L12.76 16.6101L8.60996 14.2101C6.90996 13.2301 6.90996 10.7801 8.60996 9.80006L12.76 7.40006L16.91 5.01006C18.61 4.03006 20.74 5.25006 20.74 7.22006Z"}),s.createElement("path",{className:"pointer-events-none",d:"M4.26001 18.9301C3.85001 18.9301 3.51001 18.5901 3.51001 18.1801V5.82007C3.51001 5.41007 3.85001 5.07007 4.26001 5.07007C4.67001 5.07007 5.01001 5.41007 5.01001 5.82007V18.1801C5.01001 18.5901 4.67001 18.9301 4.26001 18.9301Z"})),xe=t=>s.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",xmlns:"http://www.w3.org/2000/svg",id:"music-play-button",...t},s.createElement("path",{className:"pointer-events-none",d:"M4.5 11.9999V8.43989C4.5 4.01989 7.63 2.2099 11.46 4.4199L14.55 6.1999L17.64 7.9799C21.47 10.1899 21.47 13.8099 17.64 16.0199L14.55 17.7999L11.46 19.5799C7.63 21.7899 4.5 19.9799 4.5 15.5599V11.9999Z",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),ue=t=>s.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",xmlns:"http://www.w3.org/2000/svg",id:"music-pause-button",...t},s.createElement("path",{className:"pointer-events-none",d:"M11.15 19.11V4.89C11.15 3.54 10.58 3 9.14 3H5.51C4.07 3 3.5 3.54 3.5 4.89V19.11C3.5 20.46 4.07 21 5.51 21H9.14C10.58 21 11.15 20.46 11.15 19.11Z"}),s.createElement("path",{className:"pointer-events-none",d:"M21.5 19.11V4.89C21.5 3.54 20.93 3 19.49 3H15.86C14.43 3 13.85 3.54 13.85 4.89V19.11C13.85 20.46 14.42 21 15.86 21H19.49C20.93 21 21.5 20.46 21.5 19.11Z"})),me=t=>s.createElement("svg",{width:21,height:20,viewBox:"0 0 25 24",xmlns:"http://www.w3.org/2000/svg",...t},s.createElement("path",{className:"pointer-events-none",d:"M4.26001 7.22006V16.7901C4.26001 18.7501 6.39001 19.9801 8.09001 19.0001L12.24 16.6101L16.39 14.2101C18.09 13.2301 18.09 10.7801 16.39 9.80006L12.24 7.40006L8.09001 5.01006C6.39001 4.03006 4.26001 5.25006 4.26001 7.22006Z"}),s.createElement("path",{className:"pointer-events-none",d:"M20.74 18.9301C20.33 18.9301 19.99 18.5901 19.99 18.1801V5.82007C19.99 5.41007 20.33 5.07007 20.74 5.07007C21.15 5.07007 21.49 5.41007 21.49 5.82007V18.1801C21.49 18.5901 21.16 18.9301 20.74 18.9301Z"})),fe=({className:t})=>{const a=f(Z),l=f(z),o=f(O),d=f(F),u=f(Y),m=f(U),i=f(J),c=w(),[x,p]=s.useState(),[h,g]=s.useState(),[k,v]=s.useState(),[R,$]=s.useState();s.useEffect(()=>{const r=Math.floor(o/60);p(r.toString().length==2?r.toString():"0"+r);const n=Math.floor(o%60);g(n.toString().length==2?n.toString():"0"+n)},[o]),s.useEffect(()=>{const r=Math.floor(d/60);v(r.toString().length==2?r.toString():"0"+r);const n=Math.floor(d%60);$(n.toString().length==2?n.toString():"0"+n)},[d]);const D=()=>{const r=document.getElementById("music-player");r&&r.id!=="music-toggle-switch"&&r.play()},T=()=>{const r=document.getElementById("music-player");r&&r.id!=="music-toggle-switch"&&document.getElementById("music-player").pause()},B=()=>{const r=(m+1)%i.length;c(j(r));const n=document.getElementById("music-player");n!=null&&(n.setAttribute("src",i[r]),n.pause(),n.load(),n.play())},V=()=>{const r=m-1<0?i.length-1:m-1;c(j(r));const n=document.getElementById("music-player");n!=null&&(n.setAttribute("src",i[r]),n.pause(),n.load(),n.play())};return e.jsxs("div",{className:`flex flex-col justify-center items-center w-[250px] ${t}`,children:[e.jsx("div",{className:"flex flex-col",children:e.jsx("p",{className:"text-sm text-nowrap text-stone-400 dark:text-default-18-dark ",children:`${x}:${h} / ${k}:${R}`})}),e.jsx("div",{className:"flex flex-row w-full items-center gap-3",children:e.jsx("div",{className:"mask-image overflow-x-hidden w-full",children:e.jsx("p",{className:`dark:text-default-18 text-default-18 text-sm\r
                    italic text-nowrap inline-block w-full -translate-x-[150 animate-infinite-x-scroll`,children:l})})}),e.jsxs("div",{className:"fill-orange-400/65 dark:fill-orange-400/95  flex justify-between gap-3 mt-1",children:[e.jsx("button",{onClick:V,children:e.jsx(ce,{})}),u?e.jsx("button",{onClick:T,children:e.jsx(ue,{})}):e.jsx("button",{onClick:D,children:e.jsx(xe,{})}),e.jsx("button",{onClick:B,children:e.jsx(me,{})})]}),e.jsxs("div",{className:"flex-row items-center justify-center gap-2 mt-[10px] hidden",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("p",{className:"text-[12.5px] text-stone-500 dark:text-default-13 font-semibold",children:a?"On":"Off"}),e.jsx("p",{className:"text-[10px] text-stone-500 dark:text-default-13 font-medium",children:"Auto Play"})]}),e.jsx(de,{switchId:"music-toggle-switch",buttonId:"music-toggle-switch-button",isOn:a,onClick:()=>c(q(!a))})]})]})},ve=({className:t})=>e.jsxs("footer",{className:`border-t-[1px] border-t-default-8 dark:border-t-default-8-dark
            flex flex-col items-center pt-[30px] pb-[30px] 
            ${t}`,children:[e.jsx(fe,{}),e.jsxs(b,{to:"/",className:"flex items-end mt-10",children:[e.jsx("span",{className:"text-xs md:text-sm font-semibold dark:font-bold text-gray-500/80 dark:text-default-6 italic",children:"BLOG"}),e.jsx("span",{className:"text:xs md:text-lg text-orange-400/70 dark:text-orange-400 mx-[2px] font-extrabold italic",children:":"}),e.jsx("span",{className:"text-xl md:text-2xl text-orange-400/70 dark:text-orange-400 font-bold dark:font-bold italic md:underline-offset-2",children:"jeheecheon"})]}),e.jsxs("div",{className:"flex mt-3 text-xs md:text-sm",children:[e.jsx("p",{className:"text-gray-500/85 dark:text-default-6",children:"All designed and developed by "}),e.jsx(b,{to:"/post/edit",className:"cursor-text text-orange-400/70 dark:text-orange-400 font-bold",children:'"jeheecheon"'})]}),e.jsx("p",{className:"text-gray-500/45 dark:text-default-16-dark text-xs md:text-sm",children:"© 2024-present Jehee Cheon. All Rights Reserved."})]});export{ve as F,ke as H};
