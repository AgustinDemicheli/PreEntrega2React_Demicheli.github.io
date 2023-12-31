import photo1 from './assets/image1.png';
import photo2 from './assets/image2.webp';
import photo3 from './assets/image3.jpeg';

export const PRODUCTS = [
  {
    id: 1,
    productName: "Branding",
    price: 299.9,
    productImage: photo1,
    description:
      "Eleva la identidad de tu marca con nuestro servicio de branding. Creamos diseños distintivos y estrategias efectivas para destacarte en el mercado.",
    categoryId:2
  },
  {
    id: 2,
    productName: "Landing page",
    price: 149.9,
    productImage: photo2,
    description:
      "Impulsa tus conversiones con una landing page impactante. Diseñamos páginas optimizadas para atraer a tu audiencia y generar resultados.",
    categoryId:2
  },
  {
    id: 3,
    productName: "Social Media Managment",
    price: 199.9,
    productImage: photo3,
    description:
      "Deja que cuidemos de tu presencia en redes sociales. Gestionamos tu contenido, interactuamos con tu audiencia y potenciamos tu presencia digital.",
    categoryId:1,
  },
  {
    id: 4,
    productName: "Instagram Reel",
    price: 19.9,
    productImage: photo3,
    description:
      "Editamos tu video a gusto del cliente pero siempre con nuestro toque de spicy.El valor es por cada reel o video editado para atraer público orgánico y generar más visitas a tus redes",
    categoryId:1,  
  },
];