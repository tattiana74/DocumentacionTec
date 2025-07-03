---
title: Gestión y Estructura de Movimiento
description: Documentación de la entidad Movimiento y sus endpoints en la base de datos
---

## Estructura de la Entidad Movimiento

La entidad **Movimiento** representa los registros de movimientos de materiales en el sistema, como entradas, salidas o transferencias. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo               | Tipo      | Restricciones            | Descripción                                                      |
|---------------------|-----------|--------------------------|------------------------------------------------------------------|
| idmovimiento        | integer   | PK                       | Identificador único del movimiento                               |
| activo              | boolean   | opcional, default: true  | Indica si el movimiento está activo                              |
| fechacreacion       | timestamp | opcional, default: now() | Fecha de creación del registro                                   |
| fechaactualización  | timestamp | opcional                 | Fecha de la última actualización del registro                    |

### Relaciones

| Relación           | Tipo       | Descripción                                                                 |
|--------------------|------------|-----------------------------------------------------------------------------|
| movimientopersona  | ManyToOne  | Relación con la entidad **Persona**. Persona responsable del movimiento     |
| tipomovimiento     | ManyToOne  | Relación con la entidad **Tipomovimiento**. Tipo de movimiento (entrada, salida, etc.) |

### Ejemplo de objeto Movimiento

```json
{
  "idmovimiento": 1,
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "movimientopersona": 2,
  "tipomovimiento": 1
}
```

### Notas

- El campo `movimientopersona` indica la persona responsable del movimiento.
- El campo `tipomovimiento` indica el tipo de movimiento realizado.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Movimiento

#### Listar movimientos

**Método:** `GET`  
**URL:** `http://localhost:3000/movimiento`

##### Endpoint

```bash
GET http://localhost:3000/movimiento
```

#### Ejemplo de respuesta

```json
[
  {
    "idmovimiento": 1,
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear movimiento

**Método:** `POST`  
**URL:** `http://localhost:3000/movimiento`

##### Endpoint

```bash
POST http://localhost:3000/movimiento
```

#### Ejemplo de solicitud

```json
{
  "activo": true,
  "movimientopersona": 2,
  "tipomovimiento": 1
}
```

#### Respuesta

```json
{
  "message": "Movimiento creado exitosamente"
}
```

#### Actualizar movimiento

**Método:** `PUT`  
**URL:** `http://localhost:3000/movimiento/:idmovimiento`

##### Endpoint

```bash
PUT http://localhost:3000/movimiento/1
```

#### Ejemplo de solicitud

```json
{
  "activo": false,
  "movimientopersona": 3,
  "tipomovimiento": 2
}
```

#### Respuesta

```json
{
  "message": "Movimiento actualizado exitosamente"
}
```

#### Eliminar movimiento

**Método:** `DELETE`  
**URL:** `http://localhost:3000/movimiento/:idmovimiento`

##### Endpoint

```bash
DELETE http://localhost:3000/movimiento/1
```

#### Respuesta

```json
{
  "message": "Movimiento eliminado exitosamente"
}
```
