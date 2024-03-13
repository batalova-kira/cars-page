import{u as i,r as u,M as z,j as n,R as d,a as K,b as $,f as G}from"./index-B7cx1Cz3.js";const Y=t=>t.cars.items,q=i.div`
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
`,V=i.span`
    color: #3470ff;
`,X=i.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,Z=i.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`,tt=i.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`;i.div`
    width: 1px;
    color: rgba(18, 20, 23, 0.1);
`;const et=i.div`
    width: 100%;
`,rt=i.button`
    /* display: block; */
    /* text-align: center; */
    padding: 12px 98px;
    border-radius: 12px;
    border: none;

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    color: #fff;
    background: #3470ff;

    &:hover {
        cursor: pointer;
        background: #0b44cd;
    }
`,nt=({item:t})=>{const{openModal:e}=u.useContext(z),r=t.address.split(","),o=r[1].trim(),a=r[2].trim(),s=t.accessories.some(P=>P.toLowerCase().includes("premium")),f=t.accessories[0].split(" ").slice(0,2).join(" "),{img:c,photoLink:l,description:w,make:v,model:p,year:m,rentalPrice:j,rentalCompany:C,type:g,id:O}=t;return n.jsxs(q,{children:[n.jsx(H,{children:n.jsx(J,{src:c||l,alt:w})}),n.jsxs(Q,{children:[n.jsxs(U,{children:[v," ",n.jsx(V,{children:p}),", ",m]}),n.jsx(X,{children:j})]}),n.jsx(Z,{children:n.jsxs(tt,{children:[o," | ",a," | ",C," |",s?" Premium "+g:g," | ",p," |",O," |",f]})}),n.jsx(et,{children:n.jsx(rt,{type:"button",onClick:()=>e(t),children:"Learn more"})})]})},ot=i.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
`;var S={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},T=d.createContext&&d.createContext(S),it=["attr","size","title"];function at(t,e){if(t==null)return{};var r=st(t,e),o,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)o=s[a],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}function st(t,e){if(t==null)return{};var r={},o=Object.keys(t),a,s;for(s=0;s<o.length;s++)a=o[s],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},b.apply(this,arguments)}function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,o)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?W(Object(r),!0).forEach(function(o){lt(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function lt(t,e,r){return e=ct(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ct(t){var e=dt(t,"string");return typeof e=="symbol"?e:String(e)}function dt(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function A(t){return t&&t.map((e,r)=>d.createElement(e.tag,y({key:r},e.attr),A(e.child)))}function pt(t){return e=>d.createElement(ft,b({attr:y({},t.attr)},e),A(t.child))}function ft(t){var e=r=>{var{attr:o,size:a,title:s}=t,f=at(t,it),c=a||r.size||"1em",l;return r.className&&(l=r.className),t.className&&(l=(l?l+" ":"")+t.className),d.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,f,{className:l,style:y(y({color:t.color||r.color},r.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&d.createElement("title",null,s),t.children)};return T!==void 0?d.createElement(T.Consumer,null,r=>e(r)):e(S)}function mt(t){return pt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const ht=i.div`
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
`,xt=i(mt)`
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
`,ut=i.div`
    width: 100%;
    margin-bottom: 14px;
`,gt=i.img`
    max-width: 461px;
    width: 100%;
    height: 248px;

    border-radius: 14px;
    background: #f3f3f2;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,bt=i.div`
    width: 100%;
    max-width: 277px;
    margin-bottom: 14px;
`,yt=i.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
`,wt=i.span`
    color: #3470ff;
`,vt=i.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,jt=i.p`
    margin-bottom: 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,Ct=i.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,Ot=i.p`
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
`,Mt=i.div`
    width: 100%;

    margin-bottom: 8px;
`,kt=i.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,zt=i.div`
    width: 100%;
    max-width: 461px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`,x=i.div`
    border-radius: 35px;
    padding: 7px 22px;

    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background: #f9f9f9;
`,k=i.span`
    font-weight: 600;
    color: #3470ff;
`,Et=i.button`
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    border: none;

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    background: #3470ff;

    &:hover {
        cursor: pointer;
        background: #0b44cd;
    }
`,It=()=>{const{modalData:t,closeModal:e}=u.useContext(z),{img:r,photoLink:o,description:a,make:s,model:f,year:c,address:l,fuelConsumption:w,engineSize:v,accessories:p,functionalities:m,type:j,id:C,rentalConditions:g,mileage:O,rentalPrice:P}=t,E=l.split(","),N=E[1].trim(),R=E[2].trim(),M=g.split(`
`),I=M[0],D=I.split(":")[0].trim(),L=I.split(":")[1].trim(),_=P.replace("$","");u.useEffect(()=>{const h=F=>{F.code==="Escape"&&e()};return window.addEventListener("keydown",h),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",h),document.body.style.overflow="auto"}},[e]);const B=h=>{h.target===h.currentTarget&&e()};return n.jsx(ht,{onClick:B,children:n.jsxs("div",{className:"modal",children:[n.jsx(xt,{onClick:e,children:"×"}),n.jsx(ut,{children:n.jsx(gt,{src:r||o,alt:a})}),n.jsxs(bt,{children:[n.jsxs(yt,{children:[s," ",n.jsx(wt,{children:f}),","," ",c]}),n.jsxs(vt,{children:[N," | ",R," | Id: ",C," | Year: ",c," | Type:"," ",j," Fuel Consumption: ",w," | Engine Size: ",v]})]}),n.jsx(jt,{children:a}),n.jsx(Ct,{children:"Accessories and functionalities:"}),n.jsxs(Ot,{children:[p[0]," | ",p[1]," | ",p[2]]}),n.jsxs(Pt,{children:[m[0]," | ",m[1]," |",m[2]]}),n.jsx(Mt,{children:n.jsx(kt,{children:"Rental Conditions:"})}),n.jsxs(zt,{children:[n.jsxs(x,{children:[D," : ",n.jsx(k,{children:L})]}),n.jsx(x,{children:M[1]}),n.jsx(x,{children:M[2]}),n.jsxs(x,{children:["Mileage: ",n.jsx(k,{children:O.toLocaleString()})]}),n.jsxs(x,{children:["Price: ",n.jsxs(k,{children:[_,"$"]})]})]}),n.jsx(Et,{type:"button",children:"Rental car"})]})})},Wt=()=>{const t=K(Y),e=$(),{isOpenModal:r}=u.useContext(z);return u.useEffect(()=>{e(G())},[e]),n.jsxs("div",{children:[n.jsx("p",{children:"Catalog"}),n.jsx(ot,{children:t.map(o=>n.jsx("li",{children:n.jsx(nt,{item:o})},o.id))}),r&&n.jsx(It,{})]})};export{Wt as default};
