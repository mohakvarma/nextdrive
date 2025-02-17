import { ChevronRight, Home } from "lucide-react"
import { Button } from "~/components/ui/button"
import { type FileItem } from "~/lib/types"
import { cn } from "~/lib/utils"

interface BreadcrumbsProps {
  items: FileItem[]
  onNavigate: (index: number) => void
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-1 px-1 py-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onNavigate(-1)}
        className="text-muted-foreground hover:text-foreground gap-2 hover:bg-accent/50 transition-colors duration-200"
      >
        <Home className="h-4 w-4" />
        <span className="font-medium">Home</span>
      </Button>
      
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/60" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate(index)}
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors duration-200",
              "hover:bg-accent/50 font-medium",
              index === items.length - 1 && "text-foreground pointer-events-none"
            )}
          >
            {item.name}
          </Button>
        </div>
      ))}
    </nav>
  )
}