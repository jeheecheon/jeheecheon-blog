import{b as m,j as e,M as d,R as p,r as o,J as g,I as f,L as u,P as j,Q as h,d as l,f as v}from"./index-_p9XNSB2.js";import{S as w,C as y,w as $,E as b,a as k}from"./promiseWrapper-rn7XFmpB.js";import{S as N}from"./like-filled-f4zeLfQp.js";import{H as S,n,u as c,d as i}from"./index.esm-SY2J5duG.js";const C=({className:t,post:s})=>{const r=m(a=>a.category.leafCategories);return e.jsxs("article",{className:`h-fit w-full cursor-pointer py-6 px-2 ${t}`,children:[e.jsx("div",{className:`flex justify-between text-slate-400 dark:text-slate-500 text-[0.69rem]\r
            group-hover:scale-[104%] transition-all duration-1000`,children:s.UploadedAt.toLocaleDateString()}),e.jsx("div",{className:`font-semibold text-base sm:text-lg md:text-xl break-all transition-all duration-1000 \r
                text-gray-500/95 dark:text-default-13 group-hover:scale-[106%] \r
                group-hover:text-default-18-dark dark:group-hover:text-default-5`,children:s.Title}),e.jsxs("div",{className:`flex flex-row justify-start items-end mt-2 text-stone-500 dark:text-default-14\r
            group-hover:scale-[104%] transition-all duration-1000`,children:[e.jsx("div",{className:"text-orange-400/70 dark:text-orange-400 font-medium text-pretty text-[0.8rem]",children:r&&d(r.find(a=>a.Id===s.CategoryId))}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsxs("div",{className:"flex flex-row items-center gap-1 font-[500]",children:[e.jsx(w,{className:"fill-orange-400 dark:fill-orange-500"}),e.jsx("span",{className:"text-sm w-[17px]",children:s.CommentCnt})]}),e.jsxs("div",{className:"flex flex-row items-center gap-1 font-[500]",children:[e.jsx(N,{className:"fill-orange-500 dark:fill-red-500"}),e.jsx("span",{className:"text-sm w-[17px]",children:s.LikeCnt})]})]})]})]})},P=p.memo(({postsAwaiter:t})=>{const s=t.Await(),r=o.useMemo(()=>g(f([...s])),[s]);return e.jsx("nav",{className:"flex flex-col items-center mt-[30px] md:mt-[50px] w-full",children:r.map(a=>e.jsx(u,{to:`/blog/post/${a.Id}/${j(a.Title)}`,className:`w-full border-b-[1px] dark:border-default-12-dark border-default-10 \r
                    group`,preventScrollReset:!1,children:e.jsx(C,{post:a})},a.Id))})}),L=()=>{const{category:t,page:s}=h(),r=o.useMemo(()=>t===void 0?`${l}/api/blog/recent-posts/pages/${s}`:`${l}/api/blog/categories/${t}/pages/${s}`,[t,s]),[a,x]=o.useState(y());return o.useEffect(()=>{x($(fetch(r,{credentials:"include"})))},[r]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mx-auto max-w-[800px] min-h-[35vh]",children:[e.jsxs("h1",{className:"w-full text-left text-balance pt-[0px]",children:[e.jsx("p",{className:"text-gray-500/85 dark:text-default-8 text-sm md:text-base font-[600]",children:t?"CATEGORY":"POSTS"}),e.jsx("p",{className:"text-orange-400/70 dark:text-orange-400/90 text-xl sm:text-2xl md:text-3xl uppercase font-[600]",children:t||"recently published"})]}),e.jsx(b,{fallback:e.jsx(k,{children:"404 Not Found Page"}),children:e.jsx(o.Suspense,{fallback:e.jsx(v,{children:"Posts Loading..!"}),children:e.jsx(P,{postsAwaiter:a})})}),e.jsx("div",{className:"h-[50px]"})]}),e.jsxs(S,{children:[e.jsxs("title",{children:[t||"Recent posts"," | ",n]}),e.jsx("link",{rel:"canonical",href:`${c}/blog/${t?"categories/"+t:"recent-posts"}/pages/${s}`}),e.jsx("meta",{name:"description",content:`${t?t+" posts":"Recent posts"}`}),e.jsx("meta",{name:"keywords",content:`jeheecheon, tech, blog, posts, ${t}`}),e.jsx("meta",{name:"author",content:"jeheecheon"}),e.jsx("meta",{property:"og:title",content:`${t?t+" posts":"Recent posts"} | ${n}`}),e.jsx("meta",{property:"og:description",content:`${t?t+" posts":"Recent posts"} | ${n}`}),e.jsx("meta",{property:"og:image",content:i}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:"jeheecheon"}),e.jsx("meta",{property:"og:locale",content:"ko_KR"}),e.jsx("meta",{property:"og:url",content:`${c}/blog/${t?"categories/"+t:"recent-posts"}/pages/${s}`}),e.jsx("meta",{name:"twitter:title",content:t||`Recent posts | ${n}`}),e.jsx("meta",{name:"twitter:card",content:"summary"}),e.jsx("meta",{name:"twitter:description",content:`${t?t+" posts":"Recent posts"}`}),e.jsx("meta",{name:"twitter:image",content:i})]})]})};export{L as default};