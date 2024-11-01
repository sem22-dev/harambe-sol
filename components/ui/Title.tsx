
export default function Title({ children }: {children: React.ReactNode}) {
    return (
        <h1 className="text-4xl md:tracking-[0.3em] absolute top-20 font-extrabold text-white">
            {children}
        </h1>
    );
}
