import { useState, useEffect } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import MatchCard from "@/components/Matches/MatchCard";
import NewsCard from "@/components/News/NewsCard";
import { Match, NewsArticle, Team, Tournament } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // Мок данные для демонстрации
    const mockTeam1: Team = {
      id: "1",
      name: "NAVI",
      logo: "https://img-cdn.hltv.org/teamlogo/9u6MjjstlSVNOjBGJK-7_c.png?ixlib=java-2.1.0&w=50&s=e94e0b5e37a9b86b7c0cff4344e3d5b7",
      country: "Украина",
      ranking: 1,
      players: [],
    };

    const mockTeam2: Team = {
      id: "2",
      name: "G2",
      logo: "https://img-cdn.hltv.org/teamlogo/zFLwAELNTwQMpMV6F8-sjQ.png?ixlib=java-2.1.0&w=50&s=12a9d5e6f1b8ba8f9f7b5a5a8f5f5f5f",
      country: "Европа",
      ranking: 2,
      players: [],
    };

    const mockTournament: Tournament = {
      id: "1",
      name: "IEM Katowice 2024",
      logo: "https://img-cdn.hltv.org/eventlogo/Ef4Nx3MJQ_A3G-D0-Bv4XH.png?ixlib=java-2.1.0&w=50&s=74c1e81c8b5d5d5d5d5d5d5d5d5d5d5d",
      startDate: new Date(),
      endDate: new Date(),
      prizePool: 1000000,
      location: "Катовице, Польша",
    };

    const mockMatches: Match[] = [
      {
        id: "1",
        team1: mockTeam1,
        team2: mockTeam2,
        score1: 16,
        score2: 14,
        status: "live",
        startTime: new Date(),
        tournament: mockTournament,
        format: "BO3",
        maps: ["Mirage", "Inferno", "Dust2"],
      },
      {
        id: "2",
        team1: { ...mockTeam2, name: "Astralis" },
        team2: { ...mockTeam1, name: "FaZe" },
        score1: 2,
        score2: 1,
        status: "finished",
        startTime: new Date(Date.now() - 3600000),
        tournament: mockTournament,
        format: "BO3",
        maps: ["Cache", "Overpass"],
      },
      {
        id: "3",
        team1: { ...mockTeam1, name: "Vitality" },
        team2: { ...mockTeam2, name: "ENCE" },
        score1: 0,
        score2: 0,
        status: "upcoming",
        startTime: new Date(Date.now() + 7200000),
        tournament: mockTournament,
        format: "BO1",
      },
    ];

    const mockNews: NewsArticle[] = [
      {
        id: "1",
        title: "NAVI объявили о подписании нового игрока",
        excerpt:
          "Украинская организация объявила о крупном трансфере накануне турнира IEM Katowice 2024. Новый игрок уже готов к дебюту...",
        content: "",
        author: "Алексей Петров",
        publishedAt: new Date(Date.now() - 1800000),
        thumbnail:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
        category: "Трансферы",
        views: 15420,
      },
      {
        id: "2",
        title: "Результаты первого дня IEM Katowice",
        excerpt:
          "Первый день турнира принес множество сюрпризов. Аутсайдеры показали отличную игру против фаворитов...",
        content: "",
        author: "Мария Сидорова",
        publishedAt: new Date(Date.now() - 3600000),
        thumbnail:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
        category: "Турниры",
        views: 23150,
      },
      {
        id: "3",
        title: "Обновление рейтинга команд HLTV",
        excerpt:
          "После завершения череды турниров произошли серьезные изменения в топ-30 команд мира...",
        content: "",
        author: "Дмитрий Козлов",
        publishedAt: new Date(Date.now() - 7200000),
        thumbnail:
          "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=250&fit=crop",
        category: "Рейтинги",
        views: 8730,
      },
    ];

    setMatches(mockMatches);
    setNews(mockNews);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="hltv-gradient rounded-xl p-8 text-white mb-12">
          <div className="max-w-3xl">
            <h1 className="font-oswald text-4xl md:text-6xl font-bold mb-4">
              HLTV.ru
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Лучший портал о киберспорте Counter-Strike
            </p>
            <p className="text-lg opacity-80 mb-8">
              Актуальные новости, результаты матчей, рейтинги команд и игроков.
              Всё о мире профессионального CS2.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть матчи
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Рейтинги
              </Button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live & Upcoming Matches */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-oswald text-2xl font-bold flex items-center">
                  <Icon name="Zap" size={24} className="mr-2 text-primary" />
                  Матчи
                </h2>
                <Button variant="outline" size="sm">
                  Все матчи
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="space-y-4">
                {matches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>

            {/* Latest News */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-oswald text-2xl font-bold flex items-center">
                  <Icon
                    name="Newspaper"
                    size={24}
                    className="mr-2 text-primary"
                  />
                  Новости
                </h2>
                <Button variant="outline" size="sm">
                  Все новости
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {news.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Top Teams */}
            <section className="hltv-card">
              <h3 className="font-oswald text-xl font-bold mb-4 flex items-center">
                <Icon name="Trophy" size={20} className="mr-2 text-primary" />
                Топ команды
              </h3>
              <div className="space-y-3">
                {[
                  { rank: 1, name: "NAVI", change: 0 },
                  { rank: 2, name: "G2", change: 1 },
                  { rank: 3, name: "Astralis", change: -1 },
                  { rank: 4, name: "FaZe", change: 2 },
                  { rank: 5, name: "Vitality", change: 0 },
                ].map((team) => (
                  <div
                    key={team.rank}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant="outline"
                        className="w-6 h-6 p-0 flex items-center justify-center text-xs"
                      >
                        {team.rank}
                      </Badge>
                      <span className="font-medium">{team.name}</span>
                    </div>
                    <div className="flex items-center">
                      {team.change > 0 && (
                        <Icon
                          name="TrendingUp"
                          size={16}
                          className="text-green-500"
                        />
                      )}
                      {team.change < 0 && (
                        <Icon
                          name="TrendingDown"
                          size={16}
                          className="text-red-500"
                        />
                      )}
                      {team.change === 0 && (
                        <Icon
                          name="Minus"
                          size={16}
                          className="text-gray-500"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Events */}
            <section className="hltv-card">
              <h3 className="font-oswald text-xl font-bold mb-4 flex items-center">
                <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                События
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">IEM Katowice 2024</h4>
                  <p className="text-sm text-muted-foreground">15-25 Февраля</p>
                  <p className="text-sm text-muted-foreground">$1,000,000</p>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <h4 className="font-semibold">ESL Pro League S19</h4>
                  <p className="text-sm text-muted-foreground">1-15 Марта</p>
                  <p className="text-sm text-muted-foreground">$750,000</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
