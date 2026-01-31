import { Sparkles } from "lucide-react";

type HeaderProps = {
  brandName: string;
};

const Header = ({ brandName }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-display text-2xl font-semibold text-foreground">
            {brandName}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
