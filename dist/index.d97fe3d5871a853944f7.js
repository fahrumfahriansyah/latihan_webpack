/*! For license information please see index.d97fe3d5871a853944f7.js.LICENSE.txt */
(()=>{"use strict";"undefined"!==localStorage?console.log("ada"):console.log("tidak ada");var t,e,a=document.querySelector(".addButton"),n=(document.querySelectorAll(".inputBook"),document.querySelector(".inputJudul")),l=document.querySelector(".inputPenulis"),o=document.querySelector(".inputTahun"),r=Array.from(document.querySelectorAll(".inputPilih")),i=document.querySelector(".notSeen"),c=document.querySelector(".alreadySeen"),u=document.querySelector(".container1"),s={},d=[],m=[],g=[],S=[],h=[];r.forEach((function(t){return t.addEventListener("click",(function(){e=t.value}))})),window.addEventListener("load",(function(){var e=localStorage.getItem("data"),a=JSON.parse(e);t=a,localStorage.removeItem("data"),localStorage.setItem("data",JSON.stringify(t))})),a.addEventListener("click",(function(){s.id=Math.floor(1e3*Math.random()+1e4*Math.random()*1e3+1e4),s.title=n.value,s.author=l.value,s.year=o.value,s.isComplete=e;var a=s;localStorage.setItem("jumbo",JSON.stringify(a));for(var r=0;r<=11;r++)if(null===t||!1===t){if(0===d.length){if(""===s.title||""===s.author||""===s.year||void 0===s.isComplete){alert("data anda salah");break}d.push(s),localStorage.setItem("item",JSON.stringify(s));var i=localStorage.getItem("item"),c=JSON.parse(i);m.push(c),localStorage.setItem("data",JSON.stringify(m)),localStorage.removeItem("item"),localStorage.removeItem("item".concat(d.length));break}if(d.length===r){if(""===s.title||""===s.author||""===s.year){alert("data anda salah");break}var u=function(t){var e=localStorage.getItem("data"),a=JSON.parse(e).find((function(e){return e.title===t.title}));return a}(s);if(u){alert("judul buku sudah ada");break}d.push(s),localStorage.setItem("item".concat(d.length),JSON.stringify(s));var g=localStorage.getItem("item".concat(d.length)),S=JSON.parse(g);m.push(S),localStorage.setItem("data",JSON.stringify(m)),localStorage.removeItem("item".concat(d.length));break}}else{if(0===d.length){if(""===s.title||""===s.author||""===s.year||void 0===s.isComplete){alert("data anda salah");break}var h=function(t){var e=localStorage.getItem("data"),a=JSON.parse(e).find((function(e){return e.title===t.title}));return a}(s);if(h){alert("judul buku sudah ada");break}d.push(s),t.push(s),localStorage.setItem("item",JSON.stringify(t));var f=localStorage.getItem("item");JSON.parse(f).forEach((function(t){m.push(t)})),localStorage.setItem("data",JSON.stringify(m)),localStorage.removeItem("item"),localStorage.removeItem("item".concat(d.length));break}if(d.length===r){if(""===s.title||""===s.author||""===s.year){alert("data anda salah");break}var p=function(t){var e=localStorage.getItem("data"),a=JSON.parse(e).find((function(e){return e.title===t.title}));return a}(s);if(p){alert("judul buku sudah ada");break}d.push(s),m.push(s),localStorage.setItem("item".concat(d.length),JSON.stringify(m));var b=localStorage.getItem("item".concat(d.length)),v=JSON.parse(b);m=[],v.forEach((function(t){m.push(t)})),localStorage.setItem("data",JSON.stringify(m)),localStorage.removeItem("item".concat(d.length));break}}}));var f,p,b=localStorage.getItem("jumbo"),v="",y=JSON.parse(b);function I(t){return' <div class="jumbroton">\n    <ul>\n        <li>nama: '.concat(t.title,"</li>\n        <li>judul: ").concat(t.author,'</li>\n        <li class="liBtn1">tahun: ').concat(t.year,'</li>\n        <li class="liBtn2"> <button class="hapus" name="').concat(t.title,'">\n                hapus </button>\n        </li>\n        <li style="display: inline-block; text-align: end;"><button class="belum" style="background-color: rgb(5, 130, 22);" name="').concat(t.title,'" >Belum di baca</button></li>\n        <li style="display: inline-block; text-align: end;"><button class="edit" style="background-color: rgb(5, 130, 22);" name="').concat(t.title,'" >edit</button></li>\n    </ul>\n</div>')}function J(t){return' <div class="jumbroton">\n    <ul>\n        <li>nama: '.concat(t.title,"</li>\n        <li>judul: ").concat(t.author,'</li>\n        <li class="liBtn1">tahun: ').concat(t.year,'</li>\n        <li class="liBtn2"> <button class="hapus" name="').concat(t.title,'">\n                hapus </button>\n        </li>\n        <li style="display: inline-block; text-align: end;"><button class="baca" style="background-color: rgb(5, 130, 22);" name="').concat(t.title,'" >Sudah di baca</button></li>\n        <li style="display: inline-block; text-align: end;"><button class="edit" style="    background-color: rgb(2, 56, 59);\n        " name="').concat(t.title,'" >edit</button></li>\n\n    </ul>\n</div>')}(f=y,p=localStorage.getItem("data"),JSON.parse(p).find((function(t){return t.id===f.id})))&&("true"===y.isComplete?(v+=I(y),u.innerHTML=v):"false"===y.isComplete&&(v+=J(y),u.innerHTML=v));var N=localStorage.getItem("data"),O=JSON.parse(N),k="",j="";function E(t){var e=localStorage.getItem("data");return JSON.parse(e).find((function(e){return e.title===t}))}O.forEach((function(t){"true"===t.isComplete?(k+=function(t){return'<div class="data1" style="margin:5px;">\n    <h1 style="margin-bottom:5px ;">Sudah Di Baca</h1>\n            <div class="value">\n                <ul>\n                    <li>\n                        <h1>Judul: '.concat(t.title,"</h1>\n                        <h3>penulis: ").concat(t.author,"</h3>\n                        <h3>tahun: ").concat(t.year,'</h3>\n                    </li>\n                    <li><button class="btn hapus" name="').concat(t.title,'" >hapus</button></li>\n                    <li><button class="btn2 belum" name="').concat(t.title,'">belum di Baca</button></li>\n\n                </ul>\n            </div>\n</div>')}(t),c.innerHTML=k):"false"===t.isComplete&&(j+=function(t){return'<div class="data2" style="margin:5px;">\n    <h1 style="margin-bottom:5px ;">Belom di Baca</h1>\n            <div class="value">\n                <ul>\n                    <li>\n                        <h1>Judul: '.concat(t.title,"</h1>\n                        <h3>penulis: ").concat(t.author,"</h3>\n                        <h3>tahun: ").concat(t.year,'</h3>\n                    </li>\n                    <li><button class="btn1 hapus" name="').concat(t.title,'">hapus</button></li>\n                    <li><button class="btn2 baca" name="').concat(t.title,'">sudah di Baca</button></li>\n\n                </ul>\n            </div>\n</div>')}(t),i.innerHTML=j)})),document.querySelectorAll(".hapus").forEach((function(t){t.addEventListener("click",(function(e){var a=function(t){var e=localStorage.getItem("data");return JSON.parse(e).find((function(e){return e.title===t}))}(t.getAttribute("name")),n=localStorage.getItem("data");JSON.parse(n).forEach((function(t,e){if(t.title===a.title);else{var n=localStorage.getItem("data"),l=JSON.parse(n);g.push(l[e])}})),confirm("Apakah anda yakin?")&&(alert("buku telah di hapus"),localStorage.removeItem("data"),localStorage.setItem("data",JSON.stringify(g)),e.preventDefault(),g=[],location.reload())}))})),document.querySelectorAll(".baca").forEach((function(t){t.addEventListener("click",(function(){var e=E(t.getAttribute("name")),a=localStorage.getItem("data"),n=JSON.parse(a),l="";n.forEach((function(t,a){if(t.title===e.title)t.isComplete="true",localStorage.removeItem("jumbo"),localStorage.setItem("jumbo",JSON.stringify(t)),l+=I(t),S.push(t);else{var n=localStorage.getItem("data"),o=JSON.parse(n);S.push(o[a])}})),u.innerHTML=l,alert(" data sudah di pindahkan"),console.log(S),localStorage.removeItem("data"),localStorage.setItem("data",JSON.stringify(S)),S=[],location.reload()}))})),document.querySelectorAll(".belum").forEach((function(t){t.addEventListener("click",(function(){var e=t.getAttribute("name");console.log(e);var a=E(e);console.log(a);var n=localStorage.getItem("data"),l=JSON.parse(n),o="";l.forEach((function(t,e){if(t.title===a.title)t.isComplete="false",localStorage.removeItem("jumbo"),localStorage.setItem("jumbo",JSON.stringify(t)),o+=J(t),h.push(t);else{var n=localStorage.getItem("data"),l=JSON.parse(n);h.push(l[e])}})),u.innerHTML=o,alert(" data sudah di pindahkan"),console.log(h),localStorage.removeItem("data"),localStorage.setItem("data",JSON.stringify(h)),h=[],location.reload()}))}));var q=document.querySelector(".inputSearch");document.querySelector(".buttonSearch").addEventListener("click",(function(t){if(q.value){var e=function(t){var e=localStorage.getItem("data");return JSON.parse(e).find((function(e){return e.title===t}))}(q.value);if(e){var a=localStorage.getItem("data");JSON.parse(a).forEach((function(t){t.title===e.title&&(localStorage.removeItem("jumbo"),localStorage.setItem("jumbo",JSON.stringify(t)))}))}else alert("data anda salah")}else alert("tuliskan pencarian")})),document.querySelector(".edit").addEventListener("click",(function(){var t,e,a,n=localStorage.getItem("jumbo"),l=JSON.parse(n),o=localStorage.getItem("jumbo"),r=JSON.parse(o);confirm("edit nama ?")&&(t=prompt("masukan nama baru"))&&(r.title=t),confirm("edit penulis ?")&&(e=prompt("masukan penulis baru"))&&(r.author=e),confirm("edit tahun ?")&&(a=prompt("masukan tahun yang baru \ncth = y=tahun d=bulan m=hari\nyyyy-dd-mm"))&&(r.year=a);var i=function(t){var e=localStorage.getItem("data");return JSON.parse(e).find((function(e){return e.title===t}))}(t);if(i)alert("data judul buku sudah ada anda harus mengisi data judul yang baru");else{alert("data telah di ubah"),localStorage.removeItem("jumbo"),localStorage.setItem("jumbo",JSON.stringify(r));var c=localStorage.getItem("data"),u=JSON.parse(c),s=[];u.forEach((function(t){t.title===l.title?(t=r,s.push(t)):s.push(t)})),localStorage.removeItem("data"),localStorage.setItem("data",JSON.stringify(s)),location.reload()}}))})();