
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


addButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    
    if (taskText !== "") {
        
        const li = document.createElement('li');
        li.textContent = taskText;

        
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        

        
        li.appendChild(doneButton);
        li.appendChild(deleteButton);

        
        taskList.appendChild(li);

        
        taskInput.value = "";

        
        doneButton.addEventListener('click', function() {
            li.classList.toggle('done');
        });

        
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    }
});
