use spotify;

db.createCollection("usuaris", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "usuaris",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "isPremium": {
                    "bsonType": "bool"
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
                "canconsFavorites": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "int",
                        "minimum": 1
                    }
                },
                "albumsFavorits": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "int",
                        "minimum": 1
                    }
                },
                "seguinArtistes": {
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
                "isPremium",
                "userId",
                "email",
                "password",
                "username",
                "dataNaixament",
                "sexe",
                "pais",
                "codiPostal"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("suscripcions", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "suscripcions",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "userId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "dataInici": {
                    "bsonType": "date"
                },
                "dataRenovacio": {
                    "bsonType": "date"
                },
                "formaPagament": {
                    "bsonType": "string",
                    "enum": [
                        "Targeta de crèdit",
                        "PayPal"
                    ]
                },
                "pagaments": {
                    "bsonType": "object",
                    "properties": {
                        "orderId": {
                            "bsonType": "int",
                            "minimum": 1
                        },
                        "dataPagament": {
                            "bsonType": "date"
                        },
                        "total": {
                            "bsonType": "double",
                            "minimum": 0
                        },
                        "paypalUsername": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "creditCard": {
                            "bsonType": "object",
                            "properties": {
                                "numeroTargeta": {
                                    "bsonType": "string",
                                    "maxLength": 50
                                },
                                "caducitat": {
                                    "bsonType": "date"
                                },
                                "cvc": {
                                    "bsonType": "string",
                                    "maxLength": 4
                                }
                            },
                            "required": [
                                "numeroTargeta",
                                "caducitat",
                                "cvc"
                            ]
                        }
                    },
                    "required": [
                        "orderId",
                        "dataPagament",
                        "total"
                    ]
                }
            },
            "required": [
                "userId",
                "dataInici",
                "dataRenovacio",
                "formaPagament",
                "pagaments"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("artista", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "artista",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "artistaId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "imatgeArtista": {
                    "bsonType": "binData"
                },
                "usuarisSeguidors": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "int",
                        "minimum": 1
                    }
                },
                "artistesRelacionats": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "int",
                        "minimum": 1
                    }
                },
                "albums": {
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
                "artistaId",
                "nom",
                "imatgeArtista"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("album", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "album",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "albumId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "artistaId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "titol": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "anyPublicacio": {
                    "bsonType": "date"
                },
                "imatgePortada": {
                    "bsonType": "binData"
                },
                "favoritDeUsuari": {
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
                "albumId",
                "artistaId",
                "titol",
                "anyPublicacio",
                "imatgePortada"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("cancons", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "cancons",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "cancoId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "albumId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "titol": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "duracioEnMilisegons": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "vegadesReproduida": {
                    "bsonType": "int",
                    "minimum": 0
                },
                "favoritaDeUsuari": {
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
                "cancoId",
                "albumId",
                "titol",
                "duracioEnMilisegons",
                "vegadesReproduida"
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
                "titol": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "isDeleted": {
                    "bsonType": "bool"
                },
                "nombreDeCancons": {
                    "bsonType": "int",
                    "minimum": 0,
                    "maximum": 10000
                },
                "dataCreacio": {
                    "bsonType": "date"
                },
                "cancons": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "maxItems": 10000,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "int",
                        "minimum": 1
                    }
                },
                "sharing": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "addedByUserId": {
                                "bsonType": "int",
                                "minimum": 1
                            },
                            "addedCancoId": {
                                "bsonType": "int",
                                "minimum": 1
                            },
                            "addedDate": {
                                "bsonType": "date"
                            }
                        },
                        "required": [
                            "addedByUserId",
                            "addedCancoId",
                            "addedDate"
                        ]
                    }
                }
            },
            "required": [
                "playlistId",
                "userId",
                "titol",
                "isDeleted",
                "nombreDeCancons",
                "dataCreacio"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});