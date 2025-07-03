---
title: Gestión y Estructura de Tipo Movimiento
description: Documentación de la entidad Tipomovimiento y sus endpoints en la base de datos
---

## Estructura de la Entidad Tipomovimiento

La entidad **Tipomovimiento** representa los diferentes tipos de movimientos de materiales registrados en el sistema (por ejemplo, entrada, salida, traslado). A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo               | Tipo      | Restricciones            | Descripción                                                    |
|---------------------|-----------|--------------------------|----------------------------------------------------------------|
| idtipomovimiento    | integer   | PK                       | Identificador único del tipo de movimiento                     |
| tipomovimiento      | text      |                          | Nombre o descripción del tipo de movimiento                    |
| activo              | boolean   | opcional, default: true  | Indica si el tipo está activo                                  |
| fechacreacion       | timestamp | opcional, default: now() | Fecha de creación del registro                                 |
| fechaactualización  | timestamp | opcional                 | Fecha de la última actualización del registro                  |

### Relaciones

| Relación    | Tipo      | Descripción                                                                 |
|-------------|-----------|-----------------------------------------------------------------------------|
| movimientos | OneToMany | Relación con la entidad **Movimiento**. Un tipo puede estar asociado a varios movimientos. |

### Ejemplo de objeto Tipomovimiento

```json
{
  "idtipomovimiento": 1,
  "tipomovimiento": "Entrada",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "movimientos": [
    /* ... */
  ]
}
```

### Notas

- El campo `movimientos` contiene un arreglo de movimientos asociados a este tipo.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Tipo Movimiento

#### Listar tipos de movimiento

**Método:** `GET`  
**URL:** `http://localhost:3000/tipomovimiento`

##### Endpoint

```bash
GET http://localhost:3000/tipomovimiento
```

#### Ejemplo de respuesta

```json
[
  {
    "idtipomovimiento": 1,
    "tipomovimiento": "Entrada",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear tipo de movimiento

**Método:** `POST`  
**URL:** `http://localhost:3000/tipomovimiento`

##### Endpoint

```bash
POST http://localhost:3000/tipomovimiento
```

#### Ejemplo de solicitud

```json
{
  "tipomovimiento": "Salida",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Tipo de movimiento creado exitosamente"
}
```

#### Actualizar tipo de movimiento

**Método:** `PUT`  
**URL:** `http://localhost:3000/tipomovimiento/:idtipomovimiento`

##### Endpoint

```bash
PUT http://localhost:3000/tipomovimiento/1
```

#### Ejemplo de solicitud

```json
{
  "tipomovimiento": "Traslado",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Tipo de movimiento actualizado exitosamente"
}
```

#### Eliminar tipo de movimiento

**Método:** `DELETE`  
**URL:** `http://localhost:3000/tipomovimiento/:idtipomovimiento`

##### Endpoint

```bash
DELETE http://localhost:3000/tipomovimiento/1
```

#### Respuesta

```json
{
  "message": "Tipo de movimiento eliminado exitosamente"
}
```
