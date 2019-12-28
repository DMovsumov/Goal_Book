const form = document.getElementById('content-form')//Получаем доступ до формы по ID
const sec_goals = document.getElementById('sec_goals')
const content_sec_goals = document.querySelector('.content-secondary_goals_title')

let goals = []//Создаем пустой массив куда будем записывать наши цели




form.addEventListener('submit', submitForm.bind(this))
sec_goals.addEventListener('click', (event) => {    
    content_sec_goals.insertAdjacentHTML('afterend', `<input type="text" class="input-text sg" name="sec_goal">`)  
})

function submitForm(event) {
    event.preventDefault()
    let sub = {} // Создаем объект в который будем записывать данные с формы

    //Записываем промежуточные цели чтобы потом можо было их выводить и работать с ними
    let obj_sec_goal = {}
    let sg = document.querySelectorAll('.sg')
    for(let i = 0; i < sg.length; i++){        
        obj_sec_goal[i] = { value: sg[i].value,
        check: false
        }
    }

    sub.dataTime = new Date()
    sub.title = event.target.title.value
    sub.desc = event.target.desc.value
    sub.check = false
    sub.secondary_goals = [obj_sec_goal]
    let i = goals.length
    goals[i] = sub
    console.log(JSON.stringify(goals))
    localStorage.setItem('goal', JSON.stringify(goals))
}


