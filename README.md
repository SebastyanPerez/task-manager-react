# 📝 Task Manager - React

Un gestor de tareas moderno y funcional construido con **React + Vite**. Este proyecto fue desarrollado como parte de mi proceso de aprendizaje de React, enfocándome en buenas prácticas de la industria, manejo de estado inmutable y persistencia de datos.

## 🚀 Funcionalidades

- **CRUD Completo:** Crear, Leer, Actualizar y Eliminar tareas.
- **Persistencia:** Las tareas se guardan automáticamente en el `localStorage` del navegador.
- **Filtrado Inteligente:** Visualiza todas las tareas, solo las pendientes o las completadas.
- **Estadísticas en Tiempo Real:** Gráficos dinámicos con Chart.js para visualizar el progreso.
- **Interfaz Moderna:** Diseño oscuro (Dark Mode) con estilos CSS puros y variables.
- **UX Optimizada:** 
  - Edición con doble clic.
  - Guardado automático al perder el foco (onBlur) o presionar Enter.
  - Validaciones para evitar tareas vacías.

## 🛠️ Tecnologías Usadas

- **React 18** (Hooks: `useState`, `useEffect`, Custom Hooks)
- **Chart.js & React-Chartjs-2** (Visualización de datos)
- **Vite** (Build Tool ultra rápido)
- **JavaScript (ES6+)**
- **CSS3** (Variables y Flexbox)

## 📖 Aprendizajes Clave

Durante el desarrollo de este proyecto, apliqué los siguientes conceptos:
1. **Estado Derivado:** Optimizando el filtrado de tareas sin duplicar el estado.
2. **Inmutabilidad:** Uso correcto de `.map()`, `.filter()` y el operador spread `[...]` para actualizar estados.
3. **Elevación de Estado (Lifting State Up):** Comunicación efectiva entre componentes padres e hijos.
4. **Custom Hooks:** Creación de un hook reutilizable para manejar LocalStorage.
5. **Conventional Commits:** Uso de estándares para mensajes de Git.

## 💻 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SebastyanPerez/task-manager-react.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---
⌨️ con ❤️ por [Sebastian Perez/Akise]
