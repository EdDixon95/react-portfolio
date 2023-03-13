import React from "react";
import Grid from "@mui/material/Grid";
import style from "./ImageGrid.module.scss";
import { imgData } from "../../media/imgData";

function ImageGrid({ handleClick }) {
  return (
    <Grid
      container
      spacing={7}
      className={style.Grid}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {imgData.map((img) => {
        return (
          <Grid item xs={4} className={style.GridItem}>
            <img src={img.src} alt={img.title} onClick={handleClick} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ImageGrid;
