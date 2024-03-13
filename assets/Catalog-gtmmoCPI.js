import{u as i,r as m,M as z,j as n,R as f,a as K,b as $,f as G}from"./index-BJoaHJgG.js";const V=t=>t.cars.items,Y=i.div`
    max-width: 274px;
`,q=i.div`
    width: 100%;
`,H=i.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,J=i.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,Q=i.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,U=i.span`
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
`,et=i.div`
    width: 100%;
`,ot=i.button`
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
`,nt=({item:t})=>{const{openModal:e}=m.useContext(z),o=t.address.split(","),r=o[1].trim(),a=o[2].trim(),s=t.accessories.some(k=>k.toLowerCase().includes("premium")),l=t.accessories[0].split(" ").slice(0,2).join(" "),{img:d,photoLink:c,description:v,make:w,model:p,year:h,rentalPrice:j,rentalCompany:C,type:g,id:O}=t;return n.jsxs(Y,{children:[n.jsx(q,{children:n.jsx(H,{src:d||c,alt:v})}),n.jsxs(J,{children:[n.jsxs(Q,{children:[w," ",n.jsx(U,{children:p}),", ",h]}),n.jsx(X,{children:j})]}),n.jsx(Z,{children:n.jsxs(tt,{children:[r," | ",a," | ",C," |",s?" Premium "+g:g," | ",p," |",O," |",l]})}),n.jsx(et,{children:n.jsx(ot,{type:"button",onClick:()=>e(t),children:"Learn more"})})]})},rt=i.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
    margin-bottom: 100px;
`,it=i.button`
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
`;var S={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},T=f.createContext&&f.createContext(S),at=["attr","size","title"];function st(t,e){if(t==null)return{};var o=lt(t,e),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function lt(t,e){if(t==null)return{};var o={},r=Object.keys(t),a,s;for(s=0;s<r.length;s++)a=r[s],!(e.indexOf(a)>=0)&&(o[a]=t[a]);return o}function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},b.apply(this,arguments)}function W(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),o.push.apply(o,r)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?W(Object(o),!0).forEach(function(r){ct(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):W(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function ct(t,e,o){return e=dt(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function dt(t){var e=ft(t,"string");return typeof e=="symbol"?e:String(e)}function ft(t,e){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function A(t){return t&&t.map((e,o)=>f.createElement(e.tag,y({key:o},e.attr),A(e.child)))}function pt(t){return e=>f.createElement(mt,b({attr:y({},t.attr)},e),A(t.child))}function mt(t){var e=o=>{var{attr:r,size:a,title:s}=t,l=st(t,at),d=a||o.size||"1em",c;return o.className&&(c=o.className),t.className&&(c=(c?c+" ":"")+t.className),f.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,r,l,{className:c,style:y(y({color:t.color||o.color},o.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&f.createElement("title",null,s),t.children)};return T!==void 0?f.createElement(T.Consumer,null,o=>e(o)):e(S)}function ht(t){return pt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const xt=i.div`
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
`,ut=i(ht)`
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
`,gt=i.div`
    width: 100%;
    margin-bottom: 14px;
`,bt=i.img`
    max-width: 461px;
    width: 100%;
    height: 248px;

    border-radius: 14px;
    background: #f3f3f2;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,yt=i.div`
    width: 100%;
    max-width: 277px;
    margin-bottom: 14px;
`,vt=i.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
`,wt=i.span`
    color: #3470ff;
`,jt=i.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,Ct=i.p`
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
`,kt=i.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,Mt=i.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,Pt=i.div`
    width: 100%;

    margin-bottom: 8px;
`,zt=i.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,Et=i.div`
    width: 100%;
    max-width: 461px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`,u=i.div`
    border-radius: 35px;
    padding: 7px 22px;

    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background: #f9f9f9;
`,P=i.span`
    font-weight: 600;
    color: #3470ff;
`,It=i.a`
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
`,Tt=()=>{const{modalData:t,closeModal:e}=m.useContext(z),{img:o,photoLink:r,description:a,make:s,model:l,year:d,address:c,fuelConsumption:v,engineSize:w,accessories:p,functionalities:h,type:j,id:C,rentalConditions:g,mileage:O,rentalPrice:k}=t,E=c.split(","),L=E[1].trim(),N=E[2].trim(),M=g.split(`
`),I=M[0],R=I.split(":")[0].trim(),D=I.split(":")[1].trim(),_=k.replace("$","");m.useEffect(()=>{const x=F=>{F.code==="Escape"&&e()};return window.addEventListener("keydown",x),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",x),document.body.style.overflow="auto"}},[e]);const B=x=>{x.target===x.currentTarget&&e()};return n.jsx(xt,{onClick:B,children:n.jsxs("div",{className:"modal",children:[n.jsx(ut,{onClick:e,children:"×"}),n.jsx(gt,{children:n.jsx(bt,{src:o||r,alt:a})}),n.jsxs(yt,{children:[n.jsxs(vt,{children:[s," ",n.jsx(wt,{children:l}),","," ",d]}),n.jsxs(jt,{children:[L," | ",N," | Id: ",C," | Year: ",d," | Type:"," ",j," Fuel Consumption: ",v," | Engine Size: ",w]})]}),n.jsx(Ct,{children:a}),n.jsx(Ot,{children:"Accessories and functionalities:"}),n.jsxs(kt,{children:[p[0]," | ",p[1]," | ",p[2]]}),n.jsxs(Mt,{children:[h[0]," | ",h[1]," |",h[2]]}),n.jsx(Pt,{children:n.jsx(zt,{children:"Rental Conditions:"})}),n.jsxs(Et,{children:[n.jsxs(u,{children:[R," : ",n.jsx(P,{children:D})]}),n.jsx(u,{children:M[1]}),n.jsx(u,{children:M[2]}),n.jsxs(u,{children:["Mileage: ",n.jsx(P,{children:O.toLocaleString()})]}),n.jsxs(u,{children:["Price: ",n.jsxs(P,{children:[_,"$"]})]})]}),n.jsx(It,{href:"tel:+380730000000",children:"Rental car"})]})})},St=()=>{const t=K(V),e=$(),{isOpenModal:o}=m.useContext(z),[r,a]=m.useState(12);m.useEffect(()=>{e(G())},[e]);const s=()=>{a(l=>l+12)};return n.jsxs("div",{children:[n.jsx("p",{children:"Catalog"}),n.jsx(rt,{children:t.slice(0,r).map(l=>n.jsx("li",{children:n.jsx(nt,{item:l})},l.id))}),t.length>r&&n.jsx(it,{onClick:s,children:"Load More"}),o&&n.jsx(Tt,{})]})};export{St as default};
