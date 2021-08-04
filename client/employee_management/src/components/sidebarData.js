import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <IoIcons.IoMdBookmark />,
    cName: "nav-text",
  },
  {
    title: "Emails",
    path: "/emails",
    icon: <IoIcons.IoMdMail />,
    cName: "nav-text",
  },
  {
    title: "Tasks List",
    path: "/TasksList",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
