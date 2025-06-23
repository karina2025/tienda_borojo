// 1. Productos que empiezan por "Boro"

db.productos.find({ nombre: { $regex: "^Boro", $options: "i" } });

// 2. Productos que contienen "con"

db.productos.find({ nombre: { $regex: "con", $options: "i" } });

// 3. Clientes con "z" en el nombre (sin importar mayús/minús)

db.clientes.find({ nombre: { $regex: "z", $options: "i" } });