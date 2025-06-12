import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const ProfileSettings = () => {
  const { user, updateProfile } = useAuth();
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [avatar, setAvatar] = useState(user?.avatar || "");

  if (!user) {
    return <div>Требуется авторизация</div>;
  }

  const handleSaveProfile = () => {
    updateProfile({ username, email, avatar });
    toast.success("Профиль обновлен");
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword) {
      toast.error("Заполните все поля для смены пароля");
      return;
    }
    // Mock password change
    setCurrentPassword("");
    setNewPassword("");
    toast.success("Пароль изменен");
  };

  const handleThemeChange = (checked: boolean) => {
    const newTheme = checked ? "purple-white" : "purple-black";
    updateProfile({ theme: newTheme });
    toast.success(`Тема изменена на ${checked ? "светлую" : "темную"}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <Icon name="Settings" size={32} className="text-primary" />
            <h1 className="font-oswald text-3xl font-bold">
              Настройки профиля
            </h1>
          </div>

          {/* Profile Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="User" size={20} className="mr-2" />
                Основная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Никнейм</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avatar">Аватар (URL)</Label>
                <Input
                  id="avatar"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>

              <Button onClick={handleSaveProfile}>
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить профиль
              </Button>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Palette" size={20} className="mr-2" />
                Внешний вид
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Светлая тема</Label>
                  <p className="text-sm text-muted-foreground">
                    Переключить на фиолетово-белую тему
                  </p>
                </div>
                <Switch
                  checked={user.theme === "purple-white"}
                  onCheckedChange={handleThemeChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Password Change */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Lock" size={20} className="mr-2" />
                Смена пароля
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Текущий пароль</Label>
                <Input
                  id="current-password"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">Новый пароль</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <Button onClick={handleChangePassword}>
                <Icon name="Shield" size={16} className="mr-2" />
                Изменить пароль
              </Button>
            </CardContent>
          </Card>

          {/* User Role Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Badge" size={20} className="mr-2" />
                Роль пользователя
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3">
                <Icon
                  name={
                    user.role === "creator"
                      ? "Crown"
                      : user.role === "admin"
                        ? "Shield"
                        : "User"
                  }
                  size={20}
                  className="text-primary"
                />
                <span className="font-medium capitalize">
                  {user.role === "creator"
                    ? "Создатель"
                    : user.role === "admin"
                      ? "Администратор"
                      : "Пользователь"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfileSettings;
