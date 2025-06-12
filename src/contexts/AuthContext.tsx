import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AuthContextType, User } from "@/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем сохраненного пользователя в localStorage
    const savedUser = localStorage.getItem("hltv_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Симуляция API запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser: User = {
        id: "1",
        email,
        username: email.split("@")[0],
        createdAt: new Date(),
      };

      setUser(newUser);
      localStorage.setItem("hltv_user", JSON.stringify(newUser));
    } catch (error) {
      throw new Error("Ошибка входа");
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string,
    password: string,
    username: string,
  ) => {
    setLoading(true);
    try {
      // Симуляция API запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser: User = {
        id: Math.random().toString(36),
        email,
        username,
        createdAt: new Date(),
      };

      setUser(newUser);
      localStorage.setItem("hltv_user", JSON.stringify(newUser));
    } catch (error) {
      throw new Error("Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hltv_user");
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
