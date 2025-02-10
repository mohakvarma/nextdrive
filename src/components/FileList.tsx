import { File, Folder } from "lucide-react"
import { type FileItem } from "~/lib/types"
import { cn } from "~/lib/utils"

interface FileListProps {
  items: FileItem[]
  onItemClick: (item: FileItem) => void
}

export function FileList({ items, onItemClick }: FileListProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="grid grid-cols-12 gap-4 border-b border-border px-6 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <div className="col-span-6">Name</div>
        <div className="col-span-3">Type</div>
        <div className="col-span-3">Size</div>
      </div>
      <div className="overflow-auto max-h-[calc(100vh-12rem)]">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item)}
            className={cn(
              "grid grid-cols-12 gap-4 px-6 py-4 hover:bg-accent hover:text-accent-foreground",
              "cursor-pointer transition-colors duration-150 ease-in-out"
            )}
          >
            <div className="col-span-6 flex items-center gap-3">
              {item.type === "folder" ? (
                <Folder className="h-5 w-5 text-muted-foreground" />
              ) : (
                <File className="h-5 w-5 text-muted-foreground" />
              )}
              <span className="truncate">{item.name}</span>
            </div>
            <div className="col-span-3 text-muted-foreground capitalize">
              {item.type}
            </div>
            <div className="col-span-3 text-muted-foreground">
              {item.size || "-"}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}