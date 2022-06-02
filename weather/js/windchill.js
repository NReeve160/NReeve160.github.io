let t = parseInt("73")
//alert(t);

let s = parseInt("7")
//alert(s);

var w = 35.74 + 0.6215 * t - 35.75 * s ** .16 + .4275 * t * s ** .16;

const c = document.getElementById('windChill');

document.getElementById("windChill").innerHTML = Math.round(w);

//alert(w);