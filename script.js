const form = document.getElementById('first-form');
const input = document.getElementById('key-input');
const ul = document.getElementById('item-list');


const heading = document.querySelector('h1');
heading.textContent = 'Favorite Youtube Channel';

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
        icon.className = 'ri-close-fill';
        li.appendChild(butt);
        butt.appendChild(icon);
        ul.appendChild(li);
        input.value = '';
    }
};

//event listeners
form.addEventListener('submit', addItem);