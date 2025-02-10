export interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  size?: string
  children?: FileItem[]
}

export const mockData: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      {
        id: "2",
        name: "Work Projects",
        type: "folder",
        children: [
          {
            id: "3",
            name: "Project Proposal.pdf",
            type: "file",
            size: "2.5 MB"
          }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Images",
    type: "folder",
    children: [
      {
        id: "5",
        name: "Vacation Photos",
        type: "folder",
        children: []
      }
    ]
  },
  {
    id: "6",
    name: "Report Q4.xlsx",
    type: "file",
    size: "1.2 MB"
  }
]
