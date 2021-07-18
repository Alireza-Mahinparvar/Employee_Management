import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Emails",
    path: "/emails",
    icon: <IoIcons.IoMdMail />,
    cName: "nav-text",
  },
  {
    title: "Performance Reviews",
    path: "/performanceReview",
    icon: <FaIcons.FaRegStickyNote />,
    cName: "nav-text",
  },
  {
    title: "HR Team",
    path: "/HR-Resources",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Mo Money Mo Milk",
    path: "/support",
    icon: <FaIcons.FaMoneyBillWave />,
    cName: "nav-text",
  },
];
