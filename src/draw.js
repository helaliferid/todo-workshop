var canvas = document.querySelector('#canvas');
console.dir(canvas)

var ctx = canvas.getContext('2d');

x = -4 * Math.PI
i=20;
j=20;



while (x < 10 * Math.PI) {
    x += .01;
    f = Math.sin(x);
    ctx.beginPath();
    ctx.arc(x*i+180, 80-f*j, .7, 0, Math.PI * 2);
    ctx.stroke();
  
}

console.log(eval("Math.sin(3)"))