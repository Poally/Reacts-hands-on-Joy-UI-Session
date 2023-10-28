import React from "react";
import Card from "@mui/joy/Card";
import {
  AspectRatio,
  Button,
  CardContent,
  CardCover,
  CardOverflow,
  Typography
} from "@mui/joy";
import { IMAGES, Star } from ".././assets";

export default function CardPlanTrip() {
  return (
    <Card sx={{ width: 300, resize: "horizontal", overflow: "hidden" }}>
      <CardOverflow>
        <AspectRatio sx={{ maxHeight: 300 }}>
          <img alt="" src={IMAGES.fuji} />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <div>
          <Typography level="h3">Mt. fuji</Typography>
          <Typography>Fujisan~</Typography>
        </div>
      </CardContent>
      <Button></Button>
    </Card>
  );
}
