// import { StyleSheet, Text, View, FlatList, Alert } from "react-native";

import { AiOutlineWifi } from "react-icons/ai";
import { MdMobileFriendly } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import { FaUpload } from "react-icons/fa";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "WIFI",
    icon: <AiOutlineWifi color='#000000dc' />,
    link: "http://localhost:3000/experience",
  },
  {
    title: "Mobile",
    icon: <MdMobileFriendly color='#000000dc' />,
    link: "http://localhost:3000/experience",
  },
  {
    title: "Camera",
    icon: <BsCameraFill color='#000000dc' />,
    link: "http://localhost:3000/experience",
  },
  {
    title: "Upload",
    icon: <FaUpload color='#000000dc' />,
    link: "http://localhost:3000/experience",
  },
];
