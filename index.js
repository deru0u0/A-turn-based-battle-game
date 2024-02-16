'use strict';
{   
    
    const texts = {
        contentTitle: 'header-title',
        synopsis: 'ある日、静かな村に恐ろしいうわさが広まった。村人たちを襲う恐ろしいモンスターが、森の奥深くから現れるというのだ。そのうわさが広まるや否や、勇敢な主人公が立ち上がり、モンスターを倒しに向かう決意を固めた。',
        synopsisTitle: 'あらすじ',
    }
    function init() {
        const title = document.querySelector('.title');
        const messageContainer = document.querySelector('.message-container');
        const h3 = document.createElement('h3');
        title.textContent = texts.contentTitle;
        h3.textContent = texts.synopsisTitle;
        const div = document.createElement('div');
        div.textContent = texts.synopsis;
        div.classList.add('message');
        const button = document.createElement('button');
        button.textContent = 'つぎへ';
        button.id = 'nextButton';
        messageContainer.appendChild(h3);
        messageContainer.appendChild(div);
        messageContainer.appendChild(button);
    }
    init();
    document.getElementById('nextButton').addEventListener('click', function() {
        const messageContainer = document.querySelector('.message-container');
        messageContainer.classList.add('none');
        const userContainer = document.querySelector('.user-container');
        userContainer.classList.add('appear');
    },false);
    
    
    
    const alertMessages = [
        'The number of characters has been exceeded',
        'Please enter at least 0 characters',
    ]
    function getCharLength(charLength) {
        const displayCounter = document.querySelector('.text-counter');
        const alertMessage = document.querySelector('.alert-message');
        const limitChar = document.querySelector('.text-counter-area');
        
        if ( charLength > 10 ) {
            limitChar.classList.add('alert');
            alertMessage.textContent = alertMessages[0];
            btn.classList.add('inactive');
        } else {
            alertMessage.textContent = '';
            limitChar.classList.remove('alert');
            btn.classList.remove('inactive');

        }
        displayCounter.textContent = charLength;
    }

    
    const btn = document.getElementById('nameConfirm');
    const name = document.getElementById('name');
    btn.addEventListener('click', function() {
        if ( name.value === '' ) {
            const alertMessage = document.querySelector('.alert-message');
            alertMessage.textContent = alertMessages[1];
            alertMessage.classList.add('alert');
        }
        if ( btn.classList.contains('inactive')  || name.value === '') {
            return;
        }
        if ( confirm(`${name.value}でよろしいですか？`)) {
            window.location.href="./main.html";
        }
        name.value = '';
    },false);
    name.addEventListener('keyup', function() {
        const char = name.value;
        const charLength = char.length;
        getCharLength(charLength);
    },false);
}
