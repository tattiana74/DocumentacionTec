---
title: Gestión y Estructura de Sede
description: Documentación de la entidad Sede y sus endpoints en la base de datos
---

## Estructura de la Entidad Sede

La entidad **Sede** representa las sedes físicas o administrativas de un centro. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones            | Descripción                                   |
| ------------------ | --------- | ------------------------ | --------------------------------------------- |
| idsede             | integer   | PK                       | Identificador único de la sede                |
| sede               | text      |                          | Nombre de la sede                             |
| direccion          | text      |                          | Dirección física de la sede                   |
| activo             | boolean   | opcional, default: true  | Indica si la sede está activa                 |
| fechacreacion      | timestamp | opcional, default: now() | Fecha de creación del registro                |
| fechaactualización | timestamp | opcional                 | Fecha de la última actualización del registro |

### Relaciones

| Relación | Tipo      | Descripción                        |
| -------- | --------- | ---------------------------------- |
| centro   | ManyToOne | Relación con la entidad **Centro** |

### Ejemplo de objeto Sede

```json
{
  "idsede": 1,
  "sede": "Sede Principal",
  "direccion": "Calle 123 #45-67",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "centro": 3
}
```

### Notas

- El campo `centro` indica el centro al que pertenece la sede.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Sede

#### Listar sedes

**Método:** `GET`  
**URL:** `http://localhost:3000/sede`

##### Endpoint

```bash
GET http://localhost:3000/sede
```

#### Ejemplo de respuesta

```json
[
  {
    "idsede": 1,
    "sede": "Sede Principal",
    "direccion": "Calle 123 #45-67",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null,
    "centro": 3
  }
]
```

#### Crear sede

**Método:** `POST`  
**URL:** `http://localhost:3000/sede`

##### Endpoint

```bash
POST http://localhost:3000/sede
```

#### Ejemplo de solicitud

```json
{
  "sede": "Sede Sur",
  "direccion": "Carrera 45 #12-34",
  "activo": true,
  "centro": 4
}
```

#### Respuesta

```json
{
  "message": "Sede creada exitosamente"
}
```

#### Actualizar sede

**Método:** `PUT`  
**URL:** `http://localhost:3000/sede/:idsede`

##### Endpoint

```bash
PUT http://localhost:3000/sede/1
```

#### Ejemplo de solicitud

```json
{
  "sede": "Sede Central",
  "direccion": "Avenida 10 #20-30",
  "activo": false,
  "centro": 6
}
```

#### Respuesta

```json
{
  "message": "Sede actualizada exitosamente"
}
```

#### Eliminar sede

**Método:** `DELETE`  
**URL:** `http://localhost:3000/sede/:idsede`

##### Endpoint

```bash
DELETE http://localhost:3000/sede/1
```

#### Respuesta

```json
{
  "message": "Sede eliminada exitosamente"
}
```
