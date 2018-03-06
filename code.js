function box(id) {return document.getElementById(id);}
function show1(x)
{
    
    box('inputField').value += x.value;
    if (x.value=='C'){
        box('inputField').value="";
    }
}
function  answer()
{
    var a;
  a=box('inputField').value;
  console.log(a);
  box('inputField').value=eval(a);

}
function backspace()
{
    var num=box('inputField').value;
    var num1=num.substring(0,num.length-1);
    box('inputField').value=num1;
}
function power(p)
{
    b=box('inputField').value;
    b=Math.pow(b,p);
    box('inputField').value=b;
    
}