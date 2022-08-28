window.addEventListener('load',function(){

// calling important classes and ids from the html doc
    const form = document.querySelector("#form");
    const input = document.querySelector("#inputTask");
    const tasks = document.querySelector(".tasks");

// creating actions after the task has written
  form.addEventListener('submit',function(e){
    e.preventDefault();

// taking the value of the form
    const item = input.value;

// creating a paragraph named task to show a single task
    const task = document.createElement('p');
    task.classList.add('task');

//creating a button to check the completed task 
    const check = document.createElement('button');
    check.classList.add('circle');
   
// creating a span to show the text of task  
    const text = document.createElement('span');
    text.innerHTML = item;

// now appending the text part to the const task
    task.appendChild(text);

// checking if the check is at class circle or check to toggle them for making changes 
    check.addEventListener('click',function(){
        check.classList.toggle('check');
        text.classList.toggle('lineThrough')
      })  

// now appending the check button to the const task
      task.appendChild(check);
   
// creating a delete button to delete a specific task
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('trash-can');

// now appending the delele button to the const task
    task.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function(){
        task.style.margin = 0;
        task.innerHTML='';
    })

// now appending a single task to the tasks
    tasks.appendChild(task);

// resetting the form so that nothing remains in the input box after summition
    form.reset();    
   
  })

})













