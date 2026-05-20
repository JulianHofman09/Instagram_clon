import type { UserProfile } from '../types';
import { getAvatarUrl } from './avatars';

export const currentUser: UserProfile = {
  username: 'upvox_',
  displayName: 'Upvox',
  avatar: getAvatarUrl('upvox'),
  bio: 'Amante de los gatos 🐱 | React Developer',
  postsCount: 12,
  followers: 1284,
  following: 342,
  website: 'upvox.dev',
};
