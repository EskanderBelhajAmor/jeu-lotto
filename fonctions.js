nom=prompt("Votre nom SVP")



var now = new Date();
var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();




function vnombre(champ){
 if(isNaN(champ.value)||champ.value<5||champ.value>20){
   alert('Veuillez choisir un nombre entre 5 et 20');
   return false;
 }else{
   return true;
 }
}





     var case1 = null;
     var case2 = null;
     var case3 = null;
     var case4 = null;
     var case5 = null;
     var case6 = null;
     var case7 = null;
     var k=null;
var tab= new Array();  
 
var startTime;
    function startRandomly() {

 
       

        case1= setInterval(function () {
            tab[0] =Math.floor(Math.random() * (15)) + 5;
            document.getElementById("random1").value =tab[0];
        });

            case2= setInterval(function () {
            tab[1] =Math.floor(Math.random() * (15)) + 5;
            document.getElementById("random2").value  =tab[1];
        });
                case3= setInterval(function () {
            tab[2] =Math.floor(Math.random() * (15)) + 5;
            document.getElementById("random3").value  =tab[2];
        });
                case4= setInterval(function () {
           tab[3] =Math.floor(Math.random() * (15)) + 5;
            document.getElementById("random4").value  =tab[3];
        });
                case5= setInterval(function () {
            tab[4] =Math.floor(Math.random() * (15)) + 5;
            document.getElementById("random5").value  =tab[4];
        });
                case6= setInterval(function () {
            tab[5]=Math.floor(Math.random() * (15)) + 5;
            document.getElementById("random6").value  =tab[5];
        });

        startTime = Date.now(); 



    }




    function stopRandomly() {
        clearInterval(case1);
        clearInterval(case2);
        clearInterval(case3);
        clearInterval(case4);
        clearInterval(case5);
        clearInterval(case6);
    if (startTime) {
        var endTime = Date.now();
        var difference = endTime - startTime;
      
        startTime = null;
    } 

    document.getElementById("time").value="nombres generes en: "+difference+"ms";

      }



function final(){
var a= new Array();
var b= new Array();
var k=0 ;
var s1=0;
var s2=0; 

      a[0]=document.getElementById("random1").value;
      a[1]=document.getElementById("random2").value;
      a[2]=document.getElementById("random3").value;
      a[3]=document.getElementById("random4").value;
      a[4]=document.getElementById("random5").value;
      a[5]=document.getElementById("random6").value;

    b[0]=document.getElementById("x1").value;
    b[1]=document.getElementById("x2").value;
    b[2]=document.getElementById("x3").value;
    b[3]=document.getElementById("x4").value;
    b[4]=document.getElementById("x5").value;
    b[5]=document.getElementById("x6").value;

for (var i = 5; i >= 0; i--) {
 if (a[i]==b[i]) {
  k++;

 }
}


for (var i = 5; i >= 0; i--) {
  s1=s1+(b[i]%10)+(~~(b[i]/10));
  s2=s2+(a[i]%10)+(~~(a[i]/10));
   }








document.getElementById("fin").value=" "+k+" nombre(s) trouves";
if (k>=3 || s1==s2 ) {
  document.getElementById("felic").value="vous avez gagne" ;
}
else{
  document.getElementById("felic").value="vous avez perdu" ;
}


      }














    var hidden = false;
    function action() {
        hidden = !hidden;
        if(hidden) {
            document.getElementById('togglee').style.visibility = 'hidden';
            document.getElementById('toggler').style.visibility = 'visible';
        } else {
            document.getElementById('togglee').style.visibility = 'visible';
            document.getElementById('toggler').style.visibility = 'hidden';
        }
    }