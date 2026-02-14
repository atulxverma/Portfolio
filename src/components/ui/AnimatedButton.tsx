import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({ href, variant = "primary", children, className, ...props }: AnimatedButtonProps) {
  const baseStyles = "relative px-8 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
    </>
  );

  if (href) {
    return (
      <Link to={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {content}
    </button>
  );
}
