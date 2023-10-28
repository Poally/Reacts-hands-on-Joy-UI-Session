import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import CardPluto from "./CardPluto";
import CardPlanTrip from "./CardPlanTrip";
import CardBooking from "./CardBooking";
import CardProfileMember73 from "./test/CardProfileMember73";
import CardPluto2 from "./test/CardPluto";
import CardPlanTrip2 from "./test/CardPlanTrip";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <CssBaseline />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {<CardBooking />}
          {/* // <CardPluto>
            // <CardPlanTrip>
            // <CardBooking>
            // <CardPluto2> */}
          {/* <CardPlanTrip2 /> */}
          {<CardProfileMember73 />}
        </Box>
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
