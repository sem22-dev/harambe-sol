import ActionButton from "@/components/ui/ActionButton";
import LeftButton from "@/components/ui/LeftButton";
import Title from "@/components/ui/Title";
import Image from "next/image";

export default function Gallery(){
    return(
        <div className="flex flex-col items-center justify-center">
            <Title>
                YOUR GALLERY
            </Title>

            <div className="mt-48 flex flex-col items-center">
                <Image src={'/assets/gallery-not-found.png'} width={400} height={400} alt="gallery" className="" />
                <ActionButton className="mt-2">
                    Mint now
                </ActionButton>
            </div>

            <LeftButton href="/collections" className="lg:mr-[800px] mt-6">
                Back to Collections
            </LeftButton>
        </div>
    )
}