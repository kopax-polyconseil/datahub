"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4916],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=s,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),s=a(67294),l=a(86010),r=a(51048),i=a(33609),o=a(1943),p=a(72957);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:r,values:m,groupId:u,className:h}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===r?r:r??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,o.U)(),[v,w]=(0,s.useState)(N),_=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=u){const e=b[u];null!=e&&e!==v&&g.some((t=>t.value===e))&&w(e)}const D=e=>{const t=e.currentTarget,a=_.indexOf(t),n=g[a].value;n!==v&&(P(t),w(n),null!=u&&y(u,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",d)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},g.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>_.push(e),onKeyDown:C,onClick:D},r,{className:(0,l.Z)("tabs__item",c,r?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,s.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,r.Z)();return s.createElement(m,(0,n.Z)({key:String(t)},e))}},97388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(83117),s=(a(67294),a(3905)),l=a(34259),r=a(18679);const i={sidebar_position:39,title:"Redash",slug:"/generated/ingestion/sources/redash",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/redash.md"},o="Redash",p={unversionedId:"docs/generated/ingestion/sources/redash",id:"docs/generated/ingestion/sources/redash",title:"Redash",description:"Incubating",source:"@site/genDocs/docs/generated/ingestion/sources/redash.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/redash",permalink:"/docs/generated/ingestion/sources/redash",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/redash.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,title:"Redash",slug:"/generated/ingestion/sources/redash",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/redash.md"},sidebar:"overviewSidebar",previous:{title:"Pulsar",permalink:"/docs/generated/ingestion/sources/pulsar"},next:{title:"Redshift",permalink:"/docs/generated/ingestion/sources/redshift"}},d={},c=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"redash"},"Redash"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,s.kt)("p",null,"This plugin extracts the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Redash dashboards and queries/visualization"),(0,s.kt)("li",{parentName:"ul"},"Redash chart table lineages (disabled by default)")),(0,s.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,s.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[redash]'\n")),(0,s.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,s.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,s.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,s.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,s.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "redash"\n  config:\n    connect_uri: http://localhost:5000/\n    api_key: REDASH_API_KEY\n\n    # Optionals\n    # api_page_limit: 1 #default: None, no limit on ingested dashboards and charts API pagination\n    # skip_draft: true  #default: true, only ingest published dashboards and charts\n    # dashboard_patterns:\n    #   deny:\n    #     - ^denied dashboard.*\n    #   allow:\n    #     - .*allowed dashboard.*\n    # chart_patterns:\n    #   deny:\n    #     - ^denied chart.*\n    #   allow:\n    #     - .*allowed chart.*\n    # parse_table_names_from_sql: false\n')),(0,s.kt)("h3",{id:"config-details"},"Config Details"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("div",{className:"config-table"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"api_key"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Redash user API key. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"REDASH","_","API","_","KEY")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"api_page_limit"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Limit on number of pages queried for ingesting dashboards and charts API during pagination. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"9223372036854775807")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Redash base URL. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"http://localhost:5000")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"page_size"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Limit on number of items to be queried at once. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"25")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"parallelism"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Parallelism to use while processing. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"1")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"parse_table_names_from_sql"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"See note below. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"skip_draft"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Only ingest published dashboards and charts. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"sql_parser"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"custom SQL parser. See note below for details. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"datahub.utilities.sql","_","parser.DefaultSQLParser")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"env"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Environment to use in namespace when constructing URNs. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"PROD")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"chart_patterns"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"regex patterns for charts to filter for ingestion. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"chart_patterns."),(0,s.kt)("span",{className:"path-main"},"allow"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"chart_patterns."),(0,s.kt)("span",{className:"path-main"},"deny"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"chart_patterns."),(0,s.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"dashboard_patterns"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"regex patterns for dashboards to filter for ingestion. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"dashboard_patterns."),(0,s.kt)("span",{className:"path-main"},"allow"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"dashboard_patterns."),(0,s.kt)("span",{className:"path-main"},"deny"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"dashboard_patterns."),(0,s.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))))))),(0,s.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "RedashConfig",\n  "type": "object",\n  "properties": {\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Redash base URL.",\n      "default": "http://localhost:5000",\n      "type": "string"\n    },\n    "api_key": {\n      "title": "Api Key",\n      "description": "Redash user API key.",\n      "default": "REDASH_API_KEY",\n      "type": "string"\n    },\n    "dashboard_patterns": {\n      "title": "Dashboard Patterns",\n      "description": "regex patterns for dashboards to filter for ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "chart_patterns": {\n      "title": "Chart Patterns",\n      "description": "regex patterns for charts to filter for ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "skip_draft": {\n      "title": "Skip Draft",\n      "description": "Only ingest published dashboards and charts.",\n      "default": true,\n      "type": "boolean"\n    },\n    "page_size": {\n      "title": "Page Size",\n      "description": "Limit on number of items to be queried at once.",\n      "default": 25,\n      "type": "integer"\n    },\n    "api_page_limit": {\n      "title": "Api Page Limit",\n      "description": "Limit on number of pages queried for ingesting dashboards and charts API during pagination.",\n      "default": 9223372036854775807,\n      "type": "integer"\n    },\n    "parallelism": {\n      "title": "Parallelism",\n      "description": "Parallelism to use while processing.",\n      "default": 1,\n      "type": "integer"\n    },\n    "parse_table_names_from_sql": {\n      "title": "Parse Table Names From Sql",\n      "description": "See note below.",\n      "default": false,\n      "type": "boolean"\n    },\n    "sql_parser": {\n      "title": "Sql Parser",\n      "description": "custom SQL parser. See note below for details.",\n      "default": "datahub.utilities.sql_parser.DefaultSQLParser",\n      "type": "string"\n    },\n    "env": {\n      "title": "Env",\n      "description": "Environment to use in namespace when constructing URNs.",\n      "default": "PROD",\n      "type": "string"\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,s.kt)("p",null,"Note! The integration can use an SQL parser to try to parse the tables the chart depends on. This parsing is disabled by default,\nbut can be enabled by setting ",(0,s.kt)("inlineCode",{parentName:"p"},"parse_table_names_from_sql: true"),".  The default parser is based on the ",(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/sqllineage/"},(0,s.kt)("inlineCode",{parentName:"a"},"sqllineage"))," package.\nAs this package doesn't officially support all the SQL dialects that Redash supports, the result might not be correct. You can, however, implement a\ncustom parser and take it into use by setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"sql_parser")," configuration value. A custom SQL parser must inherit from ",(0,s.kt)("inlineCode",{parentName:"p"},"datahub.utilities.sql_parser.SQLParser"),"\nand must be made available to Datahub by ,for example, installing it. The configuration then needs to be set to ",(0,s.kt)("inlineCode",{parentName:"p"},"module_name.ClassName")," of the parser."),(0,s.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Class Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.redash.RedashSource")),(0,s.kt)("li",{parentName:"ul"},"Browse on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/redash.py"},"GitHub"))),(0,s.kt)("h2",null,"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring ingestion for Redash, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}u.isMDXComponent=!0}}]);