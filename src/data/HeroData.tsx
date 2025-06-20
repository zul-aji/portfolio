import { TextEffect } from "@/blocks/TextAnimations/text-effect";

export function HeroData() {
  return (
    <div className='flex flex-col sm:space-y-2'>
      <TextEffect
        className="font-extrabold text-4xl sm:text-9xl"
        per='char'
        delay={0.3}
        speedReveal={1.5}
        speedSegment={0.3}
        preset="fade-in-blur"
      >
        the Portfolio.
      </TextEffect>
      <TextEffect
        per='char'
        delay={1.7}
        className='text-sm sm:text-3xl font-medium text-gray-300'
        preset='fade'
      >
        by Zulfiqar
      </TextEffect>
    </div>
  );
}
