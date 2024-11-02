
"use client"
import ActionButton from "@/components/ui/ActionButton";
import LeftButton from "@/components/ui/LeftButton";
import Title from "@/components/ui/Title";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

// Define the gallery item type
type GalleryItem = {
    id: string;
    image: string;
    name: string;
};

export default function Gallery() {
    const router = useRouter();
    // Sample gallery items - in real app, this might come from an API or props
    const [galleryItems] = useState<GalleryItem[]>([
        {
            id: '1',
            image: '/assets/forever-harambe.png',
            name: 'FH - HARAMBE'
        },
        {
            id: '2',
            image: '/assets/forever-harambe.png',
            name: 'FH - HARAMBE'
        },
    ]);

    // State to toggle between having items and not (for demo purposes)
    const [hasItems, setHasItems] = useState(true);

    const handleMintNowClick = () => {
        router.push('/now-minting');
    };

    if (!hasItems || galleryItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center">
                <Title>YOUR GALLERY</Title>
                <div className="mt-48 flex flex-col items-center">
                    <Image 
                        src={'/assets/gallery-not-found.png'} 
                        width={400} 
                        height={400} 
                        alt="gallery" 
                        className="" 
                    />
                    <ActionButton onClick={handleMintNowClick} className="mt-2">
                        Mint now
                    </ActionButton>
                </div>
                <LeftButton href="/collections" className="lg:mr-[800px] mt-6">
                    Back to Collections
                </LeftButton>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
            <Title>FH - HARAMBE</Title>
            
            <div className="mt-[170px] w-full max-w-[1200px] relative">
                {galleryItems.length === 1 ? (
                    // Single item layout
                    <div className="flex flex-col items-center">
                        <div className="relative w-[600px] h-[600px] bg-gradient-to-b from-gray-200 to-white rounded-lg p-8">
                            <Image
                                src={galleryItems[0].image}
                                layout="fill"
                                objectFit="contain"
                                alt={galleryItems[0].name}
                                className="p-4"
                            />
                        </div>
                        <ActionButton 
                            onClick={() => {}} 
                            className="mt-4 px-6"
                        >
                            Place for Auction
                        </ActionButton>
                    </div>
                ) : (
                    // Multiple items layout
                    <div className="grid grid-cols-3 gap-8">
                        {/* Left side image */}
                        <div className="relative w-full h-[300px] rounded-lg">
                            <Image
                                src={galleryItems[0].image}
                                layout="fill"
                                objectFit="contain"
                                alt={galleryItems[0].name}
                                className="p-4"
                            />
                        </div>
                        
                        {/* Center (main) image */}
                        <div className="relative w-full h-[400px] -mt-12  rounded-lg">
                            <Image
                                src={galleryItems[0].image}
                                layout="fill"
                                objectFit="contain"
                                alt={galleryItems[0].name}
                                className="p-4"
                            />
                        </div>
                        
                        {/* Right side image */}
                        <div className="relative w-full h-[300px] rounded-lg">
                            <Image
                                src={galleryItems[0].image}
                                layout="fill"
                                objectFit="contain"
                                alt={galleryItems[0].name}
                                className="p-4"
                            />
                        </div>
                    </div>
                )}
                <div className="text-center w-full flex items-center gap-4 justify-center">
                    <ActionButton 
                        onClick={() => setHasItems(!hasItems)} 
                        className="px-6 "
                    >
                        Place for auction
                    </ActionButton>
                    <Pencil onClick={() => redirect('/personalize')}/>
                </div>
                 
                {/* Navigation buttons */}
                <div className="w-full flex  items-center mt-8 ml-14">
                    <LeftButton href="/collections" className="">
                        Back to Collections
                    </LeftButton>
                  
                </div>
            </div>
        </div>
    );
}