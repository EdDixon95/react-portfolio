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
        <a href="/backpack">
          <img src={backpack} alt="backpack" />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a href="/bowie">
          <img src={bowie} alt="bowie" />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a href="/climb">
          <img src={climb} alt="climb" />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a href="/four-eyes">
          <img src={fourEyes} alt="fourEyes" />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a href="/green">
          <img src={green} alt="green" />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a href="/into-the-deep">
          <img src={intoTheDeep} alt="intoTheDeep" />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a href="/overthinking">
          <img src={overthinking} alt="overthinking" />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a href="/rays">
          <img src={rays} alt="rays" />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a href="/women-rock">
          <img src={womenRock} alt="womenRock" />
        </a>
      </Grid>
    </Grid>
  );
}

export default ImageGrid;
