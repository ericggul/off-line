import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import useResize from "utils/hooks/useResize";
import { useEffect, useState } from "react";
import { cleanup } from "@testing-library/react";

async function detection() {
  const detectorConfig = {
    modelType: poseDetection.movenet.modelType.MULTIPOSE_LIGHTNING,
    enableTracking: true,
    trackerType: poseDetection.TrackerType.BoundingBox,
  };
  const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);
  return detector;
}

async function setUpCamera(videoElement, videoSize) {
  try {
    let video = videoElement;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: videoSize.width,
        height: videoSize.height,
      },
    });

    video.srcObject = stream;
    console.log(video);
    video.play();
    video.width = videoSize.width;
    video.height = videoSize.height;

    return new Promise((resolve) => {
      video.onloadedmetadata = () => {
        resolve(video);
      };
    });
  } catch (e) {
    console.log(e);
  }
}

async function cleanUpCamera(video) {
  video.pause();
  video.srcObject = null;
}

function useMovement(videoElRef) {
  const [windowWidth, windowHeight] = useResize();
  const [detector, setDetector] = useState(null);
  const [video, setVideo] = useState(null);

  async function init() {
    if (!video) {
      let vid = await setUpCamera(videoElRef.current, { width: windowWidth, height: windowHeight });
      setVideo(vid);
    }
    if (!detector) {
      let det = await detection();
      setDetector(det);
    }
  }

  useEffect(() => {
    if (videoElRef && videoElRef.current) {
      init();
    }
  }, [videoElRef, windowWidth, windowHeight]);

  async function estimation() {
    const poses = await detector.estimatePoses(video);
    console.log(poses);
    window.requestAnimationFrame(estimation);
  }

  useEffect(() => {
    if (video && detector) {
      estimation();
      let animation = window.requestAnimationFrame(estimation);
      return () => window.cancelAnimationFrame(animation);
    }
  }, [video, detector]);

  //cleanup
  useEffect(() => {
    if (video) {
      return () => cleanUpCamera(video);
    }
  }, [video]);
}

export default useMovement;
