const { functions } = require("lodash");
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onInputDate, 1000,{'leading':false}));
form.addEventListener('submit', onSubmitForm);

let dataForm = JSON.parse(localStorage.getItem('feedback_form_state')) || {};

localStorage.setItem('feedback_form_state', JSON.stringify(dataForm)); 

function onInputDate({target}) {
    const { value } = target;
    dataForm[target.name] = value;   
    localStorage.setItem('feedback_form_state', JSON.stringify(dataForm));
 };

function onSubmitForm(event) {
    event.preventDefault();
    if (form.email.value === "" || textarea.value === "") {
        return alert('Please all of the fields');
    }
    console.log(dataForm);
    event.currentTarget.reset();
    localStorage.removeItem('feedback_form_state'); 
    dataForm = {};
    
};


const savedData = JSON.parse(localStorage.getItem('feedback_form_state'));

if (savedData) {
    form.email.value = savedData.email || '';
    textarea.value = savedData.message || '';
};









