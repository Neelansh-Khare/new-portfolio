import dynamic from 'next/dynamic';

const ShaderAnimation = dynamic(() => import('@/components/ui/shader-animation').then((mod) => mod.ShaderAnimation), { ssr: false });

export function ShaderSection() {
  return (
    <div className="relative flex h-[500px] md:h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-border/50">
      <ShaderAnimation />
      <span className="absolute pointer-events-none z-10 text-center text-4xl md:text-6xl lg:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white drop-shadow-lg">
        Selected Work
      </span>
    </div>
  )
}

