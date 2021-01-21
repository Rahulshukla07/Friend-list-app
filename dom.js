// // Selectors

var input=document.querySelector('#input-name');
var btn=document.querySelector('#btn');
var list=document.querySelector('.list');

// Events

btn.addEventListener('click',addItem);
list.addEventListener('click', removeItem)


// Functions
function addItem(event){
    event.preventDefault();
    var newDiv=document.createElement("div")
    newDiv.className='friends-list'
    var li=document.createElement('li')
    li.innerText=input.value;
    li.className='list-items'
    newDiv.appendChild(li)
    var deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fas fa-trash-alt"></i>';
    deleteButton.className='form-btn';
    newDiv.appendChild(deleteButton)
    list.appendChild(newDiv)
    input.value='';
}

function removeItem(e){
    var items=e.target;
    if(items.classList[0]==="form-btn"){
        var li=items.parentElement;
        li.remove();
    }

}