function func1(){
    document.querySelector('.active1').style.opacity="1";
    document.querySelector('.active2').style.opacity="0";
    document.querySelector('.active3').style.opacity="0";
}
function func2(){
    document.querySelector('.active1').style.opacity=0;
    document.querySelector('.active2').style.opacity=1;
    document.querySelector('.active3').style.opacity=0;
}
function func3(){
    document.querySelector('.active1').style.opacity=0;
    document.querySelector('.active2').style.opacity=0;
    document.querySelector('.active3').style.opacity=1;
}


let button1=document.querySelector('.mobile-menu-button');
button1.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.mobile-div-lang').style.opacity=1;
        const element = document.querySelector('.mobile-div-lang');
        if (element) {
            element.style.pointerEvents = 'all'; // Ensures pointer events are enabled
            element.style.display = 'block';
        }
});
    

function med(e) {
    e.stopPropagation();  // Prevent the click event from propagating
    const element = document.querySelector('.mobile-div-lang');
    if (element) {
        element.style.opacity = 1;  // Make it visible
        element.style.pointerEvents = 'all';  // Enable pointer events
        element.style.display = 'block';  // Ensure it is displayed
    }
}

document.body.addEventListener('click', (event) => {
    const element = document.querySelector('.mobile-div-lang');
    
    // Check if the click was outside the `.mobile-div-lang` element
    if (element && !element.contains(event.target)) {
        element.style.opacity = 0;  // Make it invisible
        element.style.pointerEvents = 'none';  // Disable pointer events
        element.style.display = 'none';  // Hide the element
    }
});
