import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const CreatorPanel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Панель создателя</h1>
        <p className="text-muted-foreground text-lg">
          Создание и управление контентом
        </p>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Контент</TabsTrigger>
          <TabsTrigger value="tournaments">Турниры</TabsTrigger>
          <TabsTrigger value="analytics">Аналитика</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={24} className="text-blue-600" />
                  <div>
                    <CardTitle>Новости</CardTitle>
                    <CardDescription>Создать новую статью</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={24} className="text-green-600" />
                  <div>
                    <CardTitle>Матчи</CardTitle>
                    <CardDescription>Добавить новый матч</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={24} className="text-purple-600" />
                  <div>
                    <CardTitle>Команды</CardTitle>
                    <CardDescription>Управление командами</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Icon name="Edit" size={16} className="mr-2" />
                  Редактировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tournaments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Активные турниры</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <h3 className="font-semibold">World Championship 2024</h3>
                    <p className="text-sm text-muted-foreground">
                      16 команд • Призовой фонд: $1,000,000
                    </p>
                  </div>
                  <Badge variant="default">Активный</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <h3 className="font-semibold">Regional League</h3>
                    <p className="text-sm text-muted-foreground">
                      8 команд • Призовой фонд: $100,000
                    </p>
                  </div>
                  <Badge variant="secondary">Планируется</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Статистика просмотров</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">45,231</div>
                <p className="text-sm text-muted-foreground">
                  +12% по сравнению с прошлым месяцем
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Активные пользователи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">8,742</div>
                <p className="text-sm text-muted-foreground">
                  +8% по сравнению с прошлым месяцем
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreatorPanel;
