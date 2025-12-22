import { Facebook, Twitter, Linkedin, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogHeaderProps {
  category: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedDate: string;
  onBack?: () => void;
}

export const Header = ({ title, author, publishedDate }: BlogHeaderProps) => {
  return (
    <header className="space-y-6">
      <MoveLeft className="cursor-pointer text-muted-foreground" size={36} />

      <h1 className="text-foreground text-4xl leading-15 font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h1>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="p-5 bg-gray-400 rounded-full" />
          <div>
            <p className="font-medium">by {author.name}</p>
            <p className="text-muted-foreground text-sm">{publishedDate}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-muted-foreground text-[11px] font-medium tracking-widest uppercase">
            Share this
          </span>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-blog-hover h-9 w-9 rounded-full"
          >
            <Twitter />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-blog-hover h-9 w-9 rounded-full"
          >
            <Facebook />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-blog-hover h-9 w-9 rounded-full"
          >
            <Linkedin />
          </Button>
        </div>
      </div>
    </header>
  );
};
