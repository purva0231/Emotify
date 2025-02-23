import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [detections, setDetections] = useState([]);
  const [timer, setTimer] = useState(7);
  const [manualSearch, setManualSearch] = useState(false);

  useEffect(() => {
    // Load face-api.js models
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
    };

    loadModels();
  }, []);

  useEffect(() => {
    if (modelsLoaded) {
      startVideo();
    }
  }, [modelsLoaded]);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error('Error accessing webcam:', err));
  };

  useEffect(() => {
    let countdown;
    if (timer > 0 && !manualSearch) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      if (manualSearch) {
        // Skip the timer and immediately capture the photo if manual search is triggered
        capturePhoto();
      } else {
        capturePhoto();
      }
    }

    return () => clearInterval(countdown);
  }, [timer, manualSearch]);

  const capturePhoto = async () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Check if video has valid dimensions
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        // Set canvas dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw the current video frame onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Perform face detection on the captured image
        const detections = await faceapi
          .detectAllFaces(canvas, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();

        setDetections(detections);
        handleMoodDetection(detections);
      } else {
        console.error("Invalid video dimensions: Unable to capture photo");
      }
    }
  };

  const handleMoodDetection = (detections) => {
    if (detections.length > 0) {
      const dominantMood = Object.entries(detections[0].expressions).sort((a, b) => b[1] - a[1])[0][0];

      switch (dominantMood) {
        case 'happy':
          window.location.href = '/happy.html';
          break;
        case 'sad':
          window.location.href = '/sad.html';
          break;
        case 'angry':
          window.location.href = '/angry.html';
          break;
        case 'surprised':
          window.location.href = '/surprised.html';
          break;
        case 'fearful':
          window.location.href = '/fear.html';
          break;
        default:
          window.location.href = '/neutral.html';
          break;
      }
    }
  };

  const handleManualSearch = () => {
    setManualSearch(true); // Set manual search flag to true
    setTimer(0); // Optionally set the timer to 0 to skip the countdown
    window.location.href = '/manual.html'; // Redirect to manual page
  };

  return (
    <div className="App">
      <img src="/Elogoicon.png"  class ="App-logo"></img>
      <h1 class="App-header">Explore your Emotion</h1>
      {modelsLoaded ? (
        <>
          <div className="video-container">
            <video
              ref={videoRef}
              autoPlay
              muted
              onPlay={() => console.log('Video playing...')}
            />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
          <p>Taking photo in: {timer} seconds</p>
         
            <button id="button" onClick={handleManualSearch}>Do on yourself</button>
          
          {detections.length > 0 && (
            <div className="results">
              <h2>Detection Results:</h2>
              {detections.map((detection, index) => (
                <div key={index}>
                  <p>Face {index + 1}:</p>
                  <ul>
                    <li>Expressions: {JSON.stringify(detection.expressions)}</li>
                    {/* <li>Landmarks detected: {detection.landmarks.positions.length}</li> */}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
      )}
    </div>
  );
}

export default App;





