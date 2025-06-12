export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  role: "user" | "admin" | "creator";
  theme: "purple-black" | "purple-white";
  subscriptions: string[]; // team IDs
  createdAt: Date;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  country: string;
  ranking: number;
  players: Player[];
  subscriberCount: number;
}

export interface Player {
  id: string;
  nickname: string;
  realName: string;
  country: string;
  age: number;
  teamId?: string;
  rating: number;
  avatar?: string;
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  score1: number;
  score2: number;
  status: "upcoming" | "live" | "finished";
  startTime: Date;
  tournament: Tournament;
  format: string;
  maps?: string[];
}

export interface Tournament {
  id: string;
  name: string;
  logo: string;
  startDate: Date;
  endDate: Date;
  prizePool: number;
  location: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  thumbnail: string;
  category: string;
  views: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    username: string,
  ) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  subscribeToTeam: (teamId: string) => void;
  unsubscribeFromTeam: (teamId: string) => void;
  loading: boolean;
}

export interface SearchResult {
  type: "team" | "player" | "match" | "news";
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
}
