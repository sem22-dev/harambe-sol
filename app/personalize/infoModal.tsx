
import React from 'react';
import { X } from 'lucide-react';

type ContentType = {
  title: string;
  lines: string[];
};

type ContentMap = {
  name: ContentType;
  lock: ContentType;
  rarities: ContentType;
  mint: ContentType;
  collaborations: ContentType;
};

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: keyof ContentMap;
}

const content: ContentMap = {
  name: {
    title: "Get Personal and Customize your Piece.",
    lines: [
      "Gone are the days of numbered NFTs.",
      "Leveraging the latest NFT technology,",
      "we give you the option to name your piece.",
      "No 2 NFTs can have the same name.",
      "Name Yours Now (for 0.01 SOL)"
    ]
  },
  lock: {
    title: "Keep your Piece Safe - Lock It",
    lines: [
      "Safe NFTs, even if your wallet gets hacked. ",
      "1. Set your combination.",
      "2. Lock your piece ",
      "Leveraging the latest NFT technology,we give you the option to lock your piece. ",
      "Your unique 4-digit combination is the key that unlocks your NFT allowing transfers",
      "Lock Yours Now (for 0.01 SOL)"
    ]
  },
  rarities: {
    title: "RARITIES",
    lines: [
      "Mouth: ",
      "Eyees: ",
      "Body: ",
      "Head: ",
      "Hands: ",
      "Background: "
    ]
  },
  mint: {
    title: "",
    lines: [
      "Beyond a tribute to the Cincinnati zoo gorilla ",
      "Forever Harambe is the creative journey of visionary and creator Jenny Wealth",
      "Forever pushing the boundaries of Generative Art Jenny",
      "aims to leverage the power of blockchain to bring new life to the NFT space ",
    ]
  },
  collaborations: {
    title: "",
    lines: [
      "Forever Harambe is redefining collaborations",
      "Leveraging our own smart contracts,",
      "we aim to partner with the hottest collections",
      "to create unique 1 of 1’s that pay contributing artists",
      "DM for inquiries: @harambe_nfts on X"
    ]
  }
};

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;
  
  const selectedContent = content[type];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#977154] rounded-lg p-8 max-w-xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-gray-200"
        >
          <X size={24} />
        </button>
        
        <div className="space-y-6">
          <h2 className="text-white text-2xl tracking-[0.3em] font-light">
            {selectedContent.title}
          </h2>
          
          <div className="space-y-4">
            {selectedContent.lines.map((line, index) => (
              <p key={index} className="text-white tracking-[0.2em] font-light">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;