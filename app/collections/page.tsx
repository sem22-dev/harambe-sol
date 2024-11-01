import ActionButton from "@/components/ui/ActionButton";
import Title from "@/components/ui/Title";
import { ArrowRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Collections(){
    return(
        <div className="flex flex-col items-center justify-center">
                <div className=" flex items-center text-4xl md:tracking-[0.3em] absolute top-20 font-extrabold text-white">
                       <h1>COLLECTIONS</h1>
                       <User size={32} className="ml-14"/>
                </div>

                <div className="mt-[170px] flex flex-col md:flex-row items-center justify-end gap-32 w-1/2 ml-64">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl tracking-[0.3em] text-center font-light py-1">FOREVER HARAMBE</h1>
                        <Image src={'/assets/forever-harambe.png'} width={1000} height={200} alt="harambe" className=" w-[400px] flex-shrink-0"/>
                        <div className="flex items-center justify-between mt-2 border w-full">
                            <Link href={'/log-in'} className="flex-grow flex justify-center">
                                <ActionButton>
                                    EXPLORE
                                </ActionButton>
                            </Link>
                            <ArrowRight size={36} className="hover:text-gray-500 font-semibold cursor-pointer"/>
                        </div>

                    </div>
                    <Image src={'/assets/coming-soon.png'} width={250} height={250} alt="coming soon" className=" w-[200px] h-auto"/>
                </div>

               
        </div>
    )
}