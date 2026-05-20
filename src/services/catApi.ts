import axios from 'axios';
import type { CatImage, Post } from '../types';
import { postUsernames, postCaptions, sampleComments } from '../data';
import { getAvatarUrl } from '../data/avatars';

const API_URL = 'https://api.thecatapi.com/v1/images/search';

export async function fetchCatPosts(): Promise<Post[]> {
  const response = await axios.get<CatImage[]>(API_URL, {
    params: { limit: 10, size: 'med' },
  });

  return response.data.map((cat, index) => {
    const username = postUsernames[index % postUsernames.length];

    return {
      id: cat.id,
      imageUrl: cat.url,
      username,
      userAvatar: getAvatarUrl(username),
      caption: postCaptions[index % postCaptions.length],
      likes: Math.floor(Math.random() * 900000) + 10000,
      commentsCount: Math.floor(Math.random() * 500) + 5,
      timeAgo: `${Math.floor(Math.random() * 12) + 1}h`,
      isVerified: index === 0,
      comments: sampleComments,
    };
  });
}
