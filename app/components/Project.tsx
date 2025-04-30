"use client";
import { useEffect } from "react";
import Link from "next/link";

import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { TechnologyType, ProjectType } from "../types";
import { GithubSVG, LinkSVG } from "./ui/icons";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";
import Image from "next/image";

export const Project = (project: ProjectType) => {
    const {
        description,
        title,
        icon,
        imgUrl,
        videoUrl,
        technologies,
        githubUrl,
        websiteUrl,
    } = project;

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        if (!mq.matches) return ProjectsSectionAnimations.mobileAnimation();

        ProjectsSectionAnimations.titleAnimation();
        ProjectsSectionAnimations.videoAnimation();
        ProjectsSectionAnimations.descriptionAnimation();
        ProjectsSectionAnimations.websiteUrlAnimation();
        ProjectsSectionAnimations.githubUrlAnimation();
    }, []);

    return (
        <div className="grid grid-rows-8 grid-cols-4 gap-5 pb-4 overflow-hidden">
            <div className="flex lg:hidden items-center col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-xl font-bold text-white opacity-0 mobile-animation titleSection">
                <div className="bg-[#303036] p-2 rounded-md mr-2 flex-shrink-0">
                    {icon}
                </div>
                <div className="flex-grow">
                    {title}
                </div>
            </div>

            <div className="col-span-full lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3 opacity-0 mobile-animation videoSection flex justify-center items-center">
                {videoUrl ? (
                    // Video rendering logic
                    <video
                        className="rounded-xl border-1 border-[#212121] max-w-full max-h-[400px]"
                        style={{
                            objectFit: "contain"
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={videoUrl}
                    />
                ) : (
                    // Image with dynamic sizing
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src={imgUrl}
                            alt={title}
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority={true}
                            className="rounded-xl border-1 border-[#212121] max-h-[400px] w-auto h-auto"
                            style={{
                                objectFit: "contain",
                                maxWidth: "100%"
                            }}
                        />
                    </div>
                )}
            </div>

            <Card className="col-span-full lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5 lg:min-h-[250px] opacity-0 mobile-animation descriptionCard">
                <CardBody className="text-gray-400 text-lg flex justify-between gap-4">
                    <div className="hidden lg:flex items-center col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-3xl font-bold text-white opacity-0 mobile-animation titleSection">
                        <div className="bg-[#303036] p-2 rounded-md mr-2 flex-shrink-0">
                            {icon}
                        </div>
                        <div className="flex-grow">
                            {title}
                        </div>
                    </div>
                    {description}
                    <div className=" flex flex-wrap gap-2">
                        {technologies.map(
                            ({ name, icon }: TechnologyType, index: number) => (
                                <Chip
                                    key={`technology-item-${index}`}
                                    size="sm"
                                >
                                    <span className="flex items-center gap-2">
                                        {/* {icon} */}
                                        {name}
                                    </span>
                                </Chip>
                            )
                        )}
                    </div>
                </CardBody>
            </Card>

            <Card
                isHoverable
                className={`${websiteUrl === "NONE" && "hidden"
                    } col-span-2 lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:max-h-24 lg:col-end-4 opacity-0 mobile-animation githubUrlCard`}
            >
                <Link
                    href={websiteUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="min-h-full flex justify-center items-center"
                >
                    <CardBody className="justify-center items-center">
                        {!websiteUrl ? (
                            <h2 className="font-bold text-xl text-gray-400 text-center">
                                Coming Soon!
                            </h2>
                        ) : (
                            <LinkSVG />
                        )}
                    </CardBody>
                </Link>
            </Card>

            <Card
                isHoverable
                className={`${websiteUrl === "NONE"
                    ? "lg:col-start-3 col-span-4"
                    : "lg:col-start-4 col-span-2"
                    }  lg:row-start-3 lg:row-end-4 lg:max-h-24 lg:col-end-5 opacity-0 mobile-animation websiteUrlCard`}
            >
                <Link
                    href={githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="min-h-full flex justify-center items-center"
                >
                    <CardBody className="justify-center items-center">
                        <GithubSVG />
                    </CardBody>
                </Link>
            </Card>
        </div>
    );
};
