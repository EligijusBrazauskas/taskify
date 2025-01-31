import { StatusColor } from "@/interfaces/status.interface";

export const getStatusColor = (color: StatusColor = "secondary") => {
  switch (color) {
    case "secondary": {
      return "bg-secondary";
    }
    case "blue": {
      return "bg-blue-400";
    }
    case "red": {
      return "bg-red-400";
    }
    case "orange": {
      return "bg-orange-400";
    }
    case "yellow": {
      return "bg-yellow-400";
    }
    case "green": {
      return "bg-green-400";
    }
    default: {
      return "bg-secondary";
    }
  }
};
