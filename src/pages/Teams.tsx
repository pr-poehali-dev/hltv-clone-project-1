import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "Team Alpha",
      region: "Европа",
      members: 5,
      rank: 1,
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop",
      description: "Лидирующая команда европейского региона",
    },
    {
      id: 2,
      name: "Team Beta",
      region: "Северная Америка",
      members: 5,
      rank: 2,
      logo: "https://images.unsplash.com/photo-1614680376408-81e016734ac1?w=100&h=100&fit=crop",
      description: "Сильная команда из США",
    },
    {
      id: 3,
      name: "Team Gamma",
      region: "Азия",
      members: 5,
      rank: 3,
      logo: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=100&h=100&fit=crop",
      description: "Восходящие звезды азиатского киберспорта",
    },
    {
      id: 4,
      name: "Team Delta",
      region: "Южная Америка",
      members: 5,
      rank: 4,
      logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&h=100&fit=crop",
      description: "Представители латиноамериканского региона",
    },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-500";
    if (rank === 2) return "bg-gray-400";
    if (rank === 3) return "bg-orange-600";
    return "bg-muted";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Команды</h1>
        <p className="text-muted-foreground text-lg">
          Профессиональные киберспортивные команды
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={team.logo} alt={team.name} />
                    <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${getRankColor(team.rank)} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {team.rank}
                  </div>
                </div>
                <div>
                  <CardTitle>{team.name}</CardTitle>
                  <Badge variant="secondary">{team.region}</Badge>
                </div>
              </div>
              <CardDescription>{team.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Users" size={16} className="mr-1" />
                  {team.members} игроков
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Trophy" size={16} className="mr-1" />#{team.rank}{" "}
                  в мире
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Подробнее
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Teams;
