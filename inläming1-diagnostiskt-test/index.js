window.addEventListener('DOMContentLoaded', (event) => {
    outputTaskList();
});

var task = {
    name:String,
    done:Boolean,
}
var taskList = [];

for(var i=0; i<=20; i++){
    let createdTask ={
        name: 'Task '+(i+1),
        done: false
    }
    taskList.push(createdTask);
}

function getTaskList(){
    return taskList;
}

function createNewTask(name, done){
    let newTask = {name, done};
    taskList.push(newTask);
}

function submit(){
    var nameInput = document.getElementById("name");
    createNewTask(nameInput.value, false);
    outputTaskList();
}

function outputTaskList() {
    output = "";
    for(var i = 0; i < taskList.length; i++) {
       output += (i + 1) + ") Name: " + taskList[i].name + " - Done: " + taskList[i].done + "<br>";
    }
    document.getElementById("output").innerHTML = output;
 }

 function deleteTask(){
    
     var IdInput = document.getElementById("delete");
    taskList.splice((IdInput.value-1), 1);
     outputTaskList();
 }