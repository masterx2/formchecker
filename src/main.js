import $ from 'jquery';
require('./css/style.css');


const $display = $('<div>').addClass('checker-display').appendTo(document.body);
const forms = $('form');


try {
    checkForms();
} catch (e) {
    addMessage(e.message, 'darkred');
}

function addMessage(message, color) {
    $('<p>').addClass('checker-message').text(message).css('color', color).appendTo($display);
}

function checkForms () {
    if (!forms.length) {
        throw new Error('Forms not Found!');
    }

    addMessage('Found '+ forms.length + ' form(s)');

    forms.each(function (form) {
        console.log(form);
    })
}
