const login = async (req, res) => {
    try {
        const { email, pass } = req.body

        console.log(`${email}   ${pass}`)
    } catch (err) {
        console.error(err)
    }
}

const register = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body
    } catch (err) {

    }
}

module.exports = { login, register }