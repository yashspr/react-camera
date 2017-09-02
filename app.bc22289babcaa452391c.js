webpackJsonp([0],{295:function(e,n,t){var r=t(1),a=t(165);a.__esModule&&(a=a.default),e.exports=r.createClass({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(634)}},componentWillMount:function(){},render:function(){return r.createElement(a,Object.assign({},this.props,{content:this.state.content}))}})},296:function(e,n){},297:function(e,n){},298:function(e,n){},300:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=t(1),c=r(o),i=t(74),s=r(i),p=t(299),l=r(p),u=t(294);t(297),t(296),t(298);var m={},d=[{path:"/",title:"Introduction",component:t(295)}];s.default.render(c.default.createElement("div",null,c.default.createElement(l.default,{href:"https://github.com/undefined/react-camera",bannerColor:"#fff",octoColor:"#000",width:80,height:80,direction:"right"}),c.default.createElement(u.Catalog,{imports:m,pages:d,specimens:{javascript:function(e){return c.default.createElement(u.CodeSpecimen,a({},e,{lang:"javascript"}))},js:function(e){return c.default.createElement(u.CodeSpecimen,a({},e,{lang:"javascript"}))},jsx:function(e){return c.default.createElement(u.ReactSpecimen,e)}},title:"react-camera v0.1.1"})),document.getElementById("app"))},634:function(e,n){e.exports="# React Camera [NOT PUBLISHED YET] [![Travis status build](https://travis-ci.org/Miniplop/react-camera.svg?branch=master)](https://travis-ci.org/Miniplop/react-camera/)\n\nThe comprehensive camera module for React. Including photographs! (videos, and barcode scanning coming soon)\n\n## Getting started\n\n`npm --save react-camera`\n\n## Usage\n\n```\nimport React, { Component } from 'react';\nimport Camera from 'react-camera';\n\nclass App extends Component {\n\n  constructor(props) {\n    super(props);\n    this.takePicture = this.takePicture.bind(this);\n  }\n\n  takePicture() {\n    const { img } = this.refs;\n    this.refs.camera.capture()\n    .then(blob => {\n      img.src = URL.createObjectURL(blob);\n      img.onload = () => { URL.revokeObjectURL(this.src); }\n    })\n  }\n\n  render() {\n    return (\n      <div style={style.container}>\n        <Camera\n          style={style.preview}\n          ref=\"camera\"\n        >\n          <div style={style.capture} onClick={this.takePicture}>[TAKE A PICTURE]</div>\n        </Camera>\n        <img ref=\"img\" />\n      </div>\n    );\n  }\n}\n\nexport default App;\n\nconst style = {\n  preview: {\n    flex: 1,\n  },\n  container: {\n    flex: 1,\n    flexDirection: 'row',\n  },\n  capture: {\n    flex: 0,\n    backgroundColor: '#fff',\n    borderRadius: 5,\n    color: '#000',\n    padding: 10,\n    margin: 40\n  },\n};\n\n```\n\n## Component instance methods\n\nYou can access component methods by adding a ref (ie. ref=\"camera\") prop to your <Camera> element, then you can use this.refs.camera.capture(cb), etc. inside your component.\n\n#### `capture(): Promise`\n\n## Development\n\n### yarn\n\n### npm (slower)\n"}},[300]);