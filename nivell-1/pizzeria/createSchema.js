use pizzeria;

db.createCollection("clients", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "clients",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "clientId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "cognom1": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "cognom2": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "telefon": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "adreca": {
                    "bsonType": "object",
                    "properties": {
                        "adrecaPostal": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "codiPostal": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "provincia": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "localitat": {
                            "bsonType": "string",
                            "maxLength": 50
                        }
                    },
                    "required": [
                        "adrecaPostal",
                        "codiPostal",
                        "provincia",
                        "localitat"
                    ]
                }
            },
            "required": [
                "clientId",
                "nom",
                "cognom1",
                "cognom2",
                "telefon",
                "adreca"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("botiga", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "botiga",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "botigaId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "empleats": {
                    "bsonType": "object",
                    "properties": {
                        "empleatId": {
                            "bsonType": "int",
                            "minimum": 1
                        },
                        "nom": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "cognom1": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "cognom2": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "nif": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "telefon": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "carrec": {
                            "bsonType": "string",
                            "enum": [
                                "cuiner",
                                "repartidor"
                            ]
                        }
                    },
                    "required": [
                        "empleatId",
                        "nom",
                        "cognom1",
                        "cognom2",
                        "nif",
                        "telefon",
                        "carrec"
                    ]
                },
                "adreca": {
                    "bsonType": "object",
                    "properties": {
                        "adrecaPostal": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "codiPostal": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "provincia": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "localitat": {
                            "bsonType": "string",
                            "maxLength": 50
                        }
                    },
                    "required": [
                        "adrecaPostal",
                        "codiPostal",
                        "provincia",
                        "localitat"
                    ]
                }
            },
            "required": [
                "botigaId",
                "empleats",
                "adreca"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("comandes", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "comandes",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "comandaId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "comandaItems": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "producteId": {
                                "bsonType": "int",
                                "minimum": 1
                            },
                            "cuantitat": {
                                "bsonType": "int",
                                "minimum": 1
                            }
                        },
                        "required": [
                            "producteId",
                            "cuantitat"
                        ]
                    }
                },
                "comandesDomicili": {
                    "bsonType": "object",
                    "properties": {
                        "repartidorEmpleatId": {
                            "bsonType": "int",
                            "minimum": 1
                        },
                        "dataHoraLliurament": {
                            "bsonType": "date"
                        }
                    },
                    "required": [
                        "repartidorEmpleatId",
                        "dataHoraLliurament"
                    ]
                },
                "clientId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "dataHora": {
                    "bsonType": "date"
                },
                "repartirRecollir": {
                    "bsonType": "string",
                    "enum": [
                        "repartir",
                        "recollir"
                    ]
                },
                "gestionaBotigaId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "preuTotal": {
                    "bsonType": "double",
                    "minimum": 0
                }
            },
            "required": [
                "comandaId",
                "comandaItems",
                "clientId",
                "dataHora",
                "repartirRecollir",
                "gestionaBotigaId",
                "preuTotal"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("productes", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "productes",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "producteId": {
                    "bsonType": "int"
                },
                "tipus": {
                    "bsonType": "string",
                    "enum": [
                        "pizza",
                        "hamburguesa",
                        "beguda"
                    ]
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "descripcio": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "imatge": {
                    "bsonType": "binData"
                },
                "preu": {
                    "bsonType": "double",
                    "minimum": 0
                },
                "categoria": {
                    "bsonType": "object",
                    "properties": {
                        "categoriaId": {
                            "bsonType": "int",
                            "minimum": 1
                        },
                        "nom": {
                            "bsonType": "string",
                            "maxLength": 50
                        }
                    },
                    "required": [
                        "categoriaId",
                        "nom"
                    ]
                }
            },
            "required": [
                "producteId",
                "tipus",
                "nom",
                "descripcio",
                "imatge",
                "preu",
                "categoria"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});