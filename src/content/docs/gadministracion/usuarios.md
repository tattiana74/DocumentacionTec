---
title: Gestión de Usuarios
description: usuarios
---
#### Listar usuarios
Este endpoint se utiliza para obtener la lista de todos los usuarios registrados en el sistema.
La respuesta será un arreglo de objetos JSON, donde cada objeto representa un usuario con sus datos.


**Método:** `GET`  
**URL:** `http://localhost:3000/usuarios`

##### Endpoint
```bash
GET http://localhost:3000/usuarios
```

#### Ejemplo De Respuesta
```json 
{
    "id_usuario": 1,
    "identificacion": "12389",
    "nombres": "daniela",
    "apellidos": "salado",
    "correo": "danielasalgado@email.com",
    "area": "Tecnología",
    "ficha": 1,
    "rol": "Pasante",
    "fk_id_bodega": 1,
    "fk_id_ficha": 1,
    "fk_id_area": 1
  },
  {
    "id_usuario": 2,
    "identificacion": "45678",
    "nombres": "Carlos",
    "apellidos": "Perez",
    "correo": "carlos@email.com",
    "area": "Administración",
    "ficha": 2,
    "rol": "Administrador",
    "fk_id_bodega": 2,
    "fk_id_ficha": 2,
    "fk_id_area": 2
  }
```

#### Crear usuario
Este endpoint permite crear un nuevo usuario.
Debes enviar los datos del usuario en el cuerpo de la solicitud en formato JSON. Si la operación es exitosa, recibirás un mensaje de confirmación.


**Método:** `POST`  
**URL:** `http://localhost:3000/usuarios`

##### Endpoint
```bash
POST http://localhost:3000/usuarios
```
#### Ejemplo de solicitud
```json 
{
  "identificacion": "12389",
  "nombres": "daniela",
  "apellidos": "salado",
  "correo": "danielasalgado@email.com",
  "area": "Tecnología",
  "ficha": 1,
  "rol": "Pasante",
  "fk_id_bodega": 1,
  "fk_id_ficha": 1,
  "fk_id_area": 1
}
```
#### Respuesta
```json 
{
 "message":"Usuario creado exitosamente"
}
```

#### Actualizar usuario
Este endpoint se utiliza para actualizar los datos de un usuario existente.
Debes reemplazar :id_usuario con el ID del usuario que deseas modificar.

Por ejemplo, para actualizar el usuario con ID 1:


**Método:** `PUT`  
**URL:** `http://localhost:3000/usuarios/:id_usuario`

##### Endpoint
```bash
PUT http://localhost:3000/usuarios/1
```
#### Ejemplo de solicitud
```json 
{
  "identificacion": "12",
  "nombres": "dani",
  "apellidos": "salado",
  "correo": "dani@email.com",
  "area": "Tecnología",
  "ficha": 1,
  "rol": "Pasante",
  "fk_id_bodega": 1,
  "fk_id_ficha": 1,
  "fk_id_area": 1
}
```
#### Respuesta
```json 
{
 "message":"Usuario Actualizado exitosamente"
}
```

#### Eliminar usuario
Este endpoint se utiliza para eliminar un usuario del sistema.
Debes reemplazar :id_usuario con el ID del usuario que deseas eliminar.

Por ejemplo, para eliminar el usuario con ID 1:


**Método:** `DELETE`  
**URL:** `http://localhost:3000/usuarios/:id_usuario`

##### Endpoint
```bash
DELETE http://localhost:3000/usuarios/1
```

#### Respuesta
```json 
{
 "message":"Usuario Eliminado exitosamente"
}
```