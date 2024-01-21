function togglemode() {
    const html = document.documentElement
    html.classList.toggle("ligth") 
    const img = document.querySelector("#profile img")
    

    if(html.classList.contains('light')) {
        html.classList.remove('light')
        img.setAttribute('src', './assets/AprendaMais2.png')
    } else {
        html.classList.add('light')
        img.setAttribute('src', './assets/APML.png')
    }

} 
