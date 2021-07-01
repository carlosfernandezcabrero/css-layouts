function displayMenu(){
    var navbarLinks = document.getElementById('center')

    if (navbarLinks.style.display === 'block'){
        navbarLinks.style.display = 'none'
    } else {
        navbarLinks.style.display = 'block'
    }
}