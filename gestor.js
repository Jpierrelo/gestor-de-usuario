let inputNombre = document.querySelector("input#input-nombre");
let inputApellido = document.querySelector("input#input-apellido");
let inputCorreo= document.querySelector("input#input-correo");
let selectDepartamento= document.querySelector("#select-departamento");
let boton = document.querySelector("#boton-agregar");
let listausuarios = document.querySelector("#lista-usuarios");

boton.addEventListener("click", () => {
if (inputNombre.value.length> 0 && inputApellido.value.length > 0 && inputCorreo.value.length > 0 && selectDepartamento.value){
listausuarios.innerHTML += `<li class="list-group-item"> ${inputNombre.value} ${inputApellido.value} ${inputCorreo.value} ${selectDepartamento.value} </li>`;
inputNombre.value = "";
inputApellido.value = "";
inputCorreo.value="";
selectDepartamento.selectdIndex = 0;
}else {
   alert("no se ha podido añadir") 
}


});
