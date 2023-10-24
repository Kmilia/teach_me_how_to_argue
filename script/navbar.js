
function switchNavBar() {
    var navbar = document.getElementById("navSmall");
    if (navbar.className.indexOf("w3-show") == -1) {
        navbar.className += " w3-show";
    } else { 
        navbar.className = navbar.className.replace(" w3-show", "");
    }
};

document.addEventListener('click', function handleClickOutsideBox(event) {  
    const navbar = document.getElementById('navSmall');
    const toogle = document.getElementById('toogle');
  
    if (!navbar.contains(event.target) && (!toogle.contains(event.target))) {
        navbar.className = navbar.className.replace(" w3-show", "");
    }
  });