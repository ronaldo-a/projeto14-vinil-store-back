import { db } from "../database/db.js";

async function getPortifolio(req, res){



    try {
        const portifolio = await db.collection('portifolio').find().toArray();

        res.status(200).send(portifolio)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }

}


export {
    getPortifolio,
}