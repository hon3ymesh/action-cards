import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { actions } from "../mockdata/actions";
import { Grid, GridProps } from '@mui/material';

const InfoCards: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f9fafb",
        p: 4,
      }}
    >
      <Box sx={{ maxWidth: 1339, width: "100%" }}>
        {/* Title */}
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Choose Your Action
        </Typography>

        {/* Cards Row */}
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          sx={{ flexWrap: "nowrap" }} // ✅ correct way for nowrap
        >
          {actions.map((action) => (
            <Grid
              {...({
                item: true,
                xs: 12,
                md: 4,
                key: action.id,
              } as GridProps)}
            >
              <Card
                sx={{
                  height: 360,
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  {/* Icon Box */}
                  <Box
                    sx={{
                      bgcolor: "#5a4ff3",
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {action.icon}
                  </Box>

                  {/* Title + Subtitle */}
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {action.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1 }}
                  >
                    {action.subtitle}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {action.description}
                  </Typography>

                  {/* Points */}
                  {action.points.map((point, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: "#5a4ff3",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      • {point}
                    </Typography>
                  ))}
                </CardContent>

                {/* Button */}
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#5a4ff3",
                    borderRadius: 2,
                    textTransform: "none",
                    mt: 2,
                    fontWeight: "bold",
                    ":hover": { bgcolor: "#4538d3" },
                  }}
                  fullWidth
                >
                  {action.button}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InfoCards;
