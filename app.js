
const formTask = document.querySelector('#add-task');
const inputTask = document.querySelector('#task');
const ulList = document.querySelector('#list');

formTask.addEventListener('submit', function(e){
    e.preventDefault();
    if(inputTask.value != "") {
        const newTask = document.createElement('li');
        const deletebtn = document.createElement('button');
        let checkbox = document.createElement('INPUT');
        checkbox.setAttribute('type', "checkbox");
        deletebtn.innerText = 'x';
        newTask.innerText = inputTask.value;
        newTask.appendChild(checkbox);
        newTask.appendChild(deletebtn);
        inputTask.value = "";
        ulList.appendChild(newTask);
    } 
})

ulList.addEventListener('click', function(e) {
    let check = document.querySelector('input[type="checkbox"]');
    let todo = document.querySelector('li');
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    if (check = check.checked){
        e.target.parentElement.style.setProperty('text-decoration', 'line-through');
    } else {
        e.target.parentElement.style.removeProperty('text-decoration');
    }
    
})

