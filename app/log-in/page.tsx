

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Title from '@/components/ui/Title';
import LeftButton from '@/components/ui/LeftButton';



const LoginSignup = () => {
  return (
    <div className={`flex flex-col items-center justify-center relative min-h-[600px] `}>
      <Title>
        LOGIN / SIGN UP
      </Title>
      
      <h2 className="text-xl mb-12 tracking-[0.2em] text-black">
        Find Your Crew
      </h2>
      
      <button 
        className="w-full max-w-sm mb-8 py-2 px-2 rounded-xl relative group overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #C5B5FF 0%, #9F89FF 100%)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
         <span className="relative text-black font-medium">Continue with wallet</span>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </button>

      <LeftButton 
        href="/collections"
        className=''
      >
        Back to Collections
      </LeftButton>
    </div>
  );
};

export default LoginSignup;