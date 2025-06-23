// Ejercicios de actualización

// 1. Aumentar stock de "Borojó deshidratado"
db.productos.updateOne(
  { "nombre": "Borojó deshidratado" },
  { $inc: { "stock": 10 } }
);

// 2. Añadir tag a productos categoría "Bebida"
db.productos.updateMany(
  { "categoria": "Bebida" },
  { $push: { "tags": "bajo azúcar" } }
);