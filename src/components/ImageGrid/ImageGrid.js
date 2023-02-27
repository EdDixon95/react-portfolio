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

function ImageGrid({ handleClick }) {
  return (
    <Grid container spacing={7} className={style.Grid}>
      <Grid item xs={4}>
        <img src={backpack} alt="backpack" onClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <img src={bowie} alt="bowie" onClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <img src={climb} alt="climb" onClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <img src={fourEyes} alt="fourEyes" onClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <img src={green} alt="green" onClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <img src={intoTheDeep} alt="intoTheDeep" onClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <img src={overthinking} alt="overthinking" onClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <img src={rays} alt="rays" onClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <img src={womenRock} alt="womenRock" onClick={handleClick} />
      </Grid>
    </Grid>
  );
}

export default ImageGrid;
