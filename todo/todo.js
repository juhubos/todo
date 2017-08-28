
var button = document.querySelector('.addBtn')
var entry = document.querySelector('.entry')


button.addEventListener('click', function () {
  var entry = document.querySelector('.entry')
  text = entry.value
  if (!text || text == '') {          
    return false
  }
  addNewItem(document.querySelector('.todoList'), text)
})

entry.addEventListener('keypress', function(event) {
	var key = event.which || event.keyCode;
    if (key === 13) { 
		var todo = this.value;
		addNewItem(document.querySelector('.todoList'), todo);
	 }
});

// onclick='parentNode.parentNode.removeChild(parentNode)      ..works as well'
function addNewItem (list, text) {
  console.log('this is working')
  var listItem = document.createElement('li')
  listItem.innerHTML = "<button onclick='delTodo(this)' id='del'>X</button>" + " " + text;
  list.appendChild(listItem)
  entry.select()
}

// 'this' is passed in from HTML and refers to the button. Select it's parentNode (li), and li's 
// parentNode (ul). Remove the buttons parentNode(li) ...that is a child to the ul
function delTodo(buttonNode) {
	buttonNode.parentNode.parentNode.removeChild(buttonNode.parentNode);
}

