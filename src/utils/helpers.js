import toast from 'react-hot-toast'

function isValidName(name) {
    // Regular expression to allow only alphabets and spaces
    const validNameRegex = /^[A-Za-z\s]+$/

    // Check if the name matches the pattern
    if (validNameRegex.test(name)) {
        return true // Valid name
    } else {
        toast.error('Name should contain only alphabets and spaces')
        return false // Invalid name
    }
}

function isValidEmail(email) {
    // Regular expression to check if the entered email is valid
    const validEmailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    // Check if the email matches the pattern
    if (validEmailRegex.test(email)) {
        return true // Valid email
    } else {
        toast.error('Please enter a valid email address')
        return false // Invalid email
    }
}

function arePasswordsMatching(password, confirmPassword) {
    if (password.length >= 8) {
        if (password === confirmPassword) {
            return true
        } else {
            toast.error('Passwords do not match')
            return false
        }
    } else {
        toast.error('Password should be at least 8 characters long')
        return false
    }
}

export { isValidEmail, arePasswordsMatching, isValidName }
