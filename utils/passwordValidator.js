export function passwordValidator(password) {
    if (!password || password.length <= 5) return "At least six characters long."
    return ''
}