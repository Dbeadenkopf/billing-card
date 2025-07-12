import React from "react";
import { ThemeProvider, CssBaseline, Container, Grid } from "@mui/material";
import BillingCard from "./BillingCard";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <BillingCard
              planName="Basic"
              price="$9/mo"
              features={[
                "10 projects",
                "5 GB storage",
                "Email support",
              ]}
              onSelect={() => alert("Basic plan selected")}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BillingCard
              planName="Pro"
              price="$29/mo"
              features={[
                "Unlimited projects",
                "50 GB storage",
                "Priority support",
              ]}
              onSelect={() => alert("Pro plan selected")}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
