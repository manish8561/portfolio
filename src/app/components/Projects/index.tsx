"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nomo Bank Wallet App",
    description: `Beyond an International Digital Bank
Upgrade your international banking with a UK account from Nomo, brought to you by Boubyan Bank.`,
    image: "/images/projects/nomo.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.nomobank.com/",
  },
  {
    id: 2,
    title: "Kudi Pro",
    description: `Every newly signed-up Kudi Pro user will be assigned a unique account  through which naira deposits can be made for the purpose of acquiring crypto assets and withdraw naira fiat through their unique account(s).`,
    image: "/images/projects/kudi.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://kudi.pro/",
  },
  {
    id: 3,
    title: "Ubuy",
    description:
      "For over a decade, Ubuy as a leading retail search engine platform has been serving customers in over 180+ countries around the globe.",
    image: "/images/projects/ubuy.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://ubuy.com/",
  },
  {
    id: 4,
    title: "Ancrypto Crypto Wallet App",
    description:
      "The multichain wallet of the future, offering a single username for all your blockchain public addresses within a non-custodial Web3 wallet, secured by your device. Experience seamless, intermediary-free transactions, all powered by your Universal Multichain identity.",
    image: "/images/projects/ancrypto.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Planet Inverse",
    description:
      "The Planet Inverse GameFi economy is built on a foundation of three interoperable platforms utilizing the XIV token..",
    image: "/images/projects/planet.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://planetinverse.com/",
  },
  {
    id: 6,
    title: "Anchor `Swap",
    description:
      "Decentralized Exchange and Automatic Liquidity Acquisition Yield Farm running currently on Binance Smart Chain, with a vision to launch on several other blockchains in future. We have created a deflation token, called Anchor.",
    image: "/images/projects/anchor.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://anchorswap.app/",
  },
  {
    id: 7,
    title: "eTicketSolutions",
    description:
      "eTicket Solutions is your one stop shop for all ticketing related. Designed by entrepreneurs with a passion for theatre and the arts, we know how important it is to take time out of your busy schedule to unwind and enjoy life and that’s why we are dedicated to providing you with all of the latest entertainment, travel, and transportation information - from movie releases, to details of the latest happenings in your area and how to get there!",
    image: "/images/projects/eticketsolutions.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://eticketsolutions.com/",
  },
  {
    id: 8,
    title: "K R Consultancy",
    description: `Vitalia is clean and modern ecommerce theme. Unlimited colors and font. Seo ready. Resposive design and more...
    Log to demo admin panel and check all settings and functions. With custom footer you can add some nice info in footer like contact or twitter & facebook.`,
    image: "/images/projects/krconsultancy.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://www.krconsultancy.in/",
  },
  {
    id: 9,
    title: "Harpreet Fashion",
    description: `Discover the latest trends at our fashion store, where style meets sophistication. From timeless classics to contemporary designs, we offer a curated selection for men, women, and kids. Our collection includes everything from chic casual wear to elegant formal attire, crafted with high-quality fabrics and designed to elevate your wardrobe.`,
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://www.harpreetfashion.com",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
