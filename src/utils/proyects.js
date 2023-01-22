import mockupSait from "../assets/mockups/sait-computer.png"
import mockupLacroix from "../assets/mockups/lacroix-computer.png"
import mockupHideki from "../assets/mockups/hideki-computer.png"

export const proyects = [
    {
        name: "SAIT Alvear Club",
        description: "Sistema Automatizado de Inscripción de torneos, con visualizacion de inscriptos y sembrado de zonas con algoritmo de serpenteo.",
        technologies: "React, CSS, Google App Scripts, Google Sheets",
        mockup: mockupSait,
        color: "255, 201, 10"
    },
    {
        name: "Hideki Task Manager",
        description: "Administrador de tareas multiusuario, con visualización grafica, logueo de usuario, acceso de invitado y operaciones CRUD.",
        technologies: "Vainilla JavaScript, Bootstrap, Chat JS, JSON",
        mockup: mockupHideki,
        color: "222, 45, 39"
    },
    {
        name: "Ecommerce Lacroix Pattisier",
        description: "E-commerce con visualización de productos, funcionalidades de añadido de carrito con control de stock y generacion de ordenes de compra.",
        technologies: "React, Tailwind CSS, Firebase, Context",
        mockup: mockupLacroix,
        color: "35, 43, 105"
    }
]