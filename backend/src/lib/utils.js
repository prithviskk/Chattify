import jwt from "jsonwebtoken";
export const generateToken=(userId,res)=>{ //generates a token for authentication 
    const token= jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d",  //expires in n days
    })
    res.cookie("jwt",token,{
        maxAge: 7* 24 * 60 * 60 *100,
        httpOnly:true, // it prevents cross -site scripting attacks
        sameSite:"strict", // cross-site request forgery attacks
        secure:process.env.NODE_ENV !== "development" ,
    });

    return token ;
}