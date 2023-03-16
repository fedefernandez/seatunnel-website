"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[77950],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,k=d["".concat(m,".").concat(c)]||d[c]||s[c]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95767:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={},m="Druid",p={unversionedId:"connector/sink/Druid",id:"version-2.1.3/connector/sink/Druid",title:"Druid",description:"# Sink plugin: Druid [Flink]",source:"@site/versioned_docs/version-2.1.3/connector/sink/Druid.md",sourceDirName:"connector/sink",slug:"/connector/sink/Druid",permalink:"/zh-CN/docs/2.1.3/connector/sink/Druid",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.3/connector/sink/Druid.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"Doris",permalink:"/zh-CN/docs/2.1.3/connector/sink/Doris"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/2.1.3/connector/sink/Elasticsearch"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"coordinator_url String",id:"coordinator_url-string",level:3},{value:"datasource String",id:"datasource-string",level:3},{value:"timestamp_column String",id:"timestamp_column-string",level:3},{value:"timestamp_format String",id:"timestamp_format-string",level:3},{value:"timestamp_missing_value String",id:"timestamp_missing_value-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Specified timestamp column and format",id:"specified-timestamp-column-and-format",level:3},{value:"Specified timestamp column, format and missing value",id:"specified-timestamp-column-format-and-missing-value",level:3}],d={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"druid"},"Druid"),(0,r.kt)("blockquote",null,(0,r.kt)("h1",{parentName:"blockquote",id:"sink-plugin-druid-flink"},"Sink plugin: Druid ","[Flink]")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Write data to Apache Druid."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,r.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Spark"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Druid")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coordinator_url"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datasource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_column"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"auto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_missing_value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"coordinator_url-string"},"coordinator_url ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The URL of Coordinator service in Apache Druid."),(0,r.kt)("h3",{id:"datasource-string"},"datasource ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The DataSource name in Apache Druid."),(0,r.kt)("h3",{id:"timestamp_column-string"},"timestamp_column ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The timestamp column name in Apache Druid, the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,r.kt)("h3",{id:"timestamp_format-string"},"timestamp_format ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The timestamp format in Apache Druid, the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"auto"),", it could be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"iso")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ISO8601 with 'T' separator, like \"2000-01-01T01:02:03.456\""))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"posix")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"seconds since epoch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"millis")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"milliseconds since epoch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"micro")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"microseconds since epoch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"nano")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nanoseconds since epoch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"auto")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"automatically detects ISO (either 'T' or space separator) or millis format"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"any ",(0,r.kt)("a",{parentName:"p",href:"http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormat.html"},"Joda DateTimeFormat")," string"))),(0,r.kt)("h3",{id:"timestamp_missing_value-string"},"timestamp_missing_value ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The timestamp missing value in Apache Druid, which is used for input records that have a null or missing timestamp. The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp_missing_value")," should be in ISO 8601 format, for example ",(0,r.kt)("inlineCode",{parentName:"p"},'"2022-02-02T02:02:02.222"'),"."),(0,r.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,r.kt)("p",null,"The parallelism of an individual operator, for DruidSink"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n}\n')),(0,r.kt)("h3",{id:"specified-timestamp-column-and-format"},"Specified timestamp column and format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n  timestamp_column = "timestamp"\n  timestamp_format = "auto"\n}\n')),(0,r.kt)("h3",{id:"specified-timestamp-column-format-and-missing-value"},"Specified timestamp column, format and missing value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n  timestamp_column = "timestamp"\n  timestamp_format = "auto"\n  timestamp_missing_value = "2022-02-02T02:02:02.222"\n}\n')))}c.isMDXComponent=!0}}]);