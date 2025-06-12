import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Новый турнир по киберспорту",
      description:
        "Начинается крупнейший турнир года с призовым фондом 1 млн долларов",
      date: "2024-12-15",
      category: "Турниры",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Обновление игрового баланса",
      description: "Разработчики выпустили патч с изменениями персонажей",
      date: "2024-12-14",
      category: "Обновления",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Новая команда в лиге",
      description: "Team Phoenix присоединяется к профессиональной лиге",
      date: "2024-12-13",
      category: "Команды",
      image:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Новости</h1>
        <p className="text-muted-foreground text-lg">
          Актуальные новости из мира киберспорта
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-muted">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{item.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} className="mr-1" />
                  {item.date}
                </div>
              </div>
              <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button className="flex items-center text-primary hover:underline">
                Читать далее
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
