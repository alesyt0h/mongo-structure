db.clients.insertOne({
    "clientId": NumberInt(1),
    "nom": "Juan",
    "primerCognom": "Lorenzo",
    "segonCognom": "Tejada",
    "telefon": "925458406",
    "correu": "test@example.com",
    "dataRegistre": new Date(),
    "clientsAdreca": {
        "carrer": "Avenida de los programadores",
        "numero": "11 Bis",
        "pis": "1ro",
        "porta": "2da",
        "ciutat": "Barcelona",
        "codiPostal": "08458",
        "pais": "España"
    }
    //"recomenatPerClientId": 1
});

db.proveidors.insertOne({
    "proveidorId": NumberInt(1),
    "nom": "Korean Glasses",
    "telefon": "+850 12 155 846",
    "fax": "+850 12 155 846",
    "nif": "2845845H",
    "proveidorsAdreca": {
        "carrer": "Changgwang St",
        "numero": "15",
        "pis": "1",
        "porta": "4",
        "ciutat": "Pionyang",
        "codiPostal": "1514",
        "pais": "North Korea"
    }
});

db.ulleres.insertOne({
    "ulleraId": NumberInt(1),
    "graduacioEsquerra": 0.23,
    "graduacioDreta": 0.35,
    "tipusMuntura": "metàl·lica",
    "colorMuntura": "Blau",
    "colorVidreEsquerra": "Verd",
    "colorVidreDreta": "Verd",
    "preu": 60.99,
    "venutPer": "Juanito",
    "venutData": new Date(),
    "venutClientId": NumberInt(1),
    "ulleresMarca": {
        "compratProveidorId": NumberInt(1),
        "marcaNom": "KoreanFashion"
    }
});