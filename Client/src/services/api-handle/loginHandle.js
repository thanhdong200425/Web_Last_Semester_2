import getUserList from '../api-calls/getUserList';

const loginHandle = (username, password) => {
    try {
        async function login() {
            const data = await getUserList();
            let isLogin = false;
            for (let user of data) {
                console.log(user.username, user.password);
                console.log(username, password, 'hihi');
                if (user.username === username && user.password === password) {
                    isLogin = true;
                    localStorage.setItem('assessToken', true);
                    localStorage.setItem('user_id', user.id);
                    localStorage.setItem('user_username', user.username);
                    localStorage.setItem('user_avatar', user.avatar);
                    alert('Login successful');
                    window.location.pathname = '/forum';
                }
            }
            if (!isLogin) alert('Login failed');
        }
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
            else if (!validateUsername()) alert('Username is valid');
            else if (!validatePassword()) alert('Password is invalid');
            else login();
        }
        validate();
    } catch (error) {
        throw error;
    }
};

export default loginHandle;
