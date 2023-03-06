var x = 0;
var array = Array();

function add_element_to_array() {
    array[x] = document.getElementById("text1").value;
    x++;
    document.getElementById("text1").value = "";
}

function display_array() {
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