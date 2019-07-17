// Your code goes here
const destinations = document.querySelector('.content-pick')

destinations.addEventListener('click', function(){
    destinations.style.background = 'lightgrey'

    setTimeout(function(){
        destinations.style.background = ''
    }, 1000)
}, false)

const funButton = document.getElementById('btn1');

funButton.addEventListener('click', function(eventObject){
    funButton.innerHTML = 'Lets Swim!'
    eventObject.stopPropagation()
})

const mountainButton = document.getElementById('btn2');

mountainButton.addEventListener('click', function(eventObject){
    mountainButton.innerHTML = 'Lets Hike!'
    eventObject.stopPropagation()
})

const islandButton = document.getElementById('btn3');

islandButton.addEventListener('click', function(eventObject){
    islandButton.innerHTML = 'Lets Party!'
    eventObject.stopPropagation()
})

const navSection = document.querySelector('.nav-link')

navSection.addEventListener('mouseover', function(event){
    event.target.style.color = 'grey'

    setTimeout(function(){
        event.target.style.color = ''
    }, 1000)
},false)

navSection.addEventListener('click', function(event){
    event.preventDefault()
})

const navBar = document.querySelector('.main-navigation')

navBar.addEventListener('wheel', function(){
    navBar.style.background = '#17A2B8';
    navBar.style.color = 'white';
})

const busImg = document.querySelector('.bus-image')

busImg.addEventListener('dblclick', function(){
    busImg.style.width = '50%';
})

const content = document.querySelector('.content-section')

content.addEventListener('wheel', function(){
    content.style.background = 'lightgrey'
})

const pickDestination = document.querySelector('.content-destination')

pickDestination.addEventListener('mouseover', function(){
    pickDestination.style.width = '100%'
})

const footer = document.querySelector('.footer')

footer.addEventListener('click', function(){
    footer.style.background = 'white'
})