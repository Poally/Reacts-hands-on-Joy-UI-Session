import React from "react";
import Card from "@mui/joy/Card";
import { CardContent, CardCover, Typography } from "@mui/joy";
import { IMAGES, Star } from ".././assets";

export default function CardPluto() {
  return (
    <Card sx={{ width: 300, borderRadius: "1rem" }}>
      {/* sx = -> will convert into css, write css */}
      <CardCover>
        <img alt="" src={IMAGES.pluto} />
      </CardCover>
      <CardContent sx={{ color: "white" }}>
        <Typography sx={{ color: "#888", fontWeight: 600 }}>
          {" "}
          Beyond pluto
        </Typography>
        Pluto that is not Mickey's dog
      </CardContent>
    </Card>
  );
}
