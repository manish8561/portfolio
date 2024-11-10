"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Golang</li>
        <li>Blockchain</li>
        <li>Solidity/Smart Contracts</li>
        <li>Mongodb/DynamoDB</li>
        <li>Nest JS</li>
        <li>AWS Lambda</li>
        <li>AWS Services</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MCA</li>
        <li>IGNOU, Jaipur</li>
      </ul>
    ),
  },
  {
    title: "Skills2",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express JS</li>
        <li>MySQL/PostgreSQL</li>
        <li>Sequelize/ Mongoose</li>
        <li>Typescript/ Javascript</li>
        <li>ReactJS</li>
        <li>Angular</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  console.log({ isPending });

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Earlier working as Sr Backend Engineer in Intellias, Pune and I am
            used to be a skilled Blockchain | Golang | Full Stack Developer with
            extensive experience in working with Blockchain fundamentals, smart
            contracts, consensus algorithms, and various Blockchain protocols
            including DeFi, NFT, DEX, DAPPs, Centeralize Exchange and Crypto
            Wallet. My expertise includes Golang, AWS Lambda, API Gateway,
            Dynamodb, Serverless, ElastiCache, S3, EC2, Cognito, SES, SNS,
            Localstack, Nest JS, Tronweb/Web3 JS, Solidity, ERC20, ERC721,
            ERC1155, Eth, BNB, TRX, RabbitMQ, Redis, Docker, Electron JS,
            Angular 10, Node JS, Typescript with Express JS, Socket.io, LAMP,
            Heroku, and MongoDB, MySQL, React JS, Firebase, and Firestore.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
