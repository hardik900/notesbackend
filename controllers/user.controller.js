
import { requestHandler } from "../utility/requestHandler.js";



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


const registerUser = requestHandler( async (req, res) => {
    let {firstName, lastName, number, email, password, Cpassword} = req.body;

     // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    if(
        [firstName, lastName, number, email, password, Cpassword].some((field) => String(field)?.trim() == "")
    ){
        console.log("some values are empty")
    }

    if(!(password === Cpassword)){
        res.send("password and Cpassword are not same")
    }


    return res.send("Done");  
})


export {registerUser}