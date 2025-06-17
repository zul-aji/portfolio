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
    title: "AngkasApp",
    subtitle: "An android application for navigation in Soekarno-Hatta Airport",
    description: [
      "This academic project, developed for my bachelor’s thesis, aims to simplify navigation for travelers passing through Soekarno-Hatta Airport. Airports can often be confusing, so the app provides step-by-step guidance with a zoomable map and directional lines. Users can select their starting point and destination, or simply pick a location to see its position on the map.",
      "The app also includes real-time lists of departing and arriving flights. Travelers can search for flights using IATA codes and set reminders for departures or arrivals, helping them stay informed about their travel plans.",
      "Built with Flutter and Dart, the app integrates the AirLabs API for flight data and features custom airport maps with pathfinding powered by the A* algorithm. For local data storage, such as saved flights and reminders, the app uses Hive.",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://github.com/zul-aji/AngkasApp",
    linkHeader: "Github Repo↗"
  },
  {
    title: "YouMart",
    subtitle: "An android application for a local convenience store in Malaysia",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://github.com/zul-aji/youmart_mobitech",
    linkHeader: "Github Repo↗"
  },
  {
    title: "Movie Catalog",
    subtitle: "A Movie Catalog Application with Kotlin",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://github.com/zul-aji/Movie-Catalog",
    linkHeader: "Github Repo↗"
  },
  {
    title: "TSU Educational Portal",
    subtitle: "TSU Educational Portal Android Application",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://github.com/zul-aji/TSU-Educational-Portal",
    linkHeader: "Github Repo↗"
  },
  {
    title: " Medical Information System",
    subtitle: "Medical Information System API using .Net",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://github.com/zul-aji/Medical-Information-System-API",
    linkHeader: "Github Repo↗"
  },
  {
    title: "Food Delivery System",
    subtitle: "Food Delivery System API using .Net",
    description: [
      "Little is known about the life of Édouard-Wilfrid Buquet...",
      "Research conducted in the 1970s revealed that he'd designed...",
    ],
    image: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
    link: "https://github.com/zul-aji/Food-Delivery-API",
    linkHeader: "Github Repo↗"
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
        className='flex max-w-[380px] md:max-w-[400px] flex-col overflow-hidden bg-gray-300/20 backdrop-blur-xl'
      >
        <MorphingDialogImage
          src={image}
          alt={`${title} by ${subtitle}`}
          className='h-58 w-full object-cover'
        />
        <div className='flex grow flex-row items-center justify-center px-3 pb-5'>
          <div className='items-start'>
            <MorphingDialogTitle className='text-white font-semibold'>
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-gray-300'>
              {subtitle}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex mx-55 h-[90vh] w-full flex-col overflow-hidden bg-white'
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
              <MorphingDialogTitle className='text-2xl font-bold text-black mb-3'>
                {title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className='font-semibold text-zinc-700'>
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
                  <p key={index} className='mt-3 text-gray-500 text-justify'>
                  {paragraph}
                  </p>
                ))}
                {link && linkHeader &&(
                  <a
                  className='mt-5 inline-flex text-black hover:text-[#88ccb4] transition-colors group'
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
