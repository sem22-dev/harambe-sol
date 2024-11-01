import LeftButton from "@/components/ui/LeftButton";
import Image from "next/image";

export default function ComingSoon(){
    return(
        <div className="flex items-center justify-center gap-12">
            <div className="mt-48">
                <Image src={'/assets/coming-soon-full.png'} width={400} height={400} alt="comingsoon" />
                <LeftButton className="mt-2" href="/collections">
                    Back to Collections
                </LeftButton>
            </div>

            <div>
                <h1 className="text-3xl tracking-[0.4em]">COLLABORATIONS</h1>
                <p className="text tracking-[0.2em]">A collection inspired by the spirit of togetherness.</p>
                <h1 className="underline tracking-[0.2em] text-gray-600 cursor-pointer">Learn more</h1>
            </div>
        </div>
    )
}