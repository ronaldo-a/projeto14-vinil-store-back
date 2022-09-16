import { db } from "../database/db.js";


//  get
async function getPortifolio(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '')

    try {
        // verificação pela session se o cara ta online ainda
        // const user = await db.collection('sessions').findOne({token})

        // if(!user){
        //     return res.status(404).send('O usuário não está mais logado');
        // }
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
        // const user = await db.collection('sessions').findOne({token})

        // if(!user){
        //     return res.status(404).send('O usuário não está mais logado');
        // }
        // ----------------------------------------------------------------

        const portifolio = await db.collection('cart').find().toArray();

        res.status(200).send(portifolio)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}

// insert
async function insertCart(req, res) {
    const token = req.headers.aythorization?.replace('Bearer ', '');


    try {
        // verificação pela session se o cara ta online ainda
        // const user = await db.collection('sessions').findOne({token})

        // if(!user){
        //     return res.status(404).send('O usuário não está mais logado');
        // }
        // ----------------------------------------------------------------
        


    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }


}

async function insertHeaderCart(req, res) {
    const token = req.headers.aythorization?.replace('Bearer ', '');


    try {
        // verificação pela session se o cara ta online ainda
        // const user = await db.collection('sessions').findOne({token})

        // if(!user){
        //     return res.status(404).send('O usuário não está mais logado');
        // }
        // ----------------------------------------------------------------
        


    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }


}

export {
    getPortifolio,
    getCart,
    insertCart,
    insertHeaderCart,
}