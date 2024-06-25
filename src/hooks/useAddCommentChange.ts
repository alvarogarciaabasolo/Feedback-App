import { useState } from 'react';

export const useAddCommentChange = () => {
  const MAX_CHARACTERS = 250;
  const [remainingCharacters, setRemainingCharacters] =
    useState<number>(MAX_CHARACTERS);
  const [text, setText] = useState<string>('');

  const handleChange = ({
    target: { value},
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(value);

    // Calculate the number of remaining characters
    const newRemainingCharacters = MAX_CHARACTERS - value.length;
    setRemainingCharacters(newRemainingCharacters);
  };

  return { remainingCharacters, text, handleChange };
};
