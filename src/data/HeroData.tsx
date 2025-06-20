import { TextEffect } from "@/blocks/TextAnimations/text-effect";

export function HeroData() {
  return (
    <div className='flex flex-col sm:space-y-2'>
      <TextEffect
        className="font-extrabold text-4xl sm:text-8xl"
        per='char'
        delay={0.5}
        speedReveal={2.0}
        speedSegment={0.3}
        preset="fade-in-blur"
      >
        A Portofolio!
      </TextEffect>
      <TextEffect
        per='char'
        delay={2}
        className='text-xl sm:text-3xl font-medium text-gray-300'
        preset='fade'
      >
        by Zulfiqar
      </TextEffect>
    </div>
  );
}
