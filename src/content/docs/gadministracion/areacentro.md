---
title: Gestión y Estructura de Área-Centro
description: Documentación de la entidad Areacentro y sus endpoints en la base de datos
---

## Estructura de la Entidad Areacentro

La entidad **Areacentro** representa la relación entre áreas y centros en el sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones               | Descripción                                           |
|--------------------|-----------|-----------------------------|-------------------------------------------------------|
| idareacentro       | integer   | PK                          | Identificador único de la relación área-centro        |
| activo             | boolean   | opcional, default: true     | Indica si la relación está activa                     |
| fechacreacion      | timestamp | opcional, default: now()    | Fecha de creación del registro                        |
| fechaactualización | timestamp | opcional                    | Fecha de la última actualización del registro         |

### Relaciones

| Relación | Tipo      | Descripción                                        |
|----------|-----------|----------------------------------------------------|
| area     | ManyToOne | Relación con la entidad **Area**                  |
| centro   | ManyToOne | Relación con la entidad **Centro**                |

### Ejemplo de objeto Areacentro

```json
{
  "idareacentro": 1,
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "area": 2,
  "centro": 3
}
```

### Notas

- El campo `area` indica el área asociada a la relación.
- El campo `centro` indica el centro asociado a la relación.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Área-Centro

#### Listar relaciones área-centro

**Método:** `GET`  
**URL:** `http://localhost:3000/areacentro`

##### Endpoint

```bash
GET http://localhost:3000/areacentro
```

#### Ejemplo de respuesta

```json
[
  {
    "idareacentro": 1,
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear relación área-centro

**Método:** `POST`  
**URL:** `http://localhost:3000/areacentro`

##### Endpoint

```bash
POST http://localhost:3000/areacentro
```

#### Ejemplo de solicitud

```json
{
  "area": 1,
  "centro": 2,
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Relación área-centro creada exitosamente"
}
```

#### Actualizar relación área-centro

**Método:** `PUT`  
**URL:** `http://localhost:3000/areacentro/:idareacentro`

##### Endpoint

```bash
PUT http://localhost:3000/areacentro/1
```

#### Ejemplo de solicitud

```json
{
  "area": 2,
  "centro": 3,
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Relación área-centro actualizada exitosamente"
}
```

#### Eliminar relación área-centro

**Método:** `DELETE`  
**URL:** `http://localhost:3000/areacentro/:idareacentro`

##### Endpoint

```bash
DELETE http://localhost:3000/areacentro/1
```

#### Respuesta

```json
{
  "message": "Relación área-centro eliminada exitosamente"
}
```
