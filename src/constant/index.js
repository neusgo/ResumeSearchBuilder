import help1 from "../assets/help_key_feature.png";
import help2 from "../assets/help_faq.png";
import help3 from "../assets/help_guide.png";
import avatar1 from "../assets/avatar/1.jpg";
import avatar2 from "../assets/avatar/2.jpg";
import avatar3 from "../assets/avatar/3.jpg";

// navbar page

export const navLinks = [
  {
    id: "",
    path: "/",
    title: "Home",
  },
  {
    id: "talents",
    path: "/talents",
    title: "Talents",
  },
  {
    id: "about",
    path: "/about",
    title: "About",
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact",
  },
  {
    id: "help",
    path: "/help",
    title: "Help",
  },
];

// home page

export const stats = [
  {
    id: "stat-1",
    title: "Candidates",
    value: 3200,
  },
  {
    id: "stat-2",
    title: "Jobs",
    value: 875,
  },
  {
    id: "stat-3",
    title: "Companies",
    value: 65,
  },
];

export const clientTestimonials = [
  {
    id: 1,
    src: avatar1,
    title: "Perfect job",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- John Doe",
    clientDesignation: "Founder, Arrow",
  },
  {
    id: 2,
    src: avatar2,
    title: "Minimal of time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- Rocky Hych",
    clientDesignation: "CTO, Upside Down",
  },
  {
    id: 3,
    src: avatar3,
    title: "Perfect Candidate",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- John Doe",
    clientDesignation: "Founder, Arrow",
  },
  {
    id: 4,
    src: avatar1,
    title: "Just Perfect",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- Rocky Hych",
    clientDesignation: "CTO, Upside Down",
  },
  {
    id: 5,
    src: avatar2,
    title: "Amazing response",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- John Doe",
    clientDesignation: "Founder, Arrow",
  },
  {
    id: 6,
    src: avatar3,
    title: "Responsive template",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- John Doe",
    clientDesignation: "Founder, Arrow",
  },
  {
    id: 7,
    src: avatar1,
    title: "Built with Bootstrap",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- John Doe",
    clientDesignation: "Founder, Arrow",
  },
  {
    id: 8,
    src: avatar2,
    title: "Minimal and Clean",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- Rocky Hych",
    clientDesignation: "CTO, Upside Down",
  },
  {
    id: 9,
    src: avatar3,
    title: "Pixel Perfect design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    clientName: "- John Doe",
    clientDesignation: "Founder, Arrow",
  },
];

// help page

export const help_cards = [
  {
    id: 1,
    src: help1,
    title: "Key Features",
    description: "Explore the fundamentals of ResumenSearch feature by feature",
  },
  {
    id: 2,
    src: help2,
    title: "FAQ & Troubleshooting",
    description: "Have a question about something specific? Find the answer in the FAQ section",
  },
  {
    id: 3,
    src: help3,
    title: "Guide Center",
    description: "Ideas and best practices for getting organized with ResumenSearch",
  },
];

export const faqs = [
  {
    panelName: "panel1",
    panelContent: "panel1d-content",
    panelId: "panel1d-header",
    panelTitle: "How does the profile search function work?",
    panelDescription:
      "Our profile search utilizes advanced algorithms to analyze the descriptions and characteristics of profiles registered on our platform. Simply input a description, and our system will search for relevant matches to display profiles that best fit your criteria.",
  },
  {
    panelName: "panel2",
    panelContent: "panel2d-content",
    panelId: "panel2d-header",
    panelTitle: "What types of profiles can I search for on the platform?",
    panelDescription:
      "Our platform allows you to search for a wide range of profiles, including professionals, talents, employees, and more. You can search for profiles based on skills, experience, location, and other specific attributes to find the right person for your needs.",
  },
  {
    panelName: "panel3",
    panelContent: "panel3d-content",
    panelId: "panel3d-header",
    panelTitle: "Is registration necessary to use the profile search?",
    panelDescription:
      "Yes, in order to access the profile search and view search results, registration on our platform is required. Registration is free and grants you access to a variety of options and functionalities to find profiles that match your requirements.",
  },
  {
    panelName: "panel4",
    panelContent: "panel4d-content",
    panelId: "panel4d-header",
    panelTitle: "How can I contact the profiles I find in the search?",
    panelDescription:
      "Once you find profiles of interest, you can access their details and contact them directly through our platform. Depending on the profile's privacy settings, you can send messages, emails, or even schedule meetings to discuss opportunities and requirements.",
  },
  {
    panelName: "panel5",
    panelContent: "panel5d-content",
    panelId: "panel5d-header",
    panelTitle: "How can I improve the results of my profile search?",
    panelDescription:
      "To get more accurate and relevant results, we recommend using specific keywords in your search. You can also utilize additional filters such as location, experience level, or category to refine your results. The more details you provide in your search, the more precise the results you receive.",
  },
];
