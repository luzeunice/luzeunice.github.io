// Lista de proyectos
const proyectos = [
    { nombre: "Proyecto 1", descripcion: "Descripción del Proyecto 1" },
    { nombre: "Proyecto 2", descripcion: "Descripción del Proyecto 2" },
    { nombre: "Proyecto 3", descripcion: "Descripción del Proyecto 3" }
  ];
  
  // Lista de artículos
  const articulos = [
    { titulo: "Artículo 1", comentario: "Comentario sobre el artículo 1" },
    { titulo: "Artículo 2", comentario: "Comentario sobre el artículo 2" },
    { titulo: "Artículo 3", comentario: "Comentario sobre el artículo 3" }
  ];
  
  // Función para cargar proyectos
  function cargarProyectos() {
    const projectList = document.getElementById("project-list");
    proyectos.forEach((proyecto) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${proyecto.nombre}:</strong> ${proyecto.descripcion}`;
      projectList.appendChild(li);
    });
  }
  
  // Función para cargar artículos
  function cargarArticulos() {
    const articleList = document.getElementById("article-list");
    articulos.forEach((articulo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${articulo.titulo}:</strong> ${articulo.comentario}`;
      articleList.appendChild(li);
    });
  }
  
  // Ejecutar funciones al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    cargarProyectos();
    cargarArticulos();
  });
  