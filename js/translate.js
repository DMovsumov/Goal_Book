const lang_english = ['All goals', 'Reach the goal', 'On the way to achieving', 'Create new goal']//Записываем в массив перевод всех слов в навигационном меню
const lang = document.querySelectorAll('.lang')//Ко всем словам меню добавляем модификатор lang
const headerRange = document.querySelector('#header-range')//Получаем range по id


//Создаем переменную и с помощью цикла записываем в нее все слова меню на странице
let lang_russian = []
for(let i = 0; i < lang.length; i++){
    lang_russian[i] = lang[i].innerHTML
}


headerRange.addEventListener('change', (e) => {
    for(let i = 0; i < lang.length; i++){
        if(e.target.value == 0){
            lang[i].innerHTML = lang_english[i]
        }
        if(e.target.value == 1) {
            lang[i].innerHTML = lang_russian[i]
        }
    }
})