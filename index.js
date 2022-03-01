const navToggle = document.querySelector(`.nav-toggle`)
const links = document.querySelector(`.links`)

console.log(navToggle)
console.log(links)

navToggle.addEventListener(`click`, function() {
    //console.log(links.classList)
    //console.log(links.classList.contains(`links`))
    //console.log(links.classList.contains(`hello`))
    links.classList.toggle(`show`)
    if (links.classList.contains(`show`)) {
        //links.classList.remove(`show-links`)
        console.log(links.classList)
    } else {
        // links.classList.add(`show-links`)
        console.log(links.classList)
    }

})