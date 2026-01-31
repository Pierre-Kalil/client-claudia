import { Heart, Sparkles } from "lucide-react";

type FooterProps = {
  brandName: string;
  description: string;
  loveLine: string;
  year: number;
};

const splitLoveLine = (value: string) => {
  const token = "{icone_coracao}";
  const parts = value.split(token);

  if (parts.length <= 1) {
    return {
      before: value,
      after: "",
      hasToken: false,
    };
  }

  return {
    before: parts[0],
    after: parts.slice(1).join(token),
    hasToken: true,
  };
};

const Footer = ({ brandName, description, loveLine, year }: FooterProps) => {
  const { before, after, hasToken } = splitLoveLine(loveLine);

  return (
    <footer id="sobre" className="border-t border-border bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">
              {brandName}
            </span>
          </div>

          <p className="mt-4 max-w-md font-body text-sm text-muted-foreground">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-1 font-body text-sm text-muted-foreground">
            {hasToken ? (
              <>
                {before.trim()} <Heart className="h-4 w-4 text-primary" /> {after.trim()}
              </>
            ) : (
              loveLine
            )}
          </div>

          <p className="mt-4 font-body text-xs text-muted-foreground/70">
            © {year}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
