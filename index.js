function addingEventListener() {
const input = document.getElementById('input');
const add = ()=> alert('I was clicked!');
input.addEventListener('click', add);
};

addingEventListener();
