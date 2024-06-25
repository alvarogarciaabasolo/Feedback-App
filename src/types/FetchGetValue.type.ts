export interface UserInterface {
  image: string;
  name: string;
  username: string;
}
export interface ReplyInterface {
  user: UserInterface;
  content: string;
  replyingTo: string;
}
export interface CommentInterface {
  user: UserInterface;
  id: number;
  content: string;
  replies?: ReplyInterface[];
}
export interface ProductRequestInterface {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status?: string;
  description: string;
  comments: CommentInterface[];
}
export interface DataInterface {
  currentUser: UserInterface;
  productRequests: ProductRequestInterface[];
}
