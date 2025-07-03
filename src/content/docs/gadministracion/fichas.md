---
title: Gestión y Estructura de Ficha
description: Documentación de la entidad Ficha y sus endpoints en la base de datos
---

## Estructura de la Entidad Ficha

La entidad **Ficha** representa los registros de fichas académicas o de formación en el sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo               | Tipo      | Restricciones            | Descripción                                                      |
|---------------------|-----------|--------------------------|------------------------------------------------------------------|
| idficha             | integer   | PK                       | Identificador único de la ficha                                  |
| numficha            | integer   |                          | Número de la ficha                                               |
| cantidadaprendices  | integer   | opcional                 | Cantidad de aprendices asociados                                 |
| activo              | boolean   | opcional, default: true  | Indica si la ficha está activa                                   |
| fechacreacion       | timestamp | opcional, default: now() | Fecha de creación del registro                                   |
| fechaactualización  | timestamp | opcional                 | Fecha de la última actualización del registro                    |

### Relaciones

| Relación    | Tipo       | Descripción                                                                 |
|-------------|------------|-----------------------------------------------------------------------------|
| personas    | OneToMany  | Relación con la entidad **Persona**. Una ficha puede tener varias personas. |
| titulados   | OneToMany  | Relación con la entidad **Titulado**. Una ficha puede tener varios titulados. |

### Ejemplo de objeto Ficha

```json
{
  "idficha": 1,
  "numficha": 123456,
  "cantidadaprendices": 30,
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "personas": [
    /* ... */
  ],
  "titulados": [
    /* ... */
  ]
}
```

### Notas

- El campo `personas` contiene un arreglo de personas asociadas a la ficha.
- El campo `titulados` contiene un arreglo de titulados vinculados a la ficha.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Ficha

#### Listar fichas

**Método:** `GET`  
**URL:** `http://localhost:3000/ficha`

##### Endpoint

```bash
GET http://localhost:3000/ficha
```

#### Ejemplo de respuesta

```json
[
  {
    "idficha": 1,
    "numficha": 123456,
    "cantidadaprendices": 30,
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear ficha

**Método:** `POST`  
**URL:** `http://localhost:3000/ficha`

##### Endpoint

```bash
POST http://localhost:3000/ficha
```

#### Ejemplo de solicitud

```json
{
  "numficha": 654321,
  "cantidadaprendices": 25,
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Ficha creada exitosamente"
}
```

#### Actualizar ficha

**Método:** `PUT`  
**URL:** `http://localhost:3000/ficha/:idficha`

##### Endpoint

```bash
PUT http://localhost:3000/ficha/1
```

#### Ejemplo de solicitud

```json
{
  "numficha": 789012,
  "cantidadaprendices": 28,
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Ficha actualizada exitosamente"
}
```

#### Eliminar ficha

**Método:** `DELETE`  
**URL:** `http://localhost:3000/ficha/:idficha`

##### Endpoint

```bash
DELETE http://localhost:3000/ficha/1
```

#### Respuesta

```json
{
  "message": "Ficha eliminada exitosamente"
}
```
