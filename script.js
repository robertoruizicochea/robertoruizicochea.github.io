(function(){var h=document.documentElement,b=document.getElementById('langBtn'),cv=document.getElementById('cvBtn');
function set(l){h.classList.toggle('en',l==='en');h.lang=l;b.textContent=l==='en'?'ES':'EN';cv.href=cv.dataset['cv'+(l==='en'?'En':'Es')];try{localStorage.setItem('lang',l)}catch(e){}}
var s=null;try{s=localStorage.getItem('lang')}catch(e){}if(s)set(s);
b.addEventListener('click',function(){set(h.classList.contains('en')?'es':'en')});})();
