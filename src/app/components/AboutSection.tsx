"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const skillsData = [
  { name: "Golang", level: "Proficient" },
  { name: "Gorm", level: "Proficient" },
  { name: "Postgres", level: "Proficient" },
  { name: "Gomonkey", level: "Proficient" },
  { name: "Microservices", level: "Proficient" },
  { name: "Serverless", level: "Proficient" },
  { name: "Blockchain", level: "Proficient" },
  { name: "Ethereum", level: "Proficient" },
  { name: "Solidity", level: "Expert" },
  { name: "Web3/ Tronweb", level: "Expert" },
  { name: "Hardhat", level: "Expert" },
  { name: "Smart Contract", level: "Proficient" },
  { name: "Hyperleger Fabric", level: "Intermediate" },
  { name: "AWS DynamoDB", level: "Proficient" },
  { name: "AWS Lambda", level: "Proficient" },
  { name: "API Gateway", level: "Expert" },
  { name: "Opensearch", level: "Expert" },
  { name: "Elastic Search", level: "Proficient" },
  { name: "Elastic Cache", level: "Expert" },
  { name: "RDS", level: "Proficient" },
  { name: "S3", level: "Expert" },
  { name: "EC2", level: "Expert" },
  { name: "Kafka", level: "Intermediate" },
  { name: "RabbitMQ", level: "Expert" },
  { name: "MongoDB", level: "Expert" },
  { name: "Mongoose", level: "Expert" },
  { name: "Redis", level: "Proficient" },
  { name: "GRPC", level: "Proficient" },
  { name: "Docker", level: "Expert" },
  { name: "Kubernetes", level: "Intermediate" },
  { name: "Express JS", level: "Expert" },
  { name: "Electron JS", level: "Proficient" },
  { name: "MEAN/MERN Stack", level: "Expert" },
  { name: "MySQL", level: "Expert" },
  { name: "Sequelize", level: "Proficient" },
  { name: "TypeORM", level: "Proficient" },
  { name: "Socket.io", level: "Proficient" },
  { name: "JavaScript", level: "Expert" },
  { name: "React", level: "Proficient" },
  { name: "Node.js", level: "Expert" },
  { name: "TypeScript", level: "Proficient" },
  { name: "TailwindCSS", level: "Intermediate" },
  { name: "Angular", level: "Proficient" },
  { name: "Firebase", level: "Proficient" },
  { name: "Firestore", level: "Proficient" },
  { name: "Jest", level: "Proficient" },
  { name: "Mocha", level: "Proficient" },
  { name: "Chai", level: "Intermediate" },
  { name: "HTML", level: "Expert" },
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
        <li>MCA, IGNOU, Jaipur</li>
        <li>BA, Rajasthan University, Jaipur</li>
        <li>Diploma in CSE, Govt. RC Khaitan Poly. College, Jaipur</li>
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
            Currently working as Sr Golang Developer in Spectrum Talent
            Managemen working as contractor with LTIMindtree, Pune. Earlier I
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
      <section>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Skills
          </h2>
          <div className="bg-gray-900 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-md p-2 flex flex-col items-center justify-center"
              >
                <h3 className="text-white font-bold text-sm mb-1">
                  {skill.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    skill?.level === "Expert"
                      ? "bg-green-500 text-white"
                      : skill.level === "Proficient"
                      ? "bg-blue-500 text-white"
                      : skill.level === "Intermediate"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {skill?.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
