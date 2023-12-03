import postUser from '../api-calls/postUser';

const signupHandle = (username, password, repassword) => {
    function validate() {
        function validateUsername() {
            let usernamePattern = /^[a-zA-Z0-9._-]{4,20}$/;
            return usernamePattern.test(username);
        }
        function validatePassword() {
            // Define the regular expression patterns for complexity requirements
            let uppercasePattern = /[A-Z]/;
            let lowercasePattern = /[a-z]/;
            let numberPattern = /\d/;
            let specialCharPattern = /[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/;
            return (
                (password.length >= 8 &&
                    password.length <= 20 &&
                    lowercasePattern.test(password)) ||
                numberPattern.test(password) ||
                uppercasePattern.test(password) ||
                specialCharPattern.test(password)
            );
        }

        if (!validateUsername() && !validatePassword())
            alert('Username and password is invalid');
        else if (!validateUsername()) alert('Username is invalid');
        else if (!validatePassword()) alert('Password is invalid');
        else if (password !== repassword)
            alert('The re-entered password does not match');
        else {
            const data = { username, password };
            async function postUserData() {
                postUser(data);
                alert('Signup successful');
            }
            postUserData();
        }
    }
    validate();
};
export default signupHandle;
