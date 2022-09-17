let a = prompt("Ismingiz: ")
document.body.innerHTML = boshHarf(a);
function boshHarf(a){
    b = a.toString().split(" ");
    d = b[0];
    h = b[1];
    result = d[0].toUpperCase() + b[0].slice(1) + " "  + h[0].toUpperCase() + b[1].slice(1);
    return result;
};
console.log(boshHarf(a));
