(() => {
  var t = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js",
    e = document.querySelector(`script[src="${t}"]`);
  e || (e = document.createElement("script"), e.async = !0, e.src = t, document.head.append(
    e));
})();
