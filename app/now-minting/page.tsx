
"use client"

import React, { useState } from 'react'
import LeftButton from "@/components/ui/LeftButton"
import RightButton from "@/components/ui/RightButton"
import { CircleMinus, CirclePlus } from "lucide-react"
import Image from "next/image"
import InfoModal from '../personalize/infoModal'

export default function NowMinting() {
    // State for modal
    const [modalOpen, setModalOpen] = useState(false);
    
    // State for quantity and price calculation
    const [quantity, setQuantity] = useState(0);
    const PRICE_PER_ITEM = 0.08; // Price in SOL per item

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => prev > 0 ? prev - 1 : 0);
    };

    // Calculate total price
    const totalPrice = (quantity * PRICE_PER_ITEM).toFixed(2);

    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center text-4xl md:tracking-[0.3em] absolute top-20 font-extrabold text-white">
                <h1>MINTING NOW</h1>
            </div>
            <div className="mt-[170px] flex flex-col md:flex-row justify-start gap-12">
                <div className="flex flex-col items-center w-[400px]">
                    <Image src={'/assets/forever-harambe.png'} width={1000} height={200} alt="harambe" className="w-[400px] flex-shrink-0"/>
                    <div className="w-full mt-2 flex flex-col">
                        <div className="flex items-center justify-between">
                            <LeftButton href="/" className="text-xs">
                                Back to Collections
                            </LeftButton>
                            <RightButton href="/gallery" className="text-xs">
                                To Your Gallery
                            </RightButton>
                        </div>
                    </div>
                </div>
                <div className='space-y-24'>
                    <div>
                        <h1 className="text-3xl tracking-[0.4em]">FOREVER HARAMBE</h1>
                        <p className="text tracking-[0.2em]">A collection inspired by the spirit of togetherness.</p>
                        <h1 
                            className="underline tracking-[0.2em] text-gray-600 cursor-pointer"
                            onClick={() => setModalOpen(true)}
                        >
                            Learn more
                        </h1>
                    </div>
                    <div className=''>
                        <h1 className='tracking-[0.2em]'>PRE-SALE <span className='text-sm tracking-widest ml-8'>{PRICE_PER_ITEM} SOL</span></h1>
                        <div className='flex mt-8 items-center gap-8'>
                            <CircleMinus 
                                className="cursor-pointer" 
                                onClick={handleDecrement}
                            />
                            <h1>{quantity}</h1>
                            <CirclePlus 
                                className="cursor-pointer" 
                                onClick={handleIncrement}
                            />
                            <p>{quantity} <span className='ml-4 tracking-widest'>item(s) added</span></p>
                        </div>
                    </div>
                    <div className='space-x-8'>
                        Total: <span className='ml-8'>{totalPrice} </span> <span>SOL</span>
                    </div>
                </div>
            </div>

            <InfoModal 
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type="mint" 
            />
        </div>
    )
}