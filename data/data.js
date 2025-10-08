import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import feature1 from "../public/Group 48.png";
import feature2 from "../public/Group 49.png";
import feature3 from "../public/Group 50.png";
import feature4 from "../public/Group 53.png";
import feature5 from "../public/Ellipse 14.png";
import feature6 from "../public/Group 51.png";
import arrow from "../public/arrow 6.png";
import card1 from "../public/Rectangle 23.png";
import card2 from "../public/Rectangle 24.png";
import card3 from "../public/Rectangle 25.png";
import card4 from "../public/Rectangle 26.png";
import project1 from "../public/Rectangle 15.jpg";
import project2 from "../public/Rectangle 16.jpg";
import project3 from "../public/Rectangle 17.jpg";
import project4 from "../public/Rectangle 18.jpg";
import project5 from "../public/Rectangle 19.jpg";
import project6 from "../public/Rectangle 20.jpg";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "News", path: "/news" },
];

export const gameCard = [
  { id: 1, image: card1, title: "40 Followers" },
  { id: 2, image: card2, title: "40 Followers" },
  { id: 3, image: card3, title: "40 Followers" },
  { id: 4, image: card4, title: "40 Followers" },
];

export const features = [
  { id: 1, image: feature1, title: "Mobile Game Development", arrow: arrow },
  { id: 2, image: feature2, title: "PC Game Development", arrow: arrow },
  { id: 3, image: feature3, title: "PS4 Game Development", arrow: arrow },
  { id: 4, image: feature4, title: "AR/VR Solutions", arrow: arrow },
  { id: 7 },
  { id: 5, image: feature5, title: "AR/VR Designs", arrow: arrow },
  { id: 6, image: feature6, title: "3d Modelling", arrow: arrow },
  { id: 8 },
];
export const featuresM = [
  { id: 1, image: feature1, title: "Mobile Game Development", arrow: arrow },
  { id: 2, image: feature2, title: "PC Game Development", arrow: arrow },
  { id: 3, image: feature3, title: "PS4 Game Development", arrow: arrow },
  { id: 4, image: feature4, title: "AR/VR Solutions", arrow: arrow },
  { id: 5, image: feature5, title: "AR/VR Designs", arrow: arrow },
  { id: 6, image: feature6, title: "3d Modelling", arrow: arrow },
];

export const projectsImage = [
  { id: 1, image: project1, class: " lg:col-span-2" },
  { id: 2, image: project2, class: " lg:col-span-2" },
  { id: 3, image: project3, class: " lg:col-span-1" },
  { id: 4, image: project5, class: " lg:col-span-1" },
  { id: 5, image: project4, class: " lg:col-span-2" },
  { id: 6, image: project6, class: " lg:col-span-2" },
];

export const footerLinks = [
  {
    title: "LOGO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "About us",
    links: ["Zeux", "Portfolio", "Careers", "Contact Us"],
  },
  {
    title: "Contact Us",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    phone: "+908 89097 890",
  },
];

export const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];
