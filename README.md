
# Prueba Habi
Para visualizar la aplicacion basta con ejecutar: 

```
yarn dev
```
o
```
npm run dev
```

## Requerimientos 
Nosotros como Habi queremos una Landing (Home), que contenga un Hero como
background de un apartamento que ocupe el height de la pantalla, cuando le de click a
un botón que diga vender me lleve a una serie de pasos donde se irá recogiendo
información del inmueble de la siguiente manera:

- Primer paso: Nombre y apellidos en un solo campo - obligatorio
- Segundo paso: Correo solo deben permitirse correos validos - obligatorio
- Tercer paso: Dirección del apartamento - obligatorio
- Cuarto paso: Un campo que me permita elegir el numero de piso donde se
encuentra mi apartamento, el usuario máximo puede poner 50 - obligatorio
- Quinto paso: Unos checkbox que me digan si el apartamento tiene alguna de
las siguientes opciones: Zona BBQ, salón comunal, parque de juegos - opcional
- Sexto paso: Preguntarle al usuario si su inmueble tiene parqueadero, en caso
de tenerlo elegir si es cubierto o no - obligatorio
- Septimo paso: Preguntarle al usuario por el monto por el que vende el
apartamento, se espera que sea claro para el usuario que esta usando moneda
mientras mete los datos - obligatorio
- Octavo paso: El usuario podrá subir una única foto del inmueble - opcional
- Noveno paso: Preguntarle al usuario si el apartamento tiene o no ascensor -
obligatorio
- Último paso: presentar el resumen de los datos que puso el usuario en el paso
anterior.

Para los anteriores pasos se buscan los siguientes requerimientos:
- Durante el cambio de cada paso se vea la url del paso en el que esta, es decir si
estoy en el primer paso de nombres y apellido, la url contenga algo que
represente ese paso, por ejemplo: datos-cliente, cuando el usuario pase al paso
dos la url sea direccion-apartamento, etc.
- Se espera que el usuario pueda ver en que paso va y cuantos le quedan
- Durante la ejecución de cada paso se espera que los datos que va poniendo el
usuario se vea un resumen en un panel a la derecha de donde están los pasos, y
en caso de que sea mobile, se espera que halla un botón fijo en la parte de abajo
que diga resumen y al darle click se pueda ver el resumen en un modal. Para el
ultimo paso solo se debe mostrar el resumen sin el panel.
- Los pasos deben construirse a partir de un json que indique: el componente que
se va a renderizar, el path, el orden a mostrarse, la descripción del paso y el
nombre con el que se va a enviar al back. Esto quiere decir que si quisiéramos
agregar otro campo de texto como por ejemplo nombre del conjunto,
deberíamos poder rehusar el primer componente de texto de nombres y
apellidos.

- Si el usuario va en el paso 4 y recarga la página, debería poder volver al paso en
el que estaba con los datos ya guardados.
- Hay que recordar que debe ser una aplicación responsive.