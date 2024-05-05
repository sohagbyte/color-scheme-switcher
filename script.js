const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event){

        if (event.target.id === 'green') {
           body.style.backgroundColor = '#3CC870'; 
        }

        if (event.target.id === 'beige') {
            body.style.backgroundColor = '#ECCA9C'; 
         }

         if (event.target.id === 'peach') {
            body.style.backgroundColor = '#D24545';
         }

         if (event.target.id === 'blue') {
            body.style.backgroundColor = '#4dabf7';
         }
    })
});
