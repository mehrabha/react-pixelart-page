(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),s=(a(15),a(1)),i=a(2),c=a(5),u=a(3),h=a(6),m=a(4),p=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("h",{className:"nav-element title"},"pixel art"),o.a.createElement("button",{className:"nav-element btn",onClick:this.props.addRow},"Row +"),o.a.createElement("button",{className:"nav-element btn",onClick:this.props.removeRow},"Row -"),o.a.createElement("button",{className:"nav-element btn",onClick:this.props.addCol},"Col +"),o.a.createElement("button",{className:"nav-element btn",onClick:this.props.removeCol},"Col -"),o.a.createElement("button",{className:"nav-element btn",onClick:this.props.fill},"Fill"),o.a.createElement("button",{className:"nav-element btn",onClick:this.props.fillAll},"Fill All"))}}]),t}(o.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"canvas-col",style:{background:this.props.color}})}}]),t}(o.a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"canvas-row"},this.props.cols.map(function(e){return o.a.createElement(v,{color:e})}))}}]),t}(o.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"canvas-container"},this.props.rows.map(function(e){return o.a.createElement(d,{cols:e})}))}}]),t}(o.a.Component),b=(a(16),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={rows:[],defaultColor:"white",currentColor:"red"},e.addRow=e.addRow.bind(Object(h.a)(e)),e.removeRow=e.removeRow.bind(Object(h.a)(e)),e.addCol=e.addCol.bind(Object(h.a)(e)),e.removeCol=e.removeCol.bind(Object(h.a)(e)),e.fillAll=e.fillAll.bind(Object(h.a)(e)),e.fill=e.fill.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<6;t++){for(var a=[],n=0;n<6;n++)a.push(this.state.defaultColor);e.push(a)}this.setState({rows:e})}},{key:"addRow",value:function(){var e=this.state.rows,t=[];if(0===e.length)for(var a=0;a<6;a++)t.push("grey");else for(var n=0;n<e[0].length;n++)t.push("grey");e.push(t),this.setState({rows:e})}},{key:"removeRow",value:function(){var e=this.state.rows;e.pop(),this.setState({rows:e})}},{key:"addCol",value:function(){for(var e=this.state.rows,t=0;t<e.length;t++)e[t].push(this.state.defaultColor);this.setState({rows:e})}},{key:"removeCol",value:function(){for(var e=this.state.rows,t=0;t<e.length;t++)e[t].pop();this.setState({rows:e})}},{key:"fill",value:function(){for(var e=this.state.rows,t=[],a=0;a<e.length;a++){for(var n=[],o=0;o<e[a].length;o++)e[a][o]==this.state.defaultColor?n.push(this.state.currentColor):n.push(e[a][o]);t.push(n)}this.setState({rows:t})}},{key:"fillAll",value:function(){for(var e=this.state.rows,t=[],a=0;a<e.length;a++){for(var n=[],o=0;o<e[a].length;o++)n.push(this.state.currentColor);t.push(n)}this.setState({rows:t})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app-container"},o.a.createElement(p,{addRow:this.addRow,removeRow:this.removeRow,addCol:this.addCol,removeCol:this.removeCol,fill:this.fill,fillAll:this.fillAll}),o.a.createElement(f,{rows:this.state.rows}))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.e7add9ae.chunk.js.map