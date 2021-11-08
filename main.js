function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("inputField").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue === '') {
        alert("You much write something!");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("inputField").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = () => {
        document.getElementById("myUL").removeChild(li);
    }

    li.onclick = () => {
        li.classList.add('checked');
    }
}
