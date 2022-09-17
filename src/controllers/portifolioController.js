import { ObjectId } from "mongodb";
import { db } from "../database/db.js";


//  get
async function getPortifolio(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '')
    const { style } = req.query



    // lembrar de maiúsculo e minúsculo
    // Verificação do query
    if (style) {
        try {
            const portifolio = await db.collection('portifolio').find({ style: style }).toArray()
            return res.status(200).send(portifolio)

        } catch (error) {
            console.error(error.message)
            res.sendStatus(500)
        }
    }
    // ----------------------------------------------------------------

    try {
        // MIDDLEWARE verificação pela session se o cara ta online ainda
        const user = await db.collection('sessions').findOne({ token })
        if (!user) {
           res.status(404);
        }
        // ----------------------------------------------------------------

        const portifolio = await db.collection('portifolio').find().toArray();

        res.status(200).send(portifolio)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}

async function getCart(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '')

    try {
        // verificação pela session se o cara ta online ainda
        const user = await db.collection('sessions').findOne({ token })
        console.log(user)
        if (!user) {
            return res.status(404).send('O usuário não está mais logado');
        }
        // ----------------------------------------------------------------

        const cart = await db.collection('cart').find({ userId: user.userId }).toArray();

        res.status(200).send(cart)
    } catch (error) {
        console.error(error.message);
        res.sendStatus(500)
    }
}

// insert
async function insertProduct(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const product = req.body;

    try {

        // MIDDLEWARE verificação pela session se o cara ta online ainda
        const user = await db.collection('sessions').findOne({ token })

        if (!user) {
            return res.status(404).send('O usuário não está mais logado');
        }
        // ----------------------------------------------------------------
        await db.collection('cart').insertOne({
            ...product,
            userId: user.userId
        })

        return res.sendStatus(200)

    } catch (error) {
        console.error(error.message);
        res.sendStatus(500)
    }

}

// delete

async function deleteProduct(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const { id } = req.params


    try {
        // verificação pela session se o cara ta online ainda
        const user = await db.collection('sessions').findOne({ token })

        if (!user) {
            return res.status(404).send('O usuário não está mais logado');
        }
        // ----------------------------------------------------------------

        await db.collection('cart').deleteOne({ _id: id })

        res.status(200).send(prod)

    } catch (error) {
        console.error(error.message);
        res.sendStatus(500)
    }


}

export {
    getPortifolio,
    getCart,
    insertProduct,
    deleteProduct,
}