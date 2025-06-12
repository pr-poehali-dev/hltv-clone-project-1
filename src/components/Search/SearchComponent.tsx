import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SearchResult } from "@/types";

const SearchComponent = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Mock search function
  const performSearch = (query: string): SearchResult[] => {
    if (!query.trim()) return [];

    // Mock data for demonstration
    const mockResults: SearchResult[] = [];

    if (query.toLowerCase().includes("navi")) {
      mockResults.push({
        type: "team",
        id: "1",
        title: "NAVI",
        subtitle: "Украина • Рейтинг #1",
        image: "https://img-cdn.hltv.org/teamlogo/9u6MjjstlSVNOjBGJK-7_c.png",
      });
    }

    if (query.toLowerCase().includes("s1mple")) {
      mockResults.push({
        type: "player",
        id: "1",
        title: "s1mple",
        subtitle: "Александр Костылев • NAVI",
        image: "https://img-cdn.hltv.org/playerbodyshot/default.png",
      });
    }

    return mockResults.slice(0, 5);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setResults(performSearch(value));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Поиск команд, игроков..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setOpen(true)}
            className="w-64"
          />
          <Button size="sm" variant="outline">
            <Icon name="Search" size={16} />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <Command>
          <CommandInput
            placeholder="Поиск..."
            value={value}
            onValueChange={setValue}
          />
          <CommandList>
            <CommandEmpty>Ничего не найдено.</CommandEmpty>
            {results.length > 0 && (
              <CommandGroup heading="Результаты">
                {results.map((result) => (
                  <CommandItem
                    key={`${result.type}-${result.id}`}
                    className="flex items-center space-x-3 cursor-pointer"
                    onSelect={() => {
                      setOpen(false);
                      // Handle navigation based on result type
                    }}
                  >
                    {result.image && (
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-8 h-8 rounded"
                      />
                    )}
                    <div className="flex-1">
                      <div className="font-medium">{result.title}</div>
                      {result.subtitle && (
                        <div className="text-sm text-muted-foreground">
                          {result.subtitle}
                        </div>
                      )}
                    </div>
                    <Icon
                      name={
                        result.type === "team"
                          ? "Users"
                          : result.type === "player"
                            ? "User"
                            : result.type === "match"
                              ? "Calendar"
                              : "Newspaper"
                      }
                      size={16}
                      className="text-muted-foreground"
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchComponent;
