/**
 * Detección de idioma ANTES de pintar (script inline en <head>/<body>).
 * Regla: se recorren los idiomas del navegador en orden de preferencia; el primero que sea
 * español deja el sitio como está (el contenido original está en español) y el primero que sea
 * inglés —o cualquier otro idioma sin diccionario propio— activa la traducción al inglés.
 * Para probar: ?lang=en o ?lang=es fuerzan el idioma. Deja el resultado en <html data-lang>. Mientras el traductor trabaja, oculta la página
 * (html.i18n-pending) para evitar el parpadeo en español; un temporizador la muestra pase lo que pase.
 */
export const I18N_BOOT_SCRIPT = `try{var d=document.documentElement,L=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"es"],l="en";for(var i=0;i<L.length;i++){var c=String(L[i]).toLowerCase().slice(0,2);if(c==="es"){l="es";break}if(c==="en")break}var q=/[?&]lang=(en|es)(&|$)/.exec(location.search);if(q)l=q[1];d.setAttribute("data-lang",l);if(l!=="es"){d.lang=l;d.classList.add("i18n-pending");setTimeout(function(){d.classList.remove("i18n-pending")},2500)}}catch(e){}`
