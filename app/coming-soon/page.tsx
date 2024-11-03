'use client';
import LeftButton from '@/components/ui/LeftButton';
import Image from 'next/image';
import InfoModal from '../personalize/infoModal';
import { useState } from 'react';

export default function ComingSoon() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
      <div className="mt-48">
        <Image
          src={'/assets/coming-soon-full.png'}
          width={400}
          height={400}
          alt="comingsoon"
        />
        <LeftButton className="mt-2" href="/collections">
          Back to Collections
        </LeftButton>
      </div>

      <div>
        <h1 className="text-3xl tracking-[0.4em]">COLLABORATIONS</h1>
        <p className="text tracking-[0.2em]">
          A collection inspired by the spirit of togetherness.
        </p>
        <h1
          className="underline tracking-[0.2em] text-gray-600 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Learn more
        </h1>
      </div>
      <InfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="collaborations"
      />
    </div>
  );
}
