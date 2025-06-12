import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="hltv-gradient rounded-xl p-8 text-white mb-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-oswald text-4xl md:text-6xl font-bold mb-4">
              Obsidian
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Лучший портал о киберспорте Counter-Strike
            </p>
            <p className="text-lg opacity-80 mb-8">
              Добро пожаловать в Obsidian! Здесь будут размещены новости, матчи,
              рейтинги команд и игроков. Пока что контент пуст - скоро всё
              заработает!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/matches">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть матчи
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
                asChild
              >
                <Link to="/rankings">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Рейтинги
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Empty State */}
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <Icon
              name="Database"
              size={64}
              className="mx-auto text-muted-foreground mb-4"
            />
            <h2 className="font-oswald text-2xl font-bold mb-4">
              Контент скоро появится
            </h2>
            <p className="text-muted-foreground mb-6">
              Мы работаем над наполнением сайта. Скоро здесь появятся актуальные
              новости, результаты матчей и рейтинги команд.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" asChild>
                <Link to="/matches">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Матчи
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/news">
                  <Icon name="Newspaper" size={16} className="mr-2" />
                  Новости
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/teams">
                  <Icon name="Users" size={16} className="mr-2" />
                  Команды
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/players">
                  <Icon name="User" size={16} className="mr-2" />
                  Игроки
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
