---
title: Gestión y Estructura de Área
description: Documentación de la entidad Area y sus endpoints en la base de datos
---

## Estructura de la Entidad Area

La entidad **Area** representa las áreas funcionales o académicas dentro del sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones            | Descripción                                   |
| ------------------ | --------- | ------------------------ | --------------------------------------------- |
| idarea             | integer   | PK                       | Identificador único del área                  |
| area               | text      | -                        | Nombre o descripción del área                 |
| activo             | boolean   | opcional, default: true  | Indica si el área está activa                 |
| fechacreacion      | timestamp | opcional, default: now() | Fecha de creación del registro                |
| fechaactualización | timestamp | opcional                 | Fecha de la última actualización del registro |

### Relaciones

| Relación    | Tipo      | Descripción                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| areacentros | OneToMany | Relación con la entidad **Areacentro**. Un área puede tener varios centros. |
| titulados   | OneToMany | Relación con la entidad **Titulado**. Un área puede tener varios titulados. |

### Ejemplo de objeto Area

```json
{
  "idarea": 1,
  "area": "Tics",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "areacentros": [
    /* ... */
  ],
  "titulados": [
    /* ... */
  ]
}
```

### Notas

- El campo `areacentros` contiene un arreglo de relaciones con centros asociados a esta área.
- El campo `titulados` contiene un arreglo de titulados vinculados al área.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Área

#### Listar áreas

Este endpoint permite obtener la lista de todas las áreas registradas en el sistema. La respuesta será un arreglo de objetos JSON, donde cada objeto representa un área con sus datos.

**Método:** `GET`  
**URL:** `http://localhost:3000/area`

##### Endpoint

```bash
GET http://localhost:3000/area
```

#### Ejemplo de respuesta

```json
[
  {
    "idarea": 1,
    "area": "Tics",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualizacion": null
  },
  {
    "idarea": 2,
    "area": "Administración",
    "activo": true,
    "fechacreacion": "2024-05-02T11:00:00.000Z",
    "fechaactualizacion": null
  }
]
```

#### Crear área

Este endpoint permite crear una nueva área. Debes enviar los datos en el cuerpo de la solicitud en formato JSON. Si la operación es exitosa, recibirás un mensaje de confirmación.

**Método:** `POST`  
**URL:** `http://localhost:3000/area`

##### Endpoint

```bash
POST http://localhost:3000/area
```

#### Ejemplo de solicitud

```json
{
  "area": "Tics",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Área creada exitosamente"
}
```

#### Actualizar área

Este endpoint se utiliza para actualizar los datos de un área existente. Debes reemplazar :idarea con el ID del área que deseas modificar.

Por ejemplo, para actualizar el área con ID 1:

**Método:** `PUT`  
**URL:** `http://localhost:3000/area/:idarea`

##### Endpoint

```bash
PUT http://localhost:3000/area/1
```

#### Ejemplo de solicitud

```json
{
  "area": "Ciencia de Datos",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Área actualizada exitosamente"
}
```

#### Eliminar área

Este endpoint se utiliza para eliminar un área del sistema. Debes reemplazar :idarea con el ID del área que deseas eliminar.

Por ejemplo, para eliminar el área con ID 1:

**Método:** `DELETE`  
**URL:** `http://localhost:3000/area/:idarea`

##### Endpoint

```bash
DELETE http://localhost:3000/area/1
```

#### Respuesta

```json
{
  "message": "Área eliminada exitosamente"
}
```
