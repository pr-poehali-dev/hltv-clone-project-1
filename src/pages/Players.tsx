import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Players = () => {
  const players = [
    {
      id: 1,
      nickname: "ProGamer01",
      realName: "Александр Иванов",
      team: "Team Alpha",
      role: "Капитан",
      rating: 95,
      country: "Россия",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      nickname: "Lightning",
      realName: "Михаил Петров",
      team: "Team Beta",
      role: "Снайпер",
      rating: 92,
      country: "Украина",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      nickname: "Shadow",
      realName: "Дмитрий Сидоров",
      team: "Team Gamma",
      role: "Поддержка",
      rating: 88,
      country: "Беларусь",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      nickname: "Phoenix",
      realName: "Анна Козлова",
      team: "Team Delta",
      role: "Стратег",
      rating: 90,
      country: "Казахстан",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop",
    },
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 90) return "text-green-600";
    if (rating >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Игроки</h1>
        <p className="text-muted-foreground text-lg">
          Профили профессиональных киберспортсменов
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <Card key={player.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={player.avatar} alt={player.nickname} />
                  <AvatarFallback>{player.nickname.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{player.nickname}</CardTitle>
                  <CardDescription>{player.realName}</CardDescription>
                  <Badge variant="secondary">{player.team}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Роль:</span>
                <Badge variant="outline">{player.role}</Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Страна:</span>
                <div className="flex items-center">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  {player.country}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Рейтинг:
                  </span>
                  <span
                    className={`font-bold ${getRatingColor(player.rating)}`}
                  >
                    {player.rating}/100
                  </span>
                </div>
                <Progress value={player.rating} className="h-2" />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Star" size={16} className="mr-1" />
                  Профи
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Trophy" size={16} className="mr-1" />
                  12 побед
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Players;
