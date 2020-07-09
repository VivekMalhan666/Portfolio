var preload = document.getElementById("preloader");
var loading = 0;
var id = setInterval(frame ,30);
function frame(){
    if(loading == 40){
        preload.remove();
        clearInterval(id);
    }else{
        loading = loading + 1;
        if(loading == 35){
            preload.style.animation = "fadeout 1s ease";
        }
    }
}
