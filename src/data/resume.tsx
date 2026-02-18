import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
    name: "Vansh",
    initials: "V",
    url: "https://vansh-portfolio.vercel.app",
    resume: "/Ribadiya_Vansh.pdf",
    location: "India",
    locationLink: "https://www.google.com/maps/place/india",
    description:
        "Entrepreneur & IT Developer. I design, deploy, and manage secure, scalable cloud infrastructure.",
    summary:
        "I am an entrepreneur and IT developer focused on building scalable digital products and growth-driven brands. My work sits at the intersection of technology, business strategy, and execution.\n\nI am an entrepreneur with the capability to conceptualize, establish, and scale industrial ventures — including manufacturing plants, operational firms, and structured business ecosystems.",
    avatarUrl: "/memoji_avatar_male.png",
    skillCategories: {
        "Web Development": [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Node.js",
            "PHP",
            "Git",
        ],
    },
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
    ],
    contact: {
        email: "vanshribadiya3@gmail.com",
        tel: "+91 7878224846",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Ribadiyavansh",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/vansh-ribadiyaa-5579482b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                icon: Icons.linkedin,
                navbar: true,
            },
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/vanshribadiyaa_?igsh=amM3N2toOWp4YXQ3",
                icon: Icons.instagram,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,
                navbar: false,
            },
        },
    },

    work: [
        {
            company: "Simform Software LLP",
            href: "#",
            badges: [],
            location: "Ahmedabad",
            title: "Frontend Developer",
            logoUrl: "/simform_logo.webp",
            start: "April 2025",
            end: "Auguest 2025",
            description:
                "Simform is a digital engineering and software development company. It helps businesses build scalable digital products and provides agile teams to extend development capabilities.",
        },
    ],
    education: [
        {
            school: "Atmiya University",
            href: "https://atmiyauni.ac.in",
            degree: "Bachelor of Computer Applications (BCA)",
            logoUrl: "https://atmiyauni.ac.in/images/logo.png",
            start: "2021",
            end: "2026",
        },
    ],
    projects: [
        {
            title: "Placement Management System",
            href: "https://github.com/Ribadiyavansh/placementpro",
            dates: "Nov 2023 - Dec 2023",
            active: true,
            description:
                "Web-based placement tracking platform with student profile management, resume builder, and job application features.",
            technologies: [
                "PHP",
                "MySQL",
                "HTML/CSS",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://github.com/Ribadiyavansh/placementpro",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Ribadiyavansh/placementpro",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "QuickBite",
            href: "https://github.com/Ribadiyavansh/quickbite",
            dates: "June 2023 - July 2023",
            active: true,
            description:
                "Online food ordering UI featuring menu browsing, cart functionality, and a smooth order placement flow.",
            technologies: [
                "JavaScript",
                "Frontend",
                "UI/UX",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://github.com/Ribadiyavansh/quickbite",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Ribadiyavansh/quickbite",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
    ],
    hackathons: [],
} as const;
