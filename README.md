# Comparador de 3 números

Aplicación web simple hecha con HTML, CSS y JavaScript puro. El usuario ingresa tres números y la página muestra cuál es el mayor, el medio y el menor, los ordena y detecta si hay números repetidos.

## Características

- Recibe 3 números (enteros o decimales).
- Muestra el **mayor**, el **medio** y el **menor**.
- Presenta el orden de **mayor a menor** y de **menor a mayor**.
- Detecta si los **tres números son iguales**.
- Avisa cuando **solo dos** números son iguales.
- Valida que los tres campos estén completos.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanila

## Estructura del proyecto

```
comparador/
├── index.html   # Estructura de la página
├── style.css    # Estilos
└── script.js    # Lógica de comparación
```

## Cómo usarlo

1. Descarga o clona el proyecto.
2. Asegúrate de que los tres archivos estén en la misma carpeta.
3. Abre `index.html` en tu navegador.
4. Escribe los tres números y presiona **Comparar**.

No necesita instalación ni servidor.

## Ejemplos

| Entrada    | Resultado                                              |
|------------|--------------------------------------------------------|
| 3, 9, 5    | Mayor: 9, Medio: 5, Menor: 3                           |
| 10, 2, 7   | Mayor: 10, Medio: 7, Menor: 2                          |
| 5, 5, 8    | Aviso de dos números iguales, Mayor: 8, Medio: 5, Menor: 5 |
| 4, 4, 4    | "Los tres números son iguales."                        |
| 4, vacío, 6 | "Por favor ingresa los 3 números."                    |

## Cómo funciona

La función `comparar()` en `script.js`:

1. Lee los valores de los campos `n1`, `n2` y `n3` con `parseFloat`.
2. Verifica que los tres sean números válidos (`isNaN`).
3. Si los tres son iguales, muestra un mensaje y termina.
4. Ordena los valores con `sort((x, y) => x - y)`. Esta función de comparación es necesaria para que JavaScript ordene numéricamente y no como texto.
5. Toma la posición 0 como menor, la 1 como medio y la 2 como mayor.
6. Muestra el resultado dentro del `div` con `id="resultado"`.

## Notas

- Los `id` del HTML (`n1`, `n2`, `n3`, `resultado`) y el nombre de la función `comparar` deben coincidir exactamente entre `index.html` y `script.js`. Si no coinciden, aparece el error `Cannot read properties of null`.
- El `<script>` va justo antes de `</body>` para que el HTML ya exista cuando se ejecute el código.

## Posibles mejoras

- Permitir comparar más de 3 números.
- Enviar el formulario con la tecla Enter.
- Agregar un botón para limpiar los campos.
- Reemplazar `onclick` en el HTML por `addEventListener` en el JS.# logicaProgramacionUno
