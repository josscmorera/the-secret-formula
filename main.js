// ## Part 1: The alerter

// Let's start out simple, in your `index.html` file, create a form that contains a text input and a submit button. From here, use Javascript to make it so that when the submit button is clicked, the page displays the text inside of the text input as a browser alert.

let form = document.querySelector('form');
let input = document.querySelector('input');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert(input.value);
    }); 

// ## Part 2: Sandwich builder

// Somewhere below your previous form, create a new form. The purpose of this form will be to allow the user to select ingredients that will go in a sandwich. Inside of your form, create at least ten checkbox inputs that correspond to various sandwich ingredients (wheat bread, lettuce, peppers, etc.). Additionally, create a submit button.

// Finally, wire up your form using Javascript so that upon clicking the submit button, a browser alert is displayed with a string with all of the ingredients that the user selected by checking the inputs (i.e.: "Your sandwich contains: bread, pesto, tomato, mozzerella, spinach"). To do this, you'll need to build a string, querying each checkbox one at a time. You could use a for-loop to do this but you are not required to do so.

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

// ## Part 3: Haircut appointment scheduler

// Below your previous form, create another new form. This form will represent a haircut scheduling form which should contain the following inputs:
// * a date input for what day the haircut should be scheduled for
// * a text input to allow the user to request a specific hair cutter
// * one set of two radio inputs that allows the user to select whether they have long or short hair
// * a submit button

// Additionally, make sure to add proper labels for each input.

// When the user submits the form, display an alert with a message with the following structure: "Haircut scheduled for [DATE] with [HAIRCUTTER] for [LONG/SHORT] hair."

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

// ## Part 4: Create account

// Finally, create one more form that represents a "create account" form. This form should have the following inputs:
// * a text input for the user's desired username
// * an email input for the user's email
// * a password input for the user's password
// * a confirm password input that makes the user type their password a second time to confirm it
// * a submit button

// Once again, make sure to add proper labels for your inputs.

// When the user submits the form, display an alert with the created user's username and email. As a habit of good security, don't display the user's password.

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