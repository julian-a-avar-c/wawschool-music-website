import type { Item } from "@/config/pages/products";

export const config: {
  key: string;
  title: string;
  nav: { node: string; href?: string }[];
  services: {
    item: Item;
    items: Item[];
  };
} = {
  key: "services",
  title: "Services",
  nav: [{ node: "PACS LLC", href: "/" }, { node: "Services" }],
  services: {
    item: {
      title: "Services",
      key: "services",
      shortDescription: "All services",
      mediumDescription: "",
      longDescription: "",
      href: "/services",
    },
    items: [
      // 1) Ingenieria basica
      // 2) FEED (Front End Engineering Design)
      // 3) Feasibility Studies
      // 4) Marter Plans
      // 5) Isometric Drawings
      // 6) 3D Modeling
      // 7) Site Scanning
      // 8) FDS (Functional Design Specification)
      // 9) PFD (Process Flow Diagram)
      // 10) Walkthrough Assessments
      // 11) Debottleneck Studies
      // 12) Training Seminars
      // 13) Waste Reduction Study
      // 14) Enterprise Efficiency Study
      {
        title: "Basic Engineering",
        shortDescription: "Basic Engineering",
        mediumDescription: "",
        longDescription: "",
        key: "basic-engineering",
        href: "/services#basic-engineering",
      },
      {
        title: "FEED",
        shortDescription: "Front End Engineering Design",
        mediumDescription: "",
        longDescription: "",
        key: "feed",
        href: "/services#feed",
      },
      {
        title: "Feasibility Studies",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "feasibility-studies",
        href: "/services#feasibility-studies",
      },
      {
        title: "Marter Plans",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "marter-plans",
        href: "/services#marter-plans",
      },
      {
        title: "Isometric Drawings",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "isometric-drawings",
        href: "/services#isometric-drawings",
      },
      {
        title: "3D Modeling",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "3d-modeling",
        href: "/services#3d-modeling",
      },
      {
        title: "Site Scanning",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "site-scanning",
        href: "/services#site-scanning",
      },
      {
        title: "FDS",
        shortDescription: "Functional Design Specification",
        mediumDescription: "",
        longDescription: "",
        key: "fds",
        href: "/services#functional-design-specification",
      },
      {
        title: "PFD",
        shortDescription: "Process Flow Diagram",
        mediumDescription: "",
        longDescription: "",
        key: "pfd",
        href: "/services#process-flow-diagram",
      },
      {
        title: "Walkthrough Assessments",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "walkthrough-assessments",
        href: "/services#walkthrough-assessments",
      },
      {
        title: "Debottleneck Studies",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "debottleneck-studies",
        href: "/services#debottleneck-studies",
      },
      {
        title: "Training Seminars",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "training-seminars",
        href: "/services#training-seminars",
      },
      {
        title: "Waste Reduction Study",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "waste-reduction-study",
        href: "/services#waste-reduction-study",
      },
      {
        title: "Enterprise Efficiency Study",
        shortDescription: "",
        mediumDescription: "",
        longDescription: "",
        key: "enterprise-efficiency-study",
        href: "/services#enterprise-efficiency-study",
      },
    ],
  },
};
