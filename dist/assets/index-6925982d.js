function p(){import("data:text/javascript,")}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();const f={a:{b:{c:1}}},d={a:{b:{}}},n=Math.random()>.5?f:d;var c,s,l;console.log((l=(s=(c=n==null?void 0:n.a)==null?void 0:c.b)==null?void 0:s.c)==null?void 0:l.d);const a=1;console.log({b:a});export{p as __vite_legacy_guard};
