import jwt from 'jsonwebtoken';

export const generateToken = (email: any) => {
    const data = {email}
    return jwt.sign(data, "5984b59e-8fc2-11ed-a1eb-0242ac120002", { expiresIn: '1h' });
}   

export const verifyToken = (token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, "5984b59e-8fc2-11ed-a1eb-0242ac120002", (error, decoded) => { 
            if (error) {
                reject(error);
            }
            resolve(decoded);
        })
    });
}