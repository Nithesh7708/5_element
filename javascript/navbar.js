window.addEventListener('scroll', function() {

    var scrollPosition = window.scrollY;
    var threshold = 200; // Adjust this value as needed
    if (scrollPosition > threshold) {
      document.querySelector('nav').style.boxShadow="1px -8px 20px black";
    } else {
        document.querySelector('nav').style.boxShadow="none";
    }
});

// icon change process
document.getElementById("mobile_services").addEventListener("change", () => {
    var mobile_menu_checkbox=document.getElementById("mobile_services")
    if (mobile_menu_checkbox.checked===false) {
       document.querySelector('.nav-container .right ul li:nth-child(4) a label span i').style.transform="rotate(0deg)";
      }
      else{
        document.querySelector('.nav-container .right ul li:nth-child(4) a label span i').style.transform="rotate(180deg)";
      }
});

// icon change perpose
document.getElementById('menu_icon').addEventListener('change',(event)=>{
    var check_btn=document.getElementById('menu_icon')
    var menu_checker=document.querySelector('.menubar label i')
    if (check_btn.checked===true) {
        menu_checker.style.transform="rotate(70deg)";
        menu_checker.className='bi bi-x';
       }
       else{
        menu_checker.className='"bi bi-list';
       }
})

// whatsapp animation
document.addEventListener('DOMContentLoaded', () => {
setInterval(()=>{
  var animation=document.getElementById('whatsapp_contect');
  animation.classList.add("whatsapp_ani")
  setTimeout(()=>{
    var animation=document.getElementById('whatsapp_contect');
    animation.classList.remove("whatsapp_ani")
  },1000)
},6000)

});

// whatsapp track number
var whatsapp=document.querySelector('#whatsapp_contect img');
whatsapp.addEventListener('click',()=>{
  window.location.href="https://wa.me/919008809300?text=Hello%20sir,%20I%20saw%20your%20website%20and%20I%20am%20interested%20to%20join%20your%20class,%20can%20you%20let%20me%20know%20how%20to%20do%20join?"
})
