import{u as i,r as m,M as I,a as A,j as o,t as $,R as f,b as G,f as V}from"./index-Bf7Z7LIr.js";const Y=t=>t.cars.items,q=i.div`
    max-width: 274px;
`,H=i.div`
    width: 100%;
`,J=i.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,Q=i.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,U=i.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,X=i.span`
    color: #3470ff;
`,Z=i.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,tt=i.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`,et=i.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,ot=i.div`
    width: 100%;
`,nt=i.button`
    padding: 12px 98px;
    border-radius: 12px;
    border: none;

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    color: #fff;
    background: #3470ff;
    transition: background-color 0.3s ease;

    &:hover {
        cursor: pointer;
        background: #0b44cd;
    }
`,rt=({item:t})=>{const{openModal:e}=m.useContext(I),n=A(),r=t.address.split(","),a=r[1].trim(),s=r[2].trim(),l=t.accessories.some(u=>u.toLowerCase().includes("premium")),d=t.accessories[0].split(" ").slice(0,2).join(" "),{img:c,photoLink:j,description:C,make:h,model:p,year:k,rentalPrice:O,rentalCompany:M,type:b,id:P}=t,y=u=>{u.preventDefault(),n($(t))};return o.jsxs(q,{children:[o.jsx(H,{children:o.jsx(J,{src:c||j,alt:C})}),o.jsx("button",{type:"button",onClick:y,children:"favorite"}),o.jsxs(Q,{children:[o.jsxs(U,{children:[h," ",o.jsx(X,{children:p}),", ",k]}),o.jsx(Z,{children:O})]}),o.jsx(tt,{children:o.jsxs(et,{children:[a," | ",s," | ",M," |",l?" Premium "+b:b," | ",p," |",P," |",d]})}),o.jsx(ot,{children:o.jsx(nt,{type:"button",onClick:()=>e(t),children:"Learn more"})})]})},it=i.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
    margin-bottom: 100px;
`,at=i.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    border: none;
    transition: background-color 0.3s ease;
    color: #3470ff;
    background: none;

    &:hover {
        cursor: pointer;
        color: #0b44cd;
    }
`;var D={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},W=f.createContext&&f.createContext(D),st=["attr","size","title"];function lt(t,e){if(t==null)return{};var n=ct(t,e),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ct(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,s;for(s=0;s<r.length;s++)a=r[s],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v.apply(this,arguments)}function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?S(Object(n),!0).forEach(function(r){dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dt(t,e,n){return e=ft(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ft(t){var e=pt(t,"string");return typeof e=="symbol"?e:String(e)}function pt(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function L(t){return t&&t.map((e,n)=>f.createElement(e.tag,w({key:n},e.attr),L(e.child)))}function mt(t){return e=>f.createElement(ht,v({attr:w({},t.attr)},e),L(t.child))}function ht(t){var e=n=>{var{attr:r,size:a,title:s}=t,l=lt(t,st),d=a||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),f.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:c,style:w(w({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&f.createElement("title",null,s),t.children)};return W!==void 0?f.createElement(W.Consumer,null,n=>e(n)):e(D)}function ut(t){return mt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const xt=i.div`
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
`,gt=i(ut)`
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
`,bt=i.div`
    width: 100%;
    margin-bottom: 14px;
`,yt=i.img`
    max-width: 461px;
    width: 100%;
    height: 248px;

    border-radius: 14px;
    background: #f3f3f2;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,vt=i.div`
    width: 100%;
    max-width: 277px;
    margin-bottom: 14px;
`,wt=i.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
`,jt=i.span`
    color: #3470ff;
`,Ct=i.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,kt=i.p`
    margin-bottom: 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,Ot=i.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,Mt=i.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,Pt=i.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,zt=i.div`
    width: 100%;

    margin-bottom: 8px;
`,Et=i.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,It=i.div`
    width: 100%;
    max-width: 461px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`,g=i.div`
    border-radius: 35px;
    padding: 7px 22px;

    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background: #f9f9f9;
`,E=i.span`
    font-weight: 600;
    color: #3470ff;
`,Tt=i.a`
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
`,Wt=()=>{const{modalData:t,closeModal:e}=m.useContext(I),{img:n,photoLink:r,description:a,make:s,model:l,year:d,address:c,fuelConsumption:j,engineSize:C,accessories:h,functionalities:p,type:k,id:O,rentalConditions:M,mileage:b,rentalPrice:P}=t,y=c.split(","),u=y[1].trim(),N=y[2].trim(),z=M.split(`
`),T=z[0],R=T.split(":")[0].trim(),_=T.split(":")[1].trim(),B=P.replace("$","");m.useEffect(()=>{const x=K=>{K.code==="Escape"&&e()};return window.addEventListener("keydown",x),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",x),document.body.style.overflow="auto"}},[e]);const F=x=>{x.target===x.currentTarget&&e()};return o.jsx(xt,{onClick:F,children:o.jsxs("div",{className:"modal",children:[o.jsx(gt,{onClick:e,children:"×"}),o.jsx(bt,{children:o.jsx(yt,{src:n||r,alt:a})}),o.jsxs(vt,{children:[o.jsxs(wt,{children:[s," ",o.jsx(jt,{children:l}),","," ",d]}),o.jsxs(Ct,{children:[u," | ",N," | Id: ",O," | Year: ",d," | Type:"," ",k," Fuel Consumption: ",j," | Engine Size: ",C]})]}),o.jsx(kt,{children:a}),o.jsx(Ot,{children:"Accessories and functionalities:"}),o.jsxs(Mt,{children:[h[0]," | ",h[1]," | ",h[2]]}),o.jsxs(Pt,{children:[p[0]," | ",p[1]," |",p[2]]}),o.jsx(zt,{children:o.jsx(Et,{children:"Rental Conditions:"})}),o.jsxs(It,{children:[o.jsxs(g,{children:[R," : ",o.jsx(E,{children:_})]}),o.jsx(g,{children:z[1]}),o.jsx(g,{children:z[2]}),o.jsxs(g,{children:["Mileage: ",o.jsx(E,{children:b.toLocaleString()})]}),o.jsxs(g,{children:["Price: ",o.jsxs(E,{children:[B,"$"]})]})]}),o.jsx(Tt,{href:"tel:+380730000000",children:"Rental car"})]})})},At=()=>{const t=G(Y),e=A(),{isOpenModal:n}=m.useContext(I),[r,a]=m.useState(12);m.useEffect(()=>{e(V())},[e]);const s=()=>{a(l=>l+12)};return o.jsxs("div",{children:[o.jsx("p",{children:"Catalog"}),o.jsx(it,{children:t.slice(0,r).map(l=>o.jsx("li",{children:o.jsx(rt,{item:l})},l.id))}),t.length>r&&o.jsx(at,{onClick:s,children:"Load More"}),n&&o.jsx(Wt,{})]})};export{At as default};
