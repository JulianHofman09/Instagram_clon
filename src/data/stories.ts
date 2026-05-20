import type { Story } from '../types';
import { getAvatarUrl } from './avatars';

export const storyList: Story[] = [
  { username: 'itsdougthepu', avatar: getAvatarUrl('doug') },
  { username: 'lewishamilton', avatar: getAvatarUrl('lewis') },
  { username: 'upvox_', avatar: getAvatarUrl('upvox') },
  { username: 'catlover99', avatar: getAvatarUrl('cat99') },
  { username: 'miau_miau', avatar: getAvatarUrl('miau') },
  { username: 'whiskers', avatar: getAvatarUrl('whisk') },
  { username: 'purrfect', avatar: getAvatarUrl('purr') },
];
