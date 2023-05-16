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

var itemText = [{
    'id': '#textid',
    'text': 'Please add here all the things you want to do and it will randomize it for you once you press a button!'
}];

function handleItem(id, text) {
    var targetElement;

    var currentAlert = document.querySelector('#currentAlert')
    if (currentAlert !== null) {
        currentAlert.parentNode.removeChild(currentAlert)
    }
    currentAlert.id = 'currentAlert';
    currentAlert.className = 'alert alert-danger';
    currentAlert.innerHTML = text;

    // targetElement = document.querySelector(id).parentNode;
    //    targetElement.insertBefore(newElement, target.childNodes[2])
}

//closure
function initItem(id, text) {
    return function () {
        handleItem(id, text)
    }
}

// currently doesn't work
function setupitem() {
    var DOMElement;

    for (var i = 0; i < itemText.length; i++) {
        DOMElement = document.querySelector(itemText[i].id)
        DOMElement.addEventListener('focus', initItem(itemText[i].id, itemText[i].text))
    }
}

setupitem()


// https://codepen.io/JohnPaulFich/pen/MXmzzM - Get this to display and turn green once done. 
// next task will be figuring out how to save it in DB maybe or json? 