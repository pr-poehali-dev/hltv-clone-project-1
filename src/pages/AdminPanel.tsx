import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AdminPanel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Панель администратора</h1>
        <p className="text-muted-foreground text-lg">
          Управление системой и контентом
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Icon name="Users" size={24} className="text-blue-600" />
              <div>
                <CardTitle>Пользователи</CardTitle>
                <CardDescription>Управление учетными записями</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">1,234</span>
              <Badge variant="default">Активных</Badge>
            </div>
            <Button className="w-full">Управлять</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={24} className="text-green-600" />
              <div>
                <CardTitle>Модерация</CardTitle>
                <CardDescription>Контроль контента</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">15</span>
              <Badge variant="destructive">Ожидают</Badge>
            </div>
            <Button className="w-full">Просмотреть</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Icon name="Settings" size={24} className="text-purple-600" />
              <div>
                <CardTitle>Настройки</CardTitle>
                <CardDescription>Конфигурация системы</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">Система</span>
              <Badge variant="secondary">Стабильно</Badge>
            </div>
            <Button className="w-full">Настроить</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Последние действия</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center space-x-3">
                  <Icon name="UserPlus" size={20} className="text-green-600" />
                  <span>Новый пользователь зарегистрирован</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  2 мин назад
                </span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="AlertTriangle"
                    size={20}
                    className="text-yellow-600"
                  />
                  <span>Жалоба на контент</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  5 мин назад
                </span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center space-x-3">
                  <Icon name="Database" size={20} className="text-blue-600" />
                  <span>Резервное копирование завершено</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  1 час назад
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
