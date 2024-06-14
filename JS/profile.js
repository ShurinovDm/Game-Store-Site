let cont = document.querySelector('.input')

//загрузку при запуске страницы

if(localStorage.getItem('key')){
    console.log(localStorage.getItem('key'))
    cont.innerHTML = localStorage.getItem('key') 
}
let inps = document.querySelectorAll('.input')

//сохранение

inps.forEach(inp => {
    inp.addEventListener('input', function(){
        inp.setAttribute('value', inp.value)
        localStorage.setItem('key', cont.innerHTML)
    })
});