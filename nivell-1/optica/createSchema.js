use optica;

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
                "primerCognom": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "segonCognom": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "telefon": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "correu": {
                    "bsonType": "string",
                    "maxLength": 50,
                    "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                },
                "dataRegistre": {
                    "bsonType": "date"
                },
                "clientsAdreca": {
                    "bsonType": "object",
                    "properties": {
                        "carrer": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "numero": {
                            "bsonType": "string",
                            "maxLength": 10
                        },
                        "pis": {
                            "bsonType": "string",
                            "maxLength": 10
                        },
                        "porta": {
                            "bsonType": "string",
                            "maxLength": 10
                        },
                        "ciutat": {
                            "bsonType": "string",
                            "maxLength": 20
                        },
                        "codiPostal": {
                            "bsonType": "string",
                            "maxLength": 8
                        },
                        "pais": {
                            "bsonType": "string",
                            "maxLength": 50
                        }
                    },
                    "required": [
                        "carrer",
                        "numero",
                        "pis",
                        "porta",
                        "ciutat",
                        "codiPostal",
                        "pais"
                    ]
                },
                "recomenatPerClientId": {
                    "bsonType": "int",
                    "minimum": 1
                }
            },
            "required": [
                "clientId",
                "nom",
                "primerCognom",
                "segonCognom",
                "telefon",
                "correu",
                "dataRegistre",
                "clientsAdreca"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("proveidors", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "proveidors",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "proveidorId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "telefon": {
                    "bsonType": "string",
                    "maxLength": 15
                },
                "fax": {
                    "bsonType": "string",
                    "maxLength": 15
                },
                "nif": {
                    "bsonType": "string",
                    "maxLength": 11
                },
                "proveidorsAdreca": {
                    "bsonType": "object",
                    "properties": {
                        "carrer": {
                            "bsonType": "string",
                            "maxLength": 50
                        },
                        "numero": {
                            "bsonType": "string",
                            "maxLength": 10
                        },
                        "pis": {
                            "bsonType": "string",
                            "maxLength": 10
                        },
                        "porta": {
                            "bsonType": "string",
                            "maxLength": 10
                        },
                        "ciutat": {
                            "bsonType": "string",
                            "maxLength": 20
                        },
                        "codiPostal": {
                            "bsonType": "string",
                            "maxLength": 8
                        },
                        "pais": {
                            "bsonType": "string",
                            "maxLength": 50
                        }
                    },
                    "required": [
                        "carrer",
                        "numero",
                        "pis",
                        "porta",
                        "ciutat",
                        "codiPostal",
                        "pais"
                    ]
                }
            },
            "required": [
                "proveidorId",
                "nom",
                "telefon",
                "fax",
                "nif",
                "proveidorsAdreca"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});




db.createCollection("ulleres", {
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "ulleres",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "ulleraId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "graduacioEsquerra": {
                    "bsonType": "double",
                    "minimum": 0
                },
                "graduacioDreta": {
                    "bsonType": "double",
                    "minimum": 0
                },
                "tipusMuntura": {
                    "bsonType": "string",
                    "enum": [
                        "flotant",
                        "pasta",
                        "metàl·lica"
                    ]
                },
                "colorMuntura": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "colorVidreEsquerra": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "colorVidreDreta": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "preu": {
                    "bsonType": "double",
                    "minimum": 0
                },
                "venutPer": {
                    "bsonType": "string",
                    "maxLength": 50
                },
                "venutData": {
                    "bsonType": "date"
                },
                "venutClientId": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "ulleresMarca": {
                    "bsonType": "object",
                    "properties": {
                        "compratProveidorId": {
                            "bsonType": "int",
                            "minimum": 1
                        },
                        "marcaNom": {
                            "bsonType": "string",
                            "maxLength": 50
                        }
                    },
                    "required": [
                        "compratProveidorId",
                        "marcaNom"
                    ]
                }
            },
            "required": [
                "ulleraId",
                "graduacioEsquerra",
                "graduacioDreta",
                "tipusMuntura",
                "colorMuntura",
                "colorVidreEsquerra",
                "colorVidreDreta",
                "preu",
                "venutPer",
                "venutData",
                "venutClientId",
                "ulleresMarca"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});