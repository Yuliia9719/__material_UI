import { FormEvent } from "react";
import { useState } from "react";
import { ChangeEvent } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
const RatingForm = () => {
  const [ratingValue, setRatingValue] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [errorComment, setErrorComment] = useState<string>("");

  const isDisabled = ratingValue === null;

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
    setErrorComment("");
  };

  const validateComment = (comment: string) => {
    let isValid = true;
    if (comment.trim() === "") {
      setErrorComment("Comment field cannot be empty");
      isValid = false;
    } else if (comment.length < 10 || comment.length > 45) {
      setErrorComment("Comment must be between 10 and 45 characters");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateComment(comment)) {
      console.log("Rating:", ratingValue, "Comment:", comment);
    }
  };

  return (
    <div>
      <Box
        sx={{
          minWidth: "95vw",
          minHeight: "95vh",
          display: "flex",
          justifyContent: "center"
        }}
        component="form"
        onSubmit={handleSubmit}
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
            onChange={handleCommentChange}
            {...(errorComment ? { error: true, helperText: errorComment } : {})}
          >
            <input type="text" />
          </TextField>
          <Button
            type="submit"
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
