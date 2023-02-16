import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { FC, ReactNode } from "react";
// import { useCurrentUser } from "../../models/user/user-hooks";

interface LayoutProps {
  children: ReactNode;
  avoidPaperOnLayout?: boolean;
}
export const Layout: FC<LayoutProps> = ({ children, avoidPaperOnLayout }) => {
  //   useCurrentUser();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeigh: "100vh !important",
        backgroundColor: "white",
      }}
    >
      <main
        style={{
          height: "100vh",
          position: "absolute",
          width: "-webkit-fill-available",
          backgroundColor: "white",
        }}
        children={children}
      />
    </Box>
  );
};
