import { DateTime } from "luxon";

type Config = {
  key: string;
  title: string;
  nav: { node: string; href?: string }[];
  articles: {
    overview: { imageSource: string; summary?: string };
    name: string;
    href: string;
    title: string;
    author?: string;
    authorImageSource?: string;
    contentImageSource?: string;
    content: string;
    creationDate: string;
    expirationDate?: string;
  }[];
};

export const config: Config = {
  key: "articles",
  title: "Articles",
  nav: [{ node: "PACS LLC", href: "/" }, { node: "Articles" }],
  articles: [
    {
      overview: {
        imageSource: "/images/ilma.jpeg",
        // summary: "description",
      },
      name: "ilma-2024",
      href: "/articles/2024-09-30-ilma-2024",
      title: "ILMA 2024",
      // author: "Pablo Garce",
      // authorImageSource: "/pablogarce.jpg",
      content: `
        <YouTube id="https://youtu.be/sqCxLhu8CbI" />`,
      creationDate: DateTime.fromISO("2024-09-30").toISO()!,
      expirationDate: DateTime.fromISO("2025-01-01").toISO()!,
    },
    {
      overview: {
        imageSource: "/images/g3.jpg",
        summary:
          "Join us at the National Lubricating Grease Institute Annual Meeting in San Antonio! We are delighted to announce that our expert, Pablo Garce, will present",
      },
      name: "nlgi-2024",
      href: "/articles/2024-06-10-nlgi-2024",
      title: "NLGI 2024",
      author: "Pablo Garce",
      authorImageSource: "/images/people/pablo.garce.jpg",
      contentImageSource: "/images/NLGI-1.jpg",
      creationDate: DateTime.fromISO("2024-06-10").toISO()!,
      expirationDate: DateTime.fromISO("2025-01-01").toISO()!,
      content: `
        <p>Join us at the National Lubricating Grease Institute Annual Meeting in San Antonio!</p>
        <p>We are delighted to announce that our expert, Pablo Garce, will present three essential talks at the National Lubricating Grease Institute Annual Meeting.</p>
        <h2>Presentation Schedules</h2>
        <ol>
          <li>Maximizing efficiency: Smart solutions for updating facilities 🕘 9:00 AM – 9:45 AM</li>
          <li>Improving safety in grease manufacturing: Lessons from the Chemtool incident 🕙 2 PM – 2:45 PM</li>
          <li>Maximizing Return on Investment: Strategies to obtain quick results 🕚 2 PM – 2:45 PM</li>
        </ol>
        <p>Learn how to improve efficiency, ensure safety, and drive return on investment in grease manufacturing. 📅 Date: June 10</p>
        <p>📍 Location: San Antonio, Texas</p>
        <p>RSVP now via the link in our bio!</p>
        <a href="https://acortar.link/OKIs6q">registration link</a>
        <a href="https://www.facebook.com/pacsllcUS">https://www.facebook.com/pacsllcUS</a>
        <a href="https://www.instagram.com/pacs_llc/">https://www.instagram.com/pacs_llc/</a>
        <a href="https://www.linkedin.com/company/pacsllc/">https://www.linkedin.com/company/pacsllc/</a>
        `,
    },
    {
      overview: {
        imageSource: "/images/ilma.jpeg",
        summary:
          "By embracing sustainable solutions tailored to their specific needs, organizations can drive efficiency, fortify operations against uncertainties, and pave the way for a brighter future",
      },
      name: "sustainable-challanges",
      href: "/articles/2024-03-31-sustainable-challanges",
      title: "Navigating Challenges with Sustainable Solutions",
      author: "Pablo Garce",
      authorImageSource: "/images/people/pablo.garce.jpg",
      creationDate: DateTime.fromISO("2024-03-31").toISO()!,
      content: `
        IMG
        <p>In project management, the pursuit of improvement while concurrently seeking cost-effective solutions presents a nuanced challenge, especially in oil related industries where efficiency is paramount. The quest for better outcomes must be balanced with the imperative to contain costs, requiring a delicate approach.</p>
        <p>For organizations in the oil related industry, where projects are often large-scale and capital-intensive, the primary issue arises from the inherent tension between the desire to enhance project outcomes and the imperative to contain costs.</p>
        <p>Organizations are often tasked with improving processes, reduce production cost, enhance safety, increasing productivity, or implementing new technologies to stay competitive and adapt to evolving industry standards. However, these improvements typically come with associated expenses, including investment in resources, technology upgrades, and personnel training.</p>
        <p>The challenge lies in achieving these improvements without resorting to expensive investments that may strain the project budget. Instead, organizations require a strategic and tailored approach that maximizes efficiency and cost-effectiveness while minimizing financial risk. By prioritizing the right approach over costly investments, organizations can achieve sustainable improvements that drive long-term success.</p>
        <p>This is where a consultancy company with long-term experience and a commitment to tailored solutions comes into play. By leveraging scholarly research, industry expertise, and practical insights, such a company can help navigate the tension between improvement and cost-effectiveness. Through thorough cost-benefit analyses and prioritization of initiatives, organizations can identify areas for sustainable improvement that deliver maximum value within budget constraints.</p>
        <p>Furthermore, effective communication and collaboration among project stakeholders are essential to ensure alignment on improvement priorities and budgetary considerations. With a culture of accountability and transparency, decisions can be made collaboratively with a clear understanding of the trade-offs involved.    </p>
        <p>In the realm of facility management, the pursuit of improvement is perpetual among a dynamic market. Facilities across industries grapple with challenges like enhancing efficiency, reducing costs, risk and adapting to shifts brought by energy cost, new regulations, environmental constrains or electric cars—all while embracing sustainability. As organizations seek to address these issues without resorting to traditional big company expensive solutions, the challenge lies in finding sustainable alternatives that fortify operations against future uncertainties.</p>
        IMG
        <p>By embracing sustainable solutions tailored to their specific needs, organizations can drive efficiency, fortify operations against uncertainties, and pave the way for a brighter future. With a focus on harnessing the power of automation and resilience-building, they can navigate facility improvement confidently, ensuring not just a choice, but the surest path to long-term success.</p>
        <p>Shall we delve into sustainable solutions, driving efficiency, fortifying facility operations, and embracing automation for a brighter future?</p>
        `,
    },
    {
      overview: {
        imageSource: "/images/post001.jpg",
        summary:
          "Lubricant Expo is North Americas newest exhibition and conference, connecting lubricant solution providers with the full range of end-user buyers, as well as the entire",
      },
      name: "lubricant-expo-2024",
      href: "/articles/2024-03-15-lubricant-expo-2024",
      title: "Lubricant Expo 2024",
      author: "Pablo Garce",
      authorImageSource: "/images/people/pablo.garce.jpg",
      creationDate: DateTime.fromISO("2024-03-15").toISO()!,
      expirationDate: DateTime.fromISO("2025-01-01").toISO()!,
      contentImageSource: "/images/post001.jpg",
      content: `
        <p><strong>Lubricant Expo is North Americas newest exhibition and conference, connecting lubricant solution providers with the full range of end-user buyers, as well as the entire chemical and equipment supply chain with thousands of engineers and executives in attendance.</strong></p>
        <p>Join us at booth 724 for a conversation about cutting-edge lubrication solutions!</p>
        <p>Here’s our conversation schedule:</p>
        <ul>
          <li>Tuesday the 19th: Our president and founder, Pablo Garcé, with 30 years of experience, will discuss the robotic drum decanting unit.</li>
          <li>Wednesday the 20th:</li>
          <li>11:15-12:30: Explore our innovative Enviroflex solution, revolutionizing the oil refining process with its efficiency and sustainability.</li>
          <li>15:30-15:55: Learn about the pigging system, a breakthrough technology enhancing pipeline cleaning and product recovery.</li>
          <li>Free consultations will be available throughout the week.</li>
        </ul>
        <p>Do you need more information or have doubts?</p>
        <p>Come to us and we will advise you in a personalized way in 15 minutes, we provide excellent services. We will be in contact by LinkedIn or Instagram to schedule 7 free consultation in each social media.</p>
        <p><a href="https://www.facebook.com/pacsllcUS">https://www.facebook.com/pacsllcUS</a>
        <p><a href="https://www.instagram.com/pacs_llc/">https://www.instagram.com/pacs_llc/</a>
        <p><a href="https://www.linkedin.com/company/pacsllc/">https://www.linkedin.com/company/pacsllc/</a>
        <p>For more expo information, visit <a href="https://www.youtube.com/watch?v=uZGbsp24N9Y">https://www.youtube.com/watch?v=uZGbsp24N9Y</a> and <a href="https://lubricantexpona.com/">https://lubricantexpona.com</a></p>
        `,
    },
  ],
};
