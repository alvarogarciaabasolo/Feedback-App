export const useLocalStorageCommentValue = () => {
  const commentTextStorage = localStorage.getItem('Comment Feedback');
  const valueStorage = localStorage.getItem('Value current user');

  const storageComment = commentTextStorage
    ? JSON.parse(commentTextStorage)
    : '';
  const storageValue = valueStorage ? JSON.parse(valueStorage) : '';

  return { storageComment, storageValue };
};
