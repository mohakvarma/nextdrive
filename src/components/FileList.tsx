import { File, Folder, MoreHorizontal } from "lucide-react"
import { type FileItem } from "~/lib/types"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"

interface FileListProps {
  items: FileItem[]
  onItemClick: (item: FileItem) => void
}

export function FileList({ items, onItemClick }: FileListProps) {
  return (
    <div className="rounded-lg border border-border/50 bg-card shadow-sm">
      <div className="grid grid-cols-12 gap-4 border-b border-border/50 px-6 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground bg-muted/30">
        <div className="col-span-6">Name</div>
        <div className="col-span-3">Type</div>
        <div className="col-span-3">Size</div>
      </div>
      
      <div className="overflow-auto max-h-[calc(100vh-12rem)] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <File className="h-12 w-12 mb-4 stroke-[1.5]" />
            <p className="text-sm">No files found</p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemClick(item)}
              className={cn(
                "group grid grid-cols-12 gap-4 px-6 py-4 hover:bg-accent hover:text-accent-foreground",
                "cursor-pointer transition-all duration-200 ease-out relative",
                "border-b border-border/40 last:border-0"
              )}
            >
              <div className="col-span-6 flex items-center gap-3">
                {item.type === "folder" ? (
                  <Folder className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 transition-colors duration-200" />
                ) : (
                  <File className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 transition-colors duration-200" />
                )}
                <span className="truncate font-medium">{item.name}</span>
              </div>
              <div className="col-span-3 text-muted-foreground group-hover:text-accent-foreground/80 transition-colors duration-200 capitalize">
                {item.type}
              </div>
              <div className="col-span-3 text-muted-foreground group-hover:text-accent-foreground/80 transition-colors duration-200">
                {item.size || "-"}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}