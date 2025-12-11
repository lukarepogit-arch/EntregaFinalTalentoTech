import jwt  from "jsonwebtoken"

// Middleware para autenticar el token obetnido:
export const auth= (req,res,next) =>{
    // del token obetenido "dividimos" la palabra bearer del token 
    // con el split y solo queremos obetener lo que esta el indice 1 , osea el token
    // con el "?" pregunta si el token el nulo,en caso de que no SI hace el split
    const token = req.headers["authorization"]?.split(" ")[1];
    // const token = req.headers["authorization"];
    
    if (!token) return res.sendStatus(401);
    // verificamos si el token es correcto con jwt:
    jwt.verify(token, process.env.SECRET,(error) => {
        // si el token es invalido manda este status de error
        if (error) return res.sendStatus(403);
        // si el token es valido sigue
        next();
    })
    // console.log(token);
}

// token:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InhAeC5jb20iLCJpYXQiOjE3NjU0NzY3MTcsImV4cCI6MT
// c5NzAzNDMxN30.xD88PJy8Chke4Uc-hDx5311Ta3WqNkxliqh27yI3qt8