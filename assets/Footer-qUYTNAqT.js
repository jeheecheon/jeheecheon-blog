import{j as e,r as n,b as l,k as E,M as L,Q as P,T,U as I,m as V,l as B,h as R,V as Z,z as u,L as h}from"./index-J7EXfviQ.js";const $=({isOn:a,onClick:r,switchId:c,buttonId:i})=>e.jsx("div",{id:c,className:`dark:bg-default-10-dark bg-default-3 border-stone-400 border-[0.0625rem]\r
            w-[2.75rem] flex rounded-full px-[0.125rem] h-fit`,onClick:r,children:e.jsx("button",{id:i,className:`inline-block rounded-full my-[0.125rem] h-[0.9375rem] w-[0.9375rem] relative transition-transform
                bg-stone-500/85 dark:bg-default-9 ${a&&"translate-x-[20.1875rem]"}`})}),A=a=>n.createElement("svg",{width:21,height:20,viewBox:"0 0 25 24",xmlns:"http://www.w3.org/2000/svg",...a},n.createElement("path",{className:"pointer-events-none",d:"M20.74 7.22006V16.7901C20.74 18.7501 18.61 19.9801 16.91 19.0001L12.76 16.6101L8.60996 14.2101C6.90996 13.2301 6.90996 10.7801 8.60996 9.80006L12.76 7.40006L16.91 5.01006C18.61 4.03006 20.74 5.25006 20.74 7.22006Z"}),n.createElement("path",{className:"pointer-events-none",d:"M4.26001 18.9301C3.85001 18.9301 3.51001 18.5901 3.51001 18.1801V5.82007C3.51001 5.41007 3.85001 5.07007 4.26001 5.07007C4.67001 5.07007 5.01001 5.41007 5.01001 5.82007V18.1801C5.01001 18.5901 4.67001 18.9301 4.26001 18.9301Z"})),D=a=>n.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",xmlns:"http://www.w3.org/2000/svg",id:"music-play-button",...a},n.createElement("path",{className:"pointer-events-none",d:"M4.5 11.9999V8.43989C4.5 4.01989 7.63 2.2099 11.46 4.4199L14.55 6.1999L17.64 7.9799C21.47 10.1899 21.47 13.8099 17.64 16.0199L14.55 17.7999L11.46 19.5799C7.63 21.7899 4.5 19.9799 4.5 15.5599V11.9999Z",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),F=a=>n.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",xmlns:"http://www.w3.org/2000/svg",id:"music-pause-button",...a},n.createElement("path",{className:"pointer-events-none",d:"M11.15 19.11V4.89C11.15 3.54 10.58 3 9.14 3H5.51C4.07 3 3.5 3.54 3.5 4.89V19.11C3.5 20.46 4.07 21 5.51 21H9.14C10.58 21 11.15 20.46 11.15 19.11Z"}),n.createElement("path",{className:"pointer-events-none",d:"M21.5 19.11V4.89C21.5 3.54 20.93 3 19.49 3H15.86C14.43 3 13.85 3.54 13.85 4.89V19.11C13.85 20.46 14.42 21 15.86 21H19.49C20.93 21 21.5 20.46 21.5 19.11Z"})),H=a=>n.createElement("svg",{width:21,height:20,viewBox:"0 0 25 24",xmlns:"http://www.w3.org/2000/svg",...a},n.createElement("path",{className:"pointer-events-none",d:"M4.26001 7.22006V16.7901C4.26001 18.7501 6.39001 19.9801 8.09001 19.0001L12.24 16.6101L16.39 14.2101C18.09 13.2301 18.09 10.7801 16.39 9.80006L12.24 7.40006L8.09001 5.01006C6.39001 4.03006 4.26001 5.25006 4.26001 7.22006Z"}),n.createElement("path",{className:"pointer-events-none",d:"M20.74 18.9301C20.33 18.9301 19.99 18.5901 19.99 18.1801V5.82007C19.99 5.41007 20.33 5.07007 20.74 5.07007C21.15 5.07007 21.49 5.41007 21.49 5.82007V18.1801C21.49 18.5901 21.16 18.9301 20.74 18.9301Z"})),O=({className:a})=>{const r=l(E),c=l(L),i=l(P),d=l(T),f=l(I),m=l(V),o=l(B),x=R(),[g,p]=n.useState(),[w,v]=n.useState(),[j,k]=n.useState(),[C,y]=n.useState();n.useEffect(()=>{const s=Math.floor(i/60);p(s.toString().length==2?s.toString():"0"+s);const t=Math.floor(i%60);v(t.toString().length==2?t.toString():"0"+t)},[i]),n.useEffect(()=>{const s=Math.floor(d/60);k(s.toString().length==2?s.toString():"0"+s);const t=Math.floor(d%60);y(t.toString().length==2?t.toString():"0"+t)},[d]);const b=()=>{const s=document.getElementById("music-player");s&&s.id!=="music-toggle-switch"&&s.play()},N=()=>{const s=document.getElementById("music-player");s&&s.id!=="music-toggle-switch"&&document.getElementById("music-player").pause()},M=()=>{const s=(m+1)%o.length;x(u(s));const t=document.getElementById("music-player");t!=null&&(t.setAttribute("src",o[s]),t.pause(),t.load(),t.play())},S=()=>{const s=m-1<0?o.length-1:m-1;x(u(s));const t=document.getElementById("music-player");t!=null&&(t.setAttribute("src",o[s]),t.pause(),t.load(),t.play())};return e.jsxs("div",{className:`flex flex-col justify-center items-center w-[15.625rem] ${a}`,children:[e.jsx("div",{className:"flex flex-col",children:e.jsx("p",{className:"text-sm text-nowrap text-stone-400 dark:text-default-18-dark ",children:`${g}:${w} / ${j}:${C}`})}),e.jsx("div",{className:"flex flex-row w-full items-center gap-3",children:e.jsx("div",{className:"mask-image overflow-x-hidden w-full",children:e.jsx("p",{className:`dark:text-default-18 text-default-18 text-sm\r
                        italic text-nowrap inline-block w-full -translate-x-[150 animate-infinite-x-scroll`,children:c})})}),e.jsxs("div",{className:"fill-orange-400/65 dark:fill-orange-400/95  flex justify-between gap-3 mt-1",children:[e.jsx("button",{onClick:S,children:e.jsx(A,{})}),f?e.jsx("button",{onClick:N,children:e.jsx(F,{})}):e.jsx("button",{onClick:b,children:e.jsx(D,{})}),e.jsx("button",{onClick:M,children:e.jsx(H,{})})]}),e.jsxs("div",{className:"flex-row items-center justify-center gap-2 mt-[0.625rem] hidden",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("p",{className:"text-[0.78125rem] text-stone-500 dark:text-default-13 font-semibold",children:r?"On":"Off"}),e.jsx("p",{className:"text-[0.625rem] text-stone-500 dark:text-default-13 font-medium",children:"Auto Play"})]}),e.jsx($,{switchId:"music-toggle-switch",buttonId:"music-toggle-switch-button",isOn:r,onClick:()=>x(Z(!r))})]})]})},G=({className:a})=>e.jsxs("footer",{className:`border-t-[0.0625rem] border-t-default-8 dark:border-t-default-8-dark
            flex flex-col items-center pt-[1.875rem] pb-[1.875rem]
            ${a}`,children:[e.jsx(O,{}),e.jsxs(h,{to:"/",className:"flex items-end mt-10",children:[e.jsx("span",{className:"text-xs md:text-sm font-semibold dark:font-bold text-gray-500/80 dark:text-default-6 italic",children:"BLOG"}),e.jsx("span",{className:"text:xs md:text-lg text-orange-400/70 dark:text-orange-400 mx-[0.125rem] font-extrabold italic",children:":"}),e.jsx("span",{className:"text-xl md:text-2xl text-orange-400/70 dark:text-orange-400 font-bold dark:font-bold italic md:underline-offset-2",children:"jeheecheon"})]}),e.jsxs("div",{className:"flex mt-3 text-xs md:text-sm",children:[e.jsx("p",{className:"text-gray-500/85 dark:text-default-6",children:"All designed and developed by "}),e.jsx(h,{to:"/post/edit",className:"cursor-text text-orange-400/70 dark:text-orange-400 font-bold",children:'"jeheecheon"'})]}),e.jsx("p",{className:"text-gray-500/45 dark:text-default-16-dark text-xs md:text-sm",children:"© 2024-present Jehee Cheon. All Rights Reserved."})]});export{G as F};