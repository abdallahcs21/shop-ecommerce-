let mnue= document.querySelector("#show_side_bar");
let sidebar=document.querySelector("#side");

let close_sidebar=document.querySelector("#close_sidebar");
close_sidebar.onclick=function(){
    sidebar.classList.remove("open");
}

mnue.onclick=function(){
    sidebar.classList.add("open")
}