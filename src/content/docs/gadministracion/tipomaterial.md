---
title: Gestión y Estructura de Tipo Material
description: Documentación de la entidad Tipomaterial y sus endpoints en la base de datos
---

## Estructura de la Entidad Tipomaterial

La entidad **Tipomaterial** representa los diferentes tipos de materiales registrados en el sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones               | Descripción                                                 |
|--------------------|-----------|-----------------------------|-------------------------------------------------------------|
| idtipomaterial     | integer   | PK                          | Identificador único del tipo de material                    |
| tipo               | text      |                             | Nombre o descripción del tipo de material                   |
| activo             | boolean   | opcional, default: true     | Indica si el tipo está activo                               |
| fechacreacion      | timestamp | opcional, default: now()    | Fecha de creación del registro                              |
| fechaactualización | timestamp | opcional                    | Fecha de la última actualización del registro               |

### Relaciones

| Relación  | Tipo      | Descripción                                                                 |
|-----------|-----------|-----------------------------------------------------------------------------|
| materials | OneToMany | Relación con la entidad **Material**. Un tipo puede estar asociado a varios materiales. |

### Ejemplo de objeto Tipomaterial

```json
{
  "idtipomaterial": 1,
  "tipo": "Insumo",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "materials": [
    /* ... */
  ]
}
```

### Notas

- El campo `materials` contiene un arreglo de materiales asociados a este tipo.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Tipo Material

#### Listar tipos de material

**Método:** `GET`  
**URL:** `http://localhost:3000/tipomaterial`

##### Endpoint

```bash
GET http://localhost:3000/tipomaterial
```

#### Ejemplo de respuesta

```json
[
  {
    "idtipomaterial": 1,
    "tipo": "Insumo",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear tipo de material

**Método:** `POST`  
**URL:** `http://localhost:3000/tipomaterial`

##### Endpoint

```bash
POST http://localhost:3000/tipomaterial
```

#### Ejemplo de solicitud

```json
{
  "tipo": "Herramienta",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Tipo de material creado exitosamente"
}
```

#### Actualizar tipo de material

**Método:** `PUT`  
**URL:** `http://localhost:3000/tipomaterial/:idtipomaterial`

##### Endpoint

```bash
PUT http://localhost:3000/tipomaterial/1
```

#### Ejemplo de solicitud

```json
{
  "tipo": "Equipo",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Tipo de material actualizado exitosamente"
}
```

#### Eliminar tipo de material

**Método:** `DELETE`  
**URL:** `http://localhost:3000/tipomaterial/:idtipomaterial`

##### Endpoint

```bash
DELETE http://localhost:3000/tipomaterial/1
```

#### Respuesta

```json
{
  "message": "Tipo de material eliminado exitosamente"
}
```
