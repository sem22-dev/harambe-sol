'use client';

import React, { useState } from 'react';
import LeftButton from '@/components/ui/LeftButton';
import RightButton from '@/components/ui/RightButton';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import InfoModal from './infoModal';

type ModalType = 'name' | 'lock' | 'rarities';

export default function Personalize() {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isLockingPiece, setIsLockingPiece] = useState(false);
  const [name, setName] = useState('FH - Jenny Wealth');

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('name');

  const handleInfoClick = (type: ModalType) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex items-center text-4xl md:tracking-[0.3em] absolute top-20 font-extrabold text-white">
        <h1>PERSONALIZE</h1>
      </div>

      <div className="mt-[170px] flex flex-col md:flex-row items-center justify-start gap-12  ">
        <div className="flex flex-col items-center w-[400px]">
          <h1 className="text-2xl tracking-[0.3em] text-center font-medium py-1">
            FH - HARAMBE
          </h1>
          <Image
            src={'/assets/forever-harambe.png'}
            width={1000}
            height={200}
            alt="harambe"
            className=" w-[400px] flex-shrink-0"
          />
          <div className="w-full flex flex-col ">
            <h1 className="text-xl tracking-[0.3em] text-center w-full font-light py-1">
              FOREVER HARAMBE
            </h1>
            <div className=" flex items-center justify-between">
              <LeftButton href="/" className="text-xs">
                Back to Collections
              </LeftButton>
              <RightButton href="/" className="text-xs">
                To Your Gallery
              </RightButton>
            </div>
          </div>
        </div>

        <div className=" space-y-12">
          <div className=" flex items-center gap-4">
            <h1
              className="underline tracking-[0.3em] text-lg cursor-pointer"
              onClick={() => setIsEditingName(!isEditingName)}
            >
              EDIT NAME
            </h1>
            <Image
              src={'/assets/question-mark.svg'}
              height={15}
              width={20}
              alt="questions"
              className=""
              onClick={() => handleInfoClick('name')}
            />
          </div>

          {isEditingName && (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-xl tracking-[0.3em] w-full font-light py-1 bg-transparent border-b border-white focus:outline-none"
              />
              <div>
                <Button className="">PREVIEW</Button>
                <Button
                  className=" ml-4"
                  onClick={() => setIsEditingName(false)}
                >
                  CONFIRM
                </Button>
              </div>
            </>
          )}

          <div className=" flex items-center gap-4">
            <h1
              className="underline tracking-[0.3em] text-lg cursor-pointer"
              onClick={() => setIsLockingPiece(!isLockingPiece)}
            >
              LOCK YOUR PIECE
            </h1>
            <Image
              src={'/assets/question-mark.svg'}
              height={15}
              width={20}
              alt="questions"
              className=""
              onClick={() => handleInfoClick('lock')}
            />
          </div>

          {isLockingPiece && (
            <>
              <div className="flex items-center gap-4">
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <button
                  className={` c inline-flex  items-center px-12 py-1 border text-sm tracking-[0.2em] border-black bg-inherit rounded-full relative group overflow-hidden text-black `}
                >
                  LOCK
                  <div
                    className="absolute right-0 top-0 bottom-0 w-[30%] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(to left, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
                    }}
                  />
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[30%] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
                    }}
                  />
                </button>
              </div>
            </>
          )}

          <div className=" flex items-center gap-4 pb-4">
            <h1 className="underline tracking-[0.3em] text-[#977154] text-lg">
              RARITIES
            </h1>
            <Image
              src={'/assets/info.svg'}
              height={15}
              width={20}
              alt="questions"
              className=""
              onClick={() => handleInfoClick('rarities')}
            />
          </div>
        </div>
      </div>

      <InfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType as any} // Type assertion to match InfoModal props
      />
    </div>
  );
}

function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={` ${className} inline-flex  items-center px-6 py-1 border text-sm tracking-[0.2em] border-black bg-[#F3E8D0] rounded-full relative group overflow-hidden text-black `}
    >
      {children}
      <div
        className="absolute right-0 top-0 bottom-0 w-[30%] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(to left, #967053 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute left-0 top-0 bottom-0 w-[30%] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(to right, #967053 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
        }}
      />
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 10)); // Limit to 10
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0)); // Limit to 0
  };

  return (
    <div className="flex w-fit  flex-col items-center ">
      <ChevronUp onClick={increment} className="cursor-pointer" />
      <div className="border flex justify-center items-center border-[#444343] overflow-hidden w-8 h-12 rounded-lg shadow-xl relative group">
        {count}
        <div
          className="absolute  top-0  w-full h-[30%] opacity-100"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
          }}
        />
        <div
          className="absolute bottom-0 w-full h-[30%] opacity-100"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
          }}
        />
      </div>
      <ChevronDown onClick={decrement} className="cursor-pointer" />
    </div>
  );
}
