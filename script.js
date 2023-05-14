const form = document.getElementById('first-form');
const input = document.getElementById('key-input');
const ul = document.getElementById('item-list');
const ClearButt = document.querySelector('.clear-button-all');


const heading = document.querySelector('h1');
heading.innerText = 'Favorite Youtube Channel';

//functions
addItem = (e) => {
    e.preventDefault();
    // const item = input.value;
    // const li = document.createElement('li');
    // li.textContent = item;
    // li.className = 'items';
    // ul.appendChild(li);
    // input.value = '';

    //validate
    if (input.value === '') {
        alert('Please add Channel name');
    } else {
        const li = document.createElement('li');
        const butt = document.createElement('button');
        const icon = document.createElement('i');

        li.textContent = input.value;
        li.className = 'items';
        butt.className = 'remove-item'
        icon.className = 'ri-close-fill';
        li.appendChild(butt);
        butt.appendChild(icon);
        ul.appendChild(li);
        input.value = '';
    }
    checkUi();
};

onClickRmItem = (e) => {
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
    checkUi();
};

clearAllButton = (e) => {
    const li = document.querySelectorAll('li');
    li.forEach((elem)=>{
        elem.remove();
    });
    checkUi();
};

checkUi = () => {
    const li = ul.querySelectorAll('li');
    const clearrr = document.querySelector('.clear');
    if(li.length === 0){
        clearrr.style.display = 'none';
    }else {
        clearrr.style.display = 'block';
    }
};
checkUi();


//event listeners
form.addEventListener('submit', addItem);
ul.addEventListener('click', onClickRmItem);
ClearButt.addEventListener('click', clearAllButton);