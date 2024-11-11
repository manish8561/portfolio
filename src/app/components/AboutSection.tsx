"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const skillsData = [
  { name: "Golang" },
  { name: "Nest JS" },
  { name: "Microservices" },
  { name: "Serverless" },
  { name: "Blockchain" },
  { name: "Ethereum" },
  { name: "Solidity" },
  { name: "Web3/ Tronweb" },
  { name: "Hardhat" },
  { name: "Smart Contract" },
  { name: "Hyperleger Fabric" },
  { name: "AWS DynamoDB" },
  { name: "AWS Lambda" },
  { name: "API Gateway" },
  { name: "Opensearch" },
  { name: "Elastic Search" },
  { name: "Elastic Cache" },
  { name: "RDS" },
  { name: "S3" },
  { name: "EC2" },
  { name: "Kafka" },
  { name: "RabbitMQ" },
  { name: "MongoDB" },
  { name: "Mongoose" },
  { name: "Redis" },
  { name: "GRPC" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "Express JS" },
  { name: "Electron JS" },
  { name: "MEAN/MERN Stack" },
  { name: "MySQL" },
  { name: "Postgres" },
  { name: "Sequelize" },
  { name: "TypeORM" },
  { name: "TypeORM" },
  { name: "Socket.io" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "TypeScript" },
  { name: "TailwindCSS" },
  { name: "Angular" },
  { name: "Firebase" },
  { name: "Firestore" },
  { name: "Jest" },
  { name: "Mocha" },
  { name: "Chai" },
];

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>English</li>
        <li>Hindi</li>
        <li>Punjabi</li>
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
        <li>BA</li>
        <li>Rajasthan University, Jaipur</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    if (!isPending) {
      startTransition(() => {
        setTab(id);
      });
    }
  };

  return (
    <section className="text-white mb-10" id="about">
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
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages Known{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
      <section className="bg-[#000] py-10 rounded-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {skillsData.map((skill, index) => (
              <div
                key={`skill-${index.toString()}`}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
              >
                <h3 className="text-sm lg:text-md font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
