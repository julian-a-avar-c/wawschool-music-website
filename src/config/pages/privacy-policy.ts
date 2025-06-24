export const config: {
  key: string;
  title: string;
  nav: { node: string; href?: string }[];
  data: {
    title: string;
    contact?: {
      company: string;
      email: string;
      address: string;
    };
    intro?: string;
    content?:
      | string
      | (
          | string
          | {
              subtitle: string;
              items: string[];
            }
        )[];
    footer?: string;
  }[];
} = {
  key: "privacy-policy",
  title: "Privacy Policy",
  nav: [{ node: "Home", href: "/" }, { node: "Privacy Policy" }],
  data: [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information You Provide",
          items: [
            "Contact Details: Name, email address, company name, job title, phone number",
            "Professional Profile: LinkedIn profile, industry sector, role",
          ],
        },
        {
          subtitle: "Automatically Collected Data",
          items: [
            "Usage Data: Pages viewed, time spent on pages, click-throughs, referral URLs",
            "Device & Browser Data: IP address, device type, operating system, browser version",
          ],
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          items: [
            "We use cookies, web beacons, and similar technologies to recognize you, remember preferences, and compile aggregate data about site traffic and interactions. You may manage cookie preferences via your browser settings.",
          ],
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To Provide & Improve Services: Respond to inquiries, deliver marketing materials, optimize our website and campaigns.",
        "Personalization: Tailor content, ads, and communications to your industry interests and role.",
        "Analytics & Reporting: Measure campaign performance and website usage trends.",
        "Compliance & Security: Protect against fraud, enforce our terms, and comply with legal obligations.",
      ],
    },
    {
      title: "Disclosure of Your Information",
      intro:
        "We will not sell or rent your personal information to third parties. We may share information with:",
      content: [
        "Service Providers: Marketing platforms, analytics vendors, cloud hosting providers",
        "Legal & Safety: Law enforcement, regulators, or other parties when required by law or to protect our rights",
        "Business Transfers: In connection with a merger, acquisition, or sale of assets",
      ],
    },
    {
      title: "Your Privacy Rights",
      intro:
        "Depending on your location, you may have rights under U.S. federal law and state privacy laws (e.g., CCPA):",
      content: [
        "Access & Portability: Request a copy of your personal data.",
        "Correction: Ask us to correct inaccurate or incomplete information.",
        "Deletion: Request deletion of personal information we have collected (with certain exceptions).",
        'Opt-Out: Unsubscribe from marketing communications at any time by following the "unsubscribe" link or contacting us directly.',
      ],
      footer: "To exercise any rights, please contact us at info@pacsllc.net.",
    },
    {
      title: "Security",
      content:
        "We implement technical, administrative, and physical safeguards designed to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no Internet transmission is 100% secure.",
    },
    {
      title: "International Data Transfers",
      content:
        "PACS is U.S.-based. If you are located outside the United States, please be aware that your data will be transferred to and processed in the U.S., which may have different data protection standards.",
    },
    {
      title: "Children's Privacy",
      content:
        "Our services are not intended for children under 16. We do not knowingly collect personal information from minors.",
    },
    {
      title: "Changes to This Privacy Policy",
      content:
        'We may update this policy from time to time. The "Last Updated" date at the top indicates when the latest revision was made. We encourage you to review this page periodically.',
    },
    {
      title: "Contact Us",
      intro:
        "If you have questions or concerns about this Privacy Policy or our data practices, please contact:",
      contact: {
        company: "PACS LLC",
        email: "info@pacsllc.net",
        address: "14 Sage Drive, Warren, NJ 07059",
      },
    },
  ],
};
