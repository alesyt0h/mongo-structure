use youtube;

db.createCollection("usuaris", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "usuaris",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "userId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "email": {
                    "bsonType": "string",
                    "maxLength": 50,
                    "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                },
                "password": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "username": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "dataNaixament": {
                    "bsonType": "date"
                },
                "sexe": {
                    "bsonType": "string",
                    "enum": [
                        "Masculí",
                        "Femení"
                    ]
                },
                "pais": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "codiPostal": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "subscritCanalId": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "int",
                        "minimum": 1
                    }
                }
            },
            "required": [
                "userId",
                "email",
                "password",
                "username",
                "dataNaixament",
                "sexe",
                "pais"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("videos", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "videos",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "videoId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "publicatPerUserId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "titol": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "descripcio": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "grandaria": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "nomArxiu": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "duracioMilisegons": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "thumbnail": {
                    "bsonType": "binData"
                },
                "dataHoraPublicacio": {
                    "bsonType": "date"
                },
                "visibilitat": {
                    "bsonType": "string",
                    "enum": [
                        "Públic",
                        "Ocult",
                        "Privat"
                    ]
                },
                "nombreReproduccions": {
                    "bsonType": "int",
                    "minimum": 0
                },
                "likes": {
                    "bsonType": "int",
                    "minimum": 0
                },
                "dislikes": {
                    "bsonType": "int",
                    "minimum": 0
                },
                "etiquetes": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "string"
                    }
                },
                "likesAndDislikes": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "userId": {
                                "bsonType": "int",
                                "minimum": 1
                            },
                            "likeOrDislike": {
                                "bsonType": "string",
                                "enum": [
                                    "like",
                                    "dislike"
                                ]
                            },
                            "dataHora": {
                                "bsonType": "date"
                            }
                        },
                        "required": [
                            "userId",
                            "likeOrDislike",
                            "dataHora"
                        ]
                    }
                }
            },
            "required": [
                "videoId",
                "publicatPerUserId",
                "titol",
                "descripcio",
                "grandaria",
                "nomArxiu",
                "duracioMilisegons",
                "thumbnail",
                "dataHoraPublicacio",
                "visibilitat"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("canal", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "canal",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "canalId": {
                    "bsonType": "int"
                },
                "userId": {
                    "bsonType": "int"
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "descripcio": {
                    "bsonType": "string",
                    "maxLength": 500
                },
                "dataCreacio": {
                    "bsonType": "date"
                },
                "usuarisSubscrits": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "int",
                        "minimum": 1
                    }
                }
            },
            "required": [
                "canalId",
                "userId",
                "nom",
                "descripcio",
                "dataCreacio"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("comentaris", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "comentaris",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "commentId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "videoId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "userId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "textComentari": {
                    "bsonType": "string",
                    "maxLength": 500
                },
                "dataHora": {
                    "bsonType": "date"
                },
                "likesAndDislikes": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "userId": {
                                "bsonType": "int",
                                "minimum": 1
                            },
                            "likeOrDislike": {
                                "bsonType": "string",
                                "enum": [
                                    "like",
                                    "dislike"
                                ]
                            },
                            "dataHora": {
                                "bsonType": "date"
                            }
                        },
                        "required": [
                            "userId",
                            "likeOrDislike",
                            "dataHora"
                        ]
                    }
                }
            },
            "required": [
                "commentId",
                "videoId",
                "userId",
                "textComentari",
                "dataHora"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("playlists", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "playlists",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "playlistId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "userId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "data_creacio": {
                    "bsonType": "date"
                },
                "estat": {
                    "bsonType": "string",
                    "enum": [
                        "pública",
                        "privada"
                    ]
                },
                "videosInPlaylist": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "int",
                        "minimum": 1
                    }
                }
            },
            "required": [
                "playlistId",
                "userId",
                "nom",
                "data_creacio",
                "estat"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});