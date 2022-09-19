import { ObjectId } from "mongodb";
import { db } from "../database/db.js";

//  get
async function getPortifolio(req, res) {
    //const token = req.headers.authorization?.replace('Bearer ', '')
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
        const portifolio = await db.collection('portifolio').find().toArray();

        res.status(200).send(portifolio)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}

async function getCart(req, res) {

    const token = res.locals.token;

    try {
        const user = await db.collection('sessions').findOne({ token });
        const cart = await db.collection('cart').find({ userId: user.userId }).toArray();


        res.status(200).send(cart);

    } catch (error) {
        console.error(error.message);
        res.sendStatus(500)
    }
}

// insert
async function insertProduct(req, res) {

    const token = res.locals.token;
    const { _id, name, img, price, artist, qtd, clicked } = req.body;
    try {

        const user = await db.collection('sessions').findOne({ token });
        const cart = await db.collection('cart').find({ userId: user._id }).toArray();
        const isItem = cart.filter(item => item.productId === _id);

        if (isItem.length !== 0) {
            return res.status(409).send("Item já adicionado ao carrinho!");
        }

        await db.collection('cart').insertOne({
            productId: _id,
            name,
            img,
            price,
            artist,
            qtd,
            clicked: true,
            userId: user.userId,
        })

        return res.sendStatus(200)

    } catch (error) {
        console.error(error.message);
        res.sendStatus(500)
    }

}

//  clicked

async function setClicked(req, res) {

    const { clicked, _id, productId } = req.body

    try {

        if (productId) {
            await db.collection('portifolio').updateOne({ _id: new ObjectId(productId) }, { $set: { clicked: !clicked } });
            return res.sendStatus(200);
            
        } else {
            await db.collection('portifolio').updateOne({ _id: new ObjectId(_id) }, { $set: { clicked: !clicked } });
        }


        res.sendStatus(200)

    } catch (error) {
        console.error(error.message);
        res.sendStatus(500)
    }

}

// delete

async function deleteProduct(req, res) {
    const { id } = req.params

    try {
        const user = await db.collection('cart').findOne({ _id: new ObjectId(id) });
        if (user) {
            await db.collection('cart').deleteOne({ _id: new ObjectId(id) });
            return res.status(200).send("Item excluído com sucesso!");
        }


        await db.collection('cart').deleteOne({ productId: id });

        res.status(200).send("Item excluído com sucesso!");

    } catch (error) {
        console.error(error.message);
        res.sendStatus(500)
    }

}

async function changeQtd(req, res) {

    try {
        const { productId, newQtd } = req.body;
        // console.log(req.body);
        const carts = db.collection("cart");
        await carts.updateOne({ "_id": productId }, { $set: { qtd: newQtd } });

        return res.status(200).send("Quantidade alterada");
    } catch (error) {
        return res.status(500).send("Quantidade não alterada");
    }

}

async function insertSale(req, res) {

    const { total } = req.body;
    const token = res.locals.token;

    try {
        const user = await db.collection('sessions').findOne({ token });
        const unserializedCart = await db.collection('cart').find({ userId: user.userId }).toArray();
        const cart = JSON.stringify(unserializedCart)
        await db.collection('sales').insertOne({
            userId: user.userId,
            cart,
            total
        });

        const lastSale = await db.collection('sales').findOne({}, { sort: { _id: -1 }, limit: 1 });
        await db.collection('cart').deleteOne({ userId: user.userId });

        return res.status(200).send(lastSale);
    } catch (error) {
        return res.status(500).send("Compra não concluída");
    }

}

export {
    getPortifolio,
    getCart,
    insertProduct,
    deleteProduct,
    changeQtd,
    insertSale,
    setClicked
}