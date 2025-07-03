---
title: Gestión y Estructura de Titulado
description: Documentación de la entidad Titulado y sus endpoints en la base de datos
---

## Estructura de la Entidad Titulado

La entidad **Titulado** representa a las personas que han finalizado un proceso académico o formativo en el sistema. A continuación se describen sus campos y relaciones:


### Campos de la entidad

| Campo               | Tipo      | Restricciones            | Descripción                                                       |
|---------------------|-----------|--------------------------|-------------------------------------------------------------------|
| idtitulado          | integer   | PK                       | Identificador único del titulado                                  |
| titulado            | text      |                          | Nombre o descripción del titulado                                 |
| activo              | boolean   | opcional, default: true  | Indica si el titulado está activo                                 |
| fechacreacion       | timestamp | opcional, default: now() | Fecha de creación del registro                                    |
| fechaactualización  | timestamp | opcional                 | Fecha de la última actualización del registro                     |

### Relaciones

| Relación | Tipo       | Descripción                                                       |
|----------|------------|-------------------------------------------------------------------|
| area     | ManyToOne  | Relación con la entidad **Area**. El titulado está asociado a un área. |
| ficha    | ManyToOne  | Relación con la entidad **Ficha**. El titulado está asociado a una ficha. |

### Ejemplo de objeto Titulado

```json
{
  "idtitulado": 1,
  "titulado": "Juan Pérez",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "area": 2,
  "ficha": 3
}
```

### Notas
- El campo `area` indica el área académica o funcional asociada al titulado.
- El campo `ficha` indica la ficha académica o de formación asociada.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Titulado

#### Listar titulados

**Método:** `GET`  
**URL:** `http://localhost:3000/titulado`

##### Endpoint

```bash
GET http://localhost:3000/titulado
```

#### Ejemplo de respuesta

```json
[
  {
    "idtitulado": 1,
    "titulado": "Juan Pérez",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear titulado

**Método:** `POST`  
**URL:** `http://localhost:3000/titulado`

##### Endpoint

```bash
POST http://localhost:3000/titulado
```

#### Ejemplo de solicitud

```json
{
  "titulado": "Ana García",
  "activo": true,
  "area": 2,
  "ficha": 3
}
```

#### Respuesta

```json
{
  "message": "Titulado creado exitosamente"
}
```

#### Actualizar titulado

**Método:** `PUT`  
**URL:** `http://localhost:3000/titulado/:idtitulado`

##### Endpoint

```bash
PUT http://localhost:3000/titulado/1
```

#### Ejemplo de solicitud

```json
{
  "titulado": "Carlos López",
  "activo": false,
  "area": 1,
  "ficha": 2
}
```

#### Respuesta

```json
{
  "message": "Titulado actualizado exitosamente"
}
```

#### Eliminar titulado

**Método:** `DELETE`  
**URL:** `http://localhost:3000/titulado/:idtitulado`

##### Endpoint

```bash
DELETE http://localhost:3000/titulado/1
```

#### Respuesta

```json
{
  "message": "Titulado eliminado exitosamente"
}
```
