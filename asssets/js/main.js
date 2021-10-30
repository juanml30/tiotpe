"use strict";
let sectionNew = document.querySelector("#newSection");
let button = document.querySelector("#buttonCreator");

button.addEventListener("click", addNewSection);

function addNewSection() {
    sectionNew.innerHTML = `
    <div class="card">
    <div class="card-header">Card Agregada</div>
    <div class="card-body">
        <h5 class="card-title">
            Este recuadro es generado desde JS
        </h5>
        <p class="card-text">
            Esta seccion agregada de forma dinamica mediante JS
        </p>
        <a href="#" class="btn btn-secondary" id="buttonHide" onclick="hideSection()"
                        >Go somewhere</a>
    </div>
</div>`;
    sectionNew.classList.remove("hide");
}

function hideSection() {
    sectionNew.classList.add("hide");
}
