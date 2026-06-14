## 📌 Overview

Emotify is an AI-powered emotion-based music recommendation system that uses a custom CNN model trained on the FER2013 and CK+48 datasets to detect emotions from facial expressions. Users can upload an image, use a webcam for real-time emotion detection, or manually search for songs.

Once an emotion is identified, the system fetches and plays emotion-specific music using the YouTube API while also logging emotions with timestamps for mood tracking and analysis.


---

## 🎯 Project Objectives

- Detect user emotions using facial expressions.
- Classify emotions using a custom CNN model.
- Recommend music based on the detected emotion.
- Enable real-time emotion recognition through webcam and image uploads.
- Deliver a personalized and emotion-aware music experience.

  ---

  ### ✨ Key Features

- 🧠 Custom CNN emotion recognition model
- 📊 Trained on FER2013 & CK+48 datasets
- 🎯 90% classification accuracy
- 😊 Real-time emotion detection (6 emotions)
- 📸 Webcam & image upload support
- 🎵 Emotion-based music recommendations
- ▶️ YouTube API integration
- 🔍 Manual song search
- 📈 Emotion logging for mood tracking
- ⚡ Lightweight architecture optimized for real-time performance

---

## ⚙️ How It Works

1. The user can either upload an image, capture an image using a webcam, or manually search for a song.
2. For webcam mode, the system provides a 7-second adjustment window before capturing the image.
3. If the captured image is unclear due to poor lighting, motion blur, or facial misalignment, the system automatically retries the capture process.
4. The image is preprocessed by resizing and converting it to grayscale.
5. The preprocessed image is passed to the custom CNN model for emotion classification.
6. The model identifies one of the seven emotions: Happy, Sad, Angry, Fear, Neutral, or Surprise.
7. The detected emotion and timestamp are stored for mood tracking.
8. The YouTube API fetches emotion-specific songs and automatically plays a suitable recommendation.
9. A list of additional recommended songs is displayed for the user.

---

---

## 🏗️ System Architecture

The following architecture illustrates the complete workflow of Emotify, from emotion detection to music recommendation. The system captures user input, processes facial expressions using a CNN model, identifies the detected emotion, and fetches emotion-specific songs through the YouTube API.

image



## 🧠 CNN Model Architecture

The emotion recognition module is powered by a custom Convolutional Neural Network (CNN) designed for efficient real-time emotion classification. The model consists of multiple convolutional and max-pooling layers for feature extraction, followed by fully connected dense layers for emotion prediction.

### Model Components

- Conv2D Layers for feature extraction
- MaxPooling Layers for dimensionality reduction
- Flatten Layer for feature vector generation
- Dense Layers for classification
- Dropout Layer to reduce overfitting
- Softmax Output Layer for emotion prediction

image

---

## System Workflow

```text
User Input (Image Upload / Webcam)
                │
                ▼
      Image Processing
                │
                ▼
   CNN Emotion Detection
                │
                ▼
     Emotion Classification
                │
                ▼
      Display Emotion
                │
                ▼
      YouTube API Request
                │
                ▼
     Fetch Emotion-Based Songs
                │
                ▼
   Play Song & Recommend More
```
**Emotion Classification**
   - The system identifies one of the seven emotions:
     - 😊 Happy
     - 😔 Sad
     - 😠 Angry
     - 😨 Fear
     - 😐 Neutral
     - 😲 Surprise
     

---

## 📂 Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/purva0231/Emotify.git
cd Emotify
```

### Install Dependencies

```bash
npm install
```

### Install React Scripts (If Required)

```bash
npm install react-scripts
```

### Start the Application

```bash
npm start
```

### Open in Browser

```text
http://localhost:3000
```

---

## 🛠️ Technologies & Tools Used

| Category | Technology / Tool | Purpose |
|----------|------------------|---------|
| **Frontend** | React.js | Building the user interface |
|  | JavaScript | Client-side functionality and interactions |
|  | HTML5 | Structuring web pages |
|  | CSS3 | Styling and responsive design |
| **Backend** | Python | Backend development and ML implementation |
| **Deep Learning** | TensorFlow | Building and training the CNN model |
|  | Keras | High-level API for CNN development |
| **Computer Vision** | OpenCV | Image processing and facial emotion detection |
| **Data Processing** | NumPy | Numerical computations and array operations |
|  | Pandas | Data manipulation and preprocessing |
| **Machine Learning** | Scikit-learn | Data preprocessing and model evaluation |
| **Emotion Recognition** | Custom CNN Model | Facial emotion classification |
| **Datasets** | FER2013 | Facial emotion recognition dataset |
|  | CK+48 | Facial expression dataset |
| **API Integration** | YouTube Data API | Fetching emotion-based songs and playlists |
| **Image Processing** | Grayscale Conversion | Improving computational efficiency |
|  | Image Resizing | Preparing images for CNN input |
| **Data Storage** | Text File Logging | Storing emotions with timestamps |
| **Development Tools** | Visual Studio Code | Code development and debugging |
|  | Jupyter Notebook | Model training and experimentation |
| **Version Control** | Git | Source code management |
|  | GitHub | Project hosting and collaboration |
| **Hardware** | Webcam | Real-time image capture |



---

## 📚 Research Reference


### Emotify: Real-Time Emotion-Based Music Player

Published in:

**International Journal of Engineering Research & Technology (IJERT)**

🔗 Paper Link:

https://www.ijert.org/emotify-real-time-emotion-based-music-player

---

## 👨‍💻 Author

### Purva Kalambate

Aspiring Data Analyst and AI Enthusiast passionate about Data Analytics, Machine Learning, Computer Vision, Artificial Intelligence, and building intelligent systems that solve real-world problems.

### Connect With Me

🔗 GitHub: https://github.com/purva0231

🔗 LinkedIn: www.linkedin.com/in/purva31

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future development.

---



