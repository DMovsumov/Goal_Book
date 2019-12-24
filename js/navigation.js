
const navigation = document.getElementById('header-navigation')// Получаем доступ до header-navigation по id

class Navbar {
    constructor(){

    }

    clickInit() {
        navigation.addEventListener('click', tabClick.bind(this))
    }
}

function tabClick(event) {
    event.preventDefault()
    if(event.target.classList.contains('tab')){
        Array.from(document.querySelectorAll('.tab')).forEach(tab => {
            tab.classList.remove('active')            
        })
        event.target.classList.add('active')   
    }
}

new Navbar().clickInit()