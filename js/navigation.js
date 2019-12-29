//Закрывать все блоки когда выбираешь создать цель
const navigation = document.getElementById('header-navigation')// Получаем доступ до header-navigation по id

const header_button = document.querySelector('.header-button')

const formx = document.querySelector('.content-form')//Получаем достут до формы создания цели

//Загружаем форму
header_button.addEventListener('click', (e) => {
    formx.style.display = 'block';
})


clickInit()
function clickInit() {
    navigation.addEventListener('click', (event) => {
        event.preventDefault()
        if (event.target.classList.contains('tab')) {
            Array.from(document.querySelectorAll('.tab')).forEach(tab => {
                tab.classList.remove('active')
            })
            event.target.classList.add('active')

        }

        if (event.target.classList.contains('tab_1')) {
            formx.style.display = 'none'
            showAllGoals()
        } else if (event.target.classList.contains('tab_2')) {
            formx.style.display = 'none'
            console.log(33)
        }
        else if (event.target.classList.contains('tab_3')) {
            formx.style.display = 'none'
            console.log(33 + 'hh')
        }
    })
}


//TODO: выводить описание цели
function showAllGoals() {
    let getGoal = localStorage.getItem('goal')

    const allGoals = document.querySelector('.content-show')

    if (getGoal != undefined) {
        let goal = JSON.parse(localStorage.getItem('goal'))
        for (let key in goal) {
            allGoals.insertAdjacentHTML('afterbegin', `<div class="content-showGoals"><div class="content-titleNameGoals">
                    <h4 class="content-name">${goal[key].title}</h4>
                    <input type="checkbox" class="checkGoal" name="" id=""></div>
                    <div class="content-date">${goal[key].dataTime}</div>
                    <hr>
                    <div class="content-showDesc"><p>${goal[key].desc}</p></div>
                    <div class="content-secondaryGoals"><hr></div></div>`)

            for (let index in goal[key].secondary_goals) { // TODO: переписать
                for (let ind in goal[key].secondary_goals[index]) {
                    const sg = document.querySelector('.content-secondaryGoals')
                    sg.insertAdjacentHTML('afterbegin', `<div class="content-secondary"><input type="checkbox" class="checkGoal" name="" id=""><li>${goal[key].secondary_goals[index][ind].value}</li></div>`)
                }
            }
        }
    }
}

