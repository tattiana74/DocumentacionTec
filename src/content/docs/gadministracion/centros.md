---
title: Gestión y Estructura de Centro
description: Documentación de la entidad Centro y sus endpoints en la base de datos
---

## Estructura de la Entidad Centro

La entidad **Centro** representa los centros de formación o administrativos dentro del sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones               | Descripción                                      |
|--------------------|-----------|-----------------------------|--------------------------------------------------|
| idcentro           | integer   | PK                          | Identificador único del centro                   |
| centro             | text      | -                           | Nombre o descripción del centro                  |
| activo             | boolean   | opcional, default: true     | Indica si el centro está activo                  |
| fechacreacion      | timestamp | opcional, default: now()    | Fecha de creación del registro                   |
| fechaactualización | timestamp | opcional                    | Fecha de la última actualización del registro    |

### Relaciones

| Relación     | Tipo      | Descripción                                                                 |
|--------------|-----------|-----------------------------------------------------------------------------|
| areacentros  | OneToMany | Relación con la entidad **Areacentro**. Un centro puede tener varias áreas. |
| municipio    | ManyToOne | Relación con la entidad **Municipio**. Un centro pertenece a un municipio.  |
| sedes        | OneToMany | Relación con la entidad **Sede**. Un centro puede tener varias sedes.       |

### Ejemplo de objeto Centro

```json
{
  "idcentro": 1,
  "centro": "Centro de Tecnología",
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "areacentros": [
    /* ... */
  ],
  "municipio": 2,
  "sedes": [
    /* ... */
  ]
}
```

### Notas

- El campo `areacentros` contiene un arreglo de relaciones con áreas asociadas a este centro.
- El campo `municipio` hace referencia al municipio al que pertenece el centro.
- El campo `sedes` contiene un arreglo de sedes vinculadas al centro.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Centro

#### Listar centros

**Método:** `GET`  
**URL:** `http://localhost:3000/centro`

##### Endpoint

```bash
GET http://localhost:3000/centro
```

#### Ejemplo de respuesta

```json
[
  {
    "idcentro": 1,
    "centro": "Centro de Tecnología",
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear centro

**Método:** `POST`  
**URL:** `http://localhost:3000/centro`

##### Endpoint

```bash
POST http://localhost:3000/centro
```

#### Ejemplo de solicitud

```json
{
  "centro": "Centro de Innovación",
  "activo": true
}
```

#### Respuesta

```json
{
  "message": "Centro creado exitosamente"
}
```

#### Actualizar centro

**Método:** `PUT`  
**URL:** `http://localhost:3000/centro/:idcentro`

##### Endpoint

```bash
PUT http://localhost:3000/centro/1
```

#### Ejemplo de solicitud

```json
{
  "centro": "Centro de Ciencia de Datos",
  "activo": false
}
```

#### Respuesta

```json
{
  "message": "Centro actualizado exitosamente"
}
```

#### Eliminar centro

**Método:** `DELETE`  
**URL:** `http://localhost:3000/centro/:idcentro`

##### Endpoint

```bash
DELETE http://localhost:3000/centro/1
```

#### Respuesta

```json
{
  "message": "Centro eliminado exitosamente"
}
```
