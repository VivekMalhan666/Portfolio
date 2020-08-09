var preload = document.getElementById("preloader");
var loading = 0;
var id = setInterval(frame ,20);
function frame(){
    if(loading == 20){
        preload.remove();
        clearInterval(id);
    }else{
        loading = loading + 1;
        if(loading == 25){
            preload.style.animation = "fadeout 1s ease";
        }
    }
}
