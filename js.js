var btn = document.getElementById("btn");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 150){

        btn.style.display = "block";
        
    }
    else{
        btn.style.display = "none"
        
    }
}
btn.addEventListener('click', function(){
   document.documentElement.scrollTop = 0;
})

//////menu-toggle

var menu = document.getElementById("menu_toggle");
var nav = document.getElementsByTagName('ul')[0];

menu.addEventListener('click', function(){
    if(nav.style.transform == "translateY(0%)"){
        var cl_menu = document.createAttribute("class");
        cl_menu.value = "close_menu"
        menu.setAttributeNode(cl_menu);
        nav.style.transform = "translateY(-100%)";
        nav.style.position = "absolute";

    }else{
        
        var cls = document.createAttribute("class");
        cls.value = "toggle"
        menu.setAttributeNode(cls);
        nav.style.transform = "translateY(0%)";
        nav.style.display = "flex";
    }
    
})
