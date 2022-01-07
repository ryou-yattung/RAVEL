let down=document .querySelector(".other");
console.log(down);

let story=document .querySelector(".story_line_2");
console.log(story);

let btn_down=document .querySelector(".btn_down");
console.log(btn_down);

let a=1;

//story
        down.onclick=function(event){
            if(a){
                story.style.display="flex";
                btn_down.src="img/btn_up.svg";

                a=0;
            }   

            else{
                story.style.display="none";
                btn_down.src="img/btn_down.svg";

                a=1;
            }
        }




//動き
ScrollReveal().reveal('.story_line', {
    delay: 200,
    duration: 1600, 
    origin: 'bottom', 
    distance: '50px',
    reset: false
});

ScrollReveal().reveal('.accent_flex', {
    delay: 200,
    duration: 1600, 
    origin: 'left', 
    distance: '50px',
    reset: false  
});


// menu
let menu=document .querySelector("#menu");
console.log(menu);

let nav=document .querySelector(".menu_nav");
console.log(nav);

let b=1;
menu.onclick=function(event){
    if(b){
        nav.style.display="block";

        b=0;
    }   

    else{
        nav.style.display="none";

        b=1;
    }
}

//login
let login_btn=document .querySelector(".login_btn");
console.log(login_btn);

let login_btn2=document .querySelector(".login_btn_2");
console.log(login_btn2);

let login=document .querySelector(".login");
console.log(login);

let cancel=document .querySelector(".cancel");
console.log(cancel);

login_btn.onclick=function(event){
        login.style.display="block";
}

login_btn2.onclick=function(event){
    login.style.display="block";
}

cancel.onclick=function(event){
    login.style.display="none";
}