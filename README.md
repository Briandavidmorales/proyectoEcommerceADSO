# Ecommerce ADSO

Para correr localmente, se necesita la base de datos.

```
docker-compose up -d
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/ecommercedb
```

- Reconstruir los módulos de node y levantar Next

```
yarn install
yarn dev
```

## Llenar la base de datos con información de pruebas

Llamara:

```
http://localhost:3000/api/seed
```

```capturas proyecto ecommerce```
![image](https://github.com/Briandavidmorales/proyectoEcommerceADSO/assets/129317816/5799d4f2-f9a4-41dc-aaf7-6349ceaea954)

```Menú desplegado```
![image](https://github.com/Briandavidmorales/proyectoEcommerceADSO/assets/129317816/3b8a99b2-0bda-413a-8587-af0bf10e3ef3)

```Descripción de producto seleccionado ```
![image](https://github.com/Briandavidmorales/proyectoEcommerceADSO/assets/129317816/96a537e3-edbc-4a36-9533-54900309e85e)

```Carrito de compras ```
![image](https://github.com/Briandavidmorales/proyectoEcommerceADSO/assets/129317816/c92425f6-e2d1-411c-a977-7cd8546aa1eb)

```Formulario check out```
![image](https://github.com/Briandavidmorales/proyectoEcommerceADSO/assets/129317816/91f178a9-27e1-437a-bcf3-765d4f9d94d4)

```Página de login y registro ```
![image](https://github.com/Briandavidmorales/proyectoEcommerceADSO/assets/129317816/411a8e61-b347-465e-a8e1-8b69a8d9e12e)
![image](https://github.com/Briandavidmorales/proyectoEcommerceADSO/assets/129317816/394e92f7-f463-4f0e-8a5f-52218f3d1940)

