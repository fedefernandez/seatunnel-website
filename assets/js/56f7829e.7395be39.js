"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[12846],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:1},l=void 0,u={unversionedId:"seatunnel-engine/about",id:"seatunnel-engine/about",title:"about",description:"----------------",source:"@site/docs/seatunnel-engine/about.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/about",permalink:"/docs/seatunnel-engine/about",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Command usage",permalink:"/docs/command/usage"},next:{title:"deployment",permalink:"/docs/seatunnel-engine/deployment"}},c={},p=[{value:"Cluster Management",id:"cluster-management",level:3},{value:"Core functions",id:"core-functions",level:3},{value:"Quick Start",id:"quick-start",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"seatunnel-engine"},"SeaTunnel Engine"),(0,o.kt)("p",null,"SeaTunnel Engine is a community-developed data synchronization engine designed for data synchronization scenarios debuts. As the default engine of SeaTunnel, it supports high-throughput, low-latency, and strong-consistent synchronous job operation, which is faster, more stable, more resource-saving, and easy to use."),(0,o.kt)("p",null,"The overall design of the SeaTunnel Engine follows the path below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Faster, SeaTunnel Engine\u2019s execution plan optimizer aims to reduce data network transmission, thereby reducing the loss of overall synchronization performance caused by data serialization and de-serialization, allowing users to complete data synchronization operations faster. At the same time, a speed limit is supported to synchronize data at a reasonable speed."),(0,o.kt)("li",{parentName:"ul"},"More stable, SeaTunnel Engine uses Pipeline as the minimum granularity of checkpoint and fault tolerance for data synchronization tasks. The failure of a task will only affect its upstream and downstream tasks, which avoids task failures that cause the entire job to fail or rollback. At the same time, SeaTunnel Engine also supports data cache for scenarios where the source data has a storage time limit. When the cache is enabled, the data read from the source will be automatically cached, then read by the downstream task and written to the target. Under this condition, even if the data cannot be written due to the failure of the target, it will not affect the regular reading of the source, preventing the data from the source is deleted when expired."),(0,o.kt)("li",{parentName:"ul"},"Space-saving, SeaTunnel Engine uses Dynamic Thread Sharing technology internally. In the real-time synchronization scenario, for the tables with a large amount but small data sizes per table, SeaTunnel Engine will run these synchronization tasks in shared threads to reduce unnecessary thread creation and save system space. On the reading and data writing side, the design goal of SeaTunnel Engine is to minimize the amount of JDBC connections; in CDC scenarios, SeaTunnel Engine will reuse log reading and parsing resources."),(0,o.kt)("li",{parentName:"ul"},"Simple and easy to use, SeaTunnel Engine reduces the dependence on third-party services and can implement cluster management, snapshot storage, and cluster HA functions independently of big data components such as Zookeeper and HDFS. This is very useful for users who currently lack a big data platform, or are unwilling to rely on a big data platform for data synchronization.")),(0,o.kt)("p",null,"In the future, SeaTunnel Engine will further optimize its functions to support full synchronization and incremental synchronization of offline batch synchronization, real-time synchronization, and CDC."),(0,o.kt)("h3",{id:"cluster-management"},"Cluster Management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support stand-alone operation;"),(0,o.kt)("li",{parentName:"ul"},"Support cluster operation;"),(0,o.kt)("li",{parentName:"ul"},"Support autonomous cluster (decentralized), which saves the users from specifying a master node for the SeaTunnel Engine cluster, because it can select a master node by itself during operation, and a new master node will be chosen automatically when the master node fails."),(0,o.kt)("li",{parentName:"ul"},"Autonomous Cluster nodes-discovery and nodes with the same cluster_name will automatically form a cluster.")),(0,o.kt)("h3",{id:"core-functions"},"Core functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supports running jobs in local mode, and the cluster is automatically destroyed after the job once completed;"),(0,o.kt)("li",{parentName:"ul"},"Supports running jobs in Cluster mode (single machine or cluster), submitting jobs to the SeaTunnel Engine service through the SeaTunnel Client, and the service continues to run after the job is completed and waits for the next job submission;"),(0,o.kt)("li",{parentName:"ul"},"Support offline batch synchronization;"),(0,o.kt)("li",{parentName:"ul"},"Support real-time synchronization;"),(0,o.kt)("li",{parentName:"ul"},"Batch-stream integration, all SeaTunnel V2 connectors can run in SeaTunnel Engine;"),(0,o.kt)("li",{parentName:"ul"},"Supports distributed snapshot algorithm, and supports two-stage submission with SeaTunnel V2 connector, ensuring that data is executed only once."),(0,o.kt)("li",{parentName:"ul"},"Support job invocation at the Pipeline level to ensure that it can be started even when resources are limited;"),(0,o.kt)("li",{parentName:"ul"},"Supports fault tolerance for jobs at the Pipeline level. Task failure only affects the Pipeline where it is located, and only the task under the Pipeline needs to be rolled back;"),(0,o.kt)("li",{parentName:"ul"},"Support dynamic thread sharing to synchronize a large number of small data sets in real-time.")),(0,o.kt)("h3",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/start-v2/locally/quick-start-seatunnel-engine"},"https://seatunnel.apache.org/docs/start-v2/locally/quick-start-seatunnel-engine")))}h.isMDXComponent=!0}}]);