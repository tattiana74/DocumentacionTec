---
title: Gestión y Estructura de Categoría Material
description: Documentación de la entidad Categoriamaterial y sus endpoints en la base de datos
---

## Estructura de la Entidad Categoriamaterial

La entidad **Categoriamaterial** representa las categorías de materiales dentro del sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones               | Descripción                                                 |
|--------------------|-----------|-----------------------------|-------------------------------------------------------------|
| idcategoriamaterial| integer   | PK                          | Identificador único de la categoría de material             |
| códigomaterial     | text      |                             | Código de la categoría de material                          |
| categoria          | text      |                             | Nombre o descripción de la categoría                        |
| activo             | boolean   | opcional, default: true     | Indica si la categoría está activa                          |
| fechacreacion      | timestamp | opcional, default: now()    | Fecha de creación del registro                              |
| fechaactualización | timestamp | opcional                    | Fecha de la última actualización del registro               |

### Relaciones

| Relación  | Tipo      | Descripción                                                                 |
|-----------|-----------|-----------------------------------------------------------------------------|
| materials | OneToMany | Relación con la entidad **Material**. Una categoría puede tener varios materiales asociados. |

### Ejemplo de objeto Categoriamaterial

```json
{
  "idcategoriamaterial": 1,
  "códigomaterial": "CAT-001",
  "categoria": "Electrónica",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "materials": [ /* ... */ ]
}
```

### Notas

- El campo `materials` contiene un arreglo de materiales asociados a esta categoría.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Categoría Material

#### Listar categorías

**Método:** `GET`  
**URL:** `http://localhost:3000/categoriamaterial`

##### Endpoint

```bash
GET http://localhost:3000/categoriamaterial
```

#### Ejemplo de respuesta

```json
[
  {
    "idcategoriamaterial": 1,
    "códigomaterial": "CAT-001",
    "categoria": "Electrónica",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear categoría

**Método:** `POST`  
**URL:** `http://localhost:3000/categoriamaterial`

##### Endpoint

```bash
POST http://localhost:3000/categoriamaterial
```

#### Ejemplo de solicitud

```json
{
  "códigomaterial": "CAT-002",
  "categoria": "Papelería",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Categoría creada exitosamente"
}
```

#### Actualizar categoría

**Método:** `PUT`  
**URL:** `http://localhost:3000/categoriamaterial/:idcategoriamaterial`

##### Endpoint

```bash
PUT http://localhost:3000/categoriamaterial/1
```

#### Ejemplo de solicitud

```json
{
  "códigomaterial": "CAT-003",
  "categoria": "Herramientas",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Categoría actualizada exitosamente"
}
```

#### Eliminar categoría

**Método:** `DELETE`  
**URL:** `http://localhost:3000/categoriamaterial/:idcategoriamaterial`

##### Endpoint

```bash
DELETE http://localhost:3000/categoriamaterial/1
```

#### Respuesta

```json
{
  "message": "Categoría eliminada exitosamente"
}
```
