'use strict'
let userName = prompt("Was is das ?", '');

if (userName === 'admin') {
    let pass = prompt('password ?', '');

    if (pass === ' i boss') {
        alert:('Hallo !');
    } else if (pass === '' || pass === null) {
        alert ('Escape');
    } else {
        alert ('pass incorect');
    }
    else if (userName ==='' || userName === null) {
        alert ('Escape');
    } else {
        alert ('I dont you');
    }
}