
/*
window.addEventListener("resize", function() {
    let n_row = 1;
    let window_width = document.documentElement.clientWidth;
    let n_img = 5;
    let img_width = 275;
    let n_img_row = Math.floor(window_width / img_width);
    let n_row_modulo = n_img % n_img_row;
    if (n_row_modulo !== 0){
        n_row = Math.floor(n_img / n_img_row) + 1;
    }else{
        n_row = n_img / n_img_row;
    }
    let gallery_height = n_row * 410;
    gallery_height = gallery_height + "px";
    let element = document.getElementById("img_gallery");
    if (element){element.style.height = gallery_height;
    }
})
*/