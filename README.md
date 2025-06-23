# tienda_borojo
# Descripción del Proyecto
Este proyecto simula una tienda especializada en productos derivados del borojó (fruta tropical del Pacífico colombiano). Utiliza MongoDB como base de datos NoSQL para gestionar productos, clientes, ventas, proveedores e inventario.
## Escenario
La tienda "La Tienda del Borojó" comercializa productos como:

-Frutas frescas y deshidratadas
-Bebidas (jugos, concentrados, cerveza artesanal)
-Alimentos procesados (mermeladas, galletas, compotas)
-Productos cosméticos (aceites)
-Postres (helados)

## El sistema maneja 5 colecciones principales:

productos: Catálogo de productos con precios, stock y categorías
clientes: Información de clientes con historial de compras
ventas: Registro de transacciones realizadas
proveedores: Datos de proveedores por categoría
inventario: Control de lotes y entradas de productos


# Instrucciones para Ejecutar
#Instalación y Configuración
1. Clonar el repositorio
bashgit clone [https://github.com/karina2025/tienda_borojo]

cd tienda-borojo

3. Iniciar MongoDB
   
bash# Si MongoDB está instalado como servicio
sudo systemctl start mongod

# O ejecutar directamente
mongod --dbpath /ruta/a/tu/db

3. Conectar a MongoDB Shell
bashmongosh

5. Crear y usar la base de datos
javascriptuse tienda_borojo
## Prerequisitos

-MongoDB instalado en el sistema
-MongoDB Shell (mongosh) disponible
-Git para clonar el repositorio

# consultas 
## Inserción
![imagen](/consulta%201.jpeg)
![imagen](/consulta%202.jpeg)

## lectura
![imagen](/consulta%203.jpeg)
![imagen](/consulta%204.jpeg)

## actualizacion
![imagen](/consulta%205.jpeg)

## eliminacion
![imagen](/consulta%206.jpeg)

## Consultas con Expresiones Regulares
![imagen](/consulta%207.jpeg)
![imagen](/consulta%208.jpeg)

## Operadores en consultas sobre arrays
![imagen](/consulta%209.jpeg)
![imagen](/consulta%2010.jpeg)
![imagen](/consulta%2011-1.jpeg)
![imagen](/consulta%2011-2.jpeg)

## Aggregation Framework con Pipelines
![imagen](/consulta%2012.jpeg)
![imagen](/consulta%2013.jpeg)
![imagen](/comsulta%2014.jpeg)


## realizado por :
karina sanabria casas
