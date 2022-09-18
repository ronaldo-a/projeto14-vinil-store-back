import { db } from "../database/db.js";

async function validateSession (req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    const user = await db.collection('sessions').findOne({token})

    if(!user){
        return res.status(404).send('O usuário não está mais logado');
    }

    res.locals.token = token;
    next();
}

export { validateSession };