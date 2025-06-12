import { NewsArticle } from "@/types";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("ru", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}М`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}К`;
    }
    return views.toString();
  };

  return (
    <article className="hltv-card hover:border-primary/70 transition-all duration-200 cursor-pointer group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-md mb-4">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-black/70 text-white">
            {article.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-oswald font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="User" size={12} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{formatViews(article.views)}</span>
            </div>
          </div>
          <time dateTime={article.publishedAt.toISOString()}>
            {formatDate(article.publishedAt)}
          </time>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
