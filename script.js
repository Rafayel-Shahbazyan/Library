const list = document.querySelector('#book-list ul');
const forms = document.forms;

list.addEventListener('click', (e) => {
    if(e.target.className === 'delete') {
       const li = e.target.parentElement;
       list.removeChild(li)
    }
})

const addForm = forms['add-book'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('add-form').value;
    if(inputValue.length>0){
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');
   

        bookName.innerHTML = inputValue; // <span>Name of the Wind</span>

        deleteBtn.innerHTML = 'delete';  // <span>delete</span>
        // add classes
        bookName.classList.add('name');  //<span class='name'>Name of the Wind</span>
        deleteBtn.classList.add('delete'); // <span class='delete'>delete</span>
        // append to DOM
        li.appendChild(bookName);  
  

        // <li>
        //      <span class='name'>Name of the Wind</span>
        //      <span class='delete'>delete</span>
        // </li>
        li.appendChild(deleteBtn);
        list.appendChild(li)
        document.getElementById('add-form').value = ''
    }
})

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e)=> {
    const inputValue = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    const fromBooks = Array.from(books);
    fromBooks.forEach((book) => {
        const title = book.firstElementChild.textContent.toLowerCase();
        if(title.indexOf(inputValue) !== -1){
            book.style.display = 'block'
        }else{
            book.style.display = 'none'
        }
    })
})
hide.addEventListener('click',()=>{

    if(hide.checked===true){
    
        document.querySelector('#book-list').style.display='none'
    }
    if(hide.checked===false){
        document.querySelector('#book-list').style.display='block'
    }
})