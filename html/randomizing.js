var x = 0;
var array = Array();

function add_element_to_array() {
    array[x] = document.getElementById("text1").value;
    x++;
    document.getElementById("text1").value = "";
}

function display_array_randomly() {
    var newbucket = array[Math.floor(Math.random() * array.length)];
    document.getElementById("Result").innerHTML = newbucket;
}
function display_all() {
    var e = "<hr/>";
    for (var y = 0; y < array.length; y++) {
        e += "Element " + y + " = " + array[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}

function display_array() {
    let list = document.getElementById("arrayMessage");

    array.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
}

function clear_array() {
    document.getElementById("arrayMessage").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
    array.length = 0;
}