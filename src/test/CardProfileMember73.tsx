import React from "react";
import Card from "@mui/joy/Card";
import { AspectRatio, CardContent, Chip, Typography } from "@mui/joy";
import { IMAGES, Star } from ".././assets";

export default function CardPlanTrip() {
  return (
    <Card sx={{ width: 300, resize: "vertical", orientation: "horizontal" }}>
      <Typography level="h4">Profile Member</Typography>
      <CardContent orientation="horizontal">
        <AspectRatio
          flex
          ratio="1"
          sx={{ maxWidth: 80, borderRadius: 200, resize: "5em" }}
        >
          <img alt="" src={IMAGES.profile} />
        </AspectRatio>
        <div sx={{ orientation: "vertical" }}>
          <div sx={{ orientation: "horizontal" }}>
            <Typography sx={{ orientation: "horizontal", fontWeight: "bold" }}>
              Barly Valentio
            </Typography>
            <Chip label="Chip Filled">Available</Chip>
          </div>
          <Typography>UX/UI designer</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
