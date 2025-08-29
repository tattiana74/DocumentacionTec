// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "SABS",
      logo: { src: "./src/assets/sabs.png" },
      social: {
        github: "https://github.com/Jeralber/SabsFront.git",
        
      },
      sidebar: [
        // 📌 SECCIÓN: NAVEGACIÓN PRINCIPAL
        { label: "NAVEGACIÓN PRINCIPAL", slug: "" },

        {
          label: "Acerca del Proyecto",
          items: [
            {
              label: "Información General",
              items: [
                { label: "Construcción", slug: "introduccion/introduccion" },
                { label: "Propósito", slug: "introduccion/proposito" },
                { label: "Alcance", slug: "introduccion/alcance" },
                { label: "Objetivos", slug: "introduccion/objetivo" },
                {
                  label: "Repositorios",
                  items: [
                    { label: "Frontend", link: "https://github.com/Jeralber/SabsFront" },
                    { label: "Backend", link: "https://github.com/MaikelFabian/Sabs_Proyecto.git" },
                  ],
                },
              ],
            },
          ],
        },

        // 📌 SECCIÓN: CONTROL DE ACCESO
        { label: "CONTROL DE ACCESO", slug: "" },

        {
          label: "Control de Acceso y Seguridad",
          items: [
            {
              label: "Control de acceso",
              items: [
                {
                  label: "Inicio de Sesión y Autenticación",
                  slug: "autenticación/autenticación_de_usuario",
                },
                {
                  label: "Gestión de Roles y Permisos",
                  slug: "autenticación/administración_de_usuarios_y_roles",
                },
                {
                  label: "Interfaz dinámica por tipo de usuario",
                  slug: "autenticación/vistas_adaptadas_por_rol",
                },
                {
                  label: "Validaciones en Tiempo Real",
                  slug: "autenticación/validación_de_datos_en_tiempo_real",
                },
              ],
            },
          ],
        },



        // 📌 SECCIÓN: SERVICIOS REST
        { label: "SERVICIOS REST", slug: "" },

        {
          label: "Servicios REST",
          items: [
            {
              label: "Endpoints y Recursos",
              items: [
                {
                  label: "Usuarios y Roles",
                  items: [
                    { label: "Personas", slug: "gadministracion/personas" },

                    { label: "Roles", slug: "gadministracion/roles" },
                    { label: "Permisos", slug: "gadministracion/permisos" },
                    { label: "RolPermiso", slug: "gadministracion/rolpermiso" },
                  ],
                },
                {
                  label: "Estructura Organizacional",
                  items: [
                    { label: "Áreas", slug: "gadministracion/areas" },
                    { label: "Centros", slug: "gadministracion/centros" },
                    {
                      label: "Área-Centro",
                      slug: "gadministracion/areacentro",
                    },
                    { label: "Sedes", slug: "gadministracion/sedes" },
                    { label: "Municipios", slug: "gadministracion/municipios" },
                  ],
                },
                {
                  label: "Inventario y Logística",
                  items: [
                    { label: "Materiales", slug: "gadministracion/materiales" },

                    {
                      label: "Categoría Material",
                      slug: "gadministracion/categoriamaterial",
                    },
                    {
                      label: "Tipo Material",
                      slug: "gadministracion/tipomaterial",
                    },
                    {
                      label: "Tipo Movimiento",
                      slug: "gadministracion/tipomovimiento",
                    },
                    {
                      label: "Tipo Sitio",
                      slug: "gadministracion/tipositio",
                    },
                    {
                      label: "Unidad de Medida",
                      slug: "gadministracion/unidadmedida",
                    },
                    { label: "Sitios", slug: "gadministracion/sitios" },
                    {
                      label: "Movimientos",
                      slug: "gadministracion/movimientos",
                    },
                  ],
                },
                {
                  label: "Registros Académicos",
                  items: [
                    { label: "Fichas", slug: "gadministracion/fichas" },
                    { label: "Titulados", slug: "gadministracion/titulados" },
                  ],
                },
                {
                  label: "Detalles",
                  items: [
                    { label: "Detalles", slug: "gadministracion/detalles" },
                  ],
                },
              ],
            },
          ],
        },

        // 📌 SECCIÓN: REPORTES Y ESTADÍSTICAS
        { label: "REPORTES Y ESTADÍSTICAS", slug: "" },

        {
          label: "Estadísticas y Reportes",
          items: [
            {
              label: "Generación de informes de desempeño de inventario",
              slug: "reportes/generación_de_informes_de_desempeño_de_inventario",
            },
            {
              label: "Consulta de estadísticas específicas",
              slug: "reportes/consulta_de_estadísticas_específicas",
            },
          ],
        },
      ],
    }),
  ],
});
