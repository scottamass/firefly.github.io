function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 
   
 }
 
 
 
 const parallax = document.getElementById
 ("parallax");
 
 window.addEventListener("scroll", function()
 {
   let offset =window.pageYOffset;
   parallax.style.backgroundPositionY = offset *0.7 +"px";
 }
                        )
 const toggleButton =document.getElementsByClassName('toggle-button') [0]
 const navbarLinks =document.getElementsByClassName('navbar-links')[0]
 const navbar =document.getElementsByClassName('navbar')[0]
 


 toggleButton.addEventListener('click',() => {
       navbarLinks.classList.toggle('active')
   navbar.classList.toggle('active')
 })
 
