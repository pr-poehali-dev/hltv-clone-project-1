import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 hltv-gradient rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-oswald text-xl font-bold">HLTV.ru</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Лучший портал о киберспорте Counter-Strike. Новости, матчи,
              рейтинги и аналитика.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-oswald font-semibold">Навигация</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                to="/matches"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Матчи
              </Link>
              <Link
                to="/news"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Новости
              </Link>
              <Link
                to="/rankings"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Рейтинг команд
              </Link>
              <Link
                to="/players"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Игроки
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-oswald font-semibold">Сообщество</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                to="/forum"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Форум
              </Link>
              <Link
                to="/stats"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Статистика
              </Link>
              <Link
                to="/predictions"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Прогнозы
              </Link>
              <Link
                to="/events"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                События
              </Link>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-oswald font-semibold">Связь</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>support@hltv.ru</p>
              <p>+7 (495) 123-45-67</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 HLTV.ru. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors"
            >
              Конфиденциальность
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Условия использования
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
