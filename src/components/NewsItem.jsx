import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import NewsImg from "../Images/News.png";
const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, source, author, publishedAt } =
    props;

  return (
    <Card
      sx={{
        maxWidth: 360,
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Image Section with Overlay Badge */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={
            // imageUrl || "../../public/News.png"
            imageUrl || NewsImg
          }
          alt="news"
        />

        <Chip
          label={source ? source : "Unknown"}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor: "#7B1E1E",
            color: "#fff",
            fontWeight: 500,
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            lineHeight: 1.3,
            mb: 1,
          }}
        >
          {title ? title.slice(0, 65) : "No title available"}
        </Typography>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description ? description.slice(0, 100) : "No description available"}
        </Typography>

        {/* Author + Date */}
        <Box
          sx={{
            fontSize: "0.75rem",
            color: "text.secondary",
            borderTop: "1px solid #eee",
            pt: 1,
          }}
        >
          <Typography variant="caption" display="block">
            {author ? `By ${author}` : "By Unknown Author"}
          </Typography>

          <Typography variant="caption" display="block">
            {publishedAt ? new Date(publishedAt).toUTCString() : "Unknown Date"}
          </Typography>
        </Box>
      </CardContent>

      {/* Read More Button */}
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#7B1E1E",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#5e1515",
            },
          }}
        >
          Read Full Article
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
