import type { Suggestion } from '../types';
import { getAvatarUrl } from './avatars';

export const suggestionList: Suggestion[] = [
  {
    username: 'catlover99',
    avatar: getAvatarUrl('cat99'),
    subtitle: 'Seguido por lewishamilton',
  },
  {
    username: 'miau_miau',
    avatar: getAvatarUrl('miau'),
    subtitle: 'Seguido por itsdougthepu',
  },
  {
    username: 'whiskers',
    avatar: getAvatarUrl('whisk'),
    subtitle: 'Sugerido para vos',
  },
  {
    username: 'purrfect',
    avatar: getAvatarUrl('purr'),
    subtitle: 'Seguido por upvox_',
  },
  {
    username: 'felix_cat',
    avatar: getAvatarUrl('felix'),
    subtitle: 'Sugerido para vos',
  },
];
