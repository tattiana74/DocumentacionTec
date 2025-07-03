---
title: Gestión y Estructura de Material
description: Documentación de la entidad Material y sus endpoints en la base de datos
---

## Estructura de la Entidad Material

La entidad **Material** representa los materiales gestionados en el sistema, incluyendo insumos, herramientas y recursos. A continuación se describen sus campos y relaciones:

## Estructura de la Entidad Material

La entidad **Material** representa los elementos disponibles en el inventario del sistema. A continuación se describen sus campos y relaciones:

### Campos de la entidad

| Campo              | Tipo      | Restricciones               | Descripción                                             |
|--------------------|-----------|-----------------------------|---------------------------------------------------------|
| idmaterial         | integer   | PK                          | Identificador único del material                        |
| nombrematerial     | text      |                             | Nombre del material                                     |
| descripcion        | text      |                             | Descripción del material                                |
| stock              | integer   |                             | Cantidad disponible en inventario                       |
| caduca             | boolean   |                             | Indica si el material tiene fecha de vencimiento        |
| fechavencimiento   | timestamp | opcional                    | Fecha de vencimiento del material, si aplica            |
| activo             | boolean   | opcional, default: true     | Indica si el material está activo                       |
| fechacreacion      | timestamp | opcional, default: now()    | Fecha de creación del registro                          |
| fechaactualización | timestamp | opcional                    | Fecha de la última actualización del registro           |

### Relaciones

| Relación          | Tipo       | Descripción                                                                 |
|-------------------|------------|-----------------------------------------------------------------------------|
| detalles          | OneToMany  | Relación con la entidad **Detalles**. Un material puede tener múltiples movimientos o solicitudes. |
| categoriamaterial | ManyToOne  | Relación con la entidad **Categoriamaterial**. El material pertenece a una categoría. |
| tipomaterial      | ManyToOne  | Relación con la entidad **Tipomaterial**. El material pertenece a un tipo específico. |
| unidadmedida      | ManyToOne  | Relación con la entidad **Unidadmedida**. El material se mide en una unidad específica. |

### Ejemplo de objeto Material

```json
{
  "idmaterial": 1,
  "nombrematerial": "Resma de papel",
  "descripcion": "Papel tamaño carta, 500 hojas",
  "stock": 100,
  "caduca": false,
  "fechavencimiento": null,
  "activo": true,
  "fechacreacion": "2024-05-01T10:00:00.000Z",
  "fechaactualización": null,
  "detalles": [
    /* ... */
  ],
  "categoriamaterial": 2,
  "tipomaterial": 3,
  "unidadmedida": 1
}
```

### Notas

- El campo `detalles` contiene un arreglo de movimientos o solicitudes asociados al material.
- Los campos de fecha pueden ser nulos si no se ha registrado la información.

---

## Endpoints REST para Material

#### Listar materiales

**Método:** `GET`  
**URL:** `http://localhost:3000/material`

##### Endpoint

```bash
GET http://localhost:3000/material
```

#### Ejemplo de respuesta

```json
[
  {
    "idmaterial": 1,
    "nombrematerial": "Resma de papel",
    "descripcion": "Papel tamaño carta, 500 hojas",
    "stock": 100,
    "caduca": false,
    "fechavencimiento": null,
    "activo": true,
    "fechacreacion": "2024-05-01T10:00:00.000Z",
    "fechaactualización": null
  }
]
```

#### Crear material

**Método:** `POST`  
**URL:** `http://localhost:3000/material`

##### Endpoint

```bash
POST http://localhost:3000/material
```

#### Ejemplo de solicitud

```json
{
  "nombrematerial": "Tóner de impresora",
  "descripcion": "Cartucho compatible HP",
  "stock": 20,
  "caduca": true,
  "fechavencimiento": "2024-12-31T00:00:00.000Z",
  "activo": true,
  "categoriamaterial": 2,
  "tipomaterial": 1,
  "unidadmedida": 3
}
```

#### Respuesta

```json
{
  "message": "Material creado exitosamente"
}
```

#### Actualizar material

**Método:** `PUT`  
**URL:** `http://localhost:3000/material/:idmaterial`

##### Endpoint

```bash
PUT http://localhost:3000/material/1
```

#### Ejemplo de solicitud

```json
{
  "nombrematerial": "Resma de papel reciclado",
  "descripcion": "Papel reciclado, 500 hojas",
  "stock": 80,
  "caduca": false,
  "activo": true,
  "categoriamaterial": 2,
  "tipomaterial": 3,
  "unidadmedida": 1
}
```

#### Respuesta

```json
{
  "message": "Material actualizado exitosamente"
}
```

#### Eliminar material

**Método:** `DELETE`  
**URL:** `http://localhost:3000/material/:idmaterial`

##### Endpoint

```bash
DELETE http://localhost:3000/material/1
```

#### Respuesta

```json
{
  "message": "Material eliminado exitosamente"
}
```

---

## Materiales

Esta sección está dedicada a la gestión de materiales dentro del sistema. Aquí podrá encontrar información detallada sobre cada material, así como las operaciones disponibles para su gestión.

### Operaciones disponibles

- **Crear material:** Permite añadir un nuevo material al sistema.
- **Leer materiales:** Obtiene la lista de materiales existentes.
- **Actualizar material:** Modifica la información de un material existente.
- **Eliminar material:** Elimina un material del sistema.

### Consideraciones

- Asegúrese de tener los permisos necesarios para realizar operaciones sobre los materiales.
- Revise las relaciones de cada material con otras entidades del sistema antes de realizar eliminaciones.
