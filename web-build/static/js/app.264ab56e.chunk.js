(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n.p+"static/media/im1.2fe27e76.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/im2.2804afe8.jpg"},45:function(e,t,n){e.exports=n.p+"static/media/im3.f96c2d31.jpg"},46:function(e,t,n){e.exports=n.p+"static/media/im4.5fb8451b.jpg"},69:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1),i=n(3),c=n(8),l=n(70),s=n(18),u=n(43),d=n.n(u),g=n(44),p=n.n(g),m=n(45),x=n.n(m),h=n(46),f=n.n(h),y=n(16),E=n.n(y),b=r.a.create({paginationContainer:{top:0},pagination:{borderRadius:2}}),v=function(e){return o.a.createElement(s.a,E()({},e,{paginationStyle:b.paginationContainer,paginationStyleItem:b.pagination,paginationDefaultColor:"tomato",paginationActiveColor:"white"}))},w=c.a.get("window"),C=(w.width,w.height,[d.a,p.a,x.a,f.a]),I=Array.from(Array(5)).map((function(e,t){return function(e){return{image:C[e%C.length]}}(t)})),P=function(){return o.a.createElement(s.c,{autoplay:!0,autoplayDelay:5,index:3,autoplayLoop:!0,autoplayInvertDirection:!0,data:I,renderItem:function(e){var t=e.item;return o.a.createElement(l.a,{style:k.image,source:t.image})},showPagination:!0,PaginationComponent:v})},k=r.a.create({image:{height:"480px",width:"350px"}}),j=n(40),A=n(11),D=n(21),G=c.a.get("window"),S=G.width,T=G.height,J=function(){var e=o.a.useRef(null);return o.a.createElement(s.b,{showPagination:!0,ref:e,onChangeIndex:function(e){var t=e.index,n=e.prevIndex;console.log({index:t,prevIndex:n})}},o.a.createElement(A.a,{style:[L.child,{backgroundColor:"salmon"}],onPress:function(){e.current.goToLastIndex()}},o.a.createElement(D.a,{style:L.text},"0 - Go to last index")),o.a.createElement(A.a,{style:[L.child,{backgroundColor:"skyblue"}],onPress:function(){var t=e.current.getPrevIndex();console.log("the previous index is "+t),j.a.alert("the previous index is "+t)}},o.a.createElement(D.a,{style:L.text},"1 - Press to get the previous index")),o.a.createElement(A.a,{style:[L.child,{backgroundColor:"tomato"}],onPress:function(){var t=e.current.getCurrentIndex();console.log("the current index is "+t),j.a.alert("the current index is "+t)}},o.a.createElement(D.a,{style:L.text},"2 - Press to get the current index")),o.a.createElement(A.a,{style:[L.child,{backgroundColor:"skyblue"}],onPress:function(){e.current.scrollToIndex({index:1})}},o.a.createElement(D.a,{style:L.text},"3 - Go to the second index")),o.a.createElement(A.a,{style:[L.child,{backgroundColor:"teal"}],onPress:function(){e.current.goToFirstIndex()}},o.a.createElement(D.a,{style:L.text},"4 - Go to first index")))},L=r.a.create({child:{height:.9*T,width:S,justifyContent:"center"},text:{fontSize:.1*S,textAlign:"center"}}),R=(t.a=function(){return o.a.createElement(i.a,{style:R.container},o.a.createElement(i.a,{style:R.container},o.a.createElement(P,null)),o.a.createElement(i.a,{style:R.container},o.a.createElement(J,null)))},r.a.create({container:{flex:1,backgroundColor:"white"}}))},71:function(e,t,n){e.exports=n(100)}},[[71,1,2]]]);
//# sourceMappingURL=app.264ab56e.chunk.js.map