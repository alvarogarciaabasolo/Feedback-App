import { fireEvent, render, screen } from '@testing-library/react';
import { AddComment } from '../AddComment';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('test button', () => {
  let handleChangePost: jest.Mock<React.MouseEventHandler<HTMLDivElement>>;
  let handleChange: jest.Mock<React.ChangeEvent<HTMLTextAreaElement>>;

  beforeEach(() => {
    handleChangePost = jest.fn();
    handleChange = jest.fn();
  });

  it('renders the component', () => {
    const content = {
      handleChangePost: handleChangePost,
      remainingCharacters: 2,
      text: 'hello',
      handleChange: handleChange,
    };
    render(
      <AddComment
        handleChangePost={content.handleChangePost}
        remainingCharacters={content.remainingCharacters}
        text={content.text}
        handleChange={content.handleChange}
      />
    );
  });

  it('renders text and textarea', () => {
    const content = {
      handleChangePost: handleChangePost,
      remainingCharacters: 20,
      text: 'hello',
      handleChange: handleChange,
    };
    render(
      <AddComment
        handleChangePost={content.handleChangePost}
        remainingCharacters={content.remainingCharacters}
        text={content.text}
        handleChange={content.handleChange}
      />
    );

    const text = screen.getByText('hello');
    const textAddComment = screen.getByText('Add Comment');
    const placeholder = screen.getByPlaceholderText('Type your comment here');
    const characters = screen.getByText('20 Characters left');
    const postComment = screen.getByText('Post Comment');

    expect(text).toBeInTheDocument();
    expect(textAddComment).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    userEvent.type(placeholder, 'new comment');
    expect(handleChange).toHaveBeenCalled();
    expect(placeholder).toHaveAttribute('maxLength', '250');
    expect(characters).toBeInTheDocument();
    expect(postComment).toBeInTheDocument();
  });

  it('renders and clicks the button', () => {
    const content = {
      handleChangePost: handleChangePost,
      remainingCharacters: 20,
      text: 'hello',
      handleChange: handleChange,
    };
    render(
      <AddComment
        handleChangePost={content.handleChangePost}
        remainingCharacters={content.remainingCharacters}
        text={content.text}
        handleChange={content.handleChange}
      />
    );

    const button = screen.getByTestId('buttonclick');
    fireEvent.click(button);
    expect(handleChangePost).toHaveBeenCalled();
  });
});
