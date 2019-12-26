
const navigation = document.getElementById('header-navigation')// Получаем доступ до header-navigation по id

clickInit()
function clickInit() {
    navigation.addEventListener('click', (event) => {
        event.preventDefault()
        if(event.target.classList.contains('tab')){
            Array.from(document.querySelectorAll('.tab')).forEach(tab => {
                tab.classList.remove('active')            
            })
            event.target.classList.add('active')
               
        }

        if(event.target.classList.contains('tab_1')){
            console.log('h')
        }else if(event.target.classList.contains('tab_2')) {
            console.log(33)
        }
        else if(event.target.classList.contains('tab_3')) {
            console.log(33 +'hh')
        }
    })
}

function showAllGoals(){
    
}

