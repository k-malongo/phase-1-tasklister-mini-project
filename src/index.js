document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.getElementById("create-task-form");
  submitButton.addEventListener("submit", (e)=>{
    e.preventDefault()
    addTask(e.target['new-task-description'].value)
  alert("The form has been submitted");

  submitButton.reset()
});
});
function addTask(task){
  const lister = document.createElement('li');
  const button = document.createElement('button')
  button.addEventListener('click', deleteTask)
  button.textContent = "DELETE"
  lister.textContent = task + " "
  lister.appendChild(button)
  document.getElementById("tasks").appendChild(lister)
}

function deleteTask(e){
  e.target.parentNode.remove()
}