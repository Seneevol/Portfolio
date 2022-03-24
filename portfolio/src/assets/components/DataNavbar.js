import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaGithub,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Accueil",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "#creations",
    text: "Créations",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "#contact",
    text: "Contact",
    icon: <FaFolderOpen />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/Seneevol",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/nakad-ibrahim/",
    icon: <FaLinkedin />,
  },
];
