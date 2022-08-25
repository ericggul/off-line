import React, { useRef, useEffect } from "react";
import * as S from "./styles";

export default function No({ data }) {
  const wrapperRef = useRef();
  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      let draw = new Canvas(wrapperRef.current);
      return () => draw.remove();
    }
  }, [wrapperRef]);

  return <S.StyledNo ref={wrapperRef}></S.StyledNo>;
}

class Canvas {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.canvas = document.createElement("canvas");
    this.wrapper.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.resize();

    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    this.scale = 1;
    this.canvas.width = this.stageWidth * this.scale;
    this.canvas.height = this.stageHeight * this.scale;

    this.ctx.scale(this.scale, this.scale);
    this.squareNumber = 20000;
    this.squareSets = [];

    this.init();
  }

  remove() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  init() {
    this.draw();
  }

  draw() {
    // this.ctx.fillStyle = `rgba(
    //   ${this.colorArrange.r + getRandom(-30, 30)},  ${
    //   this.colorArrange.g + getRandom(-30, 30)
    // },  ${this.colorArrange.b + getRandom(-30, 30)}, ${this.opacity})`;
    // // ctx.fillRect(
    // //   this.pos.x - this.size.x / 2 + this.interval.x * i,
    // //   this.pos.y - this.size.y / 2 + this.interval.y * i,
    // //   this.size.x,
    // //   this.size.y
    // // );
    // this.ctx.font = `${this.size.x}px Arial`;
    // this.ctx.fillText(
    //   (Math.random() + 1).toString(36).substring(2),
    //   this.pos.x - this.size.x + this.interval.x * i,
    //   this.pos.y - this.size.y + this.interval.y * i
    // );
  }
}
