---
title: Gestión y Estructura de Detalles
description: Documentación de la entidad Detalles y sus endpoints en la base de datos
---

## Estructura de la Entidad Detalles

La entidad **Detalles** representa los registros detallados de solicitudes o movimientos de materiales en el sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones            | Descripción                                                        |
|--------------------|-----------|--------------------------|--------------------------------------------------------------------|
| iddetalle          | integer   | PK                       | Identificador único del detalle                                    |
| cantidasolicitada  | integer   |                          | Cantidad solicitada de material                                    |
| descripcion        | text      | opcional                 | Descripción adicional del detalle                                  |
| activo             | boolean   | opcional, default: true  | Indica si el registro está activo                                  |
| fechacreacion      | timestamp | opcional, default: now() | Fecha de creación del registro                                     |
| fechaactualización | timestamp | opcional                 | Fecha de la última actualización del registro                      |

### Relaciones

| Relación           | Tipo       | Descripción                                                                     |
|--------------------|------------|---------------------------------------------------------------------------------|
| material           | ManyToOne  | Relación con la entidad **Material**. Asociado a un material específico.        |
| personaaprueba     | ManyToOne  | Relación con la entidad **Persona**. Persona que aprueba el detalle.            |
| personaencargada   | ManyToOne  | Relación con la entidad **Persona**. Persona encargada del detalle.             |
| personasolicita    | ManyToOne  | Relación con la entidad **Persona**. Persona que solicita el material.          |

### Ejemplo de objeto Detalles

```json
{
  "iddetalle": 1,
  "cantidasolicitada": 10,
  "descripcion": "Solicitud de materiales para laboratorio",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "material": 2,
  "personaaprueba": 3,
  "personaencargada": 4,
  "personasolicita": 5
}
```

### Notas

- Los campos de persona pueden hacer referencia a diferentes roles según el flujo de aprobación y entrega.
- El campo `material` indica el material solicitado o gestionado.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Detalles

#### Listar detalles

**Método:** `GET`  
**URL:** `http://localhost:3000/detalles`

##### Endpoint

```bash
GET http://localhost:3000/detalles
```

#### Ejemplo de respuesta

```json
[
  {
    "iddetalle": 1,
    "cantidasolicitada": 10,
    "descripcion": "Solicitud de materiales para laboratorio",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear detalle

**Método:** `POST`  
**URL:** `http://localhost:3000/detalles`

##### Endpoint

```bash
POST http://localhost:3000/detalles
```

#### Ejemplo de solicitud

```json
{
  "cantidasolicitada": 5,
  "descripcion": "Entrega de herramientas",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Detalle creado exitosamente"
}
```

#### Actualizar detalle

**Método:** `PUT`  
**URL:** `http://localhost:3000/detalles/:iddetalle`

##### Endpoint

```bash
PUT http://localhost:3000/detalles/1
```

#### Ejemplo de solicitud

```json
{
  "cantidasolicitada": 8,
  "descripcion": "Actualización de cantidad",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Detalle actualizado exitosamente"
}
```

#### Eliminar detalle

**Método:** `DELETE`  
**URL:** `http://localhost:3000/detalles/:iddetalle`

##### Endpoint

```bash
DELETE http://localhost:3000/detalles/1
```

#### Respuesta

```json
{
  "message": "Detalle eliminado exitosamente"
}
```
