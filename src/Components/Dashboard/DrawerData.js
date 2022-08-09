import * as React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const DrawerData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About Us",
    path: "/aboutus",
    icon: <InfoIcon />,
  },
]

export default DrawerData;
