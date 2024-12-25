import { reqCheckerFunc } from "../utility/requestHandler";



// const registerUser = (async (req, res, next) => {
//     try {
//         // Log the body to see if it's correctly parsed
//         let user = req.body;
//         console.log(user, "user");
//         return res.send(user);  // Send back the parsed data
//     } catch (error) {
//         console.log(error, "err");
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });


const registerUser =  reqCheckerFunc( async (req, res) => {
    // Log the body to see if it's correctly parsed
    let user = req.body;
    console.log(user, "user");
    return res.send(user);  // Send back the parsed data
})



export {registerUser}