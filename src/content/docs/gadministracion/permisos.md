---
title: Gestión y Estructura de Permiso
description: Documentación de la entidad Permiso y sus endpoints en la base de datos
---

## Estructura de la Entidad Permiso

La entidad **Permiso** representa los permisos que pueden ser asignados a los roles dentro del sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones            | Descripción                                   |
| ------------------ | --------- | ------------------------ | --------------------------------------------- |
| idpermiso          | integer   | PK                       | Identificador único del permiso               |
| nombre             | text      | -                        | Nombre del permiso                            |
| descripcion        | text      | opcional                 | Descripción del permiso                       |
| codigo             | text      | único                    | Código único del permiso                      |
| activo             | boolean   | opcional, default: true  | Indica si el permiso está activo              |
| fechacreacion      | timestamp | opcional, default: now() | Fecha de creación del registro                |
| fechaactualización | timestamp | opcional                 | Fecha de la última actualización del registro |

### Relaciones

| Relación    | Tipo      | Descripción                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| rolpermisos | OneToMany | Relación con **Rolpermiso**. Un permiso puede estar asociado a varios roles |

### Ejemplo de objeto Permiso

```json
{
  "idpermiso": 1,
  "nombre": "Crear Usuario",
  "descripcion": "Permite crear nuevos usuarios en el sistema",
  "codigo": "USR_CREATE",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "rolpermisos": [
    /* ... */
  ]
}
```

### Notas

- El campo `rolpermisos` contiene un arreglo de roles asociados a este permiso.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Permiso

#### Listar permisos

**Método:** `GET`  
**URL:** `http://localhost:3000/permiso`

##### Endpoint

```bash
GET http://localhost:3000/permiso
```

#### Ejemplo de respuesta

```json
[
  {
    "idpermiso": 1,
    "nombre": "Crear Usuario",
    "descripcion": "Permite crear nuevos usuarios en el sistema",
    "codigo": "USR_CREATE",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear permiso

**Método:** `POST`  
**URL:** `http://localhost:3000/permiso`

##### Endpoint

```bash
POST http://localhost:3000/permiso
```

#### Ejemplo de solicitud

```json
{
  "nombre": "Editar Usuario",
  "descripcion": "Permite editar usuarios existentes",
  "codigo": "USR_EDIT",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Permiso creado exitosamente"
}
```

#### Actualizar permiso

**Método:** `PUT`  
**URL:** `http://localhost:3000/permiso/:idpermiso`

##### Endpoint

```bash
PUT http://localhost:3000/permiso/1
```

#### Ejemplo de solicitud

```json
{
  "nombre": "Eliminar Usuario",
  "descripcion": "Permite eliminar usuarios",
  "codigo": "USR_DELETE",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Permiso actualizado exitosamente"
}
```

#### Eliminar permiso

**Método:** `DELETE`  
**URL:** `http://localhost:3000/permiso/:idpermiso`

##### Endpoint

```bash
DELETE http://localhost:3000/permiso/1
```

#### Respuesta

```json
{
  "message": "Permiso eliminado exitosamente"
}
```
