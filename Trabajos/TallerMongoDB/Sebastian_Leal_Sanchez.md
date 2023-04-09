# Taller MongoDB

# Pre-work

User → personal

Password → fz$J^DnyHe!4^FeA

- **peliculas.json**
    
    ```json
    [
        {
            "title": "Fight Club",
            "writer": "Chuck Palahniuk",
            "year": 1999,
            "actors": [
                "Brad Pitt",
                "Edward Norton"
            ]
        },
        {
            "title": "Pulp Fiction",
            "writer": "Quentin Tarantino",
            "year": 1994,
            "actors": [
                "John Travolta",
                "Uma Thurman"
            ]
        },
        {
            "title": "Inglorious Basterds",
            "writer": "Quentin Tarantino",
            "year": 2009,
            "actors": [
                "Brad Pitt",
                "Diane Kruger",
                "Eli Roth"
            ]
        },
        {
            "title": "The Hobbit: An Unexpected Journey",
            "writer": "J.R.R. Tolkein",
            "year": 2012,
            "franchise": "The Hobbit"
        },
        {
            "title": "The Hobbit: The Desolation of Smaug",
            "writer": "J.R.R. Tolkein",
            "year": 2013,
            "franchise": "The Hobbit"
        },
        {
            "title": "The Hobbit: The Battle of the Five Armies",
            "writer": "J.R.R. Tolkein",
            "year": 2012,
            "franchise": "The Hobbit",
            "synopsis": "Bilbo and Company are forced to engage in a war against an array of\\ncombatants and keep the Lonely Mountain from falling into the hands of a rising\\ndarkness."
        },
        {
            "title": "Pee Wee Herman's Big Adventure"
        },
        {
            "title": "Avatar"
        }
    ]
    ```
    

# Trabajo

```bash
mongosh "mongodb+srv://qsd.6xo4kct.mongodb.net/myFirstDatabase" --apiVersion 1 --username personal
```

```bash
use Mongo_ejercicio
```

```bash
db.creacteCollection(’peliculas’)
```

- Insert documents
    
    ```bash
    db.peliculas.insertMany([
    {
    "title": "Fight Club",
    "writer": "Chuck Palahniuk",
    "year": 1999,
    "actors": [
    "Brad Pitt",
    "Edward Norton"
    ]
    },
    {
    "title": "Pulp Fiction",
    "writer": "Quentin Tarantino",
    "year": 1994,
    "actors": [
    "John Travolta",
    "Uma Thurman"
    ]
    },
    {
    "title": "Inglorious Basterds",
    "writer": "Quentin Tarantino",
    "year": 2009,
    "actors": [
    "Brad Pitt",
    "Diane Kruger",
    "Eli Roth"
    ]
    },
    {
    "title": "The Hobbit: An Unexpected Journey",
    "writer": "J.R.R. Tolkein",
    "year": 2012,
    "franchise": "The Hobbit"
    },
    {
    "title": "The Hobbit: The Desolation of Smaug",
    "writer": "J.R.R. Tolkein",
    "year": 2013,
    "franchise": "The Hobbit"
    },
    {
    "title": "The Hobbit: The Battle of the Five Armies",
    "writer": "J.R.R. Tolkein",
    "year": 2012,
    "franchise": "The Hobbit",
    "synopsis": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
    },
    {
    "title": "Pee Wee Herman's Big Adventure"
    },
    {
    "title": "Avatar"
    }
    ])
    ```
    

# Consultar documentos

```bash
db.peliculas.find({})
```

```bash
db.peliculas.find({ writer: "Quentin Tarantino" })
```

```bash
db.peliculas.find({ actors: "Brad Pitt" })
```

```bash
db.peliculas.find({ franchise: "The Hobbit" })
```

```bash
db.peliculas.find({ year: { $gte: 1990, $lt: 2000 } })
```

```bash
db.peliculas.find({ year: { $gte: 2000, $lte: 2010 } })
```

```bash
db.peliculas.find({}, { title: 1, _id: 0 }).sort({ title: 1 }).skip(2).limit(4)
```

# Actualizar documentos

```bash
db.peliculas.updateOne(
{ title: "The Hobbit: An Unexpected Journey" },
{ $set: { synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } }
)
```

