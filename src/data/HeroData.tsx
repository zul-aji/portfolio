import { TextEffect } from "@/blocks/TextAnimations/text-effect";

export function HeroData() {
  return (
    <div className='flex flex-col sm:space-y-2'>
      <TextEffect
        className="font-extrabold text-5xl sm:text-9xl"
        per='char'
        delay={0.5}
        speedReveal={2.0}
        speedSegment={0.3}
        preset="fade-in-blur"
      >
        a Portfolio
      </TextEffect>
      <TextEffect
        per='char'
        delay={2}
        className='text-md sm:text-3xl font-medium text-gray-300'
        preset='fade'
      >
        by Zulfiqar
      </TextEffect>
    </div>
  );
}
