"use strict";(self.webpackChunk_MidoAhmed_rollup_react_library_starter=self.webpackChunk_MidoAhmed_rollup_react_library_starter||[]).push([[747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsLink:()=>AsLink,DangerButton:()=>DangerButton,Default:()=>Default,DisableShadow:()=>DisableShadow,Disabled:()=>Disabled,EndIconButton:()=>EndIconButton,Outline:()=>Outline,PrimaryButton:()=>PrimaryButton,SecondaryButton:()=>SecondaryButton,SizedButtons:()=>SizedButtons,StartIconButton:()=>StartIconButton,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.ZP.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  font-family: Noto Sans JP;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 6px;
  cursor: pointer;

  padding: ${({size})=>{switch(size){case"sm":return"6px 12px";case"md":default:return"8px 16px";case"lg":return"11px 22px"}}};

  box-shadow: ${({disableShadow})=>disableShadow?"none":"0px 2px 3px 0px rgba(51, 51, 51, 0.2)"};

  ${({variant,color})=>{switch(variant){case"outline":return styled_components_browser_esm.iv`
          background-color: transparent;
          border: 1px solid #3d5afe;
          color: #3d5afe;
          &:hover:not([disabled]),
          &:focus:not([disabled]) {
            background-color: rgba(41, 98, 255, 0.1);
          }
        `;case"text":return styled_components_browser_esm.iv`
          background: none;
          border: none;
          color: #3d5afe;
          box-shadow: none;
          &:hover:not([disabled]),
          &:focus:not([disabled]) {
            background-color: rgba(41, 98, 255, 0.1);
          }
        `;default:switch(color){case"default":default:return styled_components_browser_esm.iv`
              background-color: #e0e0e0;
              border: 1px solid #e0e0e0;
              color: #3f3f3f;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #aeaeae;
              }
            `;case"primary":return styled_components_browser_esm.iv`
              background-color: #2962ff;
              border: 1px solid #2962ff;
              color: #fff;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #0039cb;
              }
            `;case"secondary":return styled_components_browser_esm.iv`
              background-color: #455a64;
              border: 1px solid #455a64;
              color: #fff;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #1c313a;
              }
            `;case"danger":return styled_components_browser_esm.iv`
              background-color: #d32f2f;
              border: 1px solid #d32f2f;
              color: #fff;
              &:hover:not([disabled]),
              &:focus:not([disabled]) {
                background-color: #9a0007;
              }
            `}}}}

  ${({disabled})=>disabled&&styled_components_browser_esm.iv`
      background-color: #e0e0e0;
      cursor: not-allowed;
      color: #9e9e9e;
      border: 1px solid #e0e0e0;
    `}
`,Button=({variant="default",color="default",size="md",disableShadow=!1,startIcon,endIcon,children,...props})=>(0,jsx_runtime.jsxs)(StyledButton,{variant,disableShadow,color,size,...props,children:[startIcon&&startIcon,children,endIcon&&endIcon]});Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"Button UI component for user interaction",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"default"'},{value:'"outline"'}]}},disableShadow:{defaultValue:{value:"false"},description:"",name:"disableShadow",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={component:Button_Button,tags:["autodocs"]},Default={render:()=>(0,jsx_runtime.jsx)(Button_Button,{children:"Default"})},Outline={render:()=>(0,jsx_runtime.jsx)(Button_Button,{variant:"outline",children:"Default"})},Text={render:()=>(0,jsx_runtime.jsx)(Button_Button,{variant:"text",children:"Default"})},DisableShadow={render:()=>(0,jsx_runtime.jsx)(Button_Button,{disableShadow:!0,children:"Default"})},Disabled={render:()=>(0,jsx_runtime.jsx)(Button_Button,{disabled:!0,children:"Disabled"})},SizedButtons={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button_Button,{children:"default"}),(0,jsx_runtime.jsx)(Button_Button,{size:"sm",children:"small"}),(0,jsx_runtime.jsx)(Button_Button,{size:"md",children:"medium"}),(0,jsx_runtime.jsx)(Button_Button,{size:"lg",children:"large"})]}),decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{margin:"3em",display:"flex",alignItems:"center",gap:10},children:(0,jsx_runtime.jsx)(Story,{})})]},PrimaryButton={render:()=>(0,jsx_runtime.jsx)(Button_Button,{color:"primary",children:"primary"})},SecondaryButton={render:()=>(0,jsx_runtime.jsx)(Button_Button,{color:"secondary",children:"secondary"})},DangerButton={render:()=>(0,jsx_runtime.jsx)(Button_Button,{color:"danger",children:"danger"})},StartIconButton={render:()=>(0,jsx_runtime.jsx)(Button_Button,{color:"primary",startIcon:(0,jsx_runtime.jsx)("span",{className:"material-icons",children:"add_shopping_cart"}),children:"Default"})},EndIconButton={render:()=>(0,jsx_runtime.jsx)(Button_Button,{color:"primary",endIcon:(0,jsx_runtime.jsx)("span",{className:"material-icons",children:"add_shopping_cart"}),children:"Default"})},AsLink={render:()=>(0,jsx_runtime.jsx)(Button_Button,{color:"primary",as:"a",children:"primary"}),parameters:{docs:{description:{component:"Another description, overriding the comments"}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <Button>Default</Button>\n}",...Default.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:'{\n  render: () => <Button variant="outline">Default</Button>\n}',...Outline.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:'{\n  render: () => <Button variant="text">Default</Button>\n}',...Text.parameters?.docs?.source}}},DisableShadow.parameters={...DisableShadow.parameters,docs:{...DisableShadow.parameters?.docs,source:{originalSource:"{\n  render: () => <Button disableShadow>Default</Button>\n}",...DisableShadow.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: () => <Button disabled>Disabled</Button>\n}",...Disabled.parameters?.docs?.source}}},SizedButtons.parameters={...SizedButtons.parameters,docs:{...SizedButtons.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Button>default</Button>\n      <Button size="sm">small</Button>\n      <Button size="md">medium</Button>\n      <Button size="lg">large</Button>\n    </>,\n  decorators: [Story => <div style={{\n    margin: "3em",\n    display: "flex",\n    alignItems: "center",\n    gap: 10\n  }}>\n        <Story />\n      </div>]\n}',...SizedButtons.parameters?.docs?.source}}},PrimaryButton.parameters={...PrimaryButton.parameters,docs:{...PrimaryButton.parameters?.docs,source:{originalSource:'{\n  render: () => <Button color="primary">primary</Button>\n}',...PrimaryButton.parameters?.docs?.source}}},SecondaryButton.parameters={...SecondaryButton.parameters,docs:{...SecondaryButton.parameters?.docs,source:{originalSource:'{\n  render: () => <Button color="secondary">secondary</Button>\n}',...SecondaryButton.parameters?.docs?.source}}},DangerButton.parameters={...DangerButton.parameters,docs:{...DangerButton.parameters?.docs,source:{originalSource:'{\n  render: () => <Button color="danger">danger</Button>\n}',...DangerButton.parameters?.docs?.source}}},StartIconButton.parameters={...StartIconButton.parameters,docs:{...StartIconButton.parameters?.docs,source:{originalSource:'{\n  render: () => <Button color="primary" startIcon={<span className="material-icons">add_shopping_cart</span>}>\n      Default\n    </Button>\n}',...StartIconButton.parameters?.docs?.source}}},EndIconButton.parameters={...EndIconButton.parameters,docs:{...EndIconButton.parameters?.docs,source:{originalSource:'{\n  render: () => <Button color="primary" endIcon={<span className="material-icons">add_shopping_cart</span>}>\n      Default\n    </Button>\n}',...EndIconButton.parameters?.docs?.source}}},AsLink.parameters={...AsLink.parameters,docs:{...AsLink.parameters?.docs,source:{originalSource:'{\n  render: () => <Button color="primary" as={"a"}>\n      primary\n    </Button>,\n  parameters: {\n    docs: {\n      description: {\n        component: \'Another description, overriding the comments\'\n      }\n    }\n  }\n}',...AsLink.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Outline","Text","DisableShadow","Disabled","SizedButtons","PrimaryButton","SecondaryButton","DangerButton","StartIconButton","EndIconButton","AsLink"]}}]);
//# sourceMappingURL=components-Button-Button-stories.4af4b32f.iframe.bundle.js.map