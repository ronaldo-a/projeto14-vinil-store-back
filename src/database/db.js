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
        style: 'Samba',
        qtd: 1,

    }, {
        name: ' Elis & Tom',
        img: 'https://imusic.b-cdn.net/images/item/original/829/0042282441829.jpg?regina-elis-antonio-ca-2008-elis-tom-cd&class=original',
        price: '150,00',
        artist: 'Elis Regina e Tom Jobim',
        style: 'Samba',
        qtd: 1,
    }, {
        name: 'Toquinho',
        img: 'https://m.media-amazon.com/images/I/817HTXclWAL._AC_SL1500_.jpg',
        price: '150,00',
        artist: 'Toquinho',
        style: 'Samba',
        qtd: 1,
    }, {
        name: 'Samba esquema novo',
        img: 'https://imusic.b-cdn.net/images/item/original/875/7427251606875.jpg?jorge-ben-2022-Samba-esquema-novo-coloured-vinyl-lp&class=original',
        price: '150,00',
        artist: 'Jorgen Ben',
        style: 'Samba',
        qtd: 1,
    }, {
        name: 'Estudando o Samba ',
        img: 'https://m.media-amazon.com/images/I/71h2lkMVDaL._AC_SL1500_.jpg',
        price: '150,00',
        artist: 'Tom Zé',
        style: 'Samba',
        qtd: 1,
    }, {
        name: 'Cartola -1976 -Série Clássicos',
        img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
        price: '150,00',
        artist: 'Cartola',
        style: 'Samba',
        qtd: 1,

    }, {
        name: 'Samba pras moças',
        img: 'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
        price: '158,00',
        artist: 'Zeca Pagodinho',
        style: 'Samba',
        qtd: 1,

    }, {
        name: 'Só danço Samba',
        img: 'https://m.media-amazon.com/images/I/51QTGySfzML._UX358_FMwebp_QL85_.jpg',
        price: '150,00',
        artist: 'Emilio Santiago',
        style: 'Samba',
        qtd: 1,
    },
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    {
        name: 'The dark side of the moon',
        img: 'https://imusic.b-cdn.net/images/item/original/613/5099902987613.jpg?pink-floyd-2016-the-dark-side-of-the-moon-lp&class=original',
        price: '97.90',
        artist: 'Pink Floyd',
        style: 'Rock',
        qtd: 1,
    },{
        name: 'Nevermind ',
        img: 'https://imusic.b-cdn.net/images/item/original/517/0720642442517.jpg?nirvana-2014-nevermind-lp&class=original',
        price: '115.90',
        artist: 'Nirvana',
        style: 'Rock',
        qtd: 1,
    },{
        name: 'Led Zeppelin 2014',
        img: 'https://imusic.b-cdn.net/images/item/original/416/0081227966416.jpg?led-zeppelin-2014-led-zeppelin-lp&class=original',
        price: '125.90',
        artist: 'Led Zeppelin ',
        style: 'Rock',
        qtd: 1,
    },{
        name: 'Queen II ',
        img: 'https://imusic.b-cdn.net/images/item/original/240/0602547288240.jpg?queen-2015-queen-ii-lp&class=original',
        price: '132.90',
        artist: 'Queen',
        style: 'Rock',
        qtd: 1,
    },{
        name: '50 Greatest Hits',
        img: 'https://imusic.b-cdn.net/images/item/original/016/0886976399016.jpg?elvis-presley-2010-50-greatest-hits-lp&class=scaled',
        price: '167.90',
        artist: 'Elvis Presley',
        style: 'Rock',
        qtd: 1,
    },{
        name: 'Use Your Illusion 1',
        img: 'https://imusic.b-cdn.net/images/item/original/510/0720642441510.jpg?guns-n-roses-2012-use-your-illusion-1-lp&class=scaled',
        price: '105.90',
        artist: `Guns 'n' Roses`,
        style: 'Rock',
        qtd: 1,
    },{
        name: 'Rock and Roll over ',
        img: 'https://imusic.b-cdn.net/images/item/original/248/0602537788248.jpg?kiss-2016-rock-and-roll-over-lp&class=original',
        price: '155.90',
        artist: 'KISS',
        style: 'Rock',
        qtd: 1,
    },{
        name: 'Back in Black',
        img: 'https://imusic.b-cdn.net/images/item/original/513/5099751076513.jpg?ac-dc-2009-back-in-black-lp&class=original',
        price: '109.90',
        artist: 'ACDC',
        style: 'Rock',
        qtd: 1,
    },
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    {
        name: 'Opinião',
        img: 'https://http2.mlstatic.com/D_NQ_NP_934452-MLB43450238423_092020-O.webp',
        price: '55.90',
        artist: 'Mestrinho',
        style: 'Forró',
        qtd: 1,
    },{
        name: 'Coletânea RootStock 2019',
        img: 'http://www.forroemvinil.com/wp-content/uploads/2020/03/Rootstock-2020-Capa-Coletanea-620x620.png',
        price: '42.55',
        artist: 'Variados',
        style: 'Forró',
        qtd: 1,
    },{
        name: 'Parafina',
        img: 'http://www.forroemvinil.com/wp-content/uploads/2020/09/cover-620x620.jpg',
        price: '102.90',
        artist: 'Edson Duarte',
        style: 'Forró',
        qtd: 1,
    },{
        name: 'Sivuca 1957',
        img: 'http://www.forroemvinil.com/wp-content/uploads/2020/01/1957-SIVUCA-Compacto-Simples-selo-A-copacabana.jpg',
        price: '89.90',
        artist: 'Sivuca',
        style: 'Forró',
        qtd: 1,
    },{
        name: 'Mestre Zinho ao vivo',
        img: 'http://www.forroemvinil.com/wp-content/uploads/2015/12/capa5.jpg',
        price: '99.90',
        artist: 'Mestre Zinho',
        style: 'Forró',
        qtd: 1,
    },{
        name: `Marinês - Compacto duplo - Oito da Conceição` ,
        img: 'http://www.forroemvinil.com/wp-content/uploads/2015/04/capa17.jpg',
        price: '127.90',
        artist: 'Marinês',
        style: 'Forró',
        qtd: 1,
    },{
        name: 'Luiz Gonzaga - Forró do começo ao fim ',
        img: 'http://www.forroemvinil.com/wp-content/uploads/2019/08/Capa-Luiz-Gozaga-Forr%C3%B3-Do-Come%C3%A7o-Ao-Fim-1991-449x304.jpg',
        price: '97.90',
        artist: 'Luiz Gonzaga',
        style: 'Forró',
        qtd: 1,
    },{
        name: 'Dominguinhos - Millennium ',
        img: 'http://www.forroemvinil.com/wp-content/uploads/2022/12/CAPA2.jpg',
        price: '92.90',
        artist: 'Dominguinhos',
        style: 'Forró',
        qtd: 1,
    },
];
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

try {
    await mongoClient.connect().then(() => console.log('mongoDb conectado'))
} catch (error) {
    console.error(error.response)
}

const db = mongoClient.db('vinil-store-4');

 /* try {
     for (let k = 0; k < array.length; k++) {
         console.log('cadastrinho firmeza')
         await db.collection('portifolio').insertOne(array[k])
     }

 } catch (error) {
     console.error(error)
 }; */

export { db }

