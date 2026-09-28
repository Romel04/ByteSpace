export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
] as const;

export const LOGO_STRIP = ["waves", "burst", "bolt", "petals", "rings"] as const;

export const CATEGORY_CHIPS = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media",
  "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts",
  "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity",
  "Web Development", "Data Science", "Cooking",
] as const;

export type Course = {
  id: string;
  title: string;
  creator: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  price: number;
  students: string;
};

const base = {
  creator: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
  students: "26+",
};

export const COURSES: Course[] = [
  { ...base, id: "figma-basics", title: "Learn Figma from Basic", image: "/images/courses/figma-basics.jpg" },
  { ...base, id: "digital-asset", title: "Build Digital Asset", image: "/images/courses/digital-asset.jpg" },
  { ...base, id: "big-data", title: "The Power of Big Data", image: "/images/courses/big-data.jpg" },
  { ...base, id: "productivity", title: "Balancing Productivity and Self-Care", image: "/images/courses/productivity.jpg" },
  { ...base, id: "money-management", title: "Mastering Money Management", image: "/images/courses/money-management.jpg" },
  { ...base, id: "startup", title: "From Idea to Startup Success", image: "/images/courses/startup.jpg" },
];

export const LEARNING_PATHS = [
  { label: "Design", icon: "design" },
  { label: "Development", icon: "development" },
  { label: "IT & Software", icon: "it" },
  { label: "Business", icon: "business" },
  { label: "Marketing", icon: "marketing" },
  { label: "Photography", icon: "photography" },
] as const;

export const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const CREATOR_BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/images/people/sarah.jpg",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/images/people/james.jpg",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/images/people/alex.jpg",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const FOOTER_COLUMNS = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export const AVATARS = [1, 2, 3, 4, 5].map((n) => `/images/people/avatar-${n}.jpg`);
