import{u as i,r as u,M,j as r,R as d,a as L,b as _,f as B}from"./index-BQtrT5ko.js";const F=t=>t.cars.items,K=i.div`
    max-width: 274px;
`,G=i.div`
    width: 100%;
`,Y=i.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,$=i.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,q=i.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,H=i.span`
    color: #3470ff;
`,J=i.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,Q=i.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`,U=i.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`;i.div`
    width: 1px;
    color: rgba(18, 20, 23, 0.1);
`;const V=i.div`
    width: 100%;
`,X=i.button`
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
`,Z=({item:t})=>{const{openModal:e}=u.useContext(M),o=t.address.split(","),n=o[1].trim(),a=o[2].trim();t.accessories.some(g=>g.toLowerCase().includes("premium"));const s=t.accessories[0].split(" ").slice(0,2).join(" "),{img:p,photoLink:c,description:l,make:w,model:x,year:f,rentalPrice:m,rentalCompany:v,type:P,id:j}=t;return r.jsxs(K,{children:[r.jsx(G,{children:r.jsx(Y,{src:p||c,alt:l})}),r.jsxs($,{children:[r.jsxs(q,{children:[w," ",r.jsx(H,{children:x}),", ",f]}),r.jsx(J,{children:m})]}),r.jsx(Q,{children:r.jsxs(U,{children:[n," | ",a," | ",v," |","| ",x," |"," ",j," |",s]})}),r.jsx(V,{children:r.jsx(X,{type:"button",onClick:()=>e(t),children:"Learn more"})})]})},tt=i.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
`;var I={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z=d.createContext&&d.createContext(I),et=["attr","size","title"];function ot(t,e){if(t==null)return{};var o=rt(t,e),n,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function rt(t,e){if(t==null)return{};var o={},n=Object.keys(t),a,s;for(s=0;s<n.length;s++)a=n[s],!(e.indexOf(a)>=0)&&(o[a]=t[a]);return o}function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},b.apply(this,arguments)}function E(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),o.push.apply(o,n)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?E(Object(o),!0).forEach(function(n){nt(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}function nt(t,e,o){return e=it(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function it(t){var e=at(t,"string");return typeof e=="symbol"?e:String(e)}function at(t,e){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function T(t){return t&&t.map((e,o)=>d.createElement(e.tag,y({key:o},e.attr),T(e.child)))}function st(t){return e=>d.createElement(lt,b({attr:y({},t.attr)},e),T(t.child))}function lt(t){var e=o=>{var{attr:n,size:a,title:s}=t,p=ot(t,et),c=a||o.size||"1em",l;return o.className&&(l=o.className),t.className&&(l=(l?l+" ":"")+t.className),d.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,n,p,{className:l,style:y(y({color:t.color||o.color},o.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&d.createElement("title",null,s),t.children)};return z!==void 0?d.createElement(z.Consumer,null,o=>e(o)):e(I)}function ct(t){return st({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const dt=i.div`
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
`,pt=i(ct)`
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
`,ft=i.div`
    width: 100%;
    margin-bottom: 14px;
`,mt=i.img`
    max-width: 461px;
    width: 100%;
    height: 248px;

    border-radius: 14px;
    background: #f3f3f2;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,ht=i.div`
    width: 100%;
    max-width: 277px;
    margin-bottom: 14px;
`,ut=i.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
`,xt=i.span`
    color: #3470ff;
`,gt=i.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,bt=i.p`
    margin-bottom: 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,yt=i.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,wt=i.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,vt=i.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,jt=i.div`
    width: 100%;

    margin-bottom: 24px;
`,Ct=i.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,Ot=i.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    margin-bottom: 24px;
`,O=i.div`
    border-radius: 35px;
    padding: 7px 14px;

    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background: #f9f9f9;
`,Mt=i.span`
    color: #3470ff;
`,Pt=()=>{const{modalData:t,closeModal:e}=u.useContext(M),{img:o,photoLink:n,description:a,make:s,model:p,year:c,address:l,fuelConsumption:w,engineSize:x,accessories:f,functionalities:m,type:v,id:P,rentalConditions:j}=t,g=l.split(","),W=g[1].trim(),S=g[2].trim(),C=j.split(`
`),k=C[0],A=k.split(":")[0].trim(),N=k.split(":")[1].trim();u.useEffect(()=>{const h=R=>{R.code==="Escape"&&e()};return window.addEventListener("keydown",h),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",h),document.body.style.overflow="auto"}},[e]);const D=h=>{h.target===h.currentTarget&&e()};return r.jsx(dt,{onClick:D,children:r.jsxs("div",{className:"modal",children:[r.jsx(pt,{onClick:e,children:"×"}),r.jsx(ft,{children:r.jsx(mt,{src:o||n,alt:a})}),r.jsxs(ht,{children:[r.jsxs(ut,{children:[s," ",r.jsx(xt,{children:p}),","," ",c]}),r.jsxs(gt,{children:[W," | ",S," | Id: ",P," | Year: ",c," | Type:"," ",v," Fuel Consumption: ",w," | Engine Size: ",x]})]}),r.jsx(bt,{children:a}),r.jsx(yt,{children:"Accessories and functionalities:"}),r.jsxs(wt,{children:[f[0]," | ",f[1]," | ",f[2]]}),r.jsxs(vt,{children:[m[0]," | ",m[1]," |",m[2]]}),r.jsx(jt,{children:r.jsx(Ct,{children:"Rental Conditions:"})}),r.jsxs(Ot,{children:[r.jsxs(O,{children:[A," : ",r.jsx(Mt,{children:N})]}),r.jsx(O,{children:C[1]}),r.jsx(O,{children:C[2]})]})]})})},zt=()=>{const t=L(F),e=_(),{isOpenModal:o}=u.useContext(M);return u.useEffect(()=>{e(B())},[e]),r.jsxs("div",{children:[r.jsx("p",{children:"Catalog"}),r.jsx(tt,{children:t.map(n=>r.jsx("li",{children:r.jsx(Z,{item:n})},n.id))}),o&&r.jsx(Pt,{})]})};export{zt as default};
