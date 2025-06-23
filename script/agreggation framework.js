// 1. Productos más vendidos

db.ventas.aggregate([
  { $unwind: "$productos" },
  { $group: {
      _id: "$productos.productoId",
      totalVendidas: { $sum: "$productos.cantidad" }
  } },
  { $sort: { totalVendidas: -1 } }
]);

// 2. Clientes agrupados por cantidad de compras

db.clientes.aggregate([
  { $project: {
      nombre: 1,
      totalCompras: { $size: "$compras" }
  } },
  { $group: {
      _id: "$totalCompras",
      clientes: { $push: "$nombre" }
  } }
]);

// 3. Total de ventas por mes

db.ventas.aggregate([
  { $group: {
      _id: { mes: { $month: "$fecha" } },
      totalVentas: { $sum: "$total" }
  } }
]);

// 4. Promedio de precios por categoría

db.productos.aggregate([
  { $group: {
      _id: "$categoria",
      promedioPrecio: { $avg: "$precio" }
  } }
]);

// 5. Top 3 productos con mayor stock

db.productos.aggregate([
  { $sort: { stock: -1 } },
  { $limit: 3 }
]);