function setFocus(){
    document.getElementById('arrival_date').focus();
}
function ready(){
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var Useremail = document.getElementById('email').value;
    if(emailPattern.test(Useremail)){
        if(Useremail.match(emailPattern)){
            alert("Valid Email");
        }
    }
    else{
        alert("Invalid email");
    }
}
document.getElementById('reservation_form').addEventListener('submit', function(event) {
    var isValid = true;

    // Trim and validate each text box entry
    var requiredFields = ['arrival_date', 'nights', 'name', 'email', 'phone'];
    requiredFields.forEach(function(field) {
        var input = document.getElementById(field);
        var value = input.value.trim();
        if (value === '') {
            alert("All fields marked with * are required.");
            isValid = false;
            input.focus();
            return false;
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
});
        function PhoneCheck(){
            var matched_phone_number = /^\d{3}-\d{3}-\d{4}$/;
        var phone = document.getElementById('phone').value;
        if(phone.match(matched_phone_number)){
            if(phone.length < 10){
                alert("User must enter a 10 digit Number");
            }
        }
        else{
            alert("User must enter a phone number in given format");
        }
        }
        function NightNumeric(){
            var nights = document.getElementById('nights').value;
        if (isNaN(nights)) {
            alert("Nights must be a numeric value.");
        }
        }