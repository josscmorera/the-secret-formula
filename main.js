

let form = document.querySelector('form');
let input = document.querySelector('input');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert(input.value);
    }); 



let form2 = document.querySelector('#form2');
let ingredients = document.querySelectorAll('input[type="checkbox"]');
let submit = document.querySelector('#submit');

form2.addEventListener('submit', function (event) {
    event.preventDefault();
    let sandwich = [];
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].checked) {
            sandwich.push(ingredients[i].value);
        }
    }
    alert(`Your sandwich contains: ${sandwich.join(', ')}`);
});


let form3 = document.querySelector('#form3');
let date = document.querySelector('#date');
let haircutter = document.querySelector('#haircutter');
let hairLength = document.querySelector('input[name="hair-length"]:checked');
let submit2 = document.querySelector('#submit2');

form3.addEventListener('submit', function (event) {
    event.preventDefault();
    let hairLength = document.querySelector('input[name="hair-length"]:checked');
    alert(`Haircut scheduled for ${date.value} with ${haircutter.value} for ${hairLength.value} hair.`);
});


let form4 = document.querySelector('#form4');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let password2 = document.querySelector('#password2');
let submit3 = document.querySelector('#submit3');

form4.addEventListener('submit', function (event) {
    event.preventDefault();
    alert(`Username: ${username.value} Email: ${email.value}`);
});