function CheckValidity(){
    var username = document.getElementById('username').value;
    if(username.length < 8){
        alert("Username must be at least 8 charcaters long");
    }
}

// function validatePassword(){
//     var password =document.getElementById('password').value;
//     if(password.length < 8){
//         alert("Password must be at least 8 charcaters long");
//     }

// }
function validatePassword(){
    pwd_check_numbers = /[\d]/g;
    pwd_special = /[\w]/g;
    pwd_check_alphabets = /[A-Za-z]/g;

    var mypassword= document.getElementById('password').value;
    if(pwd_check_numbers.test(mypassword)){
        if(mypassword.match(pwd_check_numbers).length < 2){
            alert("Password must be at least have 2 numbers");
        }
    }
    else{
        alert("Password must be at least have 2 numbers");
    }
    if(pwd_check_alphabets.test(mypassword)){
        if(mypassword.match(pwd_check_alphabets).length < 2){
            alert("Password must be at least have 2 alphabets");
        }
    }
    else{
        alert("Password must be at least have 2 alphabets");
    }
    if(pwd_special.test(mypassword)){
        if(mypassword.match(pwd_special).length < 1){
            alert("Password must be at least have 2 special characters");
        }
    }
    else{
        alert("Password must be at least have 2 special characters");
    }
    if(mypassword.length < 8){
        alert("Password must be at least 8 charcaters long");
    }
}