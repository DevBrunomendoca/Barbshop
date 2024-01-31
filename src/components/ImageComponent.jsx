import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageComponent = ({ imageId }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(`http://localhost:3000/pictures/${imageId}`);
        const data = response.data;
        setImage(data);
      } catch (error) {
        console.error(`Erro ao obter imagem com ID ${imageId}:`, error);
      }
    }

    fetchImage();
  }, [imageId]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <img src={`http://localhost:4000/uploads/${image._id}_${image.name}.jpg`} alt={image.name} />
    </>
  );
};

export default ImageComponent;
