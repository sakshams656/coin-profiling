import axios, { AxiosError, AxiosResponse } from 'axios';

const BASE_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '22aa38c26114447fbcec84ec96e652ae'; 
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export const getCryptoNews = async (searchTerm: string = ''): Promise<NewsArticle[]> => {
  let attempts = 0;
  const baseQuery = '(cryptocurrency OR crypto OR blockchain OR bitcoin OR ethereum) AND (investment OR trading OR market)';
  const query = searchTerm ? `${searchTerm} AND (${baseQuery})` : baseQuery;

  while (attempts < MAX_RETRIES) {
    try {
      const response: AxiosResponse<NewsApiResponse> = await axios.get(BASE_URL, {
        params: {
          q: query,
          sortBy: 'publishedAt',
          language: 'en',
          domains: 'wsj.com,forbes.com,bloomberg.com,coindesk.com,cointelegraph.com,zebpay.com',
          pageSize: 100,
          apiKey: API_KEY,
        },
      });
      
      return response.data.articles;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response) {
          console.error(`Error fetching news: ${axiosError.response.status} ${axiosError.response.statusText}`);
          
          if (axiosError.response.status === 429) {
            console.warn(`Rate limit exceeded. Retrying in ${RETRY_DELAY}ms...`);
            attempts++;
            await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
            continue;
          }
        } else {
          console.error('Error fetching news: No response received');
        }
        
        console.error('Error fetching cryptocurrency news:', axiosError.message);
        return [];
      } else {
        console.error('Unexpected error:', error);
        return [];
      }
    }
  }
  
  console.error(`Max retries (${MAX_RETRIES}) exceeded`);
  return [];
};