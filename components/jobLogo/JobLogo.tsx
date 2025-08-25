"use client";

import Image from "next/image";
import { useState } from "react";

interface JobLogoProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export default function JobLogo({
    src,
    alt,
    width = 64,
    height = 64,
}: JobLogoProps) {
    const resolveSrc = (url: string) => {
        if (!url) return "/logo.png";

        // Clean up spaces and lowercase
        let domain = url.trim().toLowerCase();

        // If it has spaces, take only the first word
        if (domain.includes(" ")) {
            const firstWord = domain.split(" ")[0];
            domain = `${firstWord}.com`;
        }

        // If it already looks like a domain, just keep it
        if (!domain.includes(".")) {
            domain = `${domain}.com`;
        }

        return `https://logo.clearbit.com/${domain}`;
    };

    const [imgSrc, setImgSrc] = useState(resolveSrc(src));

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover"
            onError={() => setImgSrc("/logo.png")}
        />
    );
}
