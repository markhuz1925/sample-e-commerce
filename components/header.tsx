"use client";

import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Montserrat } from "next/font/google";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{ bgcolor: "#23856D" }}
        pt={"9px"}
        pb={"3px"}
        px={"24px"}
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box py={"10px"} gap={"10px"} display={"flex"} alignItems={"center"}>
          <Box gap={"5px"} display={"flex"} alignItems={"center"}>
            <FiPhone size={16} color="white" />
            <Typography
              color={"white"}
              variant="h6"
              component="h6"
              fontSize={"14px"}
              fontWeight={700}
            >
              (225) 555-0118
            </Typography>
          </Box>
          <Box gap={"5px"} display={"flex"} alignItems={"center"}>
            <FiMail size={16} color="white" />
            <Typography
              color={"white"}
              variant="h6"
              component="h6"
              fontSize={"14px"}
              fontWeight={700}
            >
              michelle.rivera@example.com
            </Typography>
          </Box>
        </Box>
        <Box py={"10px"}>
          <Typography
            color={"white"}
            variant="h6"
            component="h6"
            fontSize={"14px"}
            fontWeight={700}
          >
            Follow Us and get a chance to win 80% off
          </Typography>
        </Box>
        <Box py={"10px"} gap={"10px"} display={"flex"}>
          <Typography
            color={"white"}
            variant="h6"
            component="h6"
            fontSize={"14px"}
            fontWeight={700}
          >
            Follow Us :
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={"5.5px"}>
            <FaInstagram size={16} color="white" />
            <FaYoutube size={16} color="white" />
            <FaFacebook size={16} color="white" />
            <FaTwitter size={16} color="white" />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
