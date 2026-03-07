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

// Import all images from the projects directory
const projectImages = import.meta.glob<string>('@/assets/images/projects-*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default'
});

// Helper function to get image path
const getProjectImage = (imageName: string) => {
    const key = Object.keys(projectImages).find(path => path.includes(imageName));
    return key ? projectImages[key] : null;
};

export interface ProjectData {
  image: string;
  title: string;
  subtitle: string;
  description: string[];
  tools: string[];
  link?: string;
  linkHeader?: string;
}

export const projectsData: ProjectData[] = [
  {
    image: getProjectImage('projects-lungoweb') || '/placeholder.jpg',
    title: '"Lungo" Web Admin',
    subtitle: "Merchant management and onboarding system",
    description: [
      "Developed as part of the Lungo travel platform ecosystem, this web admin portal was designed to support the operational management of merchants joining the platform. The project focused on translating operational needs into a structured system that could efficiently handle merchant onboarding, evaluation, and lifecycle tracking.",
      
      "Working closely with product and development teams, I helped define workflows for merchant registration, verification, and subscription management. The portal organizes merchants into multiple operational states including pending review, active merchants, rejected applications, expired subscriptions, and potential prospects, enabling administrators to track the entire merchant pipeline from discovery to activation.",
      
      "The system was designed to support operational decision-making by providing clear merchant profiles, structured data visibility, and centralized management tools. This project demonstrates my ability to translate business processes into scalable technical systems that support platform growth."
    ],
    tools: [
      "React",
      "JavaScript",
      "REST API",
      "Axios",
      "JWT"
    ]
  },
  {
    image: getProjectImage('projects-lungoapp') || '/placeholder.jpg',
    title: '"Lungo" Travel Planning App',
    subtitle: "Itinerary planning and merchant marketplace platform",
    description: [
      "Developed during my work with Invencio Creative Tech, this mobile application was designed to simplify travel planning by connecting tourists with local businesses while enabling structured itinerary creation.",
      
      "The platform supports two primary stakeholders: merchants and travelers. Merchants can onboard their businesses by submitting service details, facilities, schedules, and media assets, while travelers can create personalized travel itineraries by selecting services across accommodations, transportation, culinary experiences, and activities.",
      
      "My role involved translating product requirements into functional features, structuring user flows for both merchant and traveler experiences, and ensuring the system could scale to support additional cities in the future."
    ],
    tools: [
      "Flutter",
      "Dart",
      "Google Maps API",
      "REST API",
      "Third Party Login"
    ]
  },
  {
    image: getProjectImage('projects-youmart') || '/placeholder.jpg',
    title: "YouMart",
    subtitle: "Digital ordering system for a dormitory convenience store",
    description: [
      "Developed during my studies at Universiti Teknologi Malaysia, YouMart was created to solve a real operational issue faced by a local dormitory convenience store: inconsistent opening hours and lack of visibility into available inventory.",
      
      "Our team collaborated directly with the store owner to understand operational challenges and translate them into a digital solution that improved transparency for customers while simplifying store management.",
      
      "The resulting system enables customers to check real-time store status, browse available items, and place pickup orders, while the store owner can manage inventory, update operating hours, and monitor incoming orders. This project demonstrates practical stakeholder collaboration and translating business problems into digital solutions."
    ],
    tools: [
      "Flutter",
      "Dart",
      "Firebase Firestore",
      "GetX"
    ],
    link: "https://github.com/zul-aji/youmart_mobitech",
    linkHeader: "Github Repo↗"
  },
  {
    image: getProjectImage('projects-angkasapp') || '/placeholder.jpg',
    title: "AngkasApp",
    subtitle: "Indoor navigation and flight management application",
    description: [
      "Developed as my bachelor's thesis project at Tomsk State University, AngkasApp addresses the challenge of navigating complex airport environments such as Soekarno-Hatta International Airport.",
      
      "The project began with researching how passengers navigate dynamic airport layouts where terminals in soekarno-hatta that changes frequently. To address this, I designed a navigation system capable of adapting to layout updates while maintaining accurate route guidance.",
      
      "Beyond navigation, the product scope expanded to include integrated flight management features such as real-time flight searches, arrival and departure schedules, and personalized flight reminders. The project demonstrates my ability to identify user needs, expand product scope strategically, and design solutions that improve overall traveler experience."
    ],
    tools: [
      "Flutter",
      "Dart",
      "A* Algorithm",
      "AirLabs API",
      "HiveBox",
      "MVVM"
    ],
    link: "https://github.com/zul-aji/AngkasApp",
    linkHeader: "Github Repo↗"
  },
];

export function ProjectsContainer({ 
  image, 
  title, 
  subtitle, 
  description,
  tools,
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
        className='flex max-w-[380px] md:max-w-[400px] flex-col overflow-hidden bg-gray-300/20 backdrop-blur-xs'
      >
        <MorphingDialogImage
          src={image}
          alt={`${title} by ${subtitle}`}
          className='h-auto w-full object-cover'
        />
        <div className='flex grow flex-row items-center justify-center px-3 py-5'>
          <div className='items-start'>
            <MorphingDialogTitle className='text-white text-sm sm:text-xl font-semibold'>
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-gray-300 text-xs sm:text-lg'>
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
          className='pointer-events-auto relative flex mx-5 my-2 sm:mx-35 lg:mx-75 h-[90vh] w-full flex-col overflow-hidden bg-gray-200'
        >
          {/* Close button - fixed on top */}
          <MorphingDialogClose className='fixed rounded-md p-1 top-9 right-9 sm:top-6 sm:right-6 bg-gray-300 text-[#17301C] sm:text-zinc-50 sm:bg-transparent z-30' />

          {/* Scrollable content including image */}
          <div className="flex-1 overflow-y-auto mb-5">
            <MorphingDialogImage
              src={image}
              alt={`${title} by ${subtitle}`}
              className='h-auto w-full'
            />
            <div className='p-6'>
                <div className="flex justify-between items-center mx-1 sm:mx-4 mb-3">
                <MorphingDialogTitle className='text-2xl font-bold text-[#17301C]'>
                  {title}
                </MorphingDialogTitle>
                {link && linkHeader && (
                  <a
                    className='text-[#17301c] hover:text-[#88ccb4] transition-colors group'
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                  {linkHeader.slice(0, -1)}
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                  </a>
                )}
                </div>
                <MorphingDialogSubtitle className='font-semibold text-[#17301c] mx-1 sm:mx-4'>
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
                    <p key={index} className='my-3 font-normal text-[#17301C] text-justify mx-1 sm:mx-4'>
                    {paragraph}
                    </p>
                  ))}
                </MorphingDialogDescription>
                <div className="flex flex-wrap gap-3 mt-5 mx-1 sm:mx-3">
                  {tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 text-sm md:text-base rounded-full text-[#17301c] border border-[#17301c]
                               transition-all duration-500 hover:bg-[#88ccb4]/20 hover:border-[#88ccb4] hover:-translate-y-0.5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
            </div>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
