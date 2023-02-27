import React from "react";
import Grid from "@mui/material/Grid";
import style from "./ImageGrid.module.scss";
import backpack from "../../media/backpack.png";
import bowie from "../../media/bowie.png";
import climb from "../../media/climb.png";
import fourEyes from "../../media/fourEyes.png";
import green from "../../media/green.png";
import intoTheDeep from "../../media/intoTheDeep.png";
import overthinking from "../../media/overthinking.png";
import rays from "../../media/rays.png";
import womenRock from "../../media/womenRock.png";

function ImageGrid() {
  return (
    <Grid container spacing={7} className={style.Grid}>
      <Grid item xs={4}>
        <img src={backpack} alt="backpack" />
      </Grid>
      <Grid item xs={4}>
        <img src={bowie} alt="bowie" />
      </Grid>
      <Grid item xs={4}>
        <img src={climb} alt="climb" />
      </Grid>
      <Grid item xs={4}>
        <img src={fourEyes} alt="fourEyes" />
      </Grid>
      <Grid item xs={4}>
        <img src={green} alt="green" />
      </Grid>
      <Grid item xs={4}>
        <img src={intoTheDeep} alt="intoTheDeep" />
      </Grid>
      <Grid item xs={4}>
        <img src={overthinking} alt="overthinking" />
      </Grid>
      <Grid item xs={4}>
        <img src={rays} alt="rays" />
      </Grid>
      <Grid item xs={4}>
        <img src={womenRock} alt="womenRock" />
      </Grid>
    </Grid>
  );
}

export default ImageGrid;
