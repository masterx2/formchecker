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
        throw new Error('Формы не найдены!');
    }

    addMessage('Нашлось '+ forms.length + ' форм(а)');

    forms.each(function (i, form) {
        $(form).addClass('highlight-form').submit(function (e) {
            console.log(e);
            addMessage('Пойман сабмит формы #'+forms.index(this));
            $(this).css('background', 'red');
        })
    })
}
