import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../database/db.js";
import { stripHtml } from 'string-strip-html';


async function signUp(req, res) {
    const { username, email, password } = res.locals.user;

    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        await db.collection('users').insertOne({
            username: stripHtml(username).result.trim(),
            email: stripHtml(email).result.trim(),
            password: stripHtml(hashPassword).result.trim(),
        })
        res.sendStatus(201)

    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function signIn (req, res) {

    const { email, password } = res.locals.user;

    try {
        const token = uuidv4();
        const user = await db.collection('users').findOne({
            email:stripHtml(email).result.trim(),
        })

        // if user exist e bcrypt.compare conferir a senha como verdade
        if (user && bcrypt.compareSync(password, user.password)) {
            
            await db.collection('sessions').insertOne({
                token,
                userId: user._id,
            })

       } else {
           return res.status(404).send('Usuário e/ou senha não encontrada.')
       }

        return res.status(200).send({
            token,
            username: user.username
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function signOut (req, res){

    token = res.locals.token;

    try {

        await db.collection('sessions').deleteOne({token})
        res.sendStatus(200)

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function verifySession (req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    try {
        // verificação pela session se o cara ta online ainda
        const session = await db.collection('sessions').findOne({token})

        if(!session){
            return res.status(404).send('Usuário não encontrado');
        }

        const userId = session.userId;
        const user = await db.collection('users').findOne({_id: userId});

        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export{
    signUp,
    signIn,
    signOut,
    verifySession
}