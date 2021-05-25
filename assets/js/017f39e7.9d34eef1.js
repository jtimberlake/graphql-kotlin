(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9300],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3339:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>o,toc:()=>s,default:()=>p});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"arguments",title:"Arguments"},o={unversionedId:"schema-generator/writing-schemas/arguments",id:"schema-generator/writing-schemas/arguments",isDocsHomePage:!1,title:"Arguments",description:"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields.",source:"@site/docs/schema-generator/writing-schemas/arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/arguments.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1621972531,formattedLastUpdatedAt:"5/25/2021",frontMatter:{id:"arguments",title:"Arguments"},sidebar:"docs",previous:{title:"Nullability",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nullability"},next:{title:"Scalars",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/scalars"}},s=[{value:"Input Types",id:"input-types",children:[]},{value:"Optional fields",id:"optional-fields",children:[]},{value:"Default values",id:"default-values",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun doSomething(value: Int): Boolean = true\n")),(0,l.kt)("p",null,"The above Kotlin code will generate following GraphQL schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  doSomething(value: Int!): Boolean!\n}\n")),(0,l.kt)("p",null,"This behavior is true for all arguments except for the special classes for the ",(0,l.kt)("a",{parentName:"p",href:"../execution/contextual-data"},"GraphQLContext")," and the ",(0,l.kt)("a",{parentName:"p",href:"../execution/data-fetching-environment"},"DataFetchingEnvironment")),(0,l.kt)("h2",{id:"input-types"},"Input Types"),(0,l.kt)("p",null,"Query, Mutation, and Subscription function arguments are automatically converted to GraphQL input fields. GraphQL makes a\ndistinction between input and output types and requires unique names for all the types. Since we can use the same\nobjects for input and output in our Kotlin functions, ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will automatically append\nan ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," suffix to the GraphQL name of input objects."),(0,l.kt)("p",null,"For example, the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class WidgetMutation {\n    fun processWidget(widget: Widget): Widget {\n        if (widget.value == null) {\n            widget.value = 42\n        }\n        return widget\n    }\n\n\ndata class Widget(var value: Int? = nul) {\n    fun multiplyValueBy(multiplier: Int): Int? = value?.times(multiplier)\n}\n")),(0,l.kt)("p",null,"Will generate the following schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  processWidget(widget: WidgetInput!): Widget!\n}\n\ntype Widget {\n  value: Int\n  multiplyValueBy(multiplier: Int!): Int\n}\n\ninput WidgetInput {\n  value: Int\n}\n")),(0,l.kt)("p",null,"Please note that only fields are exposed in the input objects. Functions will only be available on the GraphQL output types."),(0,l.kt)("p",null,"If you know a type will only be used for input types you can call your class something like ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomTypeInput"),". The library will not\nappend ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," if the class name already ends with ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," but that means you can not use this type as output because\nthe schema would have two types with the same name and that would be invalid."),(0,l.kt)("h2",{id:"optional-fields"},"Optional fields"),(0,l.kt)("p",null,"Kotlin requires variables/values to be initialized upon their declaration either from the user input OR by providing\ndefaults (even if they are marked as nullable). Therefore in order for a GraphQL input field to be optional it needs to be\nnullable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun doSomethingWithOptionalInput(requiredValue: Int, optionalValue: Int?): String {\n    return "requiredValue=$requiredValue, optionalValue=$optionalValue"\n}\n')),(0,l.kt)("h2",{id:"default-values"},"Default values"),(0,l.kt)("p",null,"Default Kotlin values are supported, however the default value information is not available to the schema due to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/53"},"reflection limitations of Kotlin"),".\nThe parameters must also be defined as optional (nullable) in the schema, as the only way a default value will be used is when the client does not specify any value in the request."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun print(message: String? = "hello"): String? = message\n')),(0,l.kt)("p",null,"The following operations will return the message in the comments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'query PrintMessages {\n    first: print(message = "foo") # foo\n    second: print(message = null) # null\n    third: print # hello\n}\n')),(0,l.kt)("p",null,"If you need logic to determine when a client passed in a value vs when the default value was used (aka the argument was missing in the request), see ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/optional-undefined-arguments"},"optional undefined arguments"),"."))}p.isMDXComponent=!0}}]);