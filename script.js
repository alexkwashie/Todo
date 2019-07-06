//STAGE1
const addTask = document.querySelector('.add');

const todos = document.querySelector('.todos');



//STAGE2
addTask.addEventListener('submit', e =>{
    e.preventDefault();

    let val = addTask.add.value.trim().toLowerCase(); //input value
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


    const filterTodos = (i) =>{

        Array.from(todos.children) //Convert list of Todos to an array
        .filter((todo) => !todo.textContent.toLowerCase().includes(i))
        .forEach(todo => todo.classList.add('remove'));

        //opposit of top i.e so if current input content matches remove class
        Array.from(todos.children)
        .filter((todo) => todo.textContent.includes(i))
        .forEach(todo => todo.classList.remove('remove'));
        
    };


//STAGE4 Adding Search Functionality
const searchFiled = document.querySelector('.search input');

searchFiled.addEventListener('keyup', e =>{
    let val1 = searchFiled.value.trim().toLowerCase();

    filterTodos(val1);

    });

   //if(val1 == )
