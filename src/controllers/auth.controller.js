import jwt from "jsonwebtoken";

export const login = (req,res) => {
    const {email ,password} = req.body;

    if (email=="x@x.com" && password == "1234!"){
        const token= jwt.sign( {email} ,process.env.SECRET,{
            expiresIn: "1year",
        })
        return res.json({token});
    }
    res.status(404).json({error: "Credenciales invalidas!"});
};