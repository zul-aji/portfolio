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
      "As my bachelor's thesis project at Tomsk State University, I developed an Android application focused on solving navigation challenges in dynamic airport environments. The project began as a personal challenge to implement pathfinding algorithms—a domain I had little prior experience in—while accounting for frequently changing layouts like Soekarno-Hatta International Airport's terminal structures. Without existing dataset, I designed the system to be easily reconfigurable for layout updates, ensuring long-term usability. Recognizing that navigation alone wouldn’t fully address travelers’ needs, I expanded the scope to integrate flight management features.",
      "The application offers two core functionalities that address different aspects of airport navigation. First, it provides step-by-step indoor navigation where users can select starting points and destinations, with zoomable maps for better orientation in complex terminal spaces. Second, it integrates flight management features including real-time flight searches by IATA code, complete schedules for arrivals and departures at Soekarno-Hatta, and customizable flight reminders. These combined features create a seamless experience where passengers can navigate terminals while staying informed about their flights, all within a single application.",
      "For the technical implementation, I selected the A* pathfinding algorithm for its efficiency and its grid-based nature that is easy to be reconfigured for often layout changes. The application was built using Flutter and Dart to ensure cross-platform compatibility from the start. Flight data is pulled in real-time through integration with the Airlabs API, the MVVM architecture was chosen to maintain clean separation of concerns and improve long-term maintainability, and HiveBox plugin for local storage. This project represents my ability to transform academic research into practical solutions while addressing real-world usability challenges.",
    ],
    image: getProjectImage('projects-angkasapp') || '/placeholder.jpg',
    link: "https://github.com/zul-aji/AngkasApp",
    linkHeader: "Github Repo↗"
  },
  {
    title: "YouMart",
    subtitle: "An android application for a local convenience store in Malaysia",
    description: [
      "During my studies at Universiti Teknologi Malaysia, I collaborated with a team to develop YouMart, an Android application designed to address a real-world problem faced by students at our dormitory’s convenience store. The store had unpredictable operating hours, and even when open, stock availability was inconsistent—making it frustrating for students who needed quick access to essentials. As part of a course project, we partnered with the store as stakeholders to create a digital solution that would bring transparency and convenience to both customers and the store owner.",
      "The app serves two user roles: customers and the store owner. For customers, it provides real-time updates on store status (open/closed) and live inventory, eliminating the need for physical checks. Users can browse available items, place orders for pickup, and view their order history—with the option to reorder past purchases seamlessly. Guest login is supported, though order history is restricted to registered accounts. On the admin side, the store owner can manage inventory (add/update/remove items), adjust opening hours, and monitor incoming orders—all through an intuitive interface. The order feature reduces in-store browsing time, streamlining operations for both parties.",
      "Built with Flutter and Dart, the app leverages GetX for state management and follows an MVC architecture for scalability. Firebase Firestore powers the user authentication process and real-time database, ensuring instant updates for inventory and store status—a critical feature for reliability. The project was a hands-on lesson in solving tangible problems with user-centric design and efficient technical execution."
    ],
    image: getProjectImage('projects-youmart') || '/placeholder.jpg',
    link: "https://github.com/zul-aji/youmart_mobitech",
    linkHeader: "Github Repo↗"
  },
  {
    title: '"Lungo" Android Application',
    subtitle: "An itinerary android application for travel planning",
    description: [
      "During my freelance work with Invencio Creative Tech, I collaborated on developing a travel itinerary application designed to streamline trip planning for visitors to Surabaya. The project aimed to solve the challenge of organizing travel schedules by connecting tourists with local businesses while providing a structured way to plan their entire trip—from accommodations to activities.",
      "The app serves two key user groups: merchants and travelers. Merchants can register their businesses (lodging, vehicle rentals, culinary spots, or excursions) with detailed profiles, including facilities, operating hours, photos, and descriptions. Travelers, after setting their arrival/departure dates, can build personalized itineraries by adding merchant services at specific times. The app also provides business details, past travel history tracking, and user account management—creating a seamless end-to-end travel planning experience.",
      "Built with Flutter and Dart, the app integrates Google Maps API for location services, SharedPreferences for local storage, and a custom backend API. Third-party login (Google/Apple) simplifies user onboarding. While currently focused on Surabaya, the architecture is designed for easy expansion to other cities, demonstrating scalable development practices."
    ],
    image: getProjectImage('projects-lungoapp') || '/placeholder.jpg',
  },
  {
    title: "Movie Catalog",
    subtitle: "A Movie Catalog Application with Kotlin",
    description: [
      "During my studies at Tomsk State University, I developed MovieConnect as part of an academic coursework project. The goal was to create a platform where film enthusiasts could easily discover movies while seeing authentic community reactions—solving the common challenge of finding reliable audience opinions before watching a film.",
      "The app combines essential user account management with comprehensive movie exploration. Users can securely register, log in, and manage their profiles while browsing an extensive movie catalog. Each film displays its average community rating, helping users quickly gauge popularity. The detailed movie screen goes further, offering complete information alongside user reviews—where anyone can contribute ratings (on a 10-point scale) and written feedback, either publicly or anonymously. To personalize the experience, users can save favorites to their own curated lists for quick access later.",
      "Built with Kotlin and XML in Android Studio, the application follows MVVM architecture for clean code organization and maintainability. SharedPreferences handles secure local storage of user tokens, ensuring persistent sessions. This project demonstrated my ability to transform academic requirements into a functional, user-friendly product with real-world utility."
    ],
    image: getProjectImage('projects-movieapp') || '/placeholder.jpg',
    link: "https://github.com/zul-aji/Movie-Catalog",
    linkHeader: "Github Repo↗"
  },
  {
    title: "TSU Educational Portal",
    subtitle: "TSU Educational Portal Android Application",
    description: [
      "As part of my coursework at Tomsk State University (TSU), I developed an academic portal application designed to streamline access to educational information. The project addressed the university's need for a centralized platform where students could view their academic details while giving administrators efficient tools to manage this information.",
      "The application features secure authentication (login/logout/password management) with distinct interfaces for students and administrators. Students can access their personalized academic dashboard containing class schedules, faculty information, study groups, and course details. For administrators, the system provides comprehensive CRUD functionality - enabling them to update academic records, modify course information, and approve new student account registrations through an intuitive management interface.",
      "Built with Kotlin and XML using Android Studio, the application delivers a responsive native Android experience. The clean architecture ensures reliable performance for both information retrieval and administrative updates, demonstrating my ability to create practical solutions for institutional needs."
    ],
    image: getProjectImage('projects-tsuedu') || '/placeholder.jpg',
    link: "https://github.com/zul-aji/TSU-Educational-Portal",
    linkHeader: "Github Repo↗"
  },
  {
    title: '"Lungo" Web Admin',
    subtitle: "A merchant management system for the Lungo application",
    description: [
      "Developed as part of the Lungo application ecosystem, this admin portal provides comprehensive merchant management capabilities for the platform's growing network. The web solution enables efficient oversight of all merchant lifecycle stages, from initial registration to active participation and subscription management, addressing the critical need for centralized business partner administration.",
      "The portal features six organized merchant lists to streamline operations. The review list allows admins to evaluate new applicant registrations with approve/reject functionality. Active merchants are tracked with subscription expiry monitoring, while separate lists maintain records of rejected applications and expired subscriptions for reference. The system also incorporates potential merchant discovery through a scraped prospects list from web data and a join-later list for deferred onboarding candidates. Across all lists, admins can access complete merchant profiles matching app data for informed decision-making.",
      "Built with React.js and JavaScript, the solution implements Axios for API integration and JWT for secure authentication. This technology combination delivers a responsive admin interface that effectively supports Lungo's merchant vetting and management processes at scale.",
    ],
    image: getProjectImage('projects-lungoweb') || '/placeholder.jpg',
  },
  {
    title: "Medical Information API",
    subtitle: "Medical Information System using .Net",
    description: [
      "Developed as academic coursework at Tomsk State University, this project created a secure API for doctors to manage and collaborate on patient medical records. The system was designed to address the need for organized digital record-keeping while enabling professional consultation among specialists - replacing fragmented paper-based documentation with a centralized digital solution.",
      "The API handles three core entities: patient data, doctor profiles, and consultation records. Doctors can store comprehensive patient information and create detailed consultation records including anamnesis, diagnoses, treatment plans, and follow-up requirements. A unique collaborative feature allows doctors within the same specialty to comment on cases - enabling peer review of diagnoses, treatment approaches, or general case discussion through threaded conversations. This creates a knowledge-sharing ecosystem while maintaining complete patient history documentation.",
      "Built with C# and .NET Framework in Visual Studio, the API implements professional-grade technologies: JWT for secure authentication, Entity Framework Core for database operations, and Microsoft SQL Server for reliable data storage. Swagger documentation ensures easy integration for frontend developers. This project demonstrated my ability to create secure, professional systems that meet strict healthcare data requirements."
    ],
    image: getProjectImage('projects-medapi') || '/placeholder.jpg',
    link: "https://github.com/zul-aji/Medical-Information-System-API",
    linkHeader: "Github Repo↗"
  },
  {
    title: "Food Delivery API",
    subtitle: "Food Delivery System using .Net",
    description: [
      "Developed as academic coursework at Tomsk State University, this project created a robust API to help traditional food establishments transition to online ordering. The system addresses the growing need for small food businesses to compete in the digital marketplace by providing them with essential e-commerce capabilities without requiring complex infrastructure.",
      "The API enables customers to browse restaurant menus, view dish details and ratings, and compile orders through a digital basket system. Users benefit from standard authentication features (registration, login, profile management) alongside intuitive ordering functionality - they can modify basket contents, review selections, and finalize purchases. Restaurant owners receive real-time order notifications and can update order statuses throughout the fulfillment process, creating a seamless workflow from order placement to delivery.",
      "Built with C# and .NET Framework in Visual Studio, the API employs professional development tools including JWT for secure authentication, Entity Framework Core for database operations, and Microsoft SQL Server for reliable data storage. The integration of Swagger documentation ensures easy adoption by frontend developers, making this a complete solution for food businesses entering the digital space."
    ],
    image: getProjectImage('projects-foodapi') || '/placeholder.jpg',
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
          className='h-auto w-full object-cover'
        />
        <div className='flex grow flex-row items-center justify-center px-3 py-5'>
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
          className='pointer-events-auto relative flex mx-5 sm:mx-35 lg:mx-75 h-[90vh] w-full flex-col overflow-hidden bg-gray-200'
        >
          {/* Close button - fixed on top */}
          <MorphingDialogClose className='fixed rounded-md p-1 top-9 right-9 sm:top-6 sm:right-6 bg-gray-300 text-black sm:text-zinc-50 sm:bg-transparent z-30' />

          {/* Scrollable content including image */}
          <div className="flex-1 overflow-y-auto">
            <MorphingDialogImage
              src={image}
              alt={`${title} by ${subtitle}`}
              className='h-auto w-full'
            />
            <div className='p-6'>
                <div className="flex justify-between items-center mx-4 mb-3">
                <MorphingDialogTitle className='text-2xl font-bold text-black'>
                  {title}
                </MorphingDialogTitle>
                {link && linkHeader && (
                  <a
                    className='text-black hover:text-[#88ccb4] transition-colors group'
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
                </div>
                <MorphingDialogSubtitle className='font-semibold text-zinc-600 mx-4'>
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
                    <p key={index} className='my-3 text-gray-500 text-justify mx-4'>
                    {paragraph}
                    </p>
                  ))}
                </MorphingDialogDescription>
            </div>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
