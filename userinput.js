let a;
let b;
let c;

document.getElementById("save").onclick=function save(){
    a=document.getElementById("v1").value;
    a=Number (a);

    b=document.getElementById("v2").value;
    b=Number (b);

c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
 
 console.log(typeof c)
document.getElementById("vc").innerHTML=("side c = "+c);
}
 