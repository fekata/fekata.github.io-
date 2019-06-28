(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab524"],{"157a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Switch 开关")]),n("p",{staticClass:"page-desc"},[t._v("\n    表示两种相互对立的状态间的切换，多用于触发「开/关」。\n  ")]),n("k-row",{attrs:{gutter:"16"}},[n("k-col",{attrs:{span:"24",xl:{span:12}}},[n("demo-viewer",{attrs:{title:"基本用法",code:t.JCYF,desc:"最简单的用法。"}},[n("p",[n("k-switch",{on:{"on-change":t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),n("demo-viewer",{attrs:{title:"文字和图标",code:t.WZHTB,desc:"自定义内容。"}},[n("p",[n("k-switch",[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("ON")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("OFF")])])],1),n("p",[n("k-switch",[n("k-icon",{attrs:{slot:"open",type:"check"},slot:"open"}),n("k-icon",{attrs:{slot:"close",type:"close"},slot:"close"})],1)],1)])],1),n("k-col",{attrs:{span:"24",xl:{span:12}}},[n("demo-viewer",{attrs:{title:"不可用",code:t.BKY,desc:"Switch 失效状态。"}},[n("p",[n("k-switch",{attrs:{disabled:""}})],1)]),n("demo-viewer",{attrs:{title:"加载状态",code:t.JZZT,desc:"标识开关操作仍在执行中。"}},[n("p",[n("k-switch",{attrs:{loading:""}})],1)])],1)],1),t._m(0),t._m(1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("caption",[n("h3",[t._v("属性 props")])]),n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("value")]),n("td",[t._v("指定当前是否选中，可以使用 v-model 双向绑定数据")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("禁用开关")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("loading")]),n("td",[t._v("加载中的开关")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("caption",[n("h3",[t._v("事件 events")])]),n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",[t._v("on-change")]),n("td",[t._v("开关变化时触发，返回当前的状态")]),n("td",[t._v("true | false")])])])])}],l={data:function(){return{value:!1,JCYF:'\n  <template>\n    <k-switch v-model="value" @on-change="handleChange"></k-switch>\n  </template>\n  <script>\n    export default {\n      data () {\n        return {\n          value: false\n        }  \n      },\n      methods: {\n        handleChange(status) {\n          this.$Message("Changed! status：" + status);\n        }\n      }\n    }\n  <\/script>\n      ',BKY:"\n  <template>\n    <k-switch disabled></k-switch>\n  </template>\n      ",WZHTB:'\n  <template>\n    <k-switch>\n      <span slot="open">ON</span>\n      <span slot="close">OFF</span>\n    </k-switch>\n    <k-switch>\n      <k-icon slot="open" type="check"></k-icon>\n      <k-icon slot="close" type="close"></k-icon>\n    </k-switch>\n  </template>\n      ',JZZT:"\n  <template>\n    <k-switch loading></k-switch>\n  </template>\n      "}},methods:{handleChange:function(t){this.$Message("Changed! status："+t)}}},o=l,c=n("2877"),d=Object(c["a"])(o,s,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0ab524.e81c8f5c.js.map