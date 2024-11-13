(()=>{"use strict";var e,t={404:(e,t,n)=>{const i=window.React;var o=n.n(i);const r=window.wp.data;class s extends o().Component{state={hasError:!1,error:null,errorInfo:null};componentDidCatch(e,t){this.setState({hasError:!0,error:e,errorInfo:t}),console.error("Error in component",e,t)}render(){return this.state.hasError?(0,i.createElement)("div",{style:{padding:18,fontFamily:"sans-serif"}},(0,i.createElement)("div",null,"Something went wrong"),(0,i.createElement)("details",{style:{whiteSpace:"pre-wrap"}},this.state.error?this.state.error.toString():null,(0,i.createElement)("br",null),this.state.errorInfo?this.state.errorInfo.componentStack:null)):this.props.children}}const a=s,l=graphql,p={keyword:"#B11A04",def:"#D2054E",property:"#1F61A0",qualifier:"#1C92A9",attribute:"#8B2BB9",number:"#2882F9",string:"#D64292",builtin:"#D47509",string2:"#0B7FC7",variable:"#397D13",atom:"#CA9800"};function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e,t,n){return function(e){if((0,l.isEnumType)(e))return{kind:"EnumValue",value:e.getValues()[0].name};switch(e.name){case"String":default:return{kind:"StringValue",value:""};case"Float":return{kind:"FloatValue",value:"1.5"};case"Int":return{kind:"IntValue",value:"10"};case"Boolean":return{kind:"BooleanValue",value:!1}}}(n)}function d(e){const t=e.getFields();if(t.id){const e=["id"];return t.email?e.push("email"):t.name&&e.push("name"),e}if(t.edges)return["edges"];if(t.node)return["node"];if(t.nodes)return["nodes"];const n=[];return Object.keys(t).forEach((e=>{(0,l.isLeafType)(t[e].type)&&n.push(e)})),n.length?n.slice(0,2):["__typename"]}function m(e){return(0,l.isNonNullType)(e.type)&&void 0===e.defaultValue}function h(e){let t=e;for(;(0,l.isWrappingType)(t);)t=t.ofType;return t}function g(e,t){if("string"!=typeof t&&"VariableDefinition"===t.kind)return t.variable;if((0,l.isScalarType)(e))try{switch(e.name){case"String":return{kind:"StringValue",value:String(e.parseValue(t))};case"Float":return{kind:"FloatValue",value:String(e.parseValue(parseFloat(t)))};case"Int":return{kind:"IntValue",value:String(e.parseValue(parseInt(t,10)))};case"Boolean":try{const e=JSON.parse(t);return"boolean"==typeof e?{kind:"BooleanValue",value:e}:{kind:"BooleanValue",value:!1}}catch(e){return{kind:"BooleanValue",value:!1}}default:return{kind:"StringValue",value:String(e.parseValue(t))}}}catch(e){return console.error("error coercing arg value",e,t),{kind:"StringValue",value:t}}else try{const n=e.parseValue(t);return n?{kind:"EnumValue",value:String(n)}:{kind:"EnumValue",value:e.getValues()[0].name}}catch(t){return{kind:"EnumValue",value:e.getValues()[0].name}}}function f(e,t,n,i){const o=[];for(const r of i)if((0,l.isRequiredInputField)(r)||t&&t(n,r)){const i=h(r.type);if((0,l.isInputObjectType)(i)){const s=i.getFields();o.push({kind:"ObjectField",name:{kind:"Name",value:r.name},value:{kind:"ObjectValue",fields:f(e,t,n,Object.keys(s).map((e=>s[e])))}})}else(0,l.isLeafType)(i)&&o.push({kind:"ObjectField",name:{kind:"Name",value:r.name},value:e(n,r,i)})}return o}function y(e,t,n){const i=[];for(const o of n.args)if(m(o)||t&&t(n,o)){const r=h(o.type);if((0,l.isInputObjectType)(r)){const s=r.getFields();i.push({kind:"Argument",name:{kind:"Name",value:o.name},value:{kind:"ObjectValue",fields:f(e,t,n,Object.keys(s).map((e=>s[e])))}})}else(0,l.isLeafType)(r)&&i.push({kind:"Argument",name:{kind:"Name",value:o.name},value:e(n,o,r)})}return i}const v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],name:{kind:"Name",value:"MyQuery"},directives:[],selectionSet:{kind:"SelectionSet",selections:[]}}]};let k=null;const S={buttonStyle:{fontSize:"1.2em",padding:"0px",backgroundColor:"white",border:"none",margin:"5px 0px",height:"40px",width:"100%",display:"block",maxWidth:"none"},actionButtonStyle:{padding:"0px",backgroundColor:"white",border:"none",margin:"0px",maxWidth:"none",height:"15px",width:"15px",display:"inline-block",fontSize:"smaller"},explorerActionsStyle:{margin:"4px -8px -8px",paddingLeft:"8px",bottom:"0px",width:"100%",textAlign:"center",background:"none",borderTop:"none",borderBottom:"none"}},b=(0,i.createElement)("svg",{viewBox:"0 0 15 15",style:{color:"hsla(var(--color-neutral), var(--alpha-tertiary, 0.4))",marginRight:"var(--px-4)",height:"var(--px-16)",width:"var(--px-16)"}},(0,i.createElement)("circle",{cx:"7.5",cy:"7.5",r:"6",stroke:"currentColor",fill:"none"})),C=(0,i.createElement)("svg",{viewBox:"0 0 15 15",style:{color:"hsl(var(--color-info))",marginRight:"var(--px-4)",height:"var(--px-16)",width:"var(--px-16)"}},(0,i.createElement)("circle",{cx:"7.5",cy:"7.5",r:"7.5",fill:"currentColor"}),(0,i.createElement)("path",{d:"M4.64641 7.00106L6.8801 9.23256L10.5017 5.61325",fill:"none",stroke:"white",strokeWidth:"1.5"}));function A(e){return e.checked?e.styleConfig.checkboxChecked:e.styleConfig.checkboxUnchecked}(0,i.createElement)("svg",{style:{marginRight:"3px",marginLeft:"-3px"},width:"12",height:"12",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z",fill:"#666"})),(0,i.createElement)("svg",{style:{marginRight:"3px",marginLeft:"-3px"},width:"12",height:"12",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("path",{d:"M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:"#CCC"}));class E extends o().PureComponent{_ref;_handleChange=e=>{this.props.setArgValue(e,!0)};componentDidMount(){const e=this._ref,t=document.activeElement;!e||!t||t instanceof HTMLTextAreaElement||(e.focus(),e.setSelectionRange(0,e.value.length))}render(){const{arg:e,argValue:t,styleConfig:n}=this.props,o=h(e.type),r="string"==typeof t.value?t.value:"",s="StringValue"===this.props.argValue.kind?n.colors.string:n.colors.number;return(0,i.createElement)("span",{style:{color:s}},"String"===o.name?'"':"",(0,i.createElement)("input",{style:{border:"none",borderBottom:"1px solid #888",outline:"none",width:`${Math.max(1,Math.min(15,r.length))}ch`,color:s},ref:e=>{this._ref=e},type:"text",onChange:this._handleChange,value:r}),"String"===o.name?'"':"")}}const w=E;class x extends o().PureComponent{_previousArgSelection;_getArgSelection=()=>this.props.selection.fields.find((e=>e.name.value===this.props.arg.name));_removeArg=()=>{const{selection:e}=this.props,t=this._getArgSelection();this._previousArgSelection=t,this.props.modifyFields(e.fields.filter((e=>e!==t)),!0)};_addArg=()=>{const{selection:e,arg:t,getDefaultScalarArgValue:n,parentField:i,makeDefaultArg:o}=this.props,r=h(t.type);let s=null;if(this._previousArgSelection)s=this._previousArgSelection;else if((0,l.isInputObjectType)(r)){const e=r.getFields();s={kind:"ObjectField",name:{kind:"Name",value:t.name},value:{kind:"ObjectValue",fields:defaultInputObjectFields(n,o,i,Object.keys(e).map((t=>e[t])))}}}else(0,l.isLeafType)(r)&&(s={kind:"ObjectField",name:{kind:"Name",value:t.name},value:n(i,t,r)});if(s)return this.props.modifyFields([...e.fields||[],s],!0);console.error("Unable to add arg for argType",r)};_setArgValue=(e,t)=>{let n=!1,i=!1,o=!1;try{"VariableDefinition"===e.kind?i=!0:null==e?n=!0:"string"==typeof e.kind&&(o=!0)}catch(e){}const{selection:r}=this.props,s=this._getArgSelection();if(!s)return void console.error("missing arg selection when setting arg value");const a=h(this.props.arg.type);if(!((0,l.isLeafType)(a)||i||n||o))return void console.warn("Unable to handle non leaf types in InputArgView.setArgValue",e);let p,c;return null==e?c=null:!e.target&&e.kind&&"VariableDefinition"===e.kind?(p=e,c=p.variable):"string"==typeof e.kind?c=e:e.target&&"string"==typeof e.target.value&&(p=e.target.value,c=g(a,p)),this.props.modifyFields((r.fields||[]).map((e=>e===s?{...e,value:c}:e)),t)};_modifyChildFields=e=>this.props.modifyFields(this.props.selection.fields.map((t=>t.name.value===this.props.arg.name?{...t,value:{kind:"ObjectValue",fields:e}}:t)),!0);render(){const{arg:e,parentField:t}=this.props,n=this._getArgSelection();return(0,i.createElement)(AbstractArgView,{argValue:n?n.value:null,arg:e,parentField:t,addArg:this._addArg,removeArg:this._removeArg,setArgFields:this._modifyChildFields,setArgValue:this._setArgValue,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig,onCommit:this.props.onCommit,definition:this.props.definition})}}const F=x;class _ extends o().PureComponent{state={displayArgActions:!1};render(){const{argValue:e,arg:t,styleConfig:n}=this.props,o=h(t.type);let r=null;if(e)if("Variable"===e.kind)r=(0,i.createElement)("span",{style:{color:n.colors.variable}},"$",e.name.value);else if((0,l.isScalarType)(o))r="Boolean"===o.name?(0,i.createElement)("select",{style:{color:n.colors.builtin},onChange:this.props.setArgValue,value:"BooleanValue"===e.kind?e.value:void 0},(0,i.createElement)("option",{key:"true",value:"true"},"true"),(0,i.createElement)("option",{key:"false",value:"false"},"false")):(0,i.createElement)(w,{setArgValue:this.props.setArgValue,arg:t,argValue:e,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig});else if((0,l.isEnumType)(o))"EnumValue"===e.kind?r=(0,i.createElement)("select",{style:{backgroundColor:"white",color:n.colors.string2},onChange:this.props.setArgValue,value:e.value},o.getValues().map((e=>(0,i.createElement)("option",{key:e.name,value:e.name},e.name)))):console.error("arg mismatch between arg and selection",o,e);else if((0,l.isInputObjectType)(o))if("ObjectValue"===e.kind){const t=o.getFields();r=(0,i.createElement)("div",{style:{marginLeft:16}},Object.keys(t).sort().map((n=>(0,i.createElement)(F,{key:n,arg:t[n],parentField:this.props.parentField,selection:e,modifyFields:this.props.setArgFields,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig,onCommit:this.props.onCommit,definition:this.props.definition}))))}else console.error("arg mismatch between arg and selection",o,e);const s=()=>{const n=t.name,i=(this.props.definition.variableDefinitions||[]).filter((e=>e.variable.name.value.startsWith(n))).length;let o;o=i>0?`${n}${i}`:n;const r=t.type.toString(),s={kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:o}},type:(0,l.parseType)(r),directives:[]},a=e=>(this.props.definition.variableDefinitions||[]).find((t=>t.variable.name.value===e));let p;const c={};if(null!=e){const t=(0,l.visit)(e,{Variable(e){const t=e.name.value,n=a(t);if(c[t]=c[t]+1||1,n)return n.defaultValue}});p={..."NonNullType"===s.type.kind?{...s,type:s.type.type}:s,defaultValue:t}}else p=s;const u=Object.entries(c).filter((([e,t])=>t<2)).map((([e,t])=>e));if(p){const e=this.props.setArgValue(p,!1);if(e){const t=e.definitions.find((e=>!!(e.operation&&e.name&&e.name.value&&this.props.definition.name&&this.props.definition.name.value)&&e.name.value===this.props.definition.name.value)),n=[...t.variableDefinitions||[],p].filter((e=>-1===u.indexOf(e.variable.name.value))),i={...t,variableDefinitions:n},o=e.definitions.map((e=>t===e?i:e)),r={...e,definitions:o};this.props.onCommit(r)}}},a=()=>{if(!e||!e.name||!e.name.value)return;const t=e.name.value,n=(this.props.definition.variableDefinitions||[]).find((e=>e.variable.name.value===t));if(!n)return;const i=n.defaultValue,o=this.props.setArgValue(i,{commit:!1});if(o){const e=o.definitions.find((e=>e.name.value===this.props.definition.name.value));if(!e)return;let n=0;(0,l.visit)(e,{Variable(e){e.name.value===t&&(n+=1)}});let i=e.variableDefinitions||[];n<2&&(i=i.filter((e=>e.variable.name.value!==t)));const r={...e,variableDefinitions:i},s=o.definitions.map((t=>e===t?r:t)),a={...o,definitions:s};this.props.onCommit(a)}},p=e&&"Variable"===e.kind,c=this.state.displayArgActions?(0,i.createElement)("button",{type:"submit",className:"toolbar-button",title:p?"Remove the variable":"Extract the current value into a GraphQL variable",onClick:e=>{e.preventDefault(),e.stopPropagation(),p?a():s()},style:n.styles.actionButtonStyle},(0,i.createElement)("span",{style:{color:n.colors.variable}},"$")):null;return(0,i.createElement)("div",{style:{cursor:"pointer",minHeight:"16px",WebkitUserSelect:"none",userSelect:"none"},"data-arg-name":t.name,"data-arg-type":o.name,className:`graphiql-explorer-${t.name}`},(0,i.createElement)("span",{style:{cursor:"pointer"},onClick:t=>{const n=!e;n?this.props.addArg(!0):this.props.removeArg(!0),this.setState({displayArgActions:n})}},(0,l.isInputObjectType)(o)?(0,i.createElement)("span",null,e?this.props.styleConfig.arrowOpen:this.props.styleConfig.arrowClosed):(0,i.createElement)(A,{checked:!!e,styleConfig:this.props.styleConfig}),(0,i.createElement)("span",{style:{color:n.colors.attribute},title:t.description,onMouseEnter:()=>{null!=e&&this.setState({displayArgActions:!0})},onMouseLeave:()=>this.setState({displayArgActions:!1})},t.name,m(t)?"*":"",":"," ",c," ")," "),r||(0,i.createElement)("span",null)," ")}}const V=_;class D extends o().PureComponent{_previousArgSelection;_getArgSelection=()=>{const{selection:e}=this.props;return(e.arguments||[]).find((e=>e.name.value===this.props.arg.name))};_removeArg=e=>{const{selection:t}=this.props,n=this._getArgSelection();return this._previousArgSelection=n,this.props.modifyArguments((t.arguments||[]).filter((e=>e!==n)),e)};_addArg=e=>{const{selection:t,getDefaultScalarArgValue:n,makeDefaultArg:i,parentField:o,arg:r}=this.props,s=h(r.type);let a=null;if(this._previousArgSelection)a=this._previousArgSelection;else if((0,l.isInputObjectType)(s)){const e=s.getFields();a={kind:"Argument",name:{kind:"Name",value:r.name},value:{kind:"ObjectValue",fields:defaultInputObjectFields(n,i,o,Object.keys(e).map((t=>e[t])))}}}else(0,l.isLeafType)(s)&&(a={kind:"Argument",name:{kind:"Name",value:r.name},value:n(o,r,s)});return a?this.props.modifyArguments([...t.arguments||[],a],e):(console.error("Unable to add arg for argType",s),null)};_setArgValue=(e,t)=>{let n=!1,i=!1,o=!1;try{"VariableDefinition"===e.kind?i=!0:null==e?n=!0:"string"==typeof e.kind&&(o=!0)}catch(e){}const{selection:r}=this.props,s=this._getArgSelection();if(!s&&!i)return void console.error("missing arg selection when setting arg value");const a=h(this.props.arg.type);if(!((0,l.isLeafType)(a)||i||n||o))return void console.warn("Unable to handle non leaf types in ArgView._setArgValue");let p,c;return null==e?c=null:e.target&&"string"==typeof e.target.value?(p=e.target.value,c=g(a,p)):e.target||"VariableDefinition"!==e.kind?"string"==typeof e.kind&&(c=e):(p=e,c=p.variable),this.props.modifyArguments((r.arguments||[]).map((e=>e===s?{...e,value:c}:e)),t)};_setArgFields=(e,t)=>{const{selection:n}=this.props,i=this._getArgSelection();if(i)return this.props.modifyArguments((n.arguments||[]).map((t=>t===i?{...t,value:{kind:"ObjectValue",fields:e}}:t)),t);console.error("missing arg selection when setting arg value")};render(){const{arg:e,parentField:t}=this.props,n=this._getArgSelection();return(0,i.createElement)(V,{argValue:n?n.value:null,arg:e,parentField:t,addArg:this._addArg,removeArg:this._removeArg,setArgFields:this._setArgFields,setArgValue:this._setArgValue,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig,onCommit:this.props.onCommit,definition:this.props.definition})}}const O=D;class T extends o().PureComponent{_previousSelection;_addFragment=()=>{this.props.modifySelections([...this.props.selections,this._previousSelection||{kind:"FragmentSpread",name:this.props.fragment.name}])};_removeFragment=()=>{const e=this._getSelection();this._previousSelection=e,this.props.modifySelections(this.props.selections.filter((e=>!("FragmentSpread"===e.kind&&e.name.value===this.props.fragment.name.value))))};_getSelection=()=>this.props.selections.find((e=>"FragmentSpread"===e.kind&&e.name.value===this.props.fragment.name.value));render(){const{styleConfig:e}=this.props,t=this._getSelection();return(0,i.createElement)("div",{className:`graphiql-explorer-${this.props.fragment.name.value}`},(0,i.createElement)("span",{style:{cursor:"pointer"},onClick:t?this._removeFragment:this._addFragment},(0,i.createElement)(A,{checked:!!t,styleConfig:this.props.styleConfig}),(0,i.createElement)("span",{style:{color:e.colors.def},className:`graphiql-explorer-${this.props.fragment.name.value}`},this.props.fragment.name.value)))}}const N=T;class R extends o().PureComponent{_previousSelection;_addFragment=()=>{this.props.modifySelections([...this.props.selections,this._previousSelection||{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:this.props.implementingType.name}},selectionSet:{kind:"SelectionSet",selections:this.props.getDefaultFieldNames(this.props.implementingType).map((e=>({kind:"Field",name:{kind:"Name",value:e}})))}}])};_removeFragment=()=>{const e=this._getSelection();this._previousSelection=e,this.props.modifySelections(this.props.selections.filter((t=>t!==e)))};_getSelection=()=>{const e=this.props.selections.find((e=>"InlineFragment"===e.kind&&e.typeCondition&&this.props.implementingType.name===e.typeCondition.name.value));return e?"InlineFragment"===e.kind?e:void 0:null};_modifyChildSelections=(e,t)=>{const n=this._getSelection();return this.props.modifySelections(this.props.selections.map((t=>t===n?{directives:t.directives,kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:this.props.implementingType.name}},selectionSet:{kind:"SelectionSet",selections:e}}:t)),t)};render(){const{implementingType:e,schema:t,getDefaultFieldNames:n,styleConfig:o}=this.props,r=this._getSelection(),s=e.getFields(),a=r&&r.selectionSet?r.selectionSet.selections:[];return(0,i.createElement)("div",{className:`graphiql-explorer-${e.name}`},(0,i.createElement)("span",{style:{cursor:"pointer"},onClick:r?this._removeFragment:this._addFragment},(0,i.createElement)(A,{checked:!!r,styleConfig:this.props.styleConfig}),(0,i.createElement)("span",{style:{color:o.colors.atom}},this.props.implementingType.name)),r?(0,i.createElement)("div",{style:{marginLeft:16}},Object.keys(s).sort().map((e=>(0,i.createElement)(FieldView,{key:e,field:s[e],selections:a,modifySelections:this._modifyChildSelections,schema:t,getDefaultFieldNames:n,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,onCommit:this.props.onCommit,styleConfig:this.props.styleConfig,definition:this.props.definition,availableFragments:this.props.availableFragments})))):null)}}const j=R;class L extends o().PureComponent{state={displayFieldActions:!1};_previousSelection;_addAllFieldsToSelections=e=>{const t={kind:"SelectionSet",selections:e?Object.keys(e).map((e=>({kind:"Field",name:{kind:"Name",value:e},arguments:[]}))):[]},n=[...this.props.selections.filter((e=>"InlineFragment"===e.kind||e.name.value!==this.props.field.name)),{kind:"Field",name:{kind:"Name",value:this.props.field.name},arguments:y(this.props.getDefaultScalarArgValue,this.props.makeDefaultArg,this.props.field),selectionSet:t}];this.props.modifySelections(n)};_addFieldToSelections=e=>{const t=[...this.props.selections,this._previousSelection||{kind:"Field",name:{kind:"Name",value:this.props.field.name},arguments:y(this.props.getDefaultScalarArgValue,this.props.makeDefaultArg,this.props.field)}];this.props.modifySelections(t)};_handleUpdateSelections=e=>{if(this._getSelection()&&!e.altKey)this._removeFieldFromSelections();else{const t=(0,l.getNamedType)(this.props.field.type),n=(0,l.isObjectType)(t)&&t.getFields();n&&e.altKey?this._addAllFieldsToSelections(n):this._addFieldToSelections(n)}};_removeFieldFromSelections=()=>{const e=this._getSelection();this._previousSelection=e,this.props.modifySelections(this.props.selections.filter((t=>t!==e)))};_getSelection=()=>{const e=this.props.selections.find((e=>"Field"===e.kind&&this.props.field.name===e.name.value));return e?"Field"===e.kind?e:void 0:null};_setArguments=(e,t)=>{const n=this._getSelection();if(n)return this.props.modifySelections(this.props.selections.map((t=>t===n?{alias:n.alias,arguments:e,directives:n.directives,kind:"Field",name:n.name,selectionSet:n.selectionSet}:t)),t);console.error("Missing selection when setting arguments",e)};_modifyChildSelections=(e,t)=>this.props.modifySelections(this.props.selections.map((t=>{if("Field"===t.kind&&this.props.field.name===t.name.value){if("Field"!==t.kind)throw new Error("invalid selection");return{alias:t.alias,arguments:t.arguments,directives:t.directives,kind:"Field",name:t.name,selectionSet:{kind:"SelectionSet",selections:e}}}return t})),t);render(){const{field:e,schema:t,getDefaultFieldNames:n,styleConfig:o}=this.props,r=this._getSelection(),s=function(e){let t=e;for(;(0,l.isWrappingType)(t);)t=t.ofType;return t}(e.type),a=e.args.sort(((e,t)=>e.name.localeCompare(t.name)));let p=`graphiql-explorer-node graphiql-explorer-${e.name}`;e.isDeprecated&&(p+=" graphiql-explorer-deprecated");const c=(0,l.isObjectType)(s)||(0,l.isInterfaceType)(s)||(0,l.isUnionType)(s)?this.props.availableFragments&&this.props.availableFragments[s.name]:null,u=(0,i.createElement)("div",{className:p},(0,i.createElement)("span",{title:e.description,style:{cursor:"pointer",display:"inline-flex",alignItems:"center",minHeight:"16px",WebkitUserSelect:"none",userSelect:"none"},"data-field-name":e.name,"data-field-type":s.name,onClick:this._handleUpdateSelections,onMouseEnter:()=>{(0,l.isObjectType)(s)&&r&&r.selectionSet&&r.selectionSet.selections.filter((e=>"FragmentSpread"!==e.kind)).length>0&&this.setState({displayFieldActions:!0})},onMouseLeave:()=>this.setState({displayFieldActions:!1})},(0,l.isObjectType)(s)?(0,i.createElement)("span",null,r?this.props.styleConfig.arrowOpen:this.props.styleConfig.arrowClosed):null,(0,l.isObjectType)(s)?null:(0,i.createElement)(A,{checked:!!r,styleConfig:this.props.styleConfig}),(0,i.createElement)("span",{style:{color:o.colors.property},className:"graphiql-explorer-field-view"},e.name),this.state.displayFieldActions?(0,i.createElement)("button",{type:"submit",className:"toolbar-button",title:"Extract selections into a new reusable fragment",onClick:e=>{e.preventDefault(),e.stopPropagation();let t=`${s.name}Fragment`;const n=(c||[]).filter((e=>e.name.value.startsWith(t))).length;n>0&&(t=`${t}${n}`);const i=r&&r.selectionSet?r.selectionSet.selections:[],o=[{kind:"FragmentSpread",name:{kind:"Name",value:t},directives:[]}],a={kind:"FragmentDefinition",name:{kind:"Name",value:t},typeCondition:{kind:"NamedType",name:{kind:"Name",value:s.name}},directives:[],selectionSet:{kind:"SelectionSet",selections:i}},l=this._modifyChildSelections(o,!1);if(l){const e={...l,definitions:[...l.definitions,a]};this.props.onCommit(e)}else console.warn("Unable to complete extractFragment operation")},style:{...o.styles.actionButtonStyle}},(0,i.createElement)("span",null,"…")):null),r&&a.length?(0,i.createElement)("div",{style:{marginLeft:16},className:"graphiql-explorer-graphql-arguments"},a.map((t=>(0,i.createElement)(O,{key:t.name,parentField:e,arg:t,selection:r,modifyArguments:this._setArguments,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig,onCommit:this.props.onCommit,definition:this.props.definition})))):null);if(r&&((0,l.isObjectType)(s)||(0,l.isInterfaceType)(s)||(0,l.isUnionType)(s))){const o=(0,l.isUnionType)(s)?{}:s.getFields(),a=r&&r.selectionSet?r.selectionSet.selections:[];return(0,i.createElement)("div",{className:`graphiql-explorer-${e.name}`},u,(0,i.createElement)("div",{style:{marginLeft:16}},c?c.map((e=>{const n=t.getType(e.typeCondition.name.value),o=e.name.value;return n?(0,i.createElement)(N,{key:o,fragment:e,selections:a,modifySelections:this._modifyChildSelections,schema:t,styleConfig:this.props.styleConfig,onCommit:this.props.onCommit}):null})):null,Object.keys(o).sort().map((e=>(0,i.createElement)(L,{key:e,field:o[e],selections:a,modifySelections:this._modifyChildSelections,schema:t,getDefaultFieldNames:n,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig,onCommit:this.props.onCommit,definition:this.props.definition,availableFragments:this.props.availableFragments}))),(0,l.isInterfaceType)(s)||(0,l.isUnionType)(s)?t.getPossibleTypes(s).map((e=>(0,i.createElement)(j,{key:e.name,implementingType:e,selections:a,modifySelections:this._modifyChildSelections,schema:t,getDefaultFieldNames:n,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig,onCommit:this.props.onCommit,definition:this.props.definition}))):null))}return u}}const I=L;class q extends o().PureComponent{state={newOperationType:"query",displayTitleActions:!1};_previousOperationDef;_modifySelections=(e,t)=>{let n,i=this.props.definition;if(0===i.selectionSet.selections.length&&this._previousOperationDef&&(i=this._previousOperationDef),"FragmentDefinition"===i.kind)n={...i,selectionSet:{...i.selectionSet,selections:e}};else if("OperationDefinition"===i.kind){let t=e.filter((e=>!("Field"===e.kind&&"__typename"===e.name.value)));0===t.length&&(t=[{kind:"Field",name:{kind:"Name",value:"__typename ## Placeholder value"}}]),n={...i,selectionSet:{...i.selectionSet,selections:t}}}return this.props.onEdit(n,t)};_onOperationRename=e=>this.props.onOperationRename(e.target.value);_handlePotentialRun=e=>{(function(e){return e.ctrlKey&&"Enter"===e.key})(e)&&"FragmentDefinition"!==this.props.definition.kind&&this.props.onRunOperation(this.props.name)};_rootViewElId=()=>{const{operationType:e,name:t}=this.props;return`${e}-${t||"unknown"}`};componentDidMount(){const e=this._rootViewElId();this.props.onMount(e)}render(){const{operationType:e,definition:t,schema:n,getDefaultFieldNames:r,styleConfig:s}=this.props,a=this._rootViewElId(),l=this.props.fields||{},p=t.selectionSet.selections,u=this.props.name||`${c(e)} Name`;return(0,i.createElement)("div",{id:a,tabIndex:"0",onKeyDown:this._handlePotentialRun,style:{borderBottom:this.props.isLast?"none":"1px solid #d6d6d6",marginBottom:"0em",paddingBottom:"1em"}},(0,i.createElement)("div",{style:{color:s.colors.keyword,paddingBottom:4},className:"graphiql-operation-title-bar",onMouseEnter:()=>this.setState({displayTitleActions:!0}),onMouseLeave:()=>this.setState({displayTitleActions:!1})},e," ",(0,i.createElement)("span",{style:{color:s.colors.def}},(0,i.createElement)("input",{style:{color:s.colors.def,border:"none",borderBottom:"1px solid #888",outline:"none",width:`${Math.max(4,u.length)}ch`},autoComplete:"false",placeholder:`${c(e)} Name`,value:this.props.name,onKeyDown:this._handlePotentialRun,onChange:this._onOperationRename})),this.props.onTypeName?(0,i.createElement)("span",null,(0,i.createElement)("br",null),`on ${this.props.onTypeName}`):"",this.state.displayTitleActions?(0,i.createElement)(o().Fragment,null,(0,i.createElement)("button",{type:"submit",className:"toolbar-button",onClick:()=>this.props.onOperationDestroy(),style:{...s.styles.actionButtonStyle}},(0,i.createElement)("span",null,"✕")),(0,i.createElement)("button",{type:"submit",className:"toolbar-button",onClick:()=>this.props.onOperationClone(),style:{...s.styles.actionButtonStyle}},(0,i.createElement)("span",null,"⎘"))):""),Object.keys(l).sort().map((e=>(0,i.createElement)(I,{key:e,field:l[e],selections:p,modifySelections:this._modifySelections,schema:n,getDefaultFieldNames:r,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig,onCommit:this.props.onCommit,definition:this.props.definition,availableFragments:this.props.availableFragments}))))}}const B=q;class M extends o().PureComponent{state={newOperationType:"query",operation:null,operationToScrollTo:null};_ref;_resetScroll=()=>{const e=this._ref;e&&(e.scrollLeft=0)};componentDidMount(){this._resetScroll()}_onEdit=e=>this.props.onEdit(e);_setAddOperationType=e=>{this.setState({newOperationType:e})};_handleRootViewMount=e=>{if(this.state.operationToScrollTo&&this.state.operationToScrollTo===e){const t=`.graphiql-explorer-root #${e}`,n=document.querySelector(t);n&&n.scrollIntoView()}};render(){const{schema:e,query:t,makeDefaultArg:n}=this.props;if(!e)return(0,i.createElement)("div",{style:{fontFamily:"sans-serif"},className:"error-container"},"No Schema Available");const o={colors:this.props.colors||p,checkboxChecked:this.props.checkboxChecked||defaultCheckboxChecked,checkboxUnchecked:this.props.checkboxUnchecked||defaultCheckboxUnchecked,arrowClosed:this.props.arrowClosed||defaultArrowClosed,arrowOpen:this.props.arrowOpen||defaultArrowOpen,styles:this.props.styles?{...S,...this.props.styles}:S},r=e.getQueryType(),s=e.getMutationType(),a=e.getSubscriptionType();if(!r&&!s&&!a)return(0,i.createElement)("div",null,"Missing query type");const m=r&&r.getFields(),h=s&&s.getFields(),g=a&&a.getFields(),f=function(e){if(k&&k[0]===e)return k[1];const t=function(e){try{return e.trim()?(0,l.parse)(e,{noLocation:!0}):null}catch(e){return new Error(e)}}(e);return t?t instanceof Error?k?k[1]:v:(k=[e,t],t):v}(t),y=this.props.getDefaultFieldNames||d,b=this.props.getDefaultScalarArgValue||u,C=f.definitions.map((e=>"FragmentDefinition"===e.kind||"OperationDefinition"===e.kind?e:null)).filter(Boolean),A=0===C.length?v.definitions:C,E=e=>{let t;t="FragmentDefinition"===e.kind?"fragment":e.operation;const n=(e.name&&e.name.value||"")+"Copy",i={kind:"Name",value:n,loc:void 0},o={...e,name:i},r=[...f.definitions,o];return this.setState({operationToScrollTo:`${t}-${n}`}),{...f,definitions:r}},w=e=>{const t=f.definitions,n=1===f.definitions.length&&f.definitions[0]===v.definitions[0],i=n?[]:t.filter((t=>"OperationDefinition"===t.kind&&t.operation===e)),o=`My${c(e)}${0===i.length?"":i.length+1}`,r={kind:"OperationDefinition",operation:e,name:{kind:"Name",value:o},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename # Placeholder value",loc:null},arguments:[],directives:[],selectionSet:null,loc:null}],loc:null},loc:null},s=n?[r]:[...f.definitions,r],a={...f,definitions:s};this.setState({operationToScrollTo:`${e}-${o}`}),this.props.onEdit((0,l.print)(a))},x=[m?(0,i.createElement)("option",{key:"query",className:"toolbar-button",style:o.styles.buttonStyle,type:"link",value:"query"},"Query"):null,h?(0,i.createElement)("option",{key:"mutation",className:"toolbar-button",style:o.styles.buttonStyle,type:"link",value:"mutation"},"Mutation"):null,g?(0,i.createElement)("option",{key:"subscription",className:"toolbar-button",style:o.styles.buttonStyle,type:"link",value:"subscription"},"Subscription"):null].filter(Boolean),F=0===x.length||this.props.hideActions?null:(0,i.createElement)("div",{style:{minHeight:"50px",maxHeight:"50px",overflow:"none"}},(0,i.createElement)("form",{className:"variable-editor-title graphiql-explorer-actions",style:{...o.styles.explorerActionsStyle,display:"flex",flexDirection:"row",alignItems:"center",borderTop:"1px solid rgb(214, 214, 214)"},onSubmit:e=>e.preventDefault()},(0,i.createElement)("span",{style:{display:"inline-block",flexGrow:"0",textAlign:"right"}},"Add new"," "),(0,i.createElement)("select",{onChange:e=>this._setAddOperationType(e.target.value),value:this.state.newOperationType,style:{flexGrow:"2"}},x),(0,i.createElement)("button",{type:"submit",className:"toolbar-button",onClick:()=>this.state.newOperationType?w(this.state.newOperationType):null,style:{...o.styles.buttonStyle,height:"22px",width:"22px"}},(0,i.createElement)("span",null,"+")))),_=this.props.externalFragments&&this.props.externalFragments.reduce(((e,t)=>{if("FragmentDefinition"===t.kind){const n=t.typeCondition.name.value,i=[...e[n]||[],t].sort(((e,t)=>e.name.value.localeCompare(t.name.value)));return{...e,[n]:i}}return e}),{}),V={...A.reduce(((e,t)=>{if("FragmentDefinition"===t.kind){const n=t.typeCondition.name.value,i=[...e[n]||[],t].sort(((e,t)=>e.name.value.localeCompare(t.name.value)));return{...e,[n]:i}}return e}),{}),..._},D=this.props.showAttribution?(0,i.createElement)(Attribution,null):null;return(0,i.createElement)("div",{ref:e=>{this._ref=e},style:{fontSize:12,textOverflow:"ellipsis",whiteSpace:"nowrap",margin:0,padding:8,fontFamily:'Consolas, Inconsolata, "Droid Sans Mono", Monaco, monospace',display:"flex",flexDirection:"column",height:"100%"},className:"graphiql-explorer-root"},(0,i.createElement)("div",{style:{flexGrow:"1",overflow:"scroll"}},A.map(((t,r)=>{const s=t&&t.name&&t.name.value,a="FragmentDefinition"===t.kind?"fragment":t&&t.operation||"query",p="FragmentDefinition"===t.kind&&"NamedType"===t.typeCondition.kind&&e.getType(t.typeCondition.name.value),c=p instanceof l.GraphQLObjectType?p.getFields():null,u="query"===a?m:"mutation"===a?h:"subscription"===a?g:"FragmentDefinition"===t.kind?c:null,d="FragmentDefinition"===t.kind?t.typeCondition.name.value:null,v=e=>{const t=(0,l.print)(e);this.props.onEdit(t)};return(0,i.createElement)(B,{key:r,isLast:r===A.length-1,fields:u,operationType:a,name:s,definition:t,onOperationRename:e=>{const n=((e,t)=>{const n=null==t||""===t?null:{kind:"Name",value:t,loc:void 0},i={...e,name:n},o=f.definitions.map((t=>e===t?i:t));return{...f,definitions:o}})(t,e);this.props.onEdit((0,l.print)(n))},onOperationDestroy:()=>{const e=(e=>{const t=f.definitions.filter((t=>e!==t));return{...f,definitions:t}})(t);this.props.onEdit((0,l.print)(e))},onOperationClone:()=>{const e=E(t);this.props.onEdit((0,l.print)(e))},onTypeName:d,onMount:this._handleRootViewMount,onCommit:v,onEdit:(e,n)=>{let i;if(i="object"!=typeof n||void 0===n.commit||n.commit,e){const n={...f,definitions:f.definitions.map((n=>n===t?e:n))};return i?(v(n),n):n}return f},schema:e,getDefaultFieldNames:y,getDefaultScalarArgValue:b,makeDefaultArg:n,onRunOperation:()=>{this.props.onRunOperation&&this.props.onRunOperation(s)},styleConfig:o,availableFragments:V})})),D),F)}}const $=M;class P extends o().PureComponent{render(){return(0,i.createElement)("div",{className:"docExplorerWrap","aria-label":"Query Composer",style:{height:"100%",width:this.props.width,minWidth:this.props.width,zIndex:7,display:this.props.explorerIsOpen?"flex":"none",flexDirection:"column",overflow:"hidden"}},(0,i.createElement)("div",{className:"doc-explorer-title-bar"},(0,i.createElement)("div",{className:"doc-explorer-title"},this.props.title),(0,i.createElement)("div",{className:"doc-explorer-rhs"},(0,i.createElement)("div",{className:"docExplorerHide",onClick:this.props.onToggleExplorer},"✕"))),(0,i.createElement)("div",{className:"doc-explorer-contents",style:{padding:"0px",overflowY:"unset"}},(0,i.createElement)(a,null,(0,i.createElement)($,{...this.props}))))}}const U=P,H=()=>(0,i.createElement)("svg",{viewBox:"0 -4 13 15",style:{color:"hsla(var(--color-neutral), var(--alpha-tertiary, 0.4))",marginRight:"var(--px-4)",height:"var(--px-16)",width:"var(--px-16)"}},(0,i.createElement)("path",{d:"M3.35355 6.85355L6.14645 9.64645C6.34171 9.84171 6.65829 9.84171 6.85355 9.64645L9.64645 6.85355C9.96143 6.53857 9.73835 6 9.29289 6L3.70711 6C3.26165 6 3.03857 6.53857 3.35355 6.85355Z",fill:"currentColor"})),W=()=>(0,i.createElement)("svg",{viewBox:"0 -2 13 15",style:{color:"hsla(var(--color-neutral), var(--alpha-tertiary, 0.4))",marginRight:"var(--px-4)",height:"var(--px-16)",width:"var(--px-16)"}},(0,i.createElement)("path",{d:"M6.35355 11.1464L9.14645 8.35355C9.34171 8.15829 9.34171 7.84171 9.14645 7.64645L6.35355 4.85355C6.03857 4.53857 5.5 4.76165 5.5 5.20711V10.7929C5.5 11.2383 6.03857 11.4614 6.35355 11.1464Z",fill:"currentColor"})),Q={keyword:"hsl(var(--color-primary))",def:"hsl(var(--color-tertiary))",property:"hsl(var(--color-info))",qualifier:"hsl(var(--color-secondary))",attribute:"hsl(var(--color-tertiary))",number:"hsl(var(--color-success))",string:"hsl(var(--color-warning))",builtin:"hsl(var(--color-success))",string2:"hsl(var(--color-secondary))",variable:"hsl(var(--color-secondary))",atom:"hsl(var(--color-tertiary))"},G={buttonStyle:{backgroundColor:"transparent",border:"none",color:"hsla(var(--color-neutral), var(--alpha-secondary, 0.6))",cursor:"pointer",fontSize:"1em"},explorerActionsStyle:{padding:"var(--px-8) var(--px-4)"},actionButtonStyle:{backgroundColor:"transparent",border:"none",color:"hsla(var(--color-neutral), var(--alpha-secondary, 0.6))",cursor:"pointer",fontSize:"1em"}},Z=e=>{const t=(0,r.useSelect)((e=>e("wpgraphql-ide/app").schema())),n=(0,r.useSelect)((e=>e("wpgraphql-ide/app").getQuery())),{setQuery:o}=(0,r.useDispatch)("wpgraphql-ide/app");return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(U,{...e,schema:t,query:n,explorerIsOpen:!0,colors:Q,arrowOpen:H,arrowClosed:W,checkboxUnchecked:b,checkboxChecked:C,styles:G,title:"Query Composer",onEdit:e=>{o(e)}}))},z=window.wp.element,K=(0,z.forwardRef)((function({icon:e,size:t=24,...n},i){return(0,z.cloneElement)(e,{width:t,height:t,...n,ref:i})})),J=window.wp.primitives,Y=(0,i.createElement)(J.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(J.Path,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"}));window.addEventListener("WPGraphQLIDE_Window_Ready",(function(e){if(!window.WPGraphQLIDE)return;const{registerActivityBarPanel:t}=window.WPGraphQLIDE||{};"function"==typeof t&&t("query-composer",{title:"Query Composer",icon:()=>(0,i.createElement)(K,{icon:Y,style:{fill:"hsla(var(--color-neutral), var(--alpha-tertiary))"}}),content:()=>(0,i.createElement)(Z,null)},3)}))}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=(t,n,o,r)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,o,r]=e[c],a=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(a=!1,r<s&&(s=r));if(a){e.splice(c--,1);var p=o();void 0!==p&&(t=p)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={501:0,816:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[s,a,l]=n,p=0;if(s.some((t=>0!==e[t]))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var c=l(i)}for(t&&t(n);p<s.length;p++)r=s[p],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},n=globalThis.webpackChunkwpgraphql_ide=globalThis.webpackChunkwpgraphql_ide||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[816],(()=>i(404)));o=i.O(o)})();