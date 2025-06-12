import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Rankings = () => {
  const teamRankings = [
    {
      position: 1,
      name: "Team Alpha",
      points: 2450,
      change: "+2",
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop",
    },
    {
      position: 2,
      name: "Team Beta",
      points: 2380,
      change: "-1",
      logo: "https://images.unsplash.com/photo-1614680376408-81e016734ac1?w=100&h=100&fit=crop",
    },
    {
      position: 3,
      name: "Team Gamma",
      points: 2310,
      change: "+1",
      logo: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=100&h=100&fit=crop",
    },
    {
      position: 4,
      name: "Team Delta",
      points: 2290,
      change: "-2",
      logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&h=100&fit=crop",
    },
    {
      position: 5,
      name: "Team Epsilon",
      points: 2250,
      change: "0",
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop",
    },
  ];

  const getChangeColor = (change: string) => {
    if (change.startsWith("+")) return "text-green-600";
    if (change.startsWith("-")) return "text-red-600";
    return "text-muted-foreground";
  };

  const getChangeIcon = (change: string) => {
    if (change.startsWith("+")) return "TrendingUp";
    if (change.startsWith("-")) return "TrendingDown";
    return "Minus";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Рейтинги</h1>
        <p className="text-muted-foreground text-lg">
          Текущие позиции команд в мировом рейтинге
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Топ команд</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamRankings.map((team) => (
              <div
                key={team.position}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-muted-foreground min-w-[40px]">
                    #{team.position}
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={team.logo} alt={team.name} />
                    <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">{team.name}</div>
                    <div className="text-muted-foreground">
                      {team.points} очков
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Icon
                      name={getChangeIcon(team.change)}
                      size={16}
                      className={getChangeColor(team.change)}
                    />
                    <span
                      className={`ml-1 font-medium ${getChangeColor(team.change)}`}
                    >
                      {team.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rankings;
