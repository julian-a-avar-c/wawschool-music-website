import { config as productsConfig } from "@/config/pages/products";
import { config as servicesConfig } from "@/config/pages/services";

export type Card = {
  icon: string | null;
  title: string;
  description: string;
};

export type Page = {
  name: string;
  href: string;
  title?: string;
};

type ContactInfo = {
  icon?: string;
  value?: string;
  href?: string;
};

type Config = {
  title: string;
  shortTitle: string;
  links: {
    [type in
      | "site"
      // | "linkedin"
      | "instagram"
      | "phone"
      | "email"
      | "location"]: ContactInfo;
  };
  nav: {
    services: typeof servicesConfig.services;
    products: {
      liquidLubricants: typeof productsConfig.products.liquidLubricants;
      greases: typeof productsConfig.products.greases;
    };
  };
  partners: { src: string; alt: string }[];
};

const config: Config = {
  title: "World Arts Warehouse School of Music",
  shortTitle: "WAW School of Music",
  links: {
    site: {
      icon: "fa6-solid:globe",
      href: "https://music.wawschool.net/",
    },
    // linkedin: {
    //   icon: "fa6-brands:linkedin",
    //   value: "pacsllc",
    //   href: "https://www.linkedin.com/company/pacsllc/",
    // },
    instagram: {
      icon: "fa6-brands:instagram",
      value: "pacs_llc",
      href: "https://www.instagram.com/pacs_llc/",
    },
    phone: {
      icon: "fa6-solid:phone",
      value: "+1 (773) 680-0682",
      href: "tel:+7736800682",
    },
    email: {
      icon: "fa6-solid:envelope",
      value: "carla.campopiano@wawschool.net",
      href: "mailto:carla.campopiano@wawschool.net",
    },
    location: {
      icon: "fa6-solid:map-location",
      value: "NJ",
    },
  },
  nav: {
    services: servicesConfig.services,
    products: {
      liquidLubricants: productsConfig.products.liquidLubricants,
      greases: productsConfig.products.greases,
    },
  },
  partners: [
    {
      src: "/images/partners/soulintec.jpg",
      alt: "Soulintec",
    },
    {
      src: "/images/partners/ist.png",
      alt: "IST",
    },
    {
      src: "/images/partners/precisioncontrol.png",
      alt: "Precision Control",
    },
    {
      src: "/images/partners/redsea.jpg",
      alt: "Red Sea",
    },
    {
      src: "/images/partners/home.png",
      alt: "Home",
    },
    {
      src: "/images/partners/fluidsolutions.png",
      alt: "Fluid Solutions",
    },
    {
      src: "/images/partners/petroplus.jpg",
      alt: "Petroplus",
    },
    {
      src: "/images/partners/kogaz.jpg",
      alt: "Kogaz",
    },
  ],
};

export { config };
