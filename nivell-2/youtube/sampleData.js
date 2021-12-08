db.usuaris.insertOne({
    "userId": NumberInt(1),
    "email": "test@example.com",
    "password": "123456",
    "username": "userTest",
    "dataNaixament": ISODate("2016-04-08T15:06:21.595Z"),
    "sexe": "Femení",
    "pais": "España",
    "codiPostal": "10293",
    "subscritCanalId": [
        NumberInt(1)
    ]
});

db.videos.insertOne({
    "videoId": NumberInt(1),
    "publicatPerUserId": NumberInt(1),
    "titol": "myVideo",
    "descripcio": "tooLongToWriteIt",
    "grandaria": "1920x1080",
    "nomArxiu": "videoTest.mp4",
    "duracioMilisegons": NumberInt(36000),
    "thumbnail": BinData(1,"232sa3d323sd232a32sda3s2d3a2s1d23s21d3sa"),
    "dataHoraPublicacio": ISODate("2016-04-08T15:06:21.595Z"),
    "visibilitat": "Privat",
    "nombreReproduccions": NumberInt(123),
    "likes": NumberInt(40),
    "dislikes": NumberInt(4),
    "etiquetes": [
        "testVideo", "cats", "animals"
    ],
    "likesAndDislikes": [
        {
            "userId": NumberInt(1),
            "likeOrDislike": "like",
            "dataHora": ISODate("2016-04-08T15:06:21.595Z")
        },
        // {
        //     "userId": 2,
        //     "likeOrDislike": "dislike",
        //     "dataHora": ISODate("2016-04-08T15:06:21.595Z")
        // }
    ]
});

db.canal.insertOne({
    "canalId": NumberInt(1),
    "userId": NumberInt(1),
    "nom": "myChannel",
    "descripcio": "channelDesc",
    "dataCreacio": ISODate("2016-04-08T15:06:21.595Z"),
    "usuarisSubscrits": [
        NumberInt(1)
    ]
});

db.comentaris.insertOne({
    "commentId": NumberInt(1),
    "videoId": NumberInt(1),
    "userId": NumberInt(1),
    "textComentari": "i dont laik dis video",
    "dataHora": ISODate("2016-04-08T15:06:21.595Z"),
    "likesAndDislikes": [
        {
            "userId": NumberInt(1),
            "likeOrDislike": "dislike",
            "dataHora": ISODate("2016-04-08T15:06:21.595Z")
        }
    ]
});

db.playlists.insertOne({
    "playlistId": NumberInt(1),
    "userId": NumberInt(1),
    "nom": "myPlaylist",
    "data_creacio": ISODate("2016-04-08T15:06:21.595Z"),
    "estat": "privada",
    "videosInPlaylist": [
        NumberInt(1), NumberInt(2), NumberInt(3)
    ]
});