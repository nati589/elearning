import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function AssignmentContent() {
  const { sectionId } = useParams();
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchPdfFile = async () => {
      try {
        const response = await axios.get(`/sections/getSectionFile/${sectionId}`, {
          responseType: 'arraybuffer',
        });

        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error) {
        console.error('Error fetching PDF file:', error);
      }
    };

    fetchPdfFile();

    return () => {
      // Clean up the PDF URL when the component unmounts
      URL.revokeObjectURL(pdfUrl);
    };
  }, [sectionId]);

  return (
    <div>
      {pdfUrl ? (
        <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
      ) : (
        <p>Loading PDF file...</p>
      )}
    </div>
  );
}
