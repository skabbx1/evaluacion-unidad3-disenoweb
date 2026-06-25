# Examen Unidad 3 - Bloc de Notas de Juegos

## 1. ¿De qué se trata?
Hice una página simple que sirve como un bloc de notas para guardar mis juegos favoritos. Tiene un formulario para escribir los datos y abajo va mostrando las notas en unas tarjetas.

## 2. Cosas que pide el examen y que le puse:
- Separación de archivos: Tengo el HTML solito (index.html), el CSS en su carpeta (css/styles.css) y el JS en su carpeta (js/app.js).
- Formulario con 4 campos: Le puse Nombre del juego, Correo, Contraseña y el Puntaje.
- Las 5 reglas que pide la hoja:
  1. Que el nombre del juego no quede vacío.
  2. Que el correo tenga el @ y el punto.
  3. Que la contraseña sea de mínimo 5 letras.
  4. Que la nota sea un número entre 1 y 10.
  5. Regla extra: Que el nombre del juego no tenga más de 20 letras.
- Bordes de colores: Si te equivocas en un cuadro se pone el borde rojo y te dice el error abajo. Si está bien, se pone verde. Uso preventDefault para que la página no se recargue.
- Eventos y DOM: Usé el evento submit en el formulario, el evento input para que valide mientras escribes, y el evento click en el botón de borrar. Las tarjetas las creo desde JS usando createElement, las meto con append y las borro de la pantalla con .remove().
- LocalStorage: Las notas se quedan guardadas en la memoria del navegador. Si cierras la página o la recargas, las notas siguen ahí.

## 3. Cómo probarlo
1. Abres el archivo index.html en el navegador.
2. Escribes los datos en los cuadritos y le das al botón de guardar.