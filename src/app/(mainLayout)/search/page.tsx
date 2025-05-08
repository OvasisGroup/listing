// components/SearchableSelect.tsx
"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import axios from "axios"
import { useDebounce } from "@/hooks/use-debounce"

export default function SearchableSelect({
  onValueChange,
}: {
  onValueChange: (value: string) => void
}) {
  const [inputValue, setInputValue] = React.useState("")
  const [options, setOptions] = React.useState<string[]>([])
  const debouncedSearch = useDebounce(inputValue, 300)

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/subcategories/subcategory?q=${debouncedSearch}`)
      setOptions(res.data)
    }
    fetchData()
  }, [debouncedSearch])

  return (
    <div className="space-y-2">
      <Input
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.length ? (
            options.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))
          ) : (
            <div className="p-2 text-sm text-muted-foreground">No results found</div>
          )}
        </SelectContent>
      </Select>
    </div>
  )
}
