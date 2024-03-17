import{u as o,r,M as v,j as t,a as j,b as B,f as D}from"./index-CgXAQxjc.js";import{G as P,s as $,a as G,C as N,b as O,B as K}from"./Catalog.styled-DifXHzzU.js";function V(e){return P({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const Y=o.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${e=>e.specialLook?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)"};
    /* width: 100vw;
     height: 100vh; */
    &:hover {
        cursor: pointer;
    }
    .modal {
        padding: 40px;
        max-width: 541px;
        width: 100%;
        /* min-height: 450px; */
        background-color: white;
        border-radius: 24px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:hover {
            cursor: auto;
        }
    }
`,q=o(V)`
    font-size: 24px;
    color: #121417;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        transform: rotate(90deg);
        color: #3470ff;
    }
`,H=o.div`
    width: 100%;
    margin-bottom: 14px;
`,J=o.img`
    max-width: 461px;
    width: 100%;
    height: 248px;

    border-radius: 14px;
    background: #f3f3f2;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,Q=o.div`
    width: 100%;
    max-width: 277px;
    margin-bottom: 14px;
`,U=o.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
`,X=o.span`
    color: #3470ff;
`,Z=o.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,_=o.p`
    margin-bottom: 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,tt=o.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,ot=o.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,et=o.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,it=o.div`
    width: 100%;

    margin-bottom: 8px;
`,nt=o.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,st=o.div`
    width: 100%;
    max-width: 461px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`,a=o.div`
    border-radius: 35px;
    padding: 7px 22px;

    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background: #f9f9f9;
`,u=o.span`
    font-weight: 600;
    color: #3470ff;
`,at=o.a`
    display: block;
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;

    text-decoration: none;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    background: #3470ff;
    transition: background-color 0.3s ease;
    &:hover {
        cursor: pointer;
        background: #0b44cd;
    }
`,rt=()=>{const{modalData:e,closeModal:n}=r.useContext(v),{img:d,photoLink:l,description:c,make:p,model:h,year:i,address:f,fuelConsumption:y,engineSize:M,accessories:x,functionalities:m,type:C,id:k,rentalConditions:z,mileage:I,rentalPrice:T}=e,b=f.split(","),A=b[1].trim(),E=b[2].trim(),g=z.split(`
`),w=g[0],R=w.split(":")[0].trim(),W=w.split(":")[1].trim(),L=T.replace("$","");r.useEffect(()=>{const s=F=>{F.code==="Escape"&&n()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s),document.body.style.overflow="auto"}},[n]);const S=s=>{s.target===s.currentTarget&&n()};return t.jsx(Y,{onClick:S,children:t.jsxs("div",{className:"modal",children:[t.jsx(q,{onClick:n,children:"×"}),t.jsx(H,{children:t.jsx(J,{src:d||l,alt:c})}),t.jsxs(Q,{children:[t.jsxs(U,{children:[p," ",t.jsx(X,{children:h}),","," ",i]}),t.jsxs(Z,{children:[A," | ",E," | Id: ",k," | Year: ",i," | Type:"," ",C," Fuel Consumption: ",y," | Engine Size: ",M]})]}),t.jsx(_,{children:c}),t.jsx(tt,{children:"Accessories and functionalities:"}),t.jsxs(ot,{children:[x[0]," | ",x[1]," | ",x[2]]}),t.jsxs(et,{children:[m[0]," | ",m[1]," |",m[2]]}),t.jsx(it,{children:t.jsx(nt,{children:"Rental Conditions:"})}),t.jsxs(st,{children:[t.jsxs(a,{children:[R," : ",t.jsx(u,{children:W})]}),t.jsx(a,{children:g[1]}),t.jsx(a,{children:g[2]}),t.jsxs(a,{children:["Mileage: ",t.jsx(u,{children:I.toLocaleString()})]}),t.jsxs(a,{children:["Price: ",t.jsxs(u,{children:[L,"$"]})]})]}),t.jsx(at,{href:"tel:+380730000000",children:"Rental car"})]})})},dt=()=>{const e=j($),n=B(),{isOpenModal:d}=r.useContext(v),[l,c]=r.useState(12),p=j(G);r.useEffect(()=>{n(D())},[n]);const h=()=>{c(i=>i+12)};return t.jsxs("div",{children:[t.jsx("p",{children:"Catalog"}),t.jsx(N,{children:e.slice(0,l).map(i=>t.jsx("li",{children:t.jsx(O,{item:i,isFavorite:p.some(f=>f.id===i.id)})},i.id))}),e.length>l&&t.jsx(K,{onClick:h,children:"Load More"}),d&&t.jsx(rt,{})]})};export{dt as default};
