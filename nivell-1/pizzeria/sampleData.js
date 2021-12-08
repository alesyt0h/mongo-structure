db.clients.insertOne({
    "clientId": NumberInt(1),
    "nom": "Juan",
    "cognom1": "Lorenzo",
    "cognom2": "Tejada",
    "telefon": "925458406",
    "adreca": {
        "adrecaPostal": "Avenida de los programadores 11 Bis 1ro 2da",
        "codiPostal": "08458",
        "provincia": "Barcelona",
        "localitat": "Barcelona"
    }
});

db.botiga.insertOne({
    "botigaId": NumberInt(1),
    "empleats": {
        "empleatId": NumberInt(1),
        "nom": "Tariq",
        "cognom1": "St. Patrick",
        "cognom2": "Roman",
        "nif": "15258458Q",
        "telefon": "612544680",
        "carrec": "repartidor"
    },
    "adreca": {
        "adrecaPostal": "Calle Principal 40 2do 1b",
        "codiPostal": "45181",
        "provincia": "Málaga",
        "localitat": "Villanueva del Trabuco"
    }
});

db.comandes.insertOne({
    "comandaId": NumberInt(1),
    "comandaItems": [
        {
            "producteId": NumberInt(1),
            "cuantitat": NumberInt(2)
        }
    ],
    "comandesDomicili": {
        "repartidorEmpleatId": NumberInt(1),
        "dataHoraLliurament": ISODate("2016-04-08T15:06:21.595Z")
    },
    "clientId": NumberInt(1),
    "dataHora": new Date(),
    "repartirRecollir": "recollir",
    "gestionaBotigaId": NumberInt(1),
    "preuTotal": 13.65
});

db.productes.insertOne({
    "producteId": NumberInt(1),
    "tipus": "pizza",
    "nom": "Pizza margarita",
    "descripcio": "Pizza con muchas cosas",
    "imatge": BinData(1,"232sa3d323sd232a32sda3s2d3a2s1d23s21d3sa"),
    "preu": 8.50,
    "categoria": {
        "categoriaId": NumberInt(1),
        "nom": "margarita"
    }
});