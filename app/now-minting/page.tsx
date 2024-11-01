
"use client"

import React, { useState } from 'react'
import LeftButton from "@/components/ui/LeftButton"
import RightButton from "@/components/ui/RightButton"
import { ChevronDown, ChevronUp, CircleMinus, CirclePlus } from "lucide-react"
import Image from "next/image"

export default function NowMinting(){
    const [isEditingName, setIsEditingName] = useState(false);
    const [isLockingPiece, setIsLockingPiece] = useState(false);
    const [name, setName] = useState("FH - Jenny Wealth");

    return(
        <div className="flex flex-col items-center justify-center">
            <div className=" flex items-center text-4xl md:tracking-[0.3em] absolute top-20 font-extrabold text-white">
                <h1>PERSONALIZE</h1>
            </div>

            <div className="mt-[170px] flex flex-col md:flex-row     justify-start gap-12  ">
                <div className="flex flex-col items-center w-[400px]">
                    <Image src={'/assets/forever-harambe.png'} width={1000} height={200} alt="harambe" className=" w-[400px] flex-shrink-0"/>
                    <div className="w-full flex flex-col ">
                        <div className=" flex items-center justify-between">
                            <LeftButton href="/" className="text-xs">
                                Back to Collections
                            </LeftButton>
                            <RightButton href="/"  className="text-xs">
                                To Your Gallery
                            </RightButton>
                        </div>
                    </div>
                </div>
                <div className='space-y-24'>
                    <div>
                        <h1 className="text-3xl tracking-[0.4em]">FOREVER HARAMBE</h1>
                        <p className="text tracking-[0.2em]">A collection inspired by the spirit of togetherness.</p>
                        <h1 className="underline tracking-[0.2em] text-gray-600 cursor-pointer">Learn more</h1>
                    </div>
                    <div className=''>
                        <h1 className='tracking-[0.2em]'>PRE-SALE <span className='text-sm tracking-widest ml-8'>0.08 SOL</span></h1>
                       <div className='flex mt-8 items-center gap-8'>
                            <CircleMinus />
                            <h1>0</h1>
                            <CirclePlus />
                            <p>0 <span className='ml-4 tracking-widest'>items(s) added</span></p>
                       </div>
                    </div>
                    <div className='space-x-8'>
                        Total: <span className='ml-8'>0 </span> <span>SOL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Button({children, className, onClick}: {children: React.ReactNode, className?: string, onClick?: () => void}){
    return(
        <button
            onClick={onClick}
            className={` ${className} inline-flex  items-center px-6 py-1 border text-sm tracking-[0.2em] border-black bg-[#F3E8D0] rounded-full relative group overflow-hidden text-black `}
        >
            {children}
            <div 
            className="absolute right-0 top-0 bottom-0 w-[30%] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            style={{
                background: 'linear-gradient(to left, #967053 0%, rgba(0,0,0,0.08) 50%, transparent 100%)'
            }}
            />
            <div 
            className="absolute left-0 top-0 bottom-0 w-[30%] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            style={{
                background: 'linear-gradient(to right, #967053 0%, rgba(0,0,0,0.08) 50%, transparent 100%)'
            }}
            />
        </button>
    )
}
