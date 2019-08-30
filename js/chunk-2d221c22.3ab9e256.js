(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221c22"],{cc5a:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Slider 滑块")]),a("p",{staticClass:"page-desc"},[e._v("\n    滑动输入器，用于在数值区间/自定义区间内进行选择。\n  ")]),a("k-row",{attrs:{gutter:"16"}},[a("k-col",{attrs:{span:"24",xl:{span:12}}},[a("demo-viewer",{attrs:{title:"基础用法",code:e.JCYF,desc:"基本滑动条。"}},[a("p",[e._v(e._s(e.value1))]),a("k-slider",{model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("k-slider",{attrs:{disabled:""},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1),a("demo-viewer",{attrs:{title:"离散值",code:e.LSZ,desc:"选项可以是离散的"}},[a("p",[e._v(e._s(e.value3))]),a("k-slider",{attrs:{step:5},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)],1),a("k-col",{attrs:{span:"24",xl:{span:12}}},[a("demo-viewer",{attrs:{title:"范围选择",code:e.FWXZ,desc:"支持选择某一数值范围"}},[a("p",[e._v(e._s(e.value2))]),a("k-slider",{attrs:{range:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),a("demo-viewer",{attrs:{title:"滑块形状",code:e.FXHK,desc:"方形滑块。"}},[e._v("\n        "+e._s(e.value1)+"\n        "),a("k-slider",{attrs:{button:"square"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("p",{staticStyle:{"margin-top":"40px"}},[e._v(e._s(e.value2))]),a("k-slider",{attrs:{button:"square",range:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)],1),e._m(0),e._m(1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("caption",[a("h3",[e._v("属性 props")])]),a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("value")]),a("td",[a("p",[e._v("滑块选定的值，可以使用 v-model 双向绑定数据。")]),a("p",[e._v("\n            普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字\n          ")])]),a("td",[e._v("Number | Array")]),a("td",[e._v("0")])]),a("tr",[a("td",[e._v("min")]),a("td",[e._v("最小值")]),a("td",[e._v("Number")]),a("td",[e._v("0")])]),a("tr",[a("td",[e._v("max")]),a("td",[e._v("最大值")]),a("td",[e._v("Number")]),a("td",[e._v("100")])]),a("tr",[a("td",[e._v("step")]),a("td",[e._v("步长，取值建议能被（max - min）整除")]),a("td",[e._v("Number")]),a("td",[e._v("1")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("是否禁用滑块")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("button")]),a("td",[e._v("定义滑块形状,可选值为circle、square")]),a("td",[e._v("String")]),a("td",[e._v("circle")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("caption",[a("h3",[e._v("事件 events")])]),a("thead",[a("tr",[a("th",[e._v("事件名")]),a("th",[e._v("说明")]),a("th",[e._v("返回值")])])]),a("tbody",[a("tr",[a("td",[e._v("on-change")]),a("td",[e._v("在松开滑动时触发，返回当前的选值，在滑动过程中不会触发")]),a("td",[e._v("value")])]),a("tr",[a("td",[e._v("on-input")]),a("td",[e._v("滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发")]),a("td",[e._v("value")])])])])}],v={data:function(){return{value1:25,value2:[20,50],value3:25,value4:30,JCYF:'\n  <template>\n    <k-slider v-model="value1"></k-slider>\n    <k-slider v-model="value4" disabled></k-slider>\n  </template>\n  <script>\n    export default {\n      data () {\n        return {\n          value1: 25\n        }  \n      }\n    }\n  <\/script>\n    ',FWXZ:'\n  <template>\n    <k-slider v-model="value2" range></k-slider>\n  </template>\n  <script>\n    export default {\n      data () {\n        return {\n          value2: [20, 50]\n        }  \n      }\n    }\n  <\/script>\n    ',LSZ:'\n  <template>\n    <k-slider v-model="value3" :step="5"></k-slider>\n  </template>\n  <script>\n    export default {\n      data () {\n        return {\n          value3: 25\n        }  \n      }\n    }\n  <\/script>\n    ',FXHK:'\n  <template>\n    <k-slider v-model="value1" button="square"></k-slider>\n    <k-slider v-model="value2" button="square" range></k-slider>\n  </template>\n    '}},methods:{}},r=v,d=a("2877"),s=Object(d["a"])(r,l,n,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d221c22.3ab9e256.js.map