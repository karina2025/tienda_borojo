// 1. Eliminar cliente por correo

db.clientes.deleteOne({ email: "juan@email.com" });

// 2. Eliminar productos con stock < 5

db.productos.deleteMany({ stock: { $lt: 5 } });