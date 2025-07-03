---
title: Gestión y Estructura de Tipo Sitio
description: Documentación de la entidad Tipositio y sus endpoints en la base de datos
---

## Estructura de la Entidad Tipositio

La entidad **Tipositio** representa los diferentes tipos de sitios registrados en el sistema (por ejemplo, laboratorio, aula, oficina). A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo               | Tipo      | Restricciones            | Descripción                                                      |
|---------------------|-----------|--------------------------|------------------------------------------------------------------|
| idtipositio         | integer   | PK                       | Identificador único del tipo de sitio                            |
| tipo                | text      |                          | Nombre o descripción del tipo de sitio                           |
| activo              | boolean   | opcional, default: true  | Indica si el tipo está activo                                    |
| fechacreacion       | timestamp | opcional, default: now() | Fecha de creación del registro                                   |
| fechaactualización  | timestamp | opcional                 | Fecha de la última actualización del registro                    |

### Relaciones

| Relación | Tipo      | Descripción                                                                 |
|----------|-----------|-----------------------------------------------------------------------------|
| sitios   | OneToMany | Relación con la entidad **Sitio**. Un tipo puede estar asociado a varios sitios. |

### Ejemplo de objeto Tipositio

```json
{
  "idtipositio": 1,
  "tipo": "Laboratorio",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "sitios": [
    /* ... */
  ]
}
```

### Notas

- El campo `sitios` contiene un arreglo de sitios asociados a este tipo.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Tipo Sitio

#### Listar tipos de sitio

**Método:** `GET`  
**URL:** `http://localhost:3000/tipositio`

##### Endpoint

```bash
GET http://localhost:3000/tipositio
```

#### Ejemplo de respuesta

```json
[
  {
    "idtipositio": 1,
    "tipo": "Laboratorio",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear tipo de sitio

**Método:** `POST`  
**URL:** `http://localhost:3000/tipositio`

##### Endpoint

```bash
POST http://localhost:3000/tipositio
```

#### Ejemplo de solicitud

```json
{
  "tipo": "Aula",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Tipo de sitio creado exitosamente"
}
```

#### Actualizar tipo de sitio

**Método:** `PUT`  
**URL:** `http://localhost:3000/tipositio/:idtipositio`

##### Endpoint

```bash
PUT http://localhost:3000/tipositio/1
```

#### Ejemplo de solicitud

```json
{
  "tipo": "Oficina",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Tipo de sitio actualizado exitosamente"
}
```

#### Eliminar tipo de sitio

**Método:** `DELETE`  
**URL:** `http://localhost:3000/tipositio/:idtipositio`

##### Endpoint

```bash
DELETE http://localhost:3000/tipositio/1
```

#### Respuesta

```json
{
  "message": "Tipo de sitio eliminado exitosamente"
}
```
