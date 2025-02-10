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
      { id: "1-1", name: "Resume.pdf", type: "file", size: "245 KB" },
      { id: "1-2", name: "Cover Letter.docx", type: "file", size: "35 KB" },
    ],
  },
  {
    id: "2",
    name: "Images",
    type: "folder",
    children: [
      { id: "2-1", name: "Vacation.jpg", type: "file", size: "1.2 MB" },
      { id: "2-2", name: "Family.png", type: "file", size: "2.5 MB" },
    ],
  },
  { id: "3", name: "Project Proposal.pptx", type: "file", size: "1.8 MB" },
  { id: "4", name: "Budget.xlsx", type: "file", size: "500 KB" },
]

