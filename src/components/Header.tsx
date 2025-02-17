import { Menu, Search, Upload } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

interface HeaderProps {
  onUpload: () => void
}

export function Header({ onUpload }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex items-baseline gap-1">
            <h1 className="text-xl font-semibold tracking-tight">NextDrive</h1>
            <span className="text-xs text-muted-foreground">beta</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5 transition-colors duration-200 group-focus-within:text-foreground" />
            <Input 
              type="search" 
              placeholder="Search in Drive" 
              className="w-full pl-10 bg-muted/50 focus:bg-muted/80 transition-colors duration-200 focus:ring-2 ring-offset-2 ring-offset-background"
            />
          </div>
        </div>
        
        <Button 
          onClick={onUpload} 
          className="gap-2 shadow-sm hover:shadow-md transition-all duration-200"
        >
          <Upload className="h-4 w-4" />
          Upload
        </Button>
      </div>
    </header>
  )
}