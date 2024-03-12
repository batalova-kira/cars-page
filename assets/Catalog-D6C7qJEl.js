import{u as i,r as c,M as C,j as n,R as p,a as T,b as W,f as N}from"./index-B_qsZx4s.js";const D=e=>e.cars.items,L=i.div`
    max-width: 274px;
`,R=i.div`
    width: 100%;
`,_=i.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,A=i.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,B=i.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,K=i.span`
    color: #3470ff;
`,F=i.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,G=i.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`,d=i.div`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,h=i.div`
    width: 1px;
    color: rgba(18, 20, 23, 0.1);
`,$=i.div`
    width: 100%;
`,q=i.button`
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
`,H=({item:e})=>{const{openModal:t}=c.useContext(C),r=e.address.split(","),o=r[1].trim(),s=r[2].trim(),a=e.accessories.some(f=>f.toLowerCase().includes("premium")),m=e.accessories[0].split(" ").slice(0,2).join(" "),{img:u,photoLink:l,description:b,make:y,model:x,year:O,rentalPrice:P,rentalCompany:k,type:v,id:w}=e;return n.jsxs(L,{children:[n.jsx(R,{children:n.jsx(_,{src:u||l,alt:b})}),n.jsxs(A,{children:[n.jsxs(B,{children:[y," ",n.jsx(K,{children:x}),", ",O]}),n.jsx(F,{children:P})]}),n.jsxs(G,{children:[n.jsx(d,{children:o}),n.jsx(h,{children:"|"}),n.jsx(d,{children:s}),n.jsx(h,{children:"|"}),n.jsx(d,{children:k}),n.jsx(h,{children:"|"}),a?n.jsxs(n.Fragment,{children:[n.jsx(d,{children:"Premium"}),n.jsx(d,{children:v})]}):n.jsx(d,{children:v}),n.jsx(h,{children:"|"}),n.jsx(d,{children:x}),n.jsx(h,{children:"|"}),n.jsx(d,{children:w}),n.jsx(h,{children:"|"}),n.jsx(d,{children:m})]}),n.jsx($,{children:n.jsx(q,{type:"button",onClick:()=>t(e),children:"Learn more"})})]})},J=i.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
`;var z={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=p.createContext&&p.createContext(z),Q=["attr","size","title"];function U(e,t){if(e==null)return{};var r=V(e,t),o,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function V(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},g.apply(this,arguments)}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?M(Object(r),!0).forEach(function(o){X(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function X(e,t,r){return t=Y(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y(e){var t=Z(e,"string");return typeof t=="symbol"?t:String(t)}function Z(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function I(e){return e&&e.map((t,r)=>p.createElement(t.tag,j({key:r},t.attr),I(t.child)))}function ee(e){return t=>p.createElement(te,g({attr:j({},e.attr)},t),I(e.child))}function te(e){var t=r=>{var{attr:o,size:s,title:a}=e,m=U(e,Q),u=s||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),p.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,m,{className:l,style:j(j({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&p.createElement("title",null,a),e.children)};return E!==void 0?p.createElement(E.Consumer,null,r=>t(r)):t(z)}function re(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const ne=i.div`
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
`,oe=i(re)`
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
`,ie=i.div`
    width: 100%;
    margin-bottom: 14px;
`,se=i.img`
    max-width: 461px;
    width: 100%;
    height: 248px;

    border-radius: 14px;
    background: #f3f3f2;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,ae=i.div`
    width: 100%;
`,ce=i.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    color: #121417;
`,le=i.span`
    /* font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 133%; */
    color: #3470ff;
`,de=()=>{const{modalData:e,closeModal:t}=c.useContext(C),[r,o]=c.useState(1),s=c.useRef(null),a=c.useRef(!0),{img:m,photoLink:u,description:l,make:b,model:y,year:x,rentalPrice:O,rentalCompany:P,type:k,id:v}=e;c.useEffect(()=>{const f=S=>{S.code==="Escape"&&t()};return window.addEventListener("keydown",f),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",f),document.body.style.overflow="auto"}},[t]);const w=f=>{f.target===f.currentTarget&&t()};return c.useEffect(()=>{s.current&&s.current.focus()},[]),c.useEffect(()=>(a.current===!1&&console.log("counter changed",r),()=>{a.current=!1}),[r]),n.jsx(ne,{onClick:w,children:n.jsxs("div",{className:"modal",children:[n.jsx(oe,{onClick:t,children:"×"}),n.jsx(ie,{children:n.jsx(se,{src:m||u,alt:l})}),n.jsx(ae,{children:n.jsxs(ce,{children:[b," ",n.jsx(le,{children:y}),","," ",x]})})]})})},pe=()=>{const e=T(D),t=W(),{isOpenModal:r}=c.useContext(C);return c.useEffect(()=>{t(N())},[t]),n.jsxs("div",{children:[n.jsx("p",{children:"Catalog"}),n.jsx(J,{children:e.map(o=>n.jsx("li",{children:n.jsx(H,{item:o})},o.id))}),r&&n.jsx(de,{})]})};export{pe as default};
