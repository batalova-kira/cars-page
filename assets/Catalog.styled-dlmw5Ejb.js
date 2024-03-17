import{R as l,u as i,r as B,M as L,b as N,j as a,t as S}from"./index-CxQjsTLI.js";const it=t=>t.cars.items,at=t=>t.cars.favorite;var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=l.createContext&&l.createContext(v),_=["attr","size","title"];function D(t,e){if(t==null)return{};var r=M(t,e),n,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function M(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,c;for(c=0;c<n.length;c++)o=n[c],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p.apply(this,arguments)}function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?x(Object(r),!0).forEach(function(n){T(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function T(t,e,r){return e=F(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function F(t){var e=H(t,"string");return typeof e=="symbol"?e:String(e)}function H(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function y(t){return t&&t.map((e,r)=>l.createElement(e.tag,u({key:r},e.attr),y(e.child)))}function j(t){return e=>l.createElement(R,p({attr:u({},t.attr)},e),y(t.child))}function R(t){var e=r=>{var{attr:n,size:o,title:c}=t,d=D(t,_),f=o||r.size||"1em",s;return r.className&&(s=r.className),t.className&&(s=(s?s+" ":"")+t.className),l.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,d,{className:s,style:u(u({color:t.color||r.color},r.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return b!==void 0?l.createElement(b.Consumer,null,r=>e(r)):e(v)}function A(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(t)}function G(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}const K=i.div`
    position: relative;
    max-width: 274px;
`,q=i.div`
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
`,Y=i.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`,Z=i.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`,$=i.div`
    width: 100%;
`,tt=i.button`
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
`,et=i.button`
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
`,rt=i(A)`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #3470ff;
    }
`,nt=i(G)`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #3470ff;
    }
`,ct=({item:t,isFavorite:e})=>{const{openModal:r}=B.useContext(L),n=N(),o=t.address.split(","),c=o[1].trim(),d=o[2].trim(),f=t.accessories.some(g=>g.toLowerCase().includes("premium")),s=t.accessories[0].split(" ").slice(0,2).join(" "),{img:w,photoLink:C,description:O,make:P,model:m,year:k,rentalPrice:z,rentalCompany:E,type:h,id:I}=t,W=g=>{g.preventDefault(),n(S(t))};return a.jsxs(K,{children:[a.jsx(q,{children:a.jsx(J,{src:w||C,alt:O})}),a.jsx(et,{type:"button",onClick:W,children:e?a.jsx(nt,{}):a.jsx(rt,{})}),a.jsxs(Q,{children:[a.jsxs(U,{children:[P," ",a.jsx(V,{children:m}),", ",k]}),a.jsx(X,{children:z})]}),a.jsx(Y,{children:a.jsxs(Z,{children:[c," | ",d," | ",E," |",f?" Premium "+h:h," | ",m," |",I," |",s]})}),a.jsx($,{children:a.jsx(tt,{type:"button",onClick:()=>r(t),children:"Learn more"})})]})},st=i.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
    margin-bottom: 100px;
`,lt=i.button`
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
`;export{lt as B,st as C,j as G,at as a,ct as b,it as s};
