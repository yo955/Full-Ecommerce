"use client";
// mui
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";

const Rate = () => {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      {/* <Typography component="legend">Read only</Typography> */}
      <Rating name="read-only" value={2} readOnly />
    </Box>
  );
};

export default Rate;
