import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useFetchData } from '../../hooks/useFetchData';

export const ListOfPhotoCards = () => {
  const [photos, loading] = useFetchData('http://localhost:8080/api/db.json');

  if (loading) {
    return 'loading...';
  }

  return (
    <ul>
      {photos.photos?.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
};
