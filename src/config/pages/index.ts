import type { Page, Card } from "@/config/main";
import { config as mainConfig } from "@/config/main";
import type { Item } from "@/config/pages/products";

type Config = Page & {
  cards: Card[];
  services: {
    title: string;
    description: string;
    items: (Item & { icon: string })[];
  };
  content: {
    mission: { title: string; content: string };
    vision: { title: string; content: string };
  };
  products: {
    title: string;
    description: string;
    items: (Item & { icon: string })[];
  };
};

export const config: Config = {
  name: "index",
  href: "/",
  cards: [
    {
      icon: "fa6-solid:circle-check",
      title: "Solutions",
      description:
        "Our solutions are proven and designed based on the best practices in the fine art of engineering and are backed by our long experience in field work",
    },
    {
      icon: "fa6-solid:gears",
      title: "Systems",
      description:
        "We build our systems in a modular fashion and deliver them fully factory tested prior to shipping for rapid commissioning.",
    },
    {
      icon: "fa6-solid:key",
      title: "Turnkey",
      description:
        "Our turnkey modular approach results in successful quick implementation with an efficient high rate of return on investment.",
    },
  ],
  services: {
    title: "Services",
    description:
      "Distinctio fugiat dolor, nesciunt pariatur excepturi consectetur consequatur ipsum eum, eius quos perspiciatis ex nisi laudantium. Optio deleniti mollitia molestiae.\nSimilique natus sed tempora rerum deleniti mollitia dicta doloribus quo.",
    items: mainConfig.nav.services.items.map((service) => ({
      ...service,
      icon: "fa6-solid:angle-right",
    })),
  },
  content: {
    mission: {
      title: "PACS Mission",
      content:
        "Our solutions are proven and designed based on the best practices in the fine art of engineering and are backed by our long experience in field work. We build our systems in a modular fashion and deliver them fully factory tested prior to shipping for rapid commissioning. Our turnkey modular approach results in successful quick implementation with an efficient high rate of return on investment.",
    },
    vision: {
      title: "PACS Vision",
      content:
        "PACS understands that having a single source of project support simplifies and expedites decision-making, coordination, and execution. PACS consolidates responsibilities for engineering, procurement, installation inspection and start-up assistance, and can provide turnkey blending and manufacturing solutions. From the outskirts of New York City we serve the world. ",
    },
  },
  products: {
    title: "Products",
    description: `<p>PACS delivers modular automation and logistics solutions engineered to slash energy spend, optimize labor, and adapt seamlessly to shifting demands. Built for agile industries: scalable, portable, and operator-free.</p>
        <p><em>Automation simplified. Productivity amplified.</em><p>`,
    items: [
      ...mainConfig.nav.products.liquidLubricants.items,
      ...mainConfig.nav.products.greases.items,
    ].map((service) => ({
      ...service,
      icon: "fa6-solid:angle-right",
    })),
  },
};
