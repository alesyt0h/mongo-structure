db.usuaris.insertOne({
    "isPremium": true,
    "userId": NumberInt(1),
    "email": "test@hotmail.com",
    "password": "123456",
    "username": "testUser",
    "dataNaixament": ISODate("2016-04-08T15:06:21.595Z"),
    "sexe": "Femení",
    "pais": "France",
    "codiPostal": "12547",
    "canconsFavorites": [
        NumberInt(1)
    ],
    "albumsFavorits": [
        NumberInt(1)
    ],
    "seguinArtistes": [
        NumberInt(1)
    ]
});

db.suscripcions.insertOne({
    "userId": NumberInt(1),
    "dataInici": ISODate("2016-04-08T15:06:21.595Z"),
    "dataRenovacio": ISODate("2016-04-08T15:06:21.595Z"),
    "formaPagament": "PayPal",
    "pagaments": {
        "orderId": NumberInt(1),
        "dataPagament": ISODate("2016-04-08T15:06:21.595Z"),
        "total": 14.29,
        "paypalUsername": "pepita23",
        "creditCard": {
            "numeroTargeta": "4581-5452-5548-2145", // Not PCI DSS Compliant!
            "caducitat": ISODate("2016-04-08T15:06:21.595Z"), // Not PCI DSS Compliant!
            "cvc": "286" // Not PCI DSS Compliant!
        }
    }
});

db.artista.insertOne({
    "artistaId": NumberInt(1),
    "nom": "Malú",
    "imatgeArtista": BinData(1,"232sa3d323sd232a32sda3s2d3a2s1d23s21d3sa"),
    "usuarisSeguidors": [
        NumberInt(1)
    ],
    "artistesRelacionats": [
        NumberInt(1)
    ],
    "albums": [
        NumberInt(1)
    ]
});

db.album.insertOne({
    "albumId": NumberInt(1),
    "artistaId": NumberInt(1),
    "titol": "Lluvia",
    "anyPublicacio": ISODate("2016-04-08T15:06:21.595Z"),
    "imatgePortada": BinData(1,"232sa3d323sd232a32sda3s2d3a2s1d23s21d3sa"),
    "favoritDeUsuari": [
        NumberInt(1)
    ]
});

db.cancons.insertOne({
    "cancoId": NumberInt(1),
    "albumId": NumberInt(1),
    "titol": "Rain",
    "duracioEnMilisegons": NumberInt(23023),
    "vegadesReproduida": NumberInt(19923),
    "favoritaDeUsuari": [
        NumberInt(1)
    ]
});

db.playlists.insertOne({
    "playlistId": NumberInt(1),
    "userId": NumberInt(1),
    "titol": "Reggaeton",
    "isDeleted": false,
    "nombreDeCancons": NumberInt(3),
    "dataCreacio": ISODate("2016-04-08T15:06:21.595Z"),
    "cancons": [
        NumberInt(1), NumberInt(2), NumberInt(3)
    ],
    "sharing": [
        {
            "addedByUserId": NumberInt(1),
            "addedCancoId": NumberInt(3),
            "addedDate": ISODate("2016-04-08T15:06:21.595Z")
        }
    ]
});