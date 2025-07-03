---
title: Gestión y Estructura de Sitio
description: Documentación de la entidad Sitio y sus endpoints en la base de datos
---

## Estructura de la Entidad Sitio

La entidad **Sitio** representa los diferentes sitios físicos o virtuales registrados en el sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo               | Tipo      | Restricciones            | Descripción                                                      |
|---------------------|-----------|--------------------------|------------------------------------------------------------------|
| idsitio             | integer   | PK                       | Identificador único del sitio                                    |
| sitio               | text      |                          | Nombre o descripción del sitio                                   |
| activo              | boolean   | opcional, default: true  | Indica si el sitio está activo                                   |
| fechacreacion       | timestamp | opcional, default: now() | Fecha de creación del registro                                   |
| fechaactualización  | timestamp | opcional                 | Fecha de la última actualización del registro                    |

### Relaciones

| Relación   | Tipo      | Descripción                                                                 |
|------------|-----------|-----------------------------------------------------------------------------|
| tipositio  | ManyToOne | Relación con la entidad **Tipositio**. El sitio pertenece a un tipo de sitio. |

### Ejemplo de objeto Sitio

```json
{
  "idsitio": 1,
  "sitio": "Laboratorio de Electrónica",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "tipositio": 2
}
```

### Notas

- El campo `tipositio` indica el tipo de sitio al que pertenece.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Sitio

#### Listar sitios

**Método:** `GET`  
**URL:** `http://localhost:3000/sitio`

##### Endpoint

```bash
GET http://localhost:3000/sitio
```

#### Ejemplo de respuesta

```json
[
  {
    "idsitio": 1,
    "sitio": "Laboratorio de Electrónica",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null,
    "tipositio": 2
  }
]
```

#### Crear sitio

**Método:** `POST`  
**URL:** `http://localhost:3000/sitio`

##### Endpoint

```bash
POST http://localhost:3000/sitio
```

#### Ejemplo de solicitud

```json
{
  "sitio": "Sala de Conferencias",
  "activo": true,
  "tipositio": 3
}
```

#### Respuesta

```json
{
  "message": "Sitio creado exitosamente"
}
```

#### Actualizar sitio

**Método:** `PUT`  
**URL:** `http://localhost:3000/sitio/:idsitio`

##### Endpoint

```bash
PUT http://localhost:3000/sitio/1
```

#### Ejemplo de solicitud

```json
{
  "sitio": "Aula Virtual",
  "activo": false,
  "tipositio": 1
}
```

#### Respuesta

```json
{
  "message": "Sitio actualizado exitosamente"
}
```

#### Eliminar sitio

**Método:** `DELETE`  
**URL:** `http://localhost:3000/sitio/:idsitio`

##### Endpoint

```bash
DELETE http://localhost:3000/sitio/1
```

#### Respuesta

```json
{
  "message": "Sitio eliminado exitosamente"
}
```
