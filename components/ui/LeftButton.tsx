import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LeftButton({children, href, className} : {children: React.ReactNode, href: string, className: string}) {
    return (
        <Link 
        href={href}
        className={` ${className} inline-flex  items-center px-3 py-1 border text-sm tracking-[0.2em] border-black rounded-xl relative group overflow-hidden text-black `}
      >
        <span className="flex items-center relative z-10">
          <ChevronLeft size={16} className="mr-4" />
          <span>{children}</span>
        </span>
        <div 
          className="absolute right-0 top-0 bottom-0 w-[30%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)'
          }}
        />
      </Link>
    )
}