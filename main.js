//Bouton Mode
const button = document.getElementById(`toggle`)
toggle.addEventListener(`click`, function (){
    document.body.classList.toggle(`light`)
    console.log("paramètre cliqué")

if(document.body.classList.contains(`light`)) {
    button.textContent = "Dark Mode"
} else {
    button.textContent = "Light Mode"
} 
console.log("changement de mode")
})

//Bouton menu burger
const menu = document.getElementById(`menu`)
const sideMenu = document.getElementById(`sideMenu`)
menu.addEventListener(`click`, function (){
    sideMenu.classList.toggle(`active`)
    console.log("paramètre cliqué")
})

//Boutons tabs
function openTab(event, tabName) {
const tabLinks = document.querySelectorAll(`.tab-link, .tab-link-active`)
for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("tab-link-active")
    tabLinks[i].classList.add("tab-link")    
}
    document.getElementById(tabName).style.display = "block"
    event.currentTarget.classList.add("tab-link-active")
    console.log("paramètre cliqué")
}
