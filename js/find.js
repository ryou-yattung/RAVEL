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

// heart
let heart=document .querySelectorAll(".tg_heart");
console.log(heart);

let a=1;
for(let i=0; i<heart .length; i++){
    heart[i].onclick=function(event){
        let heart=event.currentTarget;
        if(a){
            heart.src="img/icon_h.png";
    
            a=0;
        }   
    
        else{
            heart.src="img/icon_140060_16.png";
    
            a=1;
        }
    }
}



// //booking
// let booking=document .querySelectorAll(".booking");
// console .log(booking);

// let fh=document .getElementById(`fh`);
// console .log(fh);

// // for(let i=0; i<booking .length; i++){
//     booking.onclick=function(event){
//         // let booking=event.currentTarget;
//             fh.style.display="none";    
//     }
// // }

