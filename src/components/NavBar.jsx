import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    "General",
    "Business",
    "Technology",
    "Sports",
    "Health",
    "Science",
    "Entertainment",
  ];

  return (
    // <AppBar position="static" sx={{ backgroundColor: "#7B1E1E" }}>
    <AppBar position="sticky" sx={{ backgroundColor: "#7B1E1E" }}>
      <Toolbar>
        {/* App Title */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          HeadlineHub
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {categories.map((category) => (
            <Link
              key={category}
              to={`/${category.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 500,
              }}
            >
              {category}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
