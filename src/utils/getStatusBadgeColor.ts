import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { RiProgress6Line } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import React from "react";

export const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 border-green-500/30";
    case "In Progress":
      return "bg-yellow-500/20 border-yellow-500/30";
    case "Coming Soon":
      return "bg-blue-500/20 border-blue-500/30";
    default:
      return "bg-gray-500/20 border-gray-500/30";
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-green-400";
    case "In Progress":
      return "text-yellow-400";
    case "Coming Soon":
      return "text-blue-400";
    default:
      return "text-gray-400";
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "Completed":
      return React.createElement(IoCheckmarkDoneCircleSharp, {
        size: 20,
        className: "text-green-400",
      });
    case "In Progress":
      return React.createElement(RiProgress6Line, {
        size: 20,
        className: "text-yellow-400",
      });
    case "Coming Soon":
      return React.createElement(GiSandsOfTime, {
        size: 20,
        className: "text-blue-400",
      });
    default:
      return React.createElement(MdCancel, {
        size: 20,
        className: "text-gray-400",
      });
  }
};
