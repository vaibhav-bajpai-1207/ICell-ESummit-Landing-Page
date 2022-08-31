let navbar = document.getElementById('nav');
// let speakerThumb = document.querySelectorAll('.speaker-thumb');
// let speakerThumbOverlay = document.querySelectorAll('')

let navBg = ()=>{
    if(window.scrollY != 0){
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.94)";
    }else{
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

// let showSpeakerDetail = ()=>{
//     speakerThumb.forEach(ele=>{
//         ele.childNodes[]
//     })
// }

addEventListener('scroll', navBg);