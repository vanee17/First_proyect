window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("abajo",window.scrollY>0);
})

function boton(valor){
    var nombre= document.getElementById("nombre").value=valor
    var password= document.getElementById("contrasena").value=valor
     if(password !=""){
         document.getElementById('botom_log').classList.remove('not-active');
         document.getElementById('botom_log').classList.add('active');
     }else if(nombre!=""){
            document.getElementById('botom_log').classList.remove('not-active');
            document.getElementById('botom_log').classList.add('active');
        }else{
            document.getElementById('botom_log').classList.add('not-active');
            }
 }