```bash
db.peliculas.updateOne(
    { title: "The Hobbit: The Desolation of Smaug" },
    { $set: { synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." } }
)
```

```bash
db.peliculas.updateOne(
    { title: "Pulp Fiction" },
    { $push: { actors: "Samuel L. Jackson" } }
)
```

## Búsqueda por texto

```bash
db.peliculas.find({ synopsis: /Bilbo/ }, { _id: 0, title: 1, year: 1 })
```

```bash
db.peliculas.find({ synopsis: /Gandalf/ })
```

```bash
db.peliculas.find({ $and: [{ synopsis: /Bilbo/ }, { synopsis: { $not: /Gandalf/ } }] })
```

```bash
db.peliculas.find({ $or: [{ synopsis: /dwarves/ }, { synopsis: /hobbit/ }] })
```

```bash
db.peliculas.find({ $and: [{ synopsis: /gold/ }, { synopsis: /dragon/ }] }).sort({ year: -1 })
```

# Eliminar documentos

```bash
db.peliculas.deleteOne({ title: "Pee Wee Herman's Big Adventure" })
```

```bash
db.peliculas.deleteOne({ title: "Avatar" })
```

# Eliminar collecciones

```bash
db.productos.drop()
```

# Cuestionario

## Pregunta 1

Cuál de las siguientes consultas en MongoDB devuelve el nombre, DNI y _id de los documentos de la colección “usuarios” con edad mayor o igual a 18.

A) `db.usuarios.find({edad: {$gte: 18}},{dni:1, nombre:1, _id:0})`

B) `db.usuarios.find({edad: {$gt: 18}},{dni:1, nombre:1})`

C) `db.usuarios.find({edad: {$gte: 18}},{dni:1, nombre:1})`

D) `db.usuarios.find({edad: {$gte: 18}},{dni:0, nombre:0, _id:0})`

Respuesta: C

## Pregunta 2

¿Qué devuelve la siguiente operación en una colección de MongoDB?

`db.socios.find({nombre: ‘Alberto’},{nombre: 1, apellidos: 1, dni: 1}).sort({nombre: -1})`

A) El nombre, el apellido y el DNI de los miembros llamados "Alberto" en orden ascendente por nombre.

B) El nombre, apellido y DNI de los miembros llamados "Alberto" en orden descendente por nombre.

C) El nombre, apellido, DNI y _id de los miembros llamados "Alberto" en orden ascendente por nombre.

D) El nombre, apellido, DNI y _id de los miembros llamados "Alberto" en orden descendente por nombre.

Respuesta: B

## Pregunta 3

¿Cierto o falso?: En MongoDB, los usuarios no pueden asignar un valor al campo `_id` en un documento.

A) Verdadero

B) Falso

Respuesta: A

## Pregunta 4

¿Qué es una base de datos y cuál es la diferencia entre SQL y NoSQL? En tu opinión, ¿cuál es mejor?

Una base de datos es un conjunto de datos organizados y estructurados de manera que sea posible acceder, gestionar, almacenar y actualizar la información de manera eficiente.

SQL es un enfoque basado en tablas, donde los datos se almacenan en tablas estructuradas con relaciones claras entre ellas. Los datos se organizan en filas y columnas. Las bases de datos relacionales SQL son altamente estructuradas y escalables, se utilizan para aplicaciones que requieren operaciones complejas y transacciones.

NoSQL no utilizan tablas para almacenar datos. En cambio, los datos se almacenan en documentos, grafos o pares clave-valor. Estas bases de datos son altamente escalables y flexibles, y se utilizan comúnmente en aplicaciones web y móviles que requieren acceso rápido a grandes cantidades de datos no estructurados.

La elección entre SQL y NoSQL depende de las necesidades específicas de cada proyecto. SQL es adecuado para aplicaciones que requieren una estructura clara y bien definida, como aplicaciones de contabilidad o gestión financiera, mientras que NoSQL es más adecuado para aplicaciones web y móviles que requieren acceso rápido a grandes cantidades de datos no estructurados. No existe una opción "mejor" ya que ambas tienen ventajas y desventajas según el caso de uso y las necesidades del proyecto en particular.