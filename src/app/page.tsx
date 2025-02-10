"use client"

import { useState } from "react"
import { Header } from "~/components/Header"
import { Breadcrumbs } from "~/components/Breadcrumbs"
import { FileList } from "~/components/FileList"
import { type FileItem, mockData } from "~/lib/types"

export default function GoogleDriveClone() {
  const [currentFolder, setCurrentFolder] = useState<FileItem[]>(mockData)
  const [breadcrumbs, setBreadcrumbs] = useState<FileItem[]>([])

  const handleFolderClick = (folder: FileItem) => {
    if (folder.type !== "folder") return
    setCurrentFolder(folder.children ?? [])
    setBreadcrumbs([...breadcrumbs, folder])
  }

  const handleBreadcrumbClick = (index: number) => {
    if (index === -1) {
      setCurrentFolder(mockData)
      setBreadcrumbs([])
      return
    }

    const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
    const lastFolder = newBreadcrumbs[newBreadcrumbs.length - 1]
    setCurrentFolder(lastFolder?.children ?? [])
    setBreadcrumbs(newBreadcrumbs)
  }

  const handleItemClick = (item: FileItem) => {
    if (item.type === "folder") {
      handleFolderClick(item)
    } else {
      window.open(`#file-${item.id}`, "_blank")
    }
  }

  const handleUpload = () => {
    // TODO: Implement file upload functionality
    alert("Upload functionality would be implemented here")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onUpload={handleUpload} />
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto flex h-full flex-col gap-4 p-4">
          <Breadcrumbs items={breadcrumbs} onNavigate={handleBreadcrumbClick} />
          <FileList items={currentFolder} onItemClick={handleItemClick} />
        </div>
      </main>
    </div>
  )
}