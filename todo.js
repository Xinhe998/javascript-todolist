window.document.querySelector(".new-todo").focus();

window.document.querySelector(".destroy").addEventListener("click", function () {
    this.parentNode.remove();
})

document.querySelector(".new-todo").addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key == 13) {
        var newtodoContent = this.value;
        if (newtodoContent) {
            let newtodo_item = document.createElement("li");
            let newtodo_item_child1 = document.createElement("input");
            newtodo_item_child1.type = "checkbox";

            let newtodo_item_child2 = document.createElement("label");
            newtodo_item_child2.innerHTML = newtodoContent;

            let newtodo_item_child3 = document.createElement("button");
            newtodo_item_child3.classList.add('destroy');

            newtodo_item.appendChild(newtodo_item_child1);
            newtodo_item.appendChild(newtodo_item_child2);
            newtodo_item.appendChild(newtodo_item_child3);

            document.querySelector(".todo-item").appendChild(newtodo_item);
            this.value = '';
            newtodo_item.childNodes[2].addEventListener("click", function () {
                this.parentNode.remove();
            })
        }
    }
})