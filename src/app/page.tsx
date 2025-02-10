"use client"

import { useState } from "react"
import { type FileItem, mockData } from "../lib/mock-data"
import { Folder, File, ChevronRight, Upload, Search, Menu } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

export default function GoogleDriveClone() {
  const [currentFolder, setCurrentFolder] = useState<FileItem[]>(mockData)
  const [breadcrumbs, setBreadcrumbs] = useState<FileItem[]>([])

  const handleFolderClick = (folder: FileItem) => {
    setCurrentFolder(folder.children || [])
    setBreadcrumbs([...breadcrumbs, folder])
  }

  const handleBreadcrumbClick = (index: number) => {
    if (index === -1) {
      setCurrentFolder(mockData)
      setBreadcrumbs([])
    } else {
      const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
      setCurrentFolder(newBreadcrumbs[newBreadcrumbs.length - 1]?.children || [])
      setBreadcrumbs(newBreadcrumbs)
    }
  }

  const handleUpload = () => {
    alert("Upload functionality would be implemented here")
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col">
      <header className="bg-gray-900 border-b border-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-200">
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold text-gray-100">Google Drive Clone</h1>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search in Drive"
                className="w-full bg-gray-800 border-gray-700 pl-10 focus:ring-blue-500 focus:border-blue-500 text-gray-200 placeholder-gray-500"
              />
            </div>
          </div>
          <Button
            onClick={handleUpload}
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto p-4 h-full flex flex-col">
          <nav className="mb-4 flex items-center space-x-2 text-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleBreadcrumbClick(-1)}
              className="text-gray-400 hover:text-gray-200"
            >
              Home
            </Button>
            {breadcrumbs.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 text-gray-600" />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleBreadcrumbClick(index)}
                  className="text-gray-400 hover:text-gray-200"
                >
                  {item.name}
                </Button>
              </div>
            ))}
          </nav>
          <div className="bg-gray-900 rounded-lg overflow-hidden flex-1 shadow-xl">
            <div className="px-6 py-3 bg-gray-800 text-xs font-medium uppercase tracking-wider grid grid-cols-12 gap-4 text-gray-400">
              <div className="col-span-6">Name</div>
              <div className="col-span-3">Type</div>
              <div className="col-span-3">Size</div>
            </div>
            <div className="overflow-auto h-[calc(100vh-220px)]">
              {currentFolder.map((item) => (
                <div
                  key={item.id}
                  className="px-6 py-4 grid grid-cols-12 gap-4 hover:bg-gray-800 cursor-pointer transition-colors duration-150 ease-in-out border-b border-gray-800 last:border-b-0"
                  onClick={() =>
                    item.type === "folder" ? handleFolderClick(item) : window.open(`#file-${item.id}`, "_blank")
                  }
                >
                  <div className="col-span-6 flex items-center space-x-3">
                    {item.type === "folder" ? (
                      <Folder className="w-5 h-5 text-blue-400" />
                    ) : (
                      <File className="w-5 h-5 text-gray-400" />
                    )}
                    <span className="truncate font-medium">{item.name}</span>
                  </div>
                  <div className="col-span-3 text-gray-500 capitalize">{item.type}</div>
                  <div className="col-span-3 text-gray-500">{item.size || "-"}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

