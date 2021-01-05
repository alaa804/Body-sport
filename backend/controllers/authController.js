





const register = async(req , res) => {
    const { name , lastName , email , password } = req.body;
    try {
     res.send({ user : { name , lastName , email , password }})
    } catch(error) {
     console.log(error)
    }
}

module.exports = {
    register ,
}