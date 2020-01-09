//Закрывать все блоки когда выбираешь создать цель
const navigation = document.getElementById('header-navigation')// Получаем доступ до header-navigation по id

const header_button = document.querySelector('.header-button')

const formx = document.querySelector('.content-form')//Получаем достут до формы создания цели
const allGoals = document.querySelector('.content-show')//Блок отображения

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
            // showNoCheckGoals()
        }
    })
}


//TODO: выводить описание цели
function showAllGoals() {
    let getGoal = localStorage.getItem('goal')

    if (getGoal != undefined) {
        let goal = JSON.parse(getGoal)
        for (let key in goal) {
            allGoals.insertAdjacentHTML('afterbegin', `<div class="content-showGoals"><div class="content-titleNameGoals checks">
                    <h4 class="content-name __goals">${goal[key].title}</h4>
                    <input type="checkbox" class="checkGoal" name="" id=""></div>
                    <div class="content-date">${goal[key].dataTime}</div>
                    <hr>
                    <div class="content-showDesc"><p>${goal[key].desc}</p></div>
                    <div class="content-secondaryGoals"><hr></div></div>`)

            for (let index in goal[key].secondary_goals) { // TODO: переписать
                for (let ind in goal[key].secondary_goals[index]) {
                    const sg = document.querySelector('.content-secondaryGoals')
                    sg.insertAdjacentHTML('afterbegin', `<div class="content-secondary checks"><input type="checkbox" class="checkGoal checkSecGoals" name="" id=""><li class="__goals">${goal[key].secondary_goals[index][ind].value}</li></div>`)


                    checkGoals(goal[key])
                }
            }
        }
    }
}

// function showNoCheckGoals() {
//     let noCheck = localStorage.getItem('goal')

//     if(noCheck != undefined){
//         let goal = JSON.parse(noCheck)
//         for(let key in goal){
//             if(goal[key].check == false){
//                 allGoals.insertAdjacentHTML('afterbegin', )
//             }
//         }
//     }
// }

function checkGoals(goal) {
    const inputCheck = document.querySelectorAll('.checks')
    const __goals = document.querySelectorAll('.__goals')
    
    // console.log(goal.check)

    for(let i of inputCheck){
        i.addEventListener('click', (e) => {
            if(e.target.classList.contains('checkGoal')){
                goal.check = true
            } else if(e.target.classList.contains('checkSecGoals')){ //TODO: переписать метод
                for(let i in goal.secondary_goals){
                    for(let v in goal.secondary_goals[i]){
                        goal.secondary_goals[i][v].check = true
                    }
                }
            }
            
            
        }
    )}
    
    
}


