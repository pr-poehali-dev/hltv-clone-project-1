import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchComponent from "@/components/Search/SearchComponent";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 hltv-gradient rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-oswald text-xl font-bold">Obsidian</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/matches"
              className="hover:text-primary transition-colors"
            >
              Матчи
            </Link>
            <Link to="/news" className="hover:text-primary transition-colors">
              Новости
            </Link>
            <Link
              to="/rankings"
              className="hover:text-primary transition-colors"
            >
              Рейтинг
            </Link>
            <Link to="/teams" className="hover:text-primary transition-colors">
              Команды
            </Link>
            <Link
              to="/players"
              className="hover:text-primary transition-colors"
            >
              Игроки
            </Link>
          </nav>

          {/* Search & Auth */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <SearchComponent />
            </div>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="User" size={16} className="mr-2" />
                    {user.username}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Профиль
                  </DropdownMenuItem>
                  {user.role === "admin" && (
                    <DropdownMenuItem onClick={() => navigate("/admin")}>
                      Админ панель
                    </DropdownMenuItem>
                  )}
                  {user.role === "creator" && (
                    <DropdownMenuItem onClick={() => navigate("/creator")}>
                      Панель создателя
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={handleLogout}>
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate("/login")}
                >
                  Вход
                </Button>
                <Button size="sm" onClick={() => navigate("/register")}>
                  Регистрация
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={16} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/matches"
                className="hover:text-primary transition-colors"
              >
                Матчи
              </Link>
              <Link to="/news" className="hover:text-primary transition-colors">
                Новости
              </Link>
              <Link
                to="/rankings"
                className="hover:text-primary transition-colors"
              >
                Рейтинг
              </Link>
              <Link
                to="/teams"
                className="hover:text-primary transition-colors"
              >
                Команды
              </Link>
              <Link
                to="/players"
                className="hover:text-primary transition-colors"
              >
                Игроки
              </Link>

              <div className="pt-4">
                <SearchComponent />
              </div>

              {!user && (
                <div className="flex space-x-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => navigate("/login")}
                    className="flex-1"
                  >
                    Вход
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => navigate("/register")}
                    className="flex-1"
                  >
                    Регистрация
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
