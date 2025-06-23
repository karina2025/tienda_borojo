// Ejercicios de inserción

// 1. Insertar nuevo producto "Chocolatina de borojó"
db.productos.insertOne({
  "_id": 11,
  "nombre": "Chocolatina de borojó", 
  "categoria": "Snack",
  "precio": 4000,
  "stock": 35,
  "tags": ["dulce", "energía"]
});

// 2. Insertar nuevo cliente "Mario Mendoza"
db.clientes.insertOne({
  "_id": 11,
  "nombre": "Mario Mendoza",
  "email": "mario@email.com", 
  "compras": [],
  "preferencias": ["energético", "natural"]
});

// Verificar inserción
print("=== VERIFICACIÓN DE INSERCIÓN ===");
print("Nuevo producto:");
db.productos.find({"_id": 11}).pretty();
print("Nuevo cliente:");
db.clientes.find({"_id": 11}).pretty();