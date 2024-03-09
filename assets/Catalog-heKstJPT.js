import{u as e,j as r,a as p,b as x,r as h,f as j}from"./index-F51HyJFq.js";const f=s=>s.cars.items,g=e.div`
    max-width: 274px;
`,m=e.div`
    width: 100%;
`,u=e.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,w=e.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,b=e.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,y=e.span`
    color: #3470ff;
`,C=e.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,v=e.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`,t=e.div`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,o=e.div`
    width: 1px;
    color: rgba(18, 20, 23, 0.1);
`,W=e.div`
    width: 100%;
`,k=e.button`
    display: inline-block;
    text-align: center;
    border-radius: 12px;
    border: none;
    width: 274px;
    height: 44px;
    color: white;
    background: #3470ff;

    &:hover {
        cursor: pointer;
        background: #0b44cd;
    }
`,T=({item:s})=>{const n=s.address.split(","),i=n[1].trim(),c=n[2].trim(),a=s.accessories.some(d=>d.toLowerCase().includes("premium")),l=s.accessories[0].split(" ").slice(0,2).join(" ");return r.jsxs(g,{children:[r.jsx(m,{children:r.jsx(u,{src:s.img||s.photoLink||"https://images.pexels.com/photos/1592384",alt:s.description})}),r.jsxs(w,{children:[r.jsxs(b,{children:[s.make," ",r.jsx(y,{children:s.model}),","," ",s.year]}),r.jsx(C,{children:s.rentalPrice})]}),r.jsxs(v,{children:[r.jsx(t,{children:i}),r.jsx(o,{children:"|"}),r.jsx(t,{children:c}),r.jsx(o,{children:"|"}),r.jsx(t,{children:s.rentalCompany}),r.jsx(o,{children:"|"}),a?r.jsxs(r.Fragment,{children:[r.jsx(t,{children:"Premium"}),r.jsx(t,{children:s.type})]}):r.jsx(t,{children:s.type}),r.jsx(o,{children:"|"}),r.jsx(t,{children:s.model}),r.jsx(o,{children:"|"}),r.jsx(t,{children:s.id}),r.jsx(o,{children:"|"}),r.jsx(t,{children:l})]}),r.jsx(W,{children:r.jsx(k,{type:"button",children:"Learn more"})})]})},I=e.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
`,z=()=>{const s=p(f),n=x();return h.useEffect(()=>{n(j())},[n]),r.jsxs("div",{children:[r.jsx("p",{children:"Catalog"}),r.jsx(I,{children:s.map(i=>r.jsx("li",{children:r.jsx(T,{item:i})},i.id))})]})};export{z as default};
