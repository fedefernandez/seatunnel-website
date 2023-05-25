"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67492],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20485:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return k}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={},s="Clickhouse",p={unversionedId:"connector-v2/sink/Clickhouse",id:"connector-v2/sink/Clickhouse",title:"Clickhouse",description:"Clickhouse sink connector",source:"@site/docs/connector-v2/sink/Clickhouse.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Clickhouse",permalink:"/zh-CN/docs/connector-v2/sink/Clickhouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Clickhouse.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Cassandra",permalink:"/zh-CN/docs/connector-v2/sink/Cassandra"},next:{title:"ClickhouseFile",permalink:"/zh-CN/docs/connector-v2/sink/ClickhouseFile"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"clickhouse.config map",id:"clickhouseconfig-map",level:3},{value:"bulk_size number",id:"bulk_size-number",level:3},{value:"split_mode boolean",id:"split_mode-boolean",level:3},{value:"sharding_key string",id:"sharding_key-string",level:3},{value:"primary_key string",id:"primary_key-string",level:3},{value:"support_upsert boolean",id:"support_upsert-boolean",level:3},{value:"allow_experimental_lightweight_delete boolean",id:"allow_experimental_lightweight_delete-boolean",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],d={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse"},"Clickhouse"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Clickhouse sink connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to write data to Clickhouse."),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,r.kt)("p",null,"The Clickhouse sink plug-in can achieve accuracy once by implementing idempotent writing, and needs to cooperate with aggregatingmergetree and other engines that support deduplication."),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.config"),(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bulk_size"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"20000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"split_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sharding_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support_upsert"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_experimental_lightweight_delete"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"host-string"},"host ","[string]"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," cluster address, the format is ",(0,r.kt)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," to be specified. Such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"host1:8123,host2:8123"')," ."),(0,r.kt)("h3",{id:"database-string"},"database ","[string]"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," database"),(0,r.kt)("h3",{id:"table-string"},"table ","[string]"),(0,r.kt)("p",null,"The table name"),(0,r.kt)("h3",{id:"username-string"},"username ","[string]"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," user username"),(0,r.kt)("h3",{id:"password-string"},"password ","[string]"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," user password"),(0,r.kt)("h3",{id:"clickhouseconfig-map"},"clickhouse.config ","[map]"),(0,r.kt)("p",null,"In addition to the above mandatory parameters that must be specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc")," , users can also specify multiple optional parameters, which cover all the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-client#configuration"},"parameters")," provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc")," ."),(0,r.kt)("h3",{id:"bulk_size-number"},"bulk_size ","[number]"),(0,r.kt)("p",null,"The number of rows written through ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"Clickhouse-jdbc")," each time, the ",(0,r.kt)("inlineCode",{parentName:"p"},"default is 20000")," ."),(0,r.kt)("h3",{id:"split_mode-boolean"},"split_mode ","[boolean]"),(0,r.kt)("p",null,"This mode only support clickhouse table which engine is 'Distributed'.And ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_replication")," option\nshould be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". They will split distributed table data in seatunnel and perform write directly on each shard. The shard weight define is clickhouse will be\ncounted."),(0,r.kt)("h3",{id:"sharding_key-string"},"sharding_key ","[string]"),(0,r.kt)("p",null,"When use split_mode, which node to send data to is a problem, the default is random selection, but the\n'sharding_key' parameter can be used to specify the field for the sharding algorithm. This option only\nworked when 'split_mode' is true."),(0,r.kt)("h3",{id:"primary_key-string"},"primary_key ","[string]"),(0,r.kt)("p",null,"Mark the primary key column from clickhouse table, and based on primary key execute INSERT/UPDATE/DELETE to clickhouse table"),(0,r.kt)("h3",{id:"support_upsert-boolean"},"support_upsert ","[boolean]"),(0,r.kt)("p",null,"Support upsert row by query primary key"),(0,r.kt)("h3",{id:"allow_experimental_lightweight_delete-boolean"},"allow_experimental_lightweight_delete ","[boolean]"),(0,r.kt)("p",null,"Allow experimental lightweight delete based on ",(0,r.kt)("inlineCode",{parentName:"p"},"*MergeTree")," table engine"),(0,r.kt)("h3",{id:"common-options"},"common options"),(0,r.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "default"\n    password = ""\n    clickhouse.confg = {\n      max_rows_to_read = "100"\n      read_overflow_mode = "throw"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Split mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "default"\n    password = ""\n    \n    # split mode options\n    split_mode = true\n    sharding_key = "age"\n  }\n}\n')),(0,r.kt)("p",null,"CDC(Change data capture)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "default"\n    password = ""\n    \n    # cdc options\n    primary_key = "id"\n    support_upsert = true\n  }\n}\n')),(0,r.kt)("p",null,"CDC(Change data capture) for *MergeTree engine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "default"\n    password = ""\n    \n    # cdc options\n    primary_key = "id"\n    support_upsert = true\n    allow_experimental_lightweight_delete = true\n  }\n}\n')),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ClickHouse Sink Connector")),(0,r.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Clickhouse Support Int128,Int256 Type (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3067"},"3067"),")")),(0,r.kt)("h3",{id:"next-version"},"next version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Clickhouse Sink support nest type and array type(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3047"},"3047"),")"),(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Clickhouse Sink support geo type(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3141"},"3141"),")"),(0,r.kt)("li",{parentName:"ul"},"[Feature]"," Support CDC write DELETE/UPDATE/INSERT events (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3653"},"3653"),")"),(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Remove Clickhouse Fields Config (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3826"},"3826"),")"),(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Change Connector Custom Config Prefix To Map ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3719"},"3719"))))}k.isMDXComponent=!0}}]);