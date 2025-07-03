---
title: Gestión y Estructura de Unidad de Medida
description: Documentación de la entidad Unidadmedida y sus endpoints en la base de datos
---

## Estructura de la Entidad Unidadmedida

La entidad **Unidadmedida** representa las diferentes unidades de medida utilizadas para los materiales en el sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones            | Descripción                                                      |
|--------------------|-----------|--------------------------|------------------------------------------------------------------|
| idunidadmedida     | integer   | PK                       | Identificador único de la unidad de medida                       |
| unidadmedida       | text      |                          | Nombre o descripción de la unidad de medida                      |
| activo             | boolean   | opcional, default: true  | Indica si la unidad está activa                                  |
| fechacreacion      | timestamp | opcional, default: now() | Fecha de creación del registro                                   |
| fechaactualización | timestamp | opcional                 | Fecha de la última actualización del registro                    |

### Relaciones

| Relación | Tipo      | Descripción                                                                 |
|----------|-----------|-----------------------------------------------------------------------------|
| materials | OneToMany | Relación con la entidad **Material**. Una unidad puede estar asociada a varios materiales. |

### Ejemplo de objeto Unidadmedida

```json
{
  "idunidadmedida": 1,
  "unidadmedida": "Kilogramo",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "materials": [ /* ... */ ]
}
```

### Notas
- El campo `materials` contiene un arreglo de materiales asociados a esta unidad.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Unidad de Medida

#### Listar unidades de medida

**Método:** `GET`  
**URL:** `http://localhost:3000/unidadmedida`

##### Endpoint

```bash
GET http://localhost:3000/unidadmedida
```

#### Ejemplo de respuesta

```json
[
  {
    "idunidadmedida": 1,
    "unidadmedida": "Kilogramo",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear unidad de medida

**Método:** `POST`  
**URL:** `http://localhost:3000/unidadmedida`

##### Endpoint

```bash
POST http://localhost:3000/unidadmedida
```

#### Ejemplo de solicitud

```json
{
  "unidadmedida": "Litro",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Unidad de medida creada exitosamente"
}
```

#### Actualizar unidad de medida

**Método:** `PUT`  
**URL:** `http://localhost:3000/unidadmedida/:idunidadmedida`

##### Endpoint

```bash
PUT http://localhost:3000/unidadmedida/1
```

#### Ejemplo de solicitud

```json
{
  "unidadmedida": "Metro",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Unidad de medida actualizada exitosamente"
}
```

#### Eliminar unidad de medida

**Método:** `DELETE`  
**URL:** `http://localhost:3000/unidadmedida/:idunidadmedida`

##### Endpoint

```bash
DELETE http://localhost:3000/unidadmedida/1
```

#### Respuesta

```json
{
  "message": "Unidad de medida eliminada exitosamente"
}
```
