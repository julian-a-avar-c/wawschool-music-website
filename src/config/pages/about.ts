import { config as mainConfig } from "@/config/main";

const config = {
  whoWeAre: [
    "At PACS LLC, we specialize in engineering innovative technological solutions for the liquid lubricants, grease, paints, and inks industries.",
    "We design and deliver automated, intelligent systems for component transfer, dosing, manufacturing, and blending. Our solutions include pigging technology, robotic drum decanters, reactors, and custom-built systems — all focused on maximizing operational efficiency and performance.",
    "Combining innovation, expert technical support, and a deep understanding of industrial processes, we help our clients achieve measurable, sustainable results.",
    "Discover how PACS LLC can drive your operations forward.",
  ],
  people: {
    "cesar.campopiano": {
      avatar: {
        src: "/images/people/cesar.campopiano.jpg",
        alt: "cesar.campopiano@pacsllc.net",
        fallback: "CC",
      },
      title: "Cesar Campopiano",
      subtitle: "Project Coordinator",
      description:
        "As a licensed architect specializing in energy-efficient design and project management, I lead initiatives that prioritize precision and sustainability. My role as a project coordinator centers on delivering high-quality outcomes on time and within scope, ensuring every project harmonizes operational efficiency with meticulous execution.",
      links: [
        {
          icon: mainConfig.links.email.icon,
          href: "mailto:cesar.campopiano@pacsllc.net",
        },
        { icon: mainConfig.links.linkedin.icon, href: "" },
      ],
    },
    "pablo.garce": {
      avatar: {
        src: "/images/people/pablo.garce.jpg",
        alt: "pablo.garce@pacsllc.net",
        fallback: "PG",
      },
      title: "Pablo Garce",
      subtitle: "President",
      description:
        // "Migrated to the US in 1997. Worked in various technical and commercial roles for Mid America Eng., FMC, FMC Technologies, Emerson, ABB and PACS as business development manager and sales and marketing director. Design and developed several downstream oil and gas processing and controlling units for among others grease, metal working fluids and lubricants, including robotic decanting systems and piggable transfer equipment for which holds patents.",
        "With more than 40 years of experience, he has worked in various technical and commercial roles for FMC, FMC Technologies, Emerson, ABB, Mid-American Eng., and now PACS LLC as a business and sales director, and development manager. Design and developed several downstream oil and gas processing and controlling units for among others grease, metal working fluids and lubricants, including robotic decanting systems and piggable transfer equipment for which holds patents.",
      links: [
        {
          icon: mainConfig.links.email.icon,
          href: "mailto:pablo.garce@pacsllc.net",
        },
        {
          icon: mainConfig.links.phone.icon,
          href: "tel:+17734749701",
        },
        { icon: mainConfig.links.linkedin.icon, href: "" },
      ],
    },
    "carla.campopiano": {
      avatar: {
        src: "/images/people/carla.campopiano.jpg",
        alt: "carla.campopiano@pacsllc.net",
        fallback: "CC",
      },
      title: "Carla Campopiano",
      subtitle: "Chief Executive Officer",
      description:
        "Co-founder with a reach background in the Arts, Design and Entrepreneurship. Her diverse experience spans management, networking, marketing, and management of change. Her strategic expertise has significantly expanded PACS LLC’s industry presence. Carla’s leadership fosters workforce productivity enhancements, driving innovative solutions and cost-effective results, solidifying PACS LLC’s pioneering status.",
      links: [
        {
          icon: mainConfig.links.email.icon,
          href: "mailto:carla.campopiano@pacsllc.net",
        },
      ],
    },
    "cesar.castellanos": {
      avatar: {
        src: "/images/people/cesar.castellanos.png",
        alt: "cesar.castellanos@pacsllc.net",
        fallback: "CC",
      },
      title: "Cesar Castellanos",
      subtitle: "Business Development Manager",
      description:
        "Cesar Castellanos drives business development for PACS LLC, helping lubricant and grease producers turn engineering projects into measurable savings. He manages opportunity discovery, technical scoping, and contract execution, then verifies results once equipment is online. With a decade in industrial sales and automation, Cesar blends data-driven strategy with a hands-on safety mindset shaped by earlier aviation roles. Bilingual in English and Spanish, he bridges plant floors and boardrooms across the Americas. Connect with him to explore how PACS can unlock throughput, cut OPEX, and future-proof your plant.",
      links: [
        {
          icon: mainConfig.links.phone.icon,
          href: "tel:+",
        },
        {
          icon: mainConfig.links.email.icon,
          href: "mailto:cesar.castellanos@pacsllc.net",
        },
      ],
    },
    "joaquin.rubio": {
      avatar: {
        src: "/images/people/joaquin.rubio2.jpg",
        alt: "joaquin.rubio@pacsllc.net",
        fallback: "JR",
      },
      title: "Joaquin Rubio",
      subtitle: "Mechanical Designer",
      description:
        "Mechanical Engineer and Electromechanical Technician with experience in the design, development, and maintenance of industrial plants. Currently working as a project engineer at PACS LLC, specializing in process automation. Passionate about continuous learning, teamwork, and technical innovation, aiming to contribute to industrial growth aligned with global energy efficiency and sustainability standards.",
      links: [
        {
          icon: mainConfig.links.phone.icon,
          href: "tel:+5493816544401",
        },
        {
          icon: mainConfig.links.email.icon,
          href: "mailto:joaquin.rubio@pacsllc.net",
        },
      ],
    },
    "laurel.luna": {
      avatar: {
        src: "/images/people/laurel.luna.jpg",
        alt: "laurel.luna@pacsllc.net",
        fallback: "LL",
      },
      title: "Laurel Luna",
      subtitle: "Head of Home Office",
      description:
        "As Head of Home Office at PACS LLC, Laurel combines a background in psychology with strong organizational skills across administration, human resources, and team coordination. Laurel specializes in solving human challenges through effective communication, encouraging a positive work environment, and ensuring smooth, efficient operations. With a focus on people-centered management, Laurel aligns individual and team goals with the broader mission of PACS. Their work supports employee growth and strengthens organizational success, helping to build a more connected and resilient workplace.",
      links: [
        {
          icon: mainConfig.links.email.icon,
          href: "mailto:laurel.luna@pacsllc.net",
        },
      ],
    },
  },
};

export { config };
