//STAGE1
const addTask = document.querySelector('.add');

const todos = document.querySelector('.todos');



//STAGE2
addTask.addEventListener('submit', e =>{
    e.preventDefault();

    let val = addTask.add.value.trim(); //input value
    //use .trim() to remove white spaces

    if (val != ""){
        todos.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${val}</span>
    <i class="far fa-trash-alt delete"></i>`
    
    }else{
        alert('Please Enter valid text');
    }
    
    addTask.reset();
  });

  const link = document.querySelectorAll('.todos li');



//STAGE3
 todos.addEventListener('click', e => {
        if (e.target.classList.contains('delete')){ //click acts on class name 
            e.target.parentElement.remove(); //this happens to its parent class
            //e.target.parentElement.style.textDecoration = 'line-through'; 
        }
        
        console.log('clean')
    })




//STAGE4 Adding Search Functionality