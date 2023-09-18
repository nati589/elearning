import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
// import fs from 'fs';

export default function VideoContent() {
  const { sectionId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    let videoBlobUrl;

    const fetchVideoFile = async () => {
      try {
        const response = await axios.get(
          `/sections/getSectionVideo/${sectionId}`, {
            responseType: 'blob',
          }
        );
        console.log(response.data);
        const videoBlob = new Blob([response.data.size], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoUrl(videoUrl);
        
      } catch (error) {
        console.error("Error fetching video file:", error);
      }
    };

    fetchVideoFile();

    return () => {
      // Clean up the video URL when the component unmounts
      URL.revokeObjectURL(videoBlobUrl);
    };
  }, [sectionId]);

  return (
    <div>
      {videoUrl ? (
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width="100%"
          height="auto"
        />
      ) : (
        <p>Loading video file...</p>
      )}
    </div>
  );
}
