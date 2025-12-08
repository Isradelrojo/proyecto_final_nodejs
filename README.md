# proyecto_final_nodejs


El proyecto final cumple con lo pedido sin incluir la carpeta de servicios.

Proximo paso agregar como extra la opcion de modificar un producto y que el usuario solo pueda guardar un producto nuevo, modificarlo o borrarlo solamente si es administrador.

Para poner el marcha el servidor se entra solamente con npm start.

las rutas son lñas siguientes: 

/api/productos          Para traer todos los productos en la base de datos.

/api/productos/:id      Para traer solo el producto con el id correspondiente.

/api/createProduct      Para cargar un producto nuevo, en el body debe llevar en 
                        json {"name": "xxxx",       "price": "xxxx", "categories": "xxxxx"} y se debe enviar la peticion con el metodo POST

/api/auth/login         Para cargar los datos del usuario y obtener el token, el mismo sera solicitado en las
                        rutas de crear producto, en la de modificar producto cuando se implemente y en la de borrar producto, para que solamente los administradores puedan realizarlas.

/api/products/delete    Para borrar un producto por su ID, se debe enviar la ruta con el metodo DELETE.


