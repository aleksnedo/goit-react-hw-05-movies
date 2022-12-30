"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[420],{420:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r,a,i,o,c,s,u,p,l,d,h,f,v=n(439),g=n(791),x=n(689),m=n(530),Z=n(168),b=n(934),j=b.Z.div(r||(r=(0,Z.Z)(["\n  display: inline-flex;\n"]))),w=b.Z.img(a||(a=(0,Z.Z)(["\n  max-width: 280px;\n  border-radius: 5px;\n"]))),_=b.Z.div(i||(i=(0,Z.Z)(["\n  padding: 25px;\n"]))),y=b.Z.h2(o||(o=(0,Z.Z)(["\n  margin-bottom: 14px;\n  font-weight: 800;\n"]))),k=b.Z.p(c||(c=(0,Z.Z)(["\n  margin-bottom: 40px;\n  font-weight: 600;\n"]))),U=b.Z.h3(s||(s=(0,Z.Z)(["\n  margin-bottom: 14px;\n"]))),S=b.Z.p(u||(u=(0,Z.Z)(["\n  margin-bottom: 40px;\n"]))),M=n(184),C=function(e){var t=e.dataMovie,n=t.title,r=t.release_date,a=t.vote_average,i=t.overview,o=t.genres,c=t.poster_path;return(0,M.jsxs)(j,{children:[(0,M.jsx)(w,{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:n}),(0,M.jsxs)(_,{children:[(0,M.jsx)(y,{children:"".concat(n," (").concat(r.slice(0,4),")")}),(0,M.jsxs)(k,{children:["User Score: ",Math.round(10*a),"%"]}),(0,M.jsx)(U,{children:"Overwiev"}),(0,M.jsx)(S,{children:i}),(0,M.jsx)(U,{children:"Genres"}),(0,M.jsx)(S,{children:o.length>0?o.map((function(e){return e.name})).join(", "):"No genres!"})]})]})},q=n(494),F=n(87),G=(0,b.Z)(F.rU)(p||(p=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 600;\n  text-transform: uppercase;\n  :hover {\n    color: #2662bd;\n  }\n"]))),I=function(e){var t=e.to,n=e.children;return(0,M.jsxs)(G,{to:t,children:[(0,M.jsx)(q.Fjg,{}),n]})},O=b.Z.p(l||(l=(0,Z.Z)(["\n  margin: 20px 0;\n"]))),P=b.Z.ul(d||(d=(0,Z.Z)(["\n  padding-left: 20px;\n"]))),A=b.Z.li(h||(h=(0,Z.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),E=(0,b.Z)(F.rU)(f||(f=(0,Z.Z)(["\n  color: #2662bd;\n"]))),H=function(){var e,t,n=(0,g.useState)(null),r=(0,v.Z)(n,2),a=r[0],i=r[1],o=(0,x.UO)().movieId,c=null!==(e=null===(t=(0,x.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,g.useEffect)((function(){(0,m.Pg)(o).then((function(e){i(e)}))}),[o]),(0,M.jsxs)("main",{children:[(0,M.jsx)(I,{to:c,children:"Go back"}),a&&(0,M.jsx)(C,{dataMovie:a}),(0,M.jsx)(O,{children:"Additional information"}),(0,M.jsxs)(P,{children:[(0,M.jsx)(A,{children:(0,M.jsx)(E,{to:"cast",state:{from:c},children:"Cast"})}),(0,M.jsx)(A,{children:(0,M.jsx)(E,{to:"reviews",state:{from:c},children:"Reviews"})})]}),(0,M.jsx)(g.Suspense,{fallback:(0,M.jsx)("div",{children:"Information is Loading..."}),children:(0,M.jsx)(x.j3,{})})]})}},530:function(e,t,n){n.d(t,{M1:function(){return h},Pg:function(){return l},UF:function(){return c},Wf:function(){return u},tx:function(){return v}});var r=n(861),a=n(687),i=n.n(a),o=n(388);function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=63f559983b2c566f4ead7a47a8a9015b");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(t){var n,r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.page,e.prev=1,e.next=4,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US&query=".concat(n,"&page=").concat(r,"&include_adult=false"));case 4:return a=e.sent,c=a.data.results,e.abrupt("return",c.map((function(e){return{id:e.id,title:e.title,release_date:e.release_date}})));case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(t){var n,r,a,c,s,u,p,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US"));case 3:return n=e.sent,r=n.data,a=r.title,c=r.overview,s=r.poster_path,u=r.vote_average,p=r.genres,l=r.release_date,e.abrupt("return",{vote_average:u,title:a,release_date:l,overview:c,poster_path:s,genres:p});case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.cast.map((function(e){return{name:e.name,profile_path:e.profile_path,character:e.character,cast_id:e.cast_id}})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US&page=1"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=420.4115db7d.chunk.js.map