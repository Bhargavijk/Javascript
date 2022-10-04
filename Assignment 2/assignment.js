const task3Element = document.getElementById('task-3');

//function 1
function login(){
    alert('login to javascript');
}

//function 2
function getuser(username){
    alert('Hi' + username);
}

//function 3
function combine(str1,str2,str3){
   const combinedText = `${str1} ${str2} ${str3}`;
   return combinedText;
}
getuser('Bhargavi');

task3Element = addEventListener('click',login);

const combinedstring = combine('Hi','!','Bhargavi');
alert(combinedstring);