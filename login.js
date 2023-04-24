var request = new XMLHttpRequest(); 
request.open("GET","./userData.json", false); 
request.send();
var Userdata=JSON.parse(request.responseText);
function check(){
    var p=13331,mod=18446744073709551615,a=1,m=0;
    var names=document.getElementById("names1").value;
    var passwords=document.getElementById("passwords1").value;
    for(var i=0;i<passwords.length;i++){
        m=m+passwords[i].charCodeAt()*a;
        a=a*p;
        a=a%mod;
        m=m%mod;
    }
    console.log(m);
    console.log(Userdata);
}