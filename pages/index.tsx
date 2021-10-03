import React, { useState } from 'react';
import { Button, Rating } from '../components';
export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <div>
      <Rating setRating={setRating} isEditable rating={rating} />
      <Button appearance="primary">ok</Button>
    </div>
  );
}
