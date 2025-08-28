"use client";

import { API_BASE_URL } from "@/lib/api";
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
    const resolveSrc = (companyName: string) => {
        if (!companyName) return `${API_BASE_URL}/images/hiring.png`;

        // Clean up the company name
        let cleanName = companyName.trim();
        
        // Remove common suffixes and prefixes
        cleanName = cleanName
            .replace(/\s+(Inc|LLC|Ltd|Corp|Corporation|Company|Co)\.?$/i, '')
            .replace(/^(The\s+)/i, '')
            .trim();

        // If it has spaces, take only the first word for the logo
        if (cleanName.includes(" ")) {
            cleanName = cleanName.split(" ")[0];
        }

        // Convert to lowercase for consistency
        cleanName = cleanName.toLowerCase();

        // Remove any special characters except hyphens
        cleanName = cleanName.replace(/[^a-z0-9-]/g, '');

        // Use our backend API endpoint
        return `${API_BASE_URL}/images/${cleanName}.png`;
    };

    const [imgSrc, setImgSrc] = useState(resolveSrc(src));
    const [hasErrored, setHasErrored] = useState(false);

    const handleError = () => {
        if (!hasErrored) {
            setHasErrored(true);
            // Fallback to hiring.png through our backend
            setImgSrc(`${API_BASE_URL}/images/hiring.png`);
        }
    };

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover rounded"
            onError={handleError}
            unoptimized // Add this to prevent Next.js image optimization issues with external URLs
        />
    );
}