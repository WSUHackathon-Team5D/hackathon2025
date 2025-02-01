const addUsers = async (req, res) => {
    try {
        const {fname, lname, email, password} = req.body

        console.log(`${fname} ${lname} ${email} ${password}`)
    } catch (err) {
        console.error(err)
    }
}

module.exports = { addUsers }