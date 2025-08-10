import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-light text-foreground tracking-wide">
          DEMONICK
        </h1>
        
        <div className="flex items-center justify-center space-x-6 pt-8">
          <a 
            href="#" 
            className="p-3 border border-border rounded-sm hover:bg-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground" strokeWidth={1} />
          </a>
          <a 
            href="#" 
            className="p-3 border border-border rounded-sm hover:bg-accent transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-foreground" strokeWidth={1} />
          </a>
          <a 
            href="#" 
            className="p-3 border border-border rounded-sm hover:bg-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground" strokeWidth={1} />
          </a>
          <a 
            href="#" 
            className="p-3 border border-border rounded-sm hover:bg-accent transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground" strokeWidth={1} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
