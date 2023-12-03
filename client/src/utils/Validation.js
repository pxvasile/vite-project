export default function Validation(values) {
    const errors = {};

    // const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.username == "") {
        errors.username = "Username is Required!";
    }
    if (values.username.length < 3) {
        errors.username = "Username is too short!";
    }
    if (values.email == "") {   
        errors.email = "Email is Required!";
    }
    // if (values.password == "" && values.password.length < 5) {
    //     errors.password = ('Passwords is too weak and must be at least 5 characters long!');
    // }
    if (values.password == "") {
        errors.password = "Password is Required!";
    } 
    if (values.repass == "") {
        errors.repass = "Confirm Password is Required!";
    } 
    if (values.password != values.repass) {
   
        errors.password = ('Password and ConfirmPassword dont\'t match!');
      
        errors.repass = ('Password and ConfirmPassword dont\'t match!');
    }

    return errors;
};