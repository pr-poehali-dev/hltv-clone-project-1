import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Matches = () => {
  const matches = [
    {
      id: 1,
      team1: "Team Alpha",
      team2: "Team Beta",
      score: "2:1",
      status: "Завершен",
      date: "2024-12-15 18:00",
      tournament: "World Championship",
    },
    {
      id: 2,
      team1: "Team Gamma",
      team2: "Team Delta",
      score: "0:0",
      status: "В процессе",
      date: "2024-12-15 20:00",
      tournament: "Regional League",
    },
    {
      id: 3,
      team1: "Team Epsilon",
      team2: "Team Zeta",
      score: "-:-",
      status: "Предстоит",
      date: "2024-12-16 19:00",
      tournament: "World Championship",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Завершен":
        return "default";
      case "В процессе":
        return "destructive";
      case "Предстоит":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Матчи</h1>
        <p className="text-muted-foreground text-lg">
          Расписание и результаты матчей
        </p>
      </div>

      <div className="space-y-4">
        {matches.map((match) => (
          <Card key={match.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{match.tournament}</CardTitle>
                <Badge variant={getStatusColor(match.status)}>
                  {match.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="font-semibold">{match.team1}</div>
                  </div>
                  <div className="text-2xl font-bold text-center min-w-[60px]">
                    {match.score}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{match.team2}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {match.date}
                  </div>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Matches;
