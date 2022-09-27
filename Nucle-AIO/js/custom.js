

var createTask_modal = document.getElementById('createTask-modal');	
var body = document.body;
	


function CreateTaskModal()
{	
	createTask_modal.style.display = 'block';
	body.classList.add("active");

}

function closeTaskModal()
{
	createTask_modal.style.display = 'none';
	body.classList.remove("active");
}


window.onclick = function(event){
	if (event.target.className == 'create-task-wrapper') {
		createTask_modal.style.display = 'none';
	}
	
}
