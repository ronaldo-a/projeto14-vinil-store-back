import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const array = [
    {
        name: 'Alerta geral',
        img: 'https://s3.amazonaws.com/vinils3/wp-content/uploads/2016/10/Alcione_alerta-geral_01-300x300.jpg',
        price: '150,00',
        artist: 'Alcione',
        type: 'samba',
        qtd: 1,

    }, {
        name: ' Elis & Tom',
        img: 'https://imusic.b-cdn.net/images/item/original/829/0042282441829.jpg?regina-elis-antonio-ca-2008-elis-tom-cd&class=original',
        price: '150,00',
        artist: 'Elis Regina e Tom Jobim',
        qtd: 1,
    }, {
        name: 'Toquinho',
        img: 'https://m.media-amazon.com/images/I/817HTXclWAL._AC_SL1500_.jpg',
        price: '150,00',
        artist: 'Toquinho',
        type: 'samba',
        qtd: 1,
    }, {
        name: 'Samba esquema novo',
        img: 'https://imusic.b-cdn.net/images/item/original/875/7427251606875.jpg?jorge-ben-2022-samba-esquema-novo-coloured-vinyl-lp&class=original',
        price: '150,00',
        artist: 'Jorgen Ben',
        type: 'samba',
        qtd: 1,
    }, {
        name: 'Estudando o samba ',
        img: 'https://m.media-amazon.com/images/I/71h2lkMVDaL._AC_SL1500_.jpg',
        price: '150,00',
        artist: 'Tom Zé',
        type: 'samba',
        qtd: 1,
    }, {
        name: 'Cartola -1976 -Série Clássicos',
        img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
        price: '150,00',
        artist: 'Cartola',
        type: 'samba',
        qtd: 1,

    }, {
        name: 'Samba pras moças',
        img: 'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
        price: '158,00',
        artist: 'Zeca Pagodinho',
        type: 'samba',
        qtd: 1,

    }, {
        name: 'Só danço samba',
        img: 'https://m.media-amazon.com/images/I/51QTGySfzML._UX358_FMwebp_QL85_.jpg',
        price: '150,00',
        artist: 'Emilio Santiago',
        type: 'samba',
        qtd: 1,
    },
];
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

try {
    await mongoClient.connect().then(() => {
    })
} catch (error) {
    console.error(error.message)
}

const db = mongoClient.db('vinil-store-1');

// try {
//     for (let k = 0; k < array.length; k++) {
//         console.log('cadastrinho firmeza')
//         await db.collection('portifolio').insertOne(array[k])
//     }

// } catch (error) {
//     console.error(error)
// }

export { db }

