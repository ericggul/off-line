import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

let model, video, webcamId;
const VIDEO_SIZE = 500;
let amountStraightEvents = 0;

let positionXLeftIris;
let positionYLeftIris;

let event;

const normalize = (val, max, min) => Math.max(0, Math.min(1 - (val - min) / (max - min)));

const isFaceRotated = (landmarks) => {
  const leftCheek = landmarks.leftCheek;
  const rightCheek = landmarks.rightCheek;
  const midwayBetweenEyes = landmarks.midwayBetweenEyes;

  const xPositionLeftCheek = video.width - leftCheek[0][0];
  const xPositionRightCheek = video.width - rightCheek[0][0];
  const xPositionMidwayBetweenEyes = video.width - midwayBetweenEyes[0][0];

  const widthLeftSideFace = xPositionMidwayBetweenEyes - xPositionLeftCheek;
  const widthRightSideFace = xPositionRightCheek - xPositionMidwayBetweenEyes;
  const difference = widthRightSideFace - widthLeftSideFace;

  if (Math.abs(difference) > 5) {
    return true;
  } else {
    return false;
  }
};

const renderPrediction = async () => {
  const predictions = await model.estimateFaces({
    input: video,
    returnTensors: false,
    flipHorizontal: false,
    predictIrises: true,
  });

  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      positionXLeftIris = prediction.annotations.leftEyeIris[0][0];
      positionYLeftIris = prediction.annotations.leftEyeIris[0][1];

      const faceBottomLeftX = video.width - prediction.boundingBox.bottomRight[0];
      const faceBottomLeftY = prediction.boundingBox.bottomRight[1];

      const faceTopRightX = video.width - prediction.boundingBox.topLeft[0];
      const faceTopRightY = prediction.boundingBox.topLeft[1];

      if (faceBottomLeftX > 0 && !isFaceRotated(prediction.annotations)) {
        const positionLeftIrisX = video.width - positionXLeftIris;
        const normalizedXIrisPosition = normalize(positionLeftIrisX, faceTopRightX, faceBottomLeftX);

        if (normalizedXIrisPosition > 0.355) {
          event = "RIGHT";
        } else if (normalizedXIrisPosition < 0.315) {
          event = "LEFT";
        } else {
          amountStraightEvents++;
          if (amountStraightEvents > 8) {
            event = "STRAIGHT";
            amountStraightEvents = 0;
          }

          const normalizedYIrisPosition = normalize(positionYLeftIris, faceTopRightY, faceBottomLeftY);

          if (normalizedYIrisPosition > 0.62) {
            event = "TOP";
          }
        }
      }
    });
  }
  return event;
};

const loadModel = async () => {
  await tf.setBackend("webgl");

  console.log("84");

  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detectorConfig = {
    runtime: "mediapipe",
    solutionPath: "base/node_modules/@mediapipe/face_mesh",
  };
  model = await faceLandmarksDetection.createDetector(model, detectorConfig);

  console.log("85");
};

const setUpCamera = async (videoElement, webcamId = undefined) => {
  video = videoElement;
  let mediaDevices = await navigator.mediaDevices.enumerateDevices();
  const defaultWebcam = mediaDevices.find((device) => device.kind === "videoinput" && device.label.includes("Webcam"));

  const cameraId = defaultWebcam ? defaultWebcam.deviceId : webcamId;
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: "user",
      deviceId: cameraId,
      width: VIDEO_SIZE,
      height: VIDEO_SIZE,
    },
  });

  video.srcObject = stream;
  video.play();
  video.width = VIDEO_SIZE;
  video.height = VIDEO_SIZE;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
};

const gaze = {
  loadModel,
  setUpCamera,
  getGazePrediction: renderPrediction,
};

export default gaze;
