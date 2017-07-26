function Tarea(id, titulo){
	this.id = id,
	this.title = titulo
	this.toHTML = function(){
		var html = this.titulo;
		return html;
	},
	this.tachado = false
};
function ToDoList(){
	this.list = [{
		"id": 1,
		"title": "delectus aut autem",
		"tachado" : false
	},
	{
		"id": 2,
		"title": "quis ut nam facilis et officia qui",
		"tachado" : false
	},
	{
		"id": 3,
		"title": "fugiat veniam minus",
		"tachado" : false
	},
	{
		"id": 4,
		"title": "et porro tempora",
		"tachado" : false
	},
	{
		"id": 5,
		"title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
		"tachado" : false
	},
	{
		"id": 6,
		"title": "qui ullam ratione quibusdam voluptatem quia omnis",
		"tachado" : false
	},
	{
		"id": 7,
		"title": "illo expedita consequatur quia in",
		"tachado" : false
	},
	{
		"id": 8,
		"title": "quo adipisci enim quam ut ab",
		"tachado" : false
	},
	{
		"id": 9,
		"title": "molestiae perspiciatis ipsa",
		"tachado" : false
	},
	{
		"id": 10,
		"title": "illo est ratione doloremque quia maiores aut",
		"tachado" : false
	}],

	this.id = this.list.length + 1;
	this.tareaNueva = document.getElementById('tareaNueva');
	this.agregarTarea = function(){

		if(this.tareaNueva.value != ""){
			this.list.push(new Tarea(this.id, this.tareaNueva.value));
			console.log(this.list)
			this.id++;
		}else{
			alert("ingrese tarea")
		}
	}

	this.mostrarLista = function(element){
		var stringHtml = "";
		element.innerHTML = stringHtml;
		for(var i in this.list ){
			var tarea = this.list[i];
			//console.log(tarea.tachado)
			if(tarea.tachado){
				stringHtml += "<li style='text-decoration:line-through' id='"+tarea.id+"'>"+tarea.title+"</li>";
			}else{
			stringHtml += "<li id='"+tarea.id+"'>"+tarea.title+"</li>";
		}
		}
		 element.innerHTML = stringHtml;
	}

	this.limpiar = function(){
		this.tareaNueva.value = "";
		this.tareaNueva.focus();
	}

	this.seleccionar = function(){
		var tagsLi = document.getElementsByTagName('li');
		for(var i = 0; i < tagsLi.length; i++){
			tagsLi[i].addEventListener('click', toDoList.tacharTarea, false);
		}
	}
	this.tacharTarea = function(event){
		this.idTachar = event.target.id;
		//console.log(this.idTachar); console.log(toDoList.list[this.idTachar -1]);
		if(document.getElementById(this.idTachar).style.textDecoration  === "line-through" )
		{
			document.getElementById(this.idTachar).style.textDecoration = "";
			toDoList.list[this.idTachar -1].tachado = false;

		}else{
			document.getElementById(this.idTachar).style.textDecoration = "line-through"
			toDoList.list[this.idTachar -1].tachado = true;
		} 
	}
}

var elementList = document.getElementById('lista');

var toDoList = new ToDoList();

toDoList.mostrarLista(elementList);
toDoList.seleccionar();

//bton añadir tarea

var addTarea = document.getElementById('agregarTarea');
addTarea.onclick = function(){
	toDoList.agregarTarea();
	toDoList.limpiar();
	toDoList.mostrarLista(elementList);
	// event
	toDoList.seleccionar();
}


