import React, { useEffect, useState, useRef } from "react";
import * as S from "./styles";
import Img from "static/images/Bascilica/Bascilica.jpeg";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Bascilica() {
  const [canvas, setCanvas] = useState(null);
  useEffect(() => {
    setCanvas(new Canvas());
  }, []);
  return (
    <S.StyledBascilica id="CanvasWrapper">
      <img id="source" src={Img} />
    </S.StyledBascilica>
  );
}

class Canvas {
  constructor() {
    this.wrapper = document.getElementById("CanvasWrapper");
    this.canvas = document.createElement("canvas");
    this.wrapper.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.imgSource = document.getElementById("source");

    this.resize();
    window.addEventListener("resize", this.resize.bind(this));

    this.imgSource.addEventListener("load", () => {
      this.init();
    });
  }

  resize() {
    this.time = 0;
    console.log("resized");
    window.addEventListener("resize", this.resize.bind(this));
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    console.log(this.wrapper.clientWidth, this.wrapper.clientHeight);
    console.log(this.stageWidth, this.stageHeight);

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.ctx.scale(1, 1);

    this.init();

    this.interval = this.stageWidth;
    this.cropper = this.interval * 20;
    this.overflow = 10;
  }

  init() {
    this.imgWidth = this.imgSource.width;
    this.imgHeight = this.imgSource.height;

    console.log(this.imgWidth, this.imgHeight);

    this.widthRatio = this.stageWidth / this.imgWidth;
    this.heightRatio = this.stageHeight / this.imgHeight;

    this.resizeRatio = Math.max(this.widthRatio, this.heightRatio);
    this.widthAdjuster = (this.imgWidth * this.resizeRatio - this.stageWidth) / 2;
    this.heightAdjuster = (this.imgHeight * this.resizeRatio - this.stageHeight) / 2;

    this.animate();
  }

  animate() {
    this.time++;
    this.vibration -= this.vibration * this.vibrationSpeed;

    for (var i = -this.interval * this.overflow; i < this.imgWidth + this.interval * this.overflow; i = i + this.interval) {
      for (var j = -this.interval * (this.overflow + 10); j < this.imgHeight + this.interval * this.overflow; j = j + this.interval) {
        const angle = getRandom(-10, 10);
        this.ctx.globalAlpha = getRandom(0, 0.6);
        this.ctx.translate(i * this.resizeRatio - this.widthAdjuster, j * this.resizeRatio - this.heightAdjuster);

        this.ctx.rotate((angle * Math.PI) / 180);

        this.ctx.drawImage(
          this.imgSource,
          i,
          j,
          this.cropper * getRandom(0.3, getRandom(0.5, 3)),
          this.cropper * getRandom(0.3, getRandom(0.5, 3)),
          0,
          0,
          this.cropper * this.resizeRatio,
          this.cropper * 6 * this.resizeRatio
        );
        this.ctx.rotate(-(angle * Math.PI) / 180);
        this.ctx.translate(-i * this.resizeRatio + this.widthAdjuster, -j * this.resizeRatio + this.heightAdjuster);
      }
    }
  }
}

export default Bascilica;
