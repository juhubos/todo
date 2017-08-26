
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

document.querySelector("#entry").addEventListener('keypress', function(event) {
	var key = event.which || event.keyCode;
    if (key === 13) { 
		var todo = this.value;
		addNewItem(document.querySelector('.todoList'), todo);
	 }
});

function addNewItem (list, text) {
  console.log('this is working')
  var listItem = document.createElement('li')
  listItem.innerHTML = text
  list.appendChild(listItem)
  entry.select()
}

 // this is what output should look like
 // <li> <input type="checkbox"> new item here </li>







