import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCss3,
  SiTypescript,
  SiBootstrap,
  SiGooglecolab,
  SiCnn,
  SiKubernetes,
  SiAmazonaws,
  SiPostgresql,
  SiJupyter,
  SiKeras,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiGithub,
} from "react-icons/si";
import { ImGit } from "react-icons/im";
import { DiDjango } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import {
  TbLetterY,
  TbLetterO,
  TbLetterL,
} from "react-icons/tb";
import { HiDatabase } from "react-icons/hi";


interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

interface SkillsBackType {
  name: string;
  icon: any;
  link: string;
}

interface SkillsFrontType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "SiJupyter",
    icon: <SiJupyter color='#000000dc' />,
    link: "https://jupyter.org/",
  },
  {
    name: "Colab",
    icon: <SiGooglecolab color='#000000dc' />,
    link: "https://colab.research.google.com/?hl=ko",
  },
  {
    name: "CNN",
    icon: <SiCnn color='#000000dc' />,
    link: "https://www.tensorflow.org/tutorials/images/cnn?hl=ko",
  },
  {
    name: "Keras",
    icon: <SiKeras color='#000000dc' />,
    link: "https://keras.io/",
  },
  {
    name: "Pytorch",
    icon: <SiPytorch color='#000000dc' />,
    link: "https://pytorch.org/",
  },  
  {
    name: "Pandas",
    icon: <SiPandas color='#000000dc' />,
    link: "https://pandas.pydata.org/",
  },  
  {
    name: "Numpy",
    icon: <SiNumpy color='#000000dc' />,
    link: "https://numpy.org/",
  },  
  {
    name: "Tensorflow",
    icon: <SiTensorflow color='#000000dc' />,
    link: "https://www.tensorflow.org/?hl=ko",
  },
  {
    name: "Yolo",
    icon: <TbLetterY color='#000000dc' />,
    link: "https://pjreddie.com/darknet/yolo/",
  },
  {
    name: "Yolo",
    icon: <TbLetterO color='#000000dc' />,
    link: "https://pjreddie.com/darknet/yolo/",
  },
  {
    name: "Yolo",
    icon: <TbLetterL color='#000000dc' />,
    link: "https://pjreddie.com/darknet/yolo/",
  },
  {
    name: "Yolo",
    icon: <TbLetterO color='#000000dc' />,
    link: "https://pjreddie.com/darknet/yolo/",
  },  
];

export const SkillsBackType: SkillsBackType[] = [
  {
    name: "Django",
    icon: <DiDjango color='#000000dc' />,
    link: "https://www.djangoproject.com/",
  },  
  {
    name: "Database",
    icon: <HiDatabase color='#000000dc' />,
    link: "https://www.oracle.com/kr/database/what-is-database/",
  },
  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes color='#000000dc' />,
    link: "https://kubernetes.io/ko/docs/concepts/overview/what-is-kubernetes/",
  },
  {
    name: "Amazonaws",
    icon: <SiAmazonaws color='#000000dc' />,
    link: "https://aws.amazon.com/ko/",
  },
  {
    name: "Postgresql",
    icon: <SiPostgresql color='#000000dc' />,
    link: "https://www.postgresql.kr/",
  },  
];

export const SkillsFrontType: SkillsFrontType[] = [
  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "Node.js",
    icon: <IoLogoNodejs color='#000000dc' />,
    link: "https://nodejs.org/",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color='#000000dc' />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color='#000000dc' />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Github",
    icon: <SiGithub color='#000000dc' />,
    link: "https://github.com/",
  },
];