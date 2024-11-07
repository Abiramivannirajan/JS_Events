// Example: Synchronous Form Validation
// Consider a  that checks if a password meets certain requirements, such as minimum length and the inclusion of both letters and numbers. This function performs each check one after another in a blocking way. Only if all criteria are met will the password

function validPassword(password) {

    if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return false; 
    }
    
    
    if (!/[a-zA-Z]/.test(password)) {
        console.log("Password must contain at least one letter.");
        return false;
    }

    if (!/[0-9]/.test(password)) {
        console.log("Password must contain at least one number.");
        return false;
    }

    console.log("Password is valid.");
    return true;
}

const password = "12345990";
validPassword(password);




