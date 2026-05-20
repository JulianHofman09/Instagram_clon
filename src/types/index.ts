/** The Cat API response */
export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Post {
  id: string;
  imageUrl: string;
  username: string;
  userAvatar: string;
  caption: string;
  likes: number;
  commentsCount: number;
  timeAgo: string;
  isVerified?: boolean;
  comments: Comment[];
}

export interface Comment {
  id: string;
  username: string;
  text: string;
}

export interface UserProfile {
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  postsCount: number;
  followers: number;
  following: number;
  website?: string;
}

export interface Suggestion {
  username: string;
  avatar: string;
  subtitle: string;
}

export interface Story {
  username: string;
  avatar: string;
}

export type ViewType = 'feed' | 'profile';
