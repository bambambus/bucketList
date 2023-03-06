var bucketList = Array("London night out", "Enjoy a night in with pizza", "Book a weekend away abroad");

var Phrases = function () {
    var newbucket = bucketList[Math.floor(Math.random() * bucketList.length)];
    document.getElementById('quoteshere').innerHTML = newbucket;
};
function add_element() {
    bucketList.push(document.getElementById('listIdeas').value); // adding element to array
    document.getElementById('listIdeas').value = ''; // Making the text box blank
    bucketList; // displaying the array elements
}