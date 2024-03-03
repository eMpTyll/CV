import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { TranscriptIcon } from "@/components/icons/TranscriptIcon";

export const RESUME_DATA = {
  name: "Pham Manh Tung",
  initials: "BJ",
  location: "136, Vo Chi Cong, Cau Giay, Ha Noi, Viet Nam",
  locationLink: "https://maps.app.goo.gl/8MGUf5X7ZLuQaCPY8",
  about:
    "Cybersecurity student with a strong desire to enhance knowledge and practical skills in the field",
  summary:
    "As a Cybersecurity student, I am driven by a strong desire to enhance my knowledge and practical skills in the field. I am committed to learning and applying the latest security practices to ensure the highest level of protection for network system and website.",
  avatarUrl: "https://avatars.githubusercontent.com/u/115938076?s=400&u=580c3259ffce7fc59a66c74e162b6b2b5cc15d27&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "phammanhtung2607@gmail.com",
    tel: "0984996213",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/eMpTyll",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manh-tung-pham-6142b2279/",
        icon: LinkedInIcon,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100005089264504",
        icon: FacebookIcon,
      },
      {
        name: "Transcript",
        url: "https://drive.google.com/file/d/1gjAMSGTvzlYwYmLebmWfLXmsDkhXGX2h/view?usp=sharing",
        icon: TranscriptIcon,
      }
    ],
  },
  education: [
    {
      school: "Thuy Loi University",
      degree: "Bachelor's Degree in Cybersecurity",
      start: "2022",
      end: "PRESENT",
    },
  ],
  certificate: [
    {
      name: "Google Cybersecurity Certificate",
      link: "https://www.credly.com/badges/dfe3b663-9719-46bd-8086-d931d95f0ab2/public_url",
      start: "2024",
      end: "PRESENT",
    },
  ],
  work: [
    {
      company: "ASEAN Student Contest on Information Security",
      link: "https://ascis.vnisa.org.vn/",
      badges: [""],
      title: "TLU CyanWater",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description: "I am a member of TLU CyanWater, a team from Thuy Loi University, that joined the ASEAN Student Contest on Information Security (ASCIS) in 2023. ASCIS is a Capture the Flag contest that challenges the information security skills of students from ASEAN universities."
    },
    {
      company: "CLB TAS - TLU Algorithm and Security",
      link: "https://www.facebook.com/tastlu2023",
      badges: [""],
      title: "Specialized Committee",
      logo: ClevertechLogo,
      start: "2022",
      end: "PRESENT",
      description:
        "This is a group of members who focus on researching academic issues and guiding other members. In addition, the group also represents the club and the school in participating in CTF and coding competitions both domestically and internationally.",
    },
    {
      company: "BKCTF, PwC: HackADay, etc.",
      link: "",
      badges: [],
      title: "Competitor",
      logo: JojoMobileLogo,
      start: "2022",
      end: "PRESENT",
      description:
        "I always strive to participate in as many CTF competitions as possible to gain experience and identify my own shortcomings. From there, I draw lessons to develop myself.",
    }/*,
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },*/
  ],
  skills: [
    "C++",
    "Comprehend English docs",
    "Research",
    "Basic of OSI model",
    "Basic of OSI protocols"
  ],
  projects: [
    {
      title: "VANET",
      techStack: [
        "OMNet++",
        "C++",
        "INET Framework",
        "SUMO",
        "Veins Framework",
        "WebRTC",
      ],
      description: "A project to simulate a wireless ad-hoc network that provides communications among vehicles with OBUs and nearby RSUs",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/eMpTyll/VANET",
      },
    },
  ],
} as const;
