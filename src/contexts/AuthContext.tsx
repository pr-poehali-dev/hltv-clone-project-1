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
    const savedUser = localStorage.getItem("obsidian_user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      // Apply theme
      document.documentElement.className =
        userData.theme === "purple-white" ? "light" : "dark";
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if this is creator email
      const role = email === "epicleague@bk.ru" ? "creator" : "user";

      const newUser: User = {
        id: Math.random().toString(36),
        email,
        username: email.split("@")[0],
        role,
        theme: "purple-black",
        subscriptions: [],
        createdAt: new Date(),
      };

      setUser(newUser);
      localStorage.setItem("obsidian_user", JSON.stringify(newUser));
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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const role = email === "epicleague@bk.ru" ? "creator" : "user";

      const newUser: User = {
        id: Math.random().toString(36),
        email,
        username,
        role,
        theme: "purple-black",
        subscriptions: [],
        createdAt: new Date(),
      };

      setUser(newUser);
      localStorage.setItem("obsidian_user", JSON.stringify(newUser));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("obsidian_user");
    document.documentElement.className = "dark";
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!user) return;

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("obsidian_user", JSON.stringify(updatedUser));

    // Apply theme change
    if (updates.theme) {
      document.documentElement.className =
        updates.theme === "purple-white" ? "light" : "dark";
    }
  };

  const subscribeToTeam = (teamId: string) => {
    if (!user) return;

    const subscriptions = [...user.subscriptions];
    if (!subscriptions.includes(teamId)) {
      subscriptions.push(teamId);
      updateProfile({ subscriptions });
    }
  };

  const unsubscribeFromTeam = (teamId: string) => {
    if (!user) return;

    const subscriptions = user.subscriptions.filter((id) => id !== teamId);
    updateProfile({ subscriptions });
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    updateProfile,
    subscribeToTeam,
    unsubscribeFromTeam,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
