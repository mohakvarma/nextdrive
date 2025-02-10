import { Menu, Search, Upload } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

interface HeaderProps {
  onUpload: () => void
}

export function Header({ onUpload }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <h1 className="text-xl font-semibold">Drive Clone</h1>
        </div>
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              type="search" 
              placeholder="Search in Drive" 
              className="w-full pl-10 bg-muted/50"
            />
          </div>
        </div>
        <Button onClick={onUpload} className="gap-2">
          <Upload className="h-4 w-4" />
          Upload
        </Button>
      </div>
    </header>
  )
}