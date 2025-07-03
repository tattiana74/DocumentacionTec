---
title: Gestión y Estructura de RolPermiso
description: Documentación de la entidad Rolpermiso y sus endpoints en la base de datos
---

## Estructura de la Entidad Rolpermiso

La entidad **Rolpermiso** representa la relación entre roles y permisos en el sistema, permitiendo asignar permisos específicos a cada rol. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones            | Descripción                                    |
| ------------------ | --------- | ------------------------ | ---------------------------------------------- |
| idrolpermiso       | integer   | PK                       | Identificador único de la relación rol-permiso |
| rolid              | integer   | FK                       | Identificador del rol asociado                 |
| permisoid          | integer   | FK                       | Identificador del permiso asociado             |
| activo             | boolean   | opcional, default: true  | Indica si la relación está activa              |
| fechacreacion      | timestamp | opcional, default: now() | Fecha de creación del registro                 |
| fechaactualización | timestamp | opcional                 | Fecha de la última actualización del registro  |

### Relaciones

| Relación | Tipo      | Descripción              |
| -------- | --------- | ------------------------ |
| permiso  | ManyToOne | Relación con **Permiso** |
| rol      | ManyToOne | Relación con **Rol**     |

### Ejemplo de objeto Rolpermiso

```json
{
  "idrolpermiso": 1,
  "rolid": 2,
  "permisoid": 3,
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "permiso": 3,
  "rol": 2
}
```

### Notas

- El campo `permiso` indica el permiso asociado a la relación.
- El campo `rol` indica el rol asociado a la relación.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para RolPermiso

#### Listar relaciones rol-permiso

**Método:** `GET`  
**URL:** `http://localhost:3000/rolpermiso`

##### Endpoint

```bash
GET http://localhost:3000/rolpermiso
```

#### Ejemplo de respuesta

```json
[
  {
    "idrolpermiso": 1,
    "rolid": 2,
    "permisoid": 3,
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear relación rol-permiso

**Método:** `POST`  
**URL:** `http://localhost:3000/rolpermiso`

##### Endpoint

```bash
POST http://localhost:3000/rolpermiso
```

#### Ejemplo de solicitud

```json
{
  "rolid": 2,
  "permisoid": 3,
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Relación rol-permiso creada exitosamente"
}
```

#### Actualizar relación rol-permiso

**Método:** `PUT`  
**URL:** `http://localhost:3000/rolpermiso/:idrolpermiso`

##### Endpoint

```bash
PUT http://localhost:3000/rolpermiso/1
```

#### Ejemplo de solicitud

```json
{
  "rolid": 2,
  "permisoid": 4,
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Relación rol-permiso actualizada exitosamente"
}
```

#### Eliminar relación rol-permiso

**Método:** `DELETE`  
**URL:** `http://localhost:3000/rolpermiso/:idrolpermiso`

##### Endpoint

```bash
DELETE http://localhost:3000/rolpermiso/1
```

#### Respuesta

```json
{
  "message": "Relación rol-permiso eliminada exitosamente"
}
```
