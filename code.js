//  var header = document.getElementById("Header")

//      window.addEventListener("scroll", ()=> {
//         var scroll = window.scrollY
//        if(scroll>0){
//              header.style.backgroundColor = "#121212"
//       }else{
//             header.backgroundColor = "transparent"
//         }
//     });
    
 window.onscroll = function(){
    var header = document.querySelector("Header");
    nav.classList.toggle(".cambiar-fondo", window.scrollY>0);
 }
