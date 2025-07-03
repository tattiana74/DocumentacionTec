---
title: Gestión y Estructura de Rol
description: Documentación de la entidad Rol y sus endpoints en la base de datos
---

## Estructura de la Entidad Rol

La entidad **Rol** representa los diferentes roles que pueden tener las personas dentro del sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones            | Descripción                                   |
| ------------------ | --------- | ------------------------ | --------------------------------------------- |
| idrol              | integer   | PK                       | Identificador único del rol                   |
| nombrerol          | text      | -                        | Nombre del rol                                |
| activo             | boolean   | opcional, default: true  | Indica si el rol está activo                  |
| fechacreacion      | timestamp | opcional, default: now() | Fecha de creación del registro                |
| fechaactualización | timestamp | opcional                 | Fecha de la última actualización del registro |

### Relaciones

| Relación    | Tipo      | Descripción                                                               |
| ----------- | --------- | ------------------------------------------------------------------------- |
| personas    | OneToMany | Relación con **Persona**. Un rol puede estar asignado a muchas personas   |
| rolpermisos | OneToMany | Relación con **Rolpermiso**. Un rol puede tener varios permisos asociados |

### Ejemplo de objeto Rol

```json
{
  "idrol": 1,
  "nombrerol": "Administrador",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "personas": [
    /* ... */
  ],
  "rolpermisos": [
    /* ... */
  ]
}
```

### Notas

- El campo `personas` contiene un arreglo de personas que tienen este rol.
- El campo `rolpermisos` contiene un arreglo de permisos asociados al rol.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Rol

#### Listar roles

**Método:** `GET`  
**URL:** `http://localhost:3000/rol`

##### Endpoint

```bash
GET http://localhost:3000/rol
```

#### Ejemplo de respuesta

```json
[
  {
    "idrol": 1,
    "nombrerol": "Administrador",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear rol

**Método:** `POST`  
**URL:** `http://localhost:3000/rol`

##### Endpoint

```bash
POST http://localhost:3000/rol
```

#### Ejemplo de solicitud

```json
{
  "nombrerol": "Instructor",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Rol creado exitosamente"
}
```

#### Actualizar rol

**Método:** `PUT`  
**URL:** `http://localhost:3000/rol/:idrol`

##### Endpoint

```bash
PUT http://localhost:3000/rol/1
```

#### Ejemplo de solicitud

```json
{
  "nombrerol": "Líder",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Rol actualizado exitosamente"
}
```

#### Eliminar rol

**Método:** `DELETE`  
**URL:** `http://localhost:3000/rol/:idrol`

##### Endpoint

```bash
DELETE http://localhost:3000/rol/1
```

#### Respuesta

```json
{
  "message": "Rol eliminado exitosamente"
}
```
