import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BillingCard = ({ planName, price, features, onSelect }) => {
  return (
    <Card
      component="section"
      variant="outlined"
      sx={{
        maxWidth: 400,
        width: "100%",
        m: 2,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:focus-within": {
          outline: "2px solid",
          outlineColor: "primary.main",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          sx={{ mb: 1, fontWeight: "bold", textAlign: "center" }}
        >
          {planName}
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{ mb: 2, textAlign: "center", color: "primary.main", fontWeight: "bold" }}
        >
          {price}
        </Typography>

        <List
          aria-label={`${planName} features`}
          sx={{
            mb: 2,
            px: { xs: 0, sm: 1 },
          }}
        >
          {features.map((feature, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: 32, color: "success.main" }}>
                <CheckCircleIcon aria-hidden="true" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>

        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={onSelect}
            fullWidth
            sx={{ mt: 1 }}
          >
            Select Plan
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

BillingCard.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BillingCard;
