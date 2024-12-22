

// const registerUser = async (req,res) => {
//     try {
//             let user = await req.body
//             console.log(user,"user")
//             return res.send(user)
//     } catch (error) {
//         console.log(error,"err")
//     }
// }

const registerUser = async (req, res) => {
    try {
        // Log the body to see if it's correctly parsed
        console.log(req.body, "user");
        let user = req.body;
        return res.send(user);  // Send back the parsed data
    } catch (error) {
        console.log(error, "err");
        res.status(500).send({ message: "Internal Server Error" });
    }
};

export {registerUser}