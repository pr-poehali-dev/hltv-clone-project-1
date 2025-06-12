import { Match } from "@/types";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface MatchCardProps {
  match: Match;
}

const MatchCard = ({ match }: MatchCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-500";
      case "upcoming":
        return "bg-yellow-500";
      case "finished":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live":
        return "LIVE";
      case "upcoming":
        return "Скоро";
      case "finished":
        return "Завершён";
      default:
        return status;
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("ru", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
    }).format(date);
  };

  return (
    <div className="hltv-card hover:border-primary/70 transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <Badge className={`${getStatusColor(match.status)} text-white text-xs`}>
          {getStatusText(match.status)}
        </Badge>
        <span className="text-sm text-muted-foreground">
          {formatTime(match.startTime)}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        {/* Team 1 */}
        <div className="flex items-center space-x-3 flex-1">
          <img
            src={match.team1.logo}
            alt={match.team1.name}
            className="w-8 h-8 rounded"
          />
          <div>
            <div className="font-medium">{match.team1.name}</div>
            <div className="text-xs text-muted-foreground flex items-center">
              <Icon name="Flag" size={12} className="mr-1" />
              {match.team1.country}
            </div>
          </div>
        </div>

        {/* Score */}
        <div className="flex items-center space-x-4 mx-6">
          <span className="text-2xl font-bold font-oswald">{match.score1}</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-2xl font-bold font-oswald">{match.score2}</span>
        </div>

        {/* Team 2 */}
        <div className="flex items-center space-x-3 flex-1 justify-end">
          <div className="text-right">
            <div className="font-medium">{match.team2.name}</div>
            <div className="text-xs text-muted-foreground flex items-center justify-end">
              <Icon name="Flag" size={12} className="mr-1" />
              {match.team2.country}
            </div>
          </div>
          <img
            src={match.team2.logo}
            alt={match.team2.name}
            className="w-8 h-8 rounded"
          />
        </div>
      </div>

      {/* Tournament Info */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <img
            src={match.tournament.logo}
            alt={match.tournament.name}
            className="w-4 h-4"
          />
          <span className="text-muted-foreground">{match.tournament.name}</span>
        </div>
        <span className="text-muted-foreground">{match.format}</span>
      </div>

      {/* Maps */}
      {match.maps && match.maps.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {match.maps.map((map, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {map}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchCard;
