import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../database/db.js";
import { stripHtml } from 'string-strip-html';


// Joi Objects-----------------------------------------
const signUpSchema = joi.object({
    username: joi.string().required().min(1),
    email: joi.string().email().required().min(1),
    password: joi.string().required().min(6)
})

const signInSchema = joi.object({
    email: joi.string().email().required().min(1),
    password: joi.string().required().min(6),
})

async function signUp(req, res) {
    const { username, email, password } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    // validação com joi
    const validation = signUpSchema.validate(req.body)

    if (validation.error) {
        const errors = validation.error.details.map(value => value.message)
        res.status(422).send(errors)
        return;
    }
    // ----------------------------------------------------------

    try {
        // -------------------------------------------
        //              MIDDLEWARE
        // --------------------------------------------

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
    const { email, password } = req.body;
    console.log('signIn')

    // validação com joi
    const validation = signInSchema.validate(req.body)

    if (validation.error) {
        const errors = validation.error.details.map(value => value.message)
        res.status(422).send(errors)
        return;
    }
    // -----------------------------------------------

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
        console.error(error);
        res.sendStatus(500);
    }
}

async function signOut (req, res){
    const token = req.headers.authorization?.replace('Bearer ', '')
    console.log('delete')
    try {
        // verificação pela session se o cara ta online ainda
        const user = await db.collection('sessions').findOne({token})

        if(!user){
            return res.status(404).send('O usuário não está mais logado');
        }

        await db.collection('sessions').deleteOne({token})

        res.sendStatus(200)
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export{
    signUp,
    signIn,
    signOut,
}