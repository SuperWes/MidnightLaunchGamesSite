(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(t,e,o){"use strict";var n=o(81),r=o(83),c=o(82),d={components:{TheHeader:n.default,TheSideNav:c.default,TheFooter:r.default},computed:{isSidebar:function(){return this.$store.getters["nav/toggleSidebar"]}},watch:{$route:function(){this.isSidebar&&window.innerWidth<768&&this.$store.dispatch("nav/toggleSidebar")}}},l=(o(165),o(7)),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col min-h-screen"},[e("TheHeader"),this._v(" "),e("TheSideNav"),this._v(" "),e("Nuxt",{staticClass:"flex-grow"}),this._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheHeader:o(81).default,TheSideNav:o(82).default,TheFooter:o(83).default})},114:function(t,e,o){o(115),t.exports=o(116)},158:function(t,e,o){var content=o(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("38dfa7e4",content,!0,{sourceMap:!1})},159:function(t,e,o){(e=o(22)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-blue-500{--bg-opacity:1;background-color:#4299e1;background-color:rgba(66,153,225,var(--bg-opacity))}.hover\\:bg-blue-700:hover{--bg-opacity:1;background-color:#2b6cb0;background-color:rgba(43,108,176,var(--bg-opacity))}.border-blue-700{--border-opacity:1;border-color:#2b6cb0;border-color:rgba(43,108,176,var(--border-opacity))}.rounded{border-radius:.25rem}.border{border-width:1px}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-grow{flex-grow:1}.font-semibold{font-weight:600}.font-bold{font-weight:700}.h-6{height:1.5rem}.h-12{height:3rem}.text-xs{font-size:.75rem}.text-xl{font-size:1.25rem}.m-auto{margin:auto}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.-mx-4{margin-left:-1rem;margin-right:-1rem}.mt-2{margin-top:.5rem}.mb-2{margin-bottom:.5rem}.mt-3{margin-top:.75rem}.mb-3{margin-bottom:.75rem}.mt-4{margin-top:1rem}.min-h-screen{min-height:100vh}.object-contain{-o-object-fit:contain;object-fit:contain}.focus\\:outline-none:focus{outline:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.static{position:static}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.fill-current{fill:currentColor}.text-center{text-align:center}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-800{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}.hover\\:text-gray-600:hover{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.hover\\:text-gray-700:hover{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.focus\\:text-gray-600:focus{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.w-6{width:1.5rem}.w-1\\/2{width:50%}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}.md\\:flex-1{flex:1 1 0%}.md\\:text-2xl{font-size:1.5rem}.md\\:mt-0{margin-top:0}.md\\:w-1\\/2{width:50%}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}',""]),t.exports=e},160:function(t,e,o){t.exports=o.p+"img/mlg-badge.682eaf6.png"},161:function(t,e,o){"use strict";var n=o(62);o.n(n).a},162:function(t,e,o){(e=o(22)(!1)).push([t.i,".linkOption[data-v-6984246b]{display:block;font-size:.875rem;--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity));text-transform:capitalize}.linkOption[data-v-6984246b]:hover{--text-opacity:1;color:#3182ce;color:rgba(49,130,206,var(--text-opacity))}",""]),t.exports=e},163:function(t,e,o){"use strict";var n=o(63);o.n(n).a},164:function(t,e,o){(e=o(22)(!1)).push([t.i,".sidenav-container[data-v-717fe11e]{height:100%;width:100%}.sidenav[data-v-717fe11e]{width:300px;background-color:#fff;z-index:10000;box-sizing:border-box;padding:30px}.backdrop[data-v-717fe11e],.sidenav[data-v-717fe11e]{height:100%;position:fixed;top:0;left:0}.backdrop[data-v-717fe11e]{width:100%;background-color:rgba(0,0,0,.7);z-index:1000}.slide-side-enter-active[data-v-717fe11e],.slide-side-leave-active[data-v-717fe11e]{transition:all .3s ease-out}.slide-side-enter[data-v-717fe11e],.slide-side-leave-to[data-v-717fe11e]{transform:translateX(-100%)}",""]),t.exports=e},165:function(t,e,o){"use strict";var n=o(64);o.n(n).a},166:function(t,e,o){(e=o(22)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background-color:#2d3666}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),t.exports=e},167:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r})),o.d(e,"actions",(function(){return c})),o.d(e,"getters",(function(){return d}));var n=function(){return{toggleSidebar:!1}},r={TOGGLE_SIDEBAR:function(t){t.toggleSidebar=!t.toggleSidebar}},c={toggleSidebar:function(t){(0,t.commit)("TOGGLE_SIDEBAR")}},d={toggleSidebar:function(t){return t.toggleSidebar}}},33:function(t,e,o){"use strict";o.r(e);o(161);var n=o(7),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"-mx-4 md:flex md:items-center"},[e("a",{staticClass:"linkOption mx-4 mt-2 md:mt-0",attrs:{href:"/"}},[this._v("About")]),this._v(" "),e("a",{staticClass:"linkOption mx-4 mt-2 md:mt-0",attrs:{href:"/games"}},[this._v("Games")]),this._v(" "),e("a",{staticClass:"linkOption mx-4 mt-2 md:mt-0",attrs:{href:"/contact"}},[this._v("Contact")]),this._v(" "),e("a",{staticClass:"linkOption mx-4 mt-2 md:mt-0",attrs:{href:"http://www.twitter.com/MidnightLGs",target:"_blank"}},[this._v("Twitter")])])}],!1,null,"6984246b",null);e.default=component.exports},62:function(t,e,o){var content=o(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("6e1453c4",content,!0,{sourceMap:!1})},63:function(t,e,o){var content=o(164);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("b76a698c",content,!0,{sourceMap:!1})},64:function(t,e,o){var content=o(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("56b15182",content,!0,{sourceMap:!1})},81:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"h-12 object-contain block mx-4 mt-2 md:mt-0",attrs:{src:o(160)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-xl font-semibold text-gray-700"},[e("a",{staticClass:"text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl",attrs:{href:"#"}},[this._v("Midnight Launch Games")])])}],r={components:{AppLinks:o(33).default}},c=o(7),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("nav",{staticClass:"bg-white shadow"},[o("div",{staticClass:"container mx-auto px-6 py-3"},[o("div",{staticClass:"md:flex md:items-center md:justify-between"},[o("div",{staticClass:"flex justify-between items-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"flex md:hidden"},[o("button",{staticClass:"text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600",attrs:{type:"button",role:"button","aria-label":"toggle menu"},on:{click:function(e){return t.$store.dispatch("nav/toggleSidebar")}}},[o("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),t._v(" "),o("AppLinks",{staticClass:"hidden -mx-4"})],1)])])])}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{AppLinks:o(33).default})},82:function(t,e,o){"use strict";o.r(e);var n={components:{AppLinks:o(33).default},methods:{hideSidebar:function(){this.$store.dispatch("nav/toggleSidebar")}},computed:{toggleSidebar:function(){return this.$store.getters["nav/toggleSidebar"]}}},r=(o(163),o(7)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidenav-container"},[t.toggleSidebar?o("div",{staticClass:"backdrop",on:{click:function(e){return t.$store.dispatch("nav/toggleSidebar")}}}):t._e(),t._v(" "),o("transition",{attrs:{name:"slide-side"}},[t.toggleSidebar?o("div",{staticClass:"sidenav"},[o("AppLinks")],1):t._e()])],1)}),[],!1,null,"717fe11e",null);e.default=component.exports;installComponents(component,{AppLinks:o(33).default})},83:function(t,e,o){"use strict";o.r(e);var n=o(7),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"bg-white mt-3"},[e("div",{staticClass:"container mx-auto px-6 py-3 flex flex-wrap items-center justify-between"},[e("div",{staticClass:"text-xs text-gray-600"},[this._v("© 2020 Midnight Launch Games")]),this._v(" "),e("div",{staticClass:"text-xs text-gray-600"},[this._v("Site design and development by Wes Ehrlichman")])])])}],!1,null,null,null);e.default=component.exports}},[[114,7,1,8]]]);