---
title: Gestión y Estructura de Municipio
description: Documentación de la entidad Municipio y sus endpoints en la base de datos
---

## Estructura de la Entidad Municipio

La entidad **Municipio** representa los municipios registrados en el sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones               | Descripción                                    |
|--------------------|-----------|-----------------------------|------------------------------------------------|
| idmunicipio        | integer   | PK                          | Identificador único del municipio              |
| municipio          | text      |                             | Nombre del municipio                           |
| activo             | boolean   | opcional, default: true     | Indica si el municipio está activo             |
| fechacreacion      | timestamp | opcional, default: now()    | Fecha de creación del registro                 |
| fechaactualización | timestamp | opcional                    | Fecha de la última actualización del registro  |

### Relaciones

| Relación | Tipo      | Descripción                                      |
|----------|-----------|--------------------------------------------------|
| centros  | OneToMany | Relación con la entidad **Centro**. Un municipio puede tener varios centros asociados. |

### Ejemplo de objeto Municipio

```json
{
  "idmunicipio": 1,
  "municipio": "Bogotá",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "centros": [
    /* ... */
  ]
}
```

### Notas

- El campo `centros` contiene un arreglo de centros asociados al municipio.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Municipio

#### Listar municipios

**Método:** `GET`  
**URL:** `http://localhost:3000/municipio`

##### Endpoint

```bash
GET http://localhost:3000/municipio
```

#### Ejemplo de respuesta

```json
[
  {
    "idmunicipio": 1,
    "municipio": "Bogotá",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear municipio

**Método:** `POST`  
**URL:** `http://localhost:3000/municipio`

##### Endpoint

```bash
POST http://localhost:3000/municipio
```

#### Ejemplo de solicitud

```json
{
  "municipio": "Medellín",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Municipio creado exitosamente"
}
```

#### Actualizar municipio

**Método:** `PUT`  
**URL:** `http://localhost:3000/municipio/:idmunicipio`

##### Endpoint

```bash
PUT http://localhost:3000/municipio/1
```

#### Ejemplo de solicitud

```json
{
  "municipio": "Cali",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Municipio actualizado exitosamente"
}
```

#### Eliminar municipio

**Método:** `DELETE`  
**URL:** `http://localhost:3000/municipio/:idmunicipio`

##### Endpoint

```bash
DELETE http://localhost:3000/municipio/1
```

#### Respuesta

```json
{
  "message": "Municipio eliminado exitosamente"
}
```
