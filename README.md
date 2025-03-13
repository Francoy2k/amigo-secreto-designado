# Amigo Secreto y chofer designado🎉🚗

![Carátula del juego](README.img/caratula.jpg)

Un juego interactivo en JavaScript que organiza un sorteo de "Amigo Secreto" con un giro único: asigna quién paga la cena, quién la recibe y quién será el conductor designado. Todo envuelto en una interfaz elegante y colorida diseñada con CSS.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![Estado](https://img.shields.io/badge/estado-completo-green)
🚀 Características principales

- **Interfaz intuitiva**: Formularios claros para agregar amigos y gestionar conductores.
- **Sorteo justo**: Algoritmo aleatorio que asegura imparcialidad en las asignaciones.
- **Diseño responsivo**: Optimizado para navegadores modernos, con un fondo temático que refleja la esencia del proyecto.
- **Accesibilidad**: Incluye atributos ARIA para mejorar la experiencia de usuarios con tecnologías de asistencia.
- **Sin dependencias**: Construido con tecnologías web nativas (HTML, CSS, JavaScript).

## Descripción
Este programa permite:
- Agregar amigos con su comida preferida a través de una interfaz web intuitiva.
- Registrar conductores designados previos para evitar repeticiones.
- Sortear aleatoriamente:
  - Un **pagador** que cubre la cena.
  - Un **beneficiario** que elige la comida.
  - Un **conductor designado** que no ha sido seleccionado antes (se reinicia cuando todos han sido conductores).

La interfaz usa una paleta de colores cálidos (Celadon, Olivino, Sinopia) y tipografías elegantes como Merriweather e Inter, con botones 3D que responden al interactuar. La imagen de fondo está diseñada para reflejar el espíritu festivo del "Amigo Secreto".

## Cómo usarlo
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Francy2k/amigo-secreto-designado.git
Abra el archivo index.html en un navegador moderno.
Usa la interfaz:
Ingresa el nombre de un amigo y tu comida preferida, luego haz clic en "Añadir".
(Opcional) Ingresa un conductor previo y haz clic en "Cargar".
Haz clic en "Sortear amigo" para ver el resultado en la pantalla.
Requisitos
Un navegador moderno (Chrome, Firefox, Edge, etc.).
Conexión a internet para cargar las fuentes de Google Fonts (Merriweather e Inter).
No se necesitan dependencias externas, ¡es puro HTML, CSS y JavaScript vanilla! 🍦

Ejemplos de uso
Agrega amigos:
"Ana - Pizza"
"Juan - Sushi"
"María - Tacos"
(Opcional) Registra un conductor anterior: "Juan".
Haz el sorteo. Resultado posible:

Ana pagará la cena de María: Tacos. Conductor designado: Ana.

![Capturadel juego](README.img/captura.png)

Características visuales
Paleta de colores : Celadon (#A6D49F), Olivino (#9CB380), Caput Mortuum (#522A27), Sinopia (#C73E1D).
Botones 3D : Efecto de sombra y movimiento al hacer clic.
Tipografías : Merriweather para un toque elegante e Inter para claridad.
Fondo festivo : Una imagen que combina regalos, cena y un conductor designado.
CSS

button {
    box-shadow: 0 5px 0 var(--color-tertiary), 0 6px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
}
button:active {
    transform: translateY(3px);
}
Instalación local
Descarga o clona el repositorio.
Asegúrese de incluir las carpetas activos y README.img con las imágenes.
Abra index.html directamente en su navegador.
¡Disfruta del juego! No requiere servidor ni instalación adicional.
Estado del proyecto
✅Proyecto completo y funcional. 

(Si planeas agregar más funciones, como guardar resultados en localStorage o más animaciones, cámbialo a :construction: En desarrollo ).

Créditos
Creado por Francy2k. Inspirado en reuniones divertidas con amigos. 🎁

Licencia
Licencia MIT: siéntete libre de usarlo, modificarlo y compartirlo.
