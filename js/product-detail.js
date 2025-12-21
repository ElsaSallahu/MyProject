let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

form.addEventListener('submit' , (e)=> {
    e.preventDefault();
})

resetBtn.addEventListener('click', (e) =>{
    let name = document.getElementById('name');
     let email = document.getElementById('email');
      let number = document.getElementById('number');
       let message = document.getElementById('message');
        let adress = document.getElementById('adress');
})

name.value='';
email.value='';
adress.value='';
message.value='';

sendBtn.addEventListener('click', (e) =>{
    let name = document.getElementById('name');
     let email = document.getElementById('email');
      let number = document.getElementById('number');
       let message = document.getElementById('message');
    
       name = name.value
       localStorage.setItem('name', name);

       email = email.value;
       localStorage.setItem('email',email);

       number = number.value;
       localStorage.setItem('number', number);

       message = message.value;
       localStorage.setItem('message',message);

       
})

