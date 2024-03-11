import{u as r,r as o,M as m,j as e,a as k,b as E,f as M}from"./index-CP-qhO2y.js";const T=t=>t.cars.items,L=r.div`
    max-width: 274px;
`,P=r.div`
    width: 100%;
`,R=r.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,W=r.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,D=r.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,B=r.span`
    color: #3470ff;
`,I=r.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,S=r.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`,n=r.div`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,a=r.div`
    width: 1px;
    color: rgba(18, 20, 23, 0.1);
`,z=r.div`
    width: 100%;
`,$=r.button`
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
`,A=({item:t})=>{const{openModal:s}=o.useContext(m),c=t.address.split(","),l=c[1].trim(),d=c[2].trim(),p=t.accessories.some(v=>v.toLowerCase().includes("premium")),h=t.accessories[0].split(" ").slice(0,2).join(" "),{img:i,photoLink:x,description:j,make:g,model:u,year:w,rentalPrice:b,rentalCompany:C,type:f,id:y}=t;return e.jsxs(L,{children:[e.jsx(P,{children:e.jsx(R,{src:i||x||"https://images.pexels.com/photos/1592384",alt:j})}),e.jsxs(W,{children:[e.jsxs(D,{children:[g," ",e.jsx(B,{children:u}),", ",w]}),e.jsx(I,{children:b})]}),e.jsxs(S,{children:[e.jsx(n,{children:l}),e.jsx(a,{children:"|"}),e.jsx(n,{children:d}),e.jsx(a,{children:"|"}),e.jsx(n,{children:C}),e.jsx(a,{children:"|"}),p?e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Premium"}),e.jsx(n,{children:f})]}):e.jsx(n,{children:f}),e.jsx(a,{children:"|"}),e.jsx(n,{children:u}),e.jsx(a,{children:"|"}),e.jsx(n,{children:y}),e.jsx(a,{children:"|"}),e.jsx(n,{children:h})]}),e.jsx(z,{children:e.jsx($,{type:"button",onClick:()=>s({img:i,photoLink:x,description:j,make:g,model:u,year:w,rentalPrice:b,rentalCompany:C,type:f,id:y}),children:"Learn more"})})]})},N=r.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
`,O=r.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${t=>t.specialLook?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)"};
    /* width: 100vw;
     height: 100vh; */
    &:hover {
        cursor: pointer;
    }
    .modal {
        padding: 20px;
        max-width: 450px;
        width: 100%;
        min-height: 450px;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:hover {
            cursor: auto;
        }
    }

    .closeBtn {
        position: absolute;
        top: 15px;
        right: 15px;
    }
`,F=()=>{const{modalData:t,closeModal:s}=o.useContext(m),[c,l]=o.useState(1),d=o.useRef(null),p=o.useRef(!0);o.useEffect(()=>{const i=x=>{x.code==="Escape"&&s()};return window.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow="auto"}},[s]);const h=i=>{i.target===i.currentTarget&&s()};return o.useEffect(()=>{d.current&&d.current.focus()},[]),o.useEffect(()=>(p.current===!1&&console.log("counter changed",c),()=>{p.current=!1}),[c]),e.jsx(O,{onClick:h,children:e.jsxs("div",{className:"modal",children:[e.jsx("button",{onClick:s,className:"closeBtn",children:"❌"}),e.jsx("h2",{children:"Car Details"}),e.jsxs("div",{children:[e.jsxs("h3",{children:["Title: ",t.make]}),e.jsxs("p",{children:["Price: ",t.type,"$"]}),e.jsxs("p",{children:["Discount: ",t.rentalPrice,"$"]})]})]})})},q=()=>{const t=k(T),s=E(),{isOpenModal:c}=o.useContext(m);return o.useEffect(()=>{s(M())},[s]),e.jsxs("div",{children:[e.jsx("p",{children:"Catalog"}),e.jsx(N,{children:t.map(l=>e.jsx("li",{children:e.jsx(A,{item:l})},l.id))}),c&&e.jsx(F,{})]})};export{q as default};
