import { 
    MorphingDialog, 
    MorphingDialogTrigger, 
    MorphingDialogImage, 
    MorphingDialogTitle, 
    MorphingDialogSubtitle, 
    MorphingDialogContainer, 
    MorphingDialogContent, 
    MorphingDialogDescription, 
    MorphingDialogClose 
} from '@/blocks/Components/MorphingDialog';
import { PlusIcon } from 'lucide-react';

export interface ProjectData {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  link?: string;
  linkHeader?: string;
}

export const projectsData: ProjectData[] = [
  {
    title: "EB27",
    subtitle: "Edouard Wilfrid Buquet",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://www.are.na/block/12759029",
    linkHeader: "Github↗"
  },
  {
    title: "EB27",
    subtitle: "Edouard Wilfrid Buquet",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://www.are.na/block/12759029",
    linkHeader: "Github↗"
  },
  {
    title: "EB27",
    subtitle: "Edouard Wilfrid Buquet",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://www.are.na/block/12759029",
    linkHeader: "Github↗"
  },
  {
    title: "EB27",
    subtitle: "Edouard Wilfrid Buquet",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://www.are.na/block/12759029",
    linkHeader: "Github↗"
  },
  {
    title: "EB27",
    subtitle: "Edouard Wilfrid Buquet",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://www.are.na/block/12759029",
    linkHeader: "Github↗"
  },
  {
    title: "EB27",
    subtitle: "Edouard Wilfrid Buquet",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://www.are.na/block/12759029",
    linkHeader: "Github↗"
  },
];

export function ProjectsContainer({ 
  title, 
  subtitle, 
  description, 
  image, 
  link,
  linkHeader 
}: ProjectData) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[350px] md:max-w-[450px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <MorphingDialogImage
          src={image}
          alt={`${title} by ${subtitle}`}
          className='h-58 w-full object-cover'
        />
        <div className='flex grow flex-row items-start justify-between px-3 py-2'>
          <div>
            <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
              EB27
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              Edouard Wilfrid Buquet
            </MorphingDialogSubtitle>
          </div>
          <button
            type='button'
            className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-label='Open dialog'
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex mx-55 h-[90vh] w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
        >
          {/* Close button - fixed on top */}
          <MorphingDialogClose className='fixed top-6 right-6 text-zinc-50 z-30' />

          {/* Scrollable content including image */}
          <div className="flex-1 overflow-y-auto">
            <MorphingDialogImage
              src={image}
              alt={`${title} by ${subtitle}`}
              className='h-auto w-full'
            />
            <div className='p-6'>
              <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                {title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                {subtitle}
              </MorphingDialogSubtitle>
              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                {description.map((paragraph, index) => (
                  <p key={index} className='mt-2 text-zinc-500 dark:text-zinc-500'>
                    {paragraph}
                  </p>
                ))}
                {link && linkHeader &&(
                  <a
                    className='mt-2 inline-flex text-zinc-500 hover:text-[#88ccb4] transition-colors group'
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {linkHeader.slice(0, -1)}
                    <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                    </span>
                  </a>
                )}
              </MorphingDialogDescription>
            </div>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
