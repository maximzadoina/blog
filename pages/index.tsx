import React, { useState } from 'react';
import { Button, Rating } from '../components';
import { withLayout } from '../layout/Layout';
function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Rating setRating={setRating} isEditable rating={rating} />
      <Button appearance="primary">ok</Button>
    </>
  );
}

export default withLayout(Home);
