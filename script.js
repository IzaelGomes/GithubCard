const alt_bg = document.querySelector(".bg-button")

let currentColor = 0
alt_bg.addEventListener('click', () => {
    
    const main = document.querySelector("main")


    let colors = [
        '#E11584', 
        '#E11584', 
        '#008000', 
        '#B2C248', 
        '#306754', 
        '#98FF98', 
        '#000000' 
    ]
    
    
    if(currentColor < 6) {
        currentColor++
    } else {
        currentColor = 0
    }

    main.style.backgroundColor = colors[currentColor]
})