import{g as d,u as r,r as E,M as A,d as K,j as n,t as $}from"./index-Dmk3nGoQ.js";const Wt=t=>t.cars.items,Lt=t=>t.cars.favorite,St=t=>t.cars.currentPage;var B={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=d.createContext&&d.createContext(B),G=["attr","size","title"];function Y(t,e){if(t==null)return{};var o=q(t,e),i,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)i=s[a],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function q(t,e){if(t==null)return{};var o={},i=Object.keys(t),a,s;for(s=0;s<i.length;s++)a=i[s],!(e.indexOf(a)>=0)&&(o[a]=t[a]);return o}function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},v.apply(this,arguments)}function S(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),o.push.apply(o,i)}return o}function w(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?S(Object(o),!0).forEach(function(i){J(t,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(o,i))})}return t}function J(t,e,o){return e=Q(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function Q(t){var e=U(t,"string");return typeof e=="symbol"?e:String(e)}function U(t,e){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var i=o.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function D(t){return t&&t.map((e,o)=>d.createElement(e.tag,w({key:o},e.attr),D(e.child)))}function T(t){return e=>d.createElement(V,v({attr:w({},t.attr)},e),D(t.child))}function V(t){var e=o=>{var{attr:i,size:a,title:s}=t,p=Y(t,G),l=a||o.size||"1em",c;return o.className&&(c=o.className),t.className&&(c=(c?c+" ":"")+t.className),d.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,i,p,{className:c,style:w(w({color:t.color||o.color},o.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&d.createElement("title",null,s),t.children)};return L!==void 0?d.createElement(L.Consumer,null,o=>e(o)):e(B)}function X(t){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(t)}function Z(t){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}const tt=r.div`
    position: relative;
    max-width: 274px;
`,et=r.div`
    width: 100%;
`,ot=r.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,nt=r.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,rt=r.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,it=r.span`
    color: #3470ff;
`,at=r.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`,st=r.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`,ct=r.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,lt=r.div`
    width: 100%;
`,dt=r.button`
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
`,pt=r.button`
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`,ft=r(X)`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #3470ff;
    }
`,mt=r(Z)`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #3470ff;
    }
`,At=({item:t,isFavorite:e})=>{const{openModal:o}=E.useContext(A),i=K(),a=t.address.split(","),s=a[1].trim(),p=a[2].trim(),l=t.accessories.some(h=>h.toLowerCase().includes("premium")),c=t.accessories[0].split(" ").slice(0,2).join(" "),{img:j,photoLink:C,description:f,make:m,model:x,year:k,rentalPrice:O,rentalCompany:P,type:b,id:y}=t,M=h=>{h.preventDefault(),i($(t))};return n.jsxs(tt,{children:[n.jsx(et,{children:n.jsx(ot,{src:j||C,alt:f})}),n.jsx(pt,{type:"button",onClick:M,children:e?n.jsx(mt,{}):n.jsx(ft,{})}),n.jsxs(nt,{children:[n.jsxs(rt,{children:[m," ",n.jsx(it,{children:x}),", ",k]}),n.jsx(at,{children:O})]}),n.jsx(st,{children:n.jsxs(ct,{children:[s," | ",p," | ",P," |",l?" Premium "+b:b," | ",x," |",y," |",c]})}),n.jsx(lt,{children:n.jsx(dt,{type:"button",onClick:()=>o(t),children:"Learn more"})})]})},Bt=r.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
    margin-bottom: 100px;
`,Dt=r.button`
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
`;function ht(t){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const gt=r.div`
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
`,ut=r(ht)`
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
`,xt=r.div`
    width: 100%;
    margin-bottom: 14px;
`,bt=r.img`
    max-width: 461px;
    width: 100%;
    height: 248px;

    border-radius: 14px;
    background: #f3f3f2;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`,yt=r.div`
    width: 100%;
    max-width: 277px;
    margin-bottom: 14px;
`,vt=r.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
`,wt=r.span`
    color: #3470ff;
`,jt=r.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,Ct=r.p`
    margin-bottom: 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,kt=r.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,Ot=r.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,Pt=r.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,Mt=r.div`
    width: 100%;

    margin-bottom: 8px;
`,zt=r.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`,It=r.div`
    width: 100%;
    max-width: 461px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`,u=r.div`
    border-radius: 35px;
    padding: 7px 22px;

    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background: #f9f9f9;
`,I=r.span`
    font-weight: 600;
    color: #3470ff;
`,Et=r.a`
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
`,Nt=()=>{const{modalData:t,closeModal:e}=E.useContext(A),{img:o,photoLink:i,description:a,make:s,model:p,year:l,address:c,fuelConsumption:j,engineSize:C,accessories:f,functionalities:m,type:x,id:k,rentalConditions:O,mileage:P,rentalPrice:b}=t,y=c.split(","),M=y[1].trim(),h=y[2].trim(),z=O.split(`
`),W=z[0],N=W.split(":")[0].trim(),R=W.split(":")[1].trim(),F=b.replace("$","");E.useEffect(()=>{const g=H=>{H.code==="Escape"&&e()};return window.addEventListener("keydown",g),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",g),document.body.style.overflow="auto"}},[e]);const _=g=>{g.target===g.currentTarget&&e()};return n.jsx(gt,{onClick:_,children:n.jsxs("div",{className:"modal",children:[n.jsx(ut,{onClick:e,children:"×"}),n.jsx(xt,{children:n.jsx(bt,{src:o||i,alt:a})}),n.jsxs(yt,{children:[n.jsxs(vt,{children:[s," ",n.jsx(wt,{children:p}),","," ",l]}),n.jsxs(jt,{children:[M," | ",h," | Id: ",k," | Year: ",l," | Type:"," ",x," Fuel Consumption: ",j," | Engine Size: ",C]})]}),n.jsx(Ct,{children:a}),n.jsx(kt,{children:"Accessories and functionalities:"}),n.jsxs(Ot,{children:[f[0]," | ",f[1]," | ",f[2]]}),n.jsxs(Pt,{children:[m[0]," | ",m[1]," |",m[2]]}),n.jsx(Mt,{children:n.jsx(zt,{children:"Rental Conditions:"})}),n.jsxs(It,{children:[n.jsxs(u,{children:[N," : ",n.jsx(I,{children:R})]}),n.jsx(u,{children:z[1]}),n.jsx(u,{children:z[2]}),n.jsxs(u,{children:["Mileage: ",n.jsx(I,{children:P.toLocaleString()})]}),n.jsxs(u,{children:["Price: ",n.jsxs(I,{children:[F,"$"]})]})]}),n.jsx(Et,{href:"tel:+380730000000",children:"Rental car"})]})})};export{Dt as B,Bt as C,Nt as M,St as a,Lt as b,At as c,Wt as s};
