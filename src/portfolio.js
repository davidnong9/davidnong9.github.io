/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "David Nong",
  title: "Hi all, I'm David",
  subTitle: emoji(
    "A software engineer with experience in building web applications using Python, Flask, JavaScript and Tkinter."
  ),
  resumeLink:
    "https://davidnong9.github.io/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/davidnong9",
  linkedin: "http://www.linkedin.com/in/david-nong-493b732aa",
  gmail: "davidnong9@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOPER WHO LOVES TO BUILD COOL STUFF",
  skills: [
    emoji("⚡ Build web applications with React and Flask"),
    emoji("⚡ Develop backend systems and APIs"),
    emoji("⚡ Build and track data-driven applications"),
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js-square" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of California, San Diego",
      subHeader: "Bachelor of Science in Mathematics-Computer Science",
      companylogo: "https://logo.clearbit.com/ucsd.edu", // UCSD
      duration: "Graduated June 2020",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Consultant - Product Support",
      company: "Wiley Edge",
      date: "September 2021 – April 2023",
      companylogo: "https://logo.clearbit.com/wiley.com", // Wiley Edge
      desc: "Bridged communication between clients and engineering teams to resolve software issues.",
      descBullets: [
        "Reduced response time by 30% by coordinating between clients and engineering teams",
        "Authored and maintained product documentation and issue logs with 100% accuracy",
        "Coordinated cross-functional teams to streamline operations and meet product release deadlines"
      ]
    },
    {
      role: "Laptop Maintenance Support - Volunteer",
      company: "MEDA (Mission Economic Development Agency)",
      date: "April 2025 – September 2025",
      desc: "Restored and maintained laptops for community public use.",
      descBullets: [
        "Improved device performance and security for digital access programs",
        "Applied software updates and security patches to ensure full device compliance and usability"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the projects I have built",
  projects: [
    {
      projectName: "Keystroke Tracker",
      projectDesc:
        "A web-based keystroke tracking app built with Flask. Tracks your top 3 most-used keys in real time with bar and pie chart visualizations, and records session history. Includes a standalone desktop version built with Tkinter for system-wide tracking.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://top3-keystroke-tracker-3919d782d8aa.herokuapp.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/davidnong9/keystroke-tracker"
        }
      ]
    },
    {
      projectName: "Exampleville Permit Fee Calculator",
      projectDesc:
        "A permit fee calculator for the fictional city of Exampleville. Helps users estimate development permit fees based on property characteristics, with real-time data updates built using React and TypeScript.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/davidnong9/Exampleville-Calculator"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and programs I have completed",
  achievementsCards: [
    {
      title: "Google IT Professional Support Certificate",
      subtitle: "Completed via Coursera — July 2025",
      companylogo: "https://logo.clearbit.com/google.com", // Google/Coursera
      footerLink: []
    },
    {
      title: "Google Data Analytics Certificate",
      subtitle: "Completed via Coursera — September 2025",
      companylogo: "https://logo.clearbit.com/google.com", // Google/Coursera
      footerLink: []
    },
    {
      title: "Mission Techies IT Pre-Apprenticeship Program",
      subtitle: "Completed August 2025",
      companylogo: "https://logo.clearbit.com/missiontechies.org", // Mission Techies
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "415-755-7288",
  email_address: "davidnong9@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
