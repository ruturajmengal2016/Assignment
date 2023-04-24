import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { UserCard } from "../App";

export default function RecipeReviewCard({ title, text }) {
  const { card, setCard } = useContext(UserCard);
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 250 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon
              onClick={() => {
                const val = card
                  .map((ele, ind) => {
                    return ele.props.title;
                  })
                  .filter((ele, ind) => {
                    return ele === title;
                  });

                setCard([...card, val]);
              }}
            />
          </IconButton>
        }
        title={title}
        subheader={new Date().toLocaleString()}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
