import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
const RatingForm = () => {
  const [ratingValue, setRatingValue] = useState<number | null>(null);
  const [comment, setComment] = useState("");

  const isDisabled = ratingValue === null || comment === "";
  return (
    <div>
      <Box
        sx={{
          minWidth: "95vw",
          minHeight: "95vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            width: "300px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Typography>How would you rate our service?</Typography>
          <Typography>
            Rating: {ratingValue}
          </Typography>
          <Rating
            value={ratingValue}
            onChange={(_, newValue) => setRatingValue(newValue)}
          />
          <Typography>Tell us how it went</Typography>
          <TextField
            multiline
            maxRows={4}
            value={comment}
            onChange={e => setComment(e.target.value)}
          >
            <input type="text" />
          </TextField>
          <Button
            color="secondary"
            disabled={isDisabled}
            sx={{ mt: 2 }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default RatingForm;
