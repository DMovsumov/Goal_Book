const form = document.getElementById('content-form')//Получаем доступ до формы
const sec_goals = document.getElementById('sec_goals')
const content_sec_goals = document.querySelector('.content-secondary_goals_title')

let goals = []//Создаем пустой массив куда будем записывать наши цели
let sub = {} // Создаем объект в который будем записывать данные с формы



form.addEventListener('submit', submitForm.bind(this))


function submitForm(event) {
    event.preventDefault()
    let arr_sg = []
    let sg = document.querySelectorAll('.sg')
    for(let i = 0; i < sg.length; i++){
        arr_sg[i] = sg[i].value
    }

    
    sub = {
        title: event.target.title.value,
        desc: event.target.desc.value,
        check: false,
        secondary_goals: arr_sg
    }
    let i = goals.length
    goals[i] = sub
    console.log(JSON.stringify(goals))
}

sec_goals.addEventListener('click', (event) => {    
    content_sec_goals.insertAdjacentHTML('afterend', `<input type="text" class="input-text sg" name="sec_goal">`)  
})
