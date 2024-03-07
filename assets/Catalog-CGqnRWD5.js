import{u as e,j as t,a as c,b as l,r as p,f as d}from"./index-BqYPegEd.js";const x=r=>r.cars.items,f=e.div`
    max-width: 274px;
`,h=e.div`
    width: 100%;
`,j=e.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,g=e.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,m=e.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,y=e.span`
    color: #3470ff;
`,u=e.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,C=e.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`,n=e.div`
    font-family: Manrope;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
`,i=e.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
`,w=({item:r})=>{const s=r.address.split(","),a=s[1].trim(),o=s[2].trim();return t.jsxs(f,{children:[t.jsx(h,{children:t.jsx(j,{src:r.img,alt:r.description})}),t.jsxs(g,{children:[t.jsxs(m,{children:[r.make," ",t.jsx(y,{children:r.model}),","," ",r.year]}),t.jsx(u,{children:r.rentalPrice})]}),t.jsxs(C,{children:[t.jsx(n,{children:a}),t.jsx(i,{children:"|"}),t.jsx(n,{children:o}),t.jsx(i,{children:"|"}),t.jsx(n,{children:r.rentalCompany}),t.jsx(n,{children:r.type})]})]})},v=e.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
`,z=()=>{const r=c(x),s=l();return p.useEffect(()=>{s(d())},[s]),t.jsxs("div",{children:[t.jsx("p",{children:"Catalog"}),t.jsx(v,{children:r.map(a=>t.jsx("li",{children:t.jsx(w,{item:a})},a.id))})]})};export{z as default};
