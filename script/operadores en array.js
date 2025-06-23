// 1. Clientes con "natural" en preferencias

db.clientes.find({ preferencias: "natural" });

// 2. Productos con tags "natural" y "orgánico"

db.productos.find({ tags: { $all: ["natural", "orgánico"] } });

// 3. Productos con más de un tag

db.productos.find({ tags: { $exists: true, $not: { $size: 1 } } });