import { ChevronRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import { type FileItem } from "~/lib/types"

interface BreadcrumbsProps {
  items: FileItem[]
  onNavigate: (index: number) => void
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onNavigate(-1)}
        className="text-muted-foreground hover:text-foreground"
      >
        Home
      </Button>
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate(index)}
            className="text-muted-foreground hover:text-foreground"
          >
            {item.name}
          </Button>
        </div>
      ))}
    </nav>
  )
}