import React from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? IoMdHeart : IoMdHeartEmpty;

  return (
    <Button type="button" onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};
