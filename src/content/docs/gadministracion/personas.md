---
title: Gestión y Estructura de Persona
description: Documentación de la entidad Persona y sus endpoints en la base de datos
---

## Estructura de la Entidad Persona

La entidad **Persona** representa a los usuarios o personas registradas en el sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones            | Descripción                                   |
| ------------------ | --------- | ------------------------ | --------------------------------------------- |
| idpersona          | integer   | PK                       | Identificador único de la persona             |
| identificacion     | text      | único                    | Número de identificación de la persona        |
| nombre             | text      | -                        | Nombre de la persona                          |
| apellido           | text      | -                        | Apellido de la persona                        |
| telefono           | text      | opcional                 | Teléfono de contacto                          |
| correo             | text      | único                    | Correo electrónico de la persona              |
| contrasena         | text      | -                        | Contraseña de acceso                          |
| edad               | integer   | -                        | Edad de la persona                            |
| activo             | boolean   | opcional, default: true  | Indica si la persona está activa              |
| fechacreacion      | timestamp | opcional, default: now() | Fecha de creación del registro                |
| fechaactualización | timestamp | opcional                 | Fecha de la última actualización del registro |

### Relaciones

| Relación    | Tipo      | Descripción                                                            |
| ----------- | --------- | ---------------------------------------------------------------------- |
| detalles    | OneToMany | Relación con **Detalles** como persona que aprueba                     |
| detalles2   | OneToMany | Relación con **Detalles** como persona encargada                       |
| detalles3   | OneToMany | Relación con **Detalles** como persona que solicita                    |
| movimientos | OneToMany | Relación con **Movimiento**. Una persona puede estar asociada a varios |
| ficha       | ManyToOne | Relación con **Ficha**. Una persona puede estar asociada a una ficha   |
| rol         | ManyToOne | Relación con **Rol**. Una persona tiene un rol asignado                |

### Ejemplo de objeto Persona

```json
{
  "idpersona": 1,
  "identificacion": "123456789",
  "nombre": "Juan",
  "apellido": "Pérez",
  "telefono": "3001234567",
  "correo": "juan.perez@email.com",
  "contrasena": "********",
  "edad": 25,
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "detalles": [
    /* ... */
  ],
  "detalles2": [
    /* ... */
  ],
  "detalles3": [
    /* ... */
  ],
  "movimientos": [
    /* ... */
  ],
  "ficha": 2,
  "rol": 1
}
```

### Notas

- Los campos de detalles pueden hacer referencia a diferentes roles de la persona en el flujo de solicitudes.
- El campo `ficha` indica la ficha académica o de formación asociada.
- El campo `rol` indica el rol asignado a la persona.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Persona

#### Listar personas

**Método:** `GET`  
**URL:** `http://localhost:3000/persona`



##### Endpoint

```bash
GET http://localhost:3000/persona
```



#### Ejemplo de respuesta

```json
[
  {
    "idpersona": 1,
    "identificacion": "123456789",
    "nombre": "Juan",
    "apellido": "Pérez",
    "telefono": "3001234567",
    "correo": "juan.perez@email.com",
    "edad": 25,
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear persona

**Método:** `POST`  
**URL:** `http://localhost:3000/persona`

##### Endpoint

```bash
POST http://localhost:3000/persona
```

#### Ejemplo de solicitud

```json
{
  "identificacion": "987654321",
  "nombre": "Ana",
  "apellido": "García",
  "telefono": "3019876543",
  "correo": "ana.garcia@email.com",
  "contrasena": "********",
  "edad": 28,
  "activo": true,
  "ficha": 3,
  "rol": 2
}
```

#### Respuesta

```json
{
  "message": "Persona creada exitosamente"
}
```

#### Actualizar persona

**Método:** `PUT`  
**URL:** `http://localhost:3000/persona/:idpersona`

##### Endpoint

```bash
PUT http://localhost:3000/persona/1
```

#### Ejemplo de solicitud

```json
{
  "nombre": "Ana María",
  "apellido": "García López",
  "telefono": "3019876543",
  "edad": 29,
  "activo": false,
  "ficha": 3,
  "rol": 2
}
```

#### Respuesta

```json
{
  "message": "Persona actualizada exitosamente"
}
```

#### Eliminar persona

**Método:** `DELETE`  
**URL:** `http://localhost:3000/persona/:idpersona`

##### Endpoint

```bash
DELETE http://localhost:3000/persona/1
```

#### Respuesta

```json
{
  "message": "Persona eliminada exitosamente"
}
```
