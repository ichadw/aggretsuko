import { isInCollection } from '@/utils';
import React, { useContext, useState } from 'react';
import Button from '@/components/Button';
import { DataContext } from '@/context/data';

type ActionButtonType = {
  idx: number;
  imdbID: string;
  title: string;
  poster: string;
};

const ActionButton: React.FC<ActionButtonType> = ({
  idx,
  imdbID,
  title,
  poster,
}) => {
  const initialButtonState = isInCollection(imdbID);
  const [btnState, setBtnState] = useState(initialButtonState);
  const { addCollection, removeCollection } = useContext(DataContext);

  const handleAdd = (): void => {
    addCollection(imdbID, { id: imdbID, poster, title });
    
    setBtnState((prev) => !prev);
  };

  const handleRemove = (): void => {
    removeCollection(imdbID);
    
    setBtnState((prev) => !prev);
  };

  return (
    <>
      {btnState ? (
        <Button
          type="danger"
          onClick={handleRemove}
          dataTestId={`btnRemove-${idx}`}
          label="Remove"
          key={`btnRemove-${idx}`}
        />
      ) : (
        <Button
          type="warning"
          onClick={handleAdd}
          dataTestId={`btnAdd-${idx}`}
          label="Add"
          key={`btnAdd-${idx}`}
        />
      )}
    </>
  );
};

export default ActionButton;
