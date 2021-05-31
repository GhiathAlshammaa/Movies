export interface Category {
  id?: number;
  title?: string;
  value?: string;
}

export const Categories: Category[] = [
  { id: 0, title: 'Now Playing', value: 'now_playing' },
  { id: 1, title: 'Top Rated', value: 'top_rated' },
  { id: 2, title: 'Popular', value: 'popular' },
  { id: 3, title: 'Upcoming', value: 'upcoming' },
];
