export type Reviews = {
  id: number;
  createdAt: Date;
  text: string;
  productId: number;
  categoryId: number;
  userId: number;
  rating: number;
  like: number;
  dislike: number;
};

export type SendReviews = {
  productId: number;
  text: string;
};

export type Like = {
  commentId: number;
};


