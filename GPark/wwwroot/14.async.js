(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"7n7u":function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("MVZn")),o=n(a("o0o1")),r=a("dCQc"),s={namespace:"ticketState",state:{tickets:[],total:0,loading:!1},effects:{fetch:o.default.mark(function t(e,a){var n,c,s,u;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,c=a.call,s=a.put,t.next=4,s({type:"changeLoading",payload:!0});case 4:return t.next=6,c(r.getTickets,n);case 6:if(u=t.sent,u.Data){t.next=12;break}return t.next=10,s({type:"getTickets",payload:[],total:0});case 10:t.next=14;break;case 12:return t.next=14,s({type:"getTickets",payload:u.Data.Tickets,total:u.Data.TotalAmount});case 14:return t.next=16,s({type:"changeLoading",payload:!1});case 16:case"end":return t.stop()}},t,this)})},reducers:{changeLoading:function(t,e){return(0,c.default)({},t,{loading:e.payload})},getTickets:function(t,e){return(0,c.default)({},t,{tickets:e.payload,total:e.total})}}};e.default=s}}]);