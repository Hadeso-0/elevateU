"use client";

import * as React from "react"
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/toggle-theme'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react'
import { X, PlusCircle } from 'lucide-react'
import tags from './tags.json';

// @ts-ignore
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Separator,
} from "@/components/ui/separator"
import { UploadJD } from "./JobDescDialog";





export default function Session() {

  // const initialArray = []
  const [selectedTags, setSelectedTags] = useState([])
  const [difficulty, setDifficulty] = useState("Beginner")

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleRemoveItem = (index : number) => {
      const updatedItems = [...selectedTags];
      updatedItems.splice(index, 1);
      setSelectedTags(updatedItems);
  };

  const insertTag = (currentValue: String) => {

    for(let i = 0; i < selectedTags.length; i++) {
      if (selectedTags[i] === currentValue) {
        return;
      }
    }
    //@ts-ignore
    setSelectedTags(selectedTags => [...selectedTags, currentValue])

  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-slate-800 bg-[#f7f8fa]">
      <div className="z-10 max-w-3xl w-full flex-col items-center justify-center font-sans mt-28">
        <div className="flex text-3xl font-semibold text-gray-600 mb-6 items-center justify-center">
          Customize your Interview Session
        </div>
        <Separator className="mb-6" />
        <div className="flex text-lg font-medium text-gray-700 gap-4 items-center justify-center">
          <span className="flex-none">Enter your Name:</span> 
          <Input className="focus:outline-2 focus:outline-blue-600 text-base font-normal"></Input>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="border-[1px] min-h-[3rem] mt-6 rounded-lg cursor-pointer">
              <Dialog>
                <div className="relative">
                  <DialogTrigger asChild>
                    <div className="text-base font-medium text-gray-700 flex items-center justify-between p-[1rem] pl-[1.5rem]">
                      <span >Add Tags Profile</span>
                        <PlusCircle className="ml-2 h-6 w-6 text-xl flex-none "></PlusCircle>
                    </div>
                  </DialogTrigger>
                  {
                    (
                      <div className={`mt-[0.5rem] ml-3 mb-3 flex flex-wrap gap-1 ${(selectedTags.length === 0) ? 'hidden' : 'block'}`}>
                        {selectedTags.map((item, index) => (
                                <div key={index} className="flex pl-4 pr-2 py-2 border-[1px] rounded-full font-normal text-sm justify-center items-center">
                                    {item}
                                    <X className="cursor-pointer bg-gray-600 text-white text-base p-1 ml-2 rounded-full" onClick={() => handleRemoveItem(index)}> </X>
                                </div>
                        ))}
                      </div>
                    )
                  }
              </div>
                <DialogContent className="sm:max-w-[725px] bg-white">
                  <DialogHeader>
                  <div className="flex flex-wrap border-1">
                  </div>
                    <DialogTitle className="text-lg">Add Tags</DialogTitle>
                    <DialogDescription className="text-sm">
                      {"Add the tags you want to take mock-interview for... Click save when you're done."}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 pt-2 w-full">
                    <div className="grid grid-cols-4 items-center gap-4 w-full">
                      <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-[675px] justify-between"
                            >
                              {value
                                ? tags.find((tag) => tag.value === value)?.label
                                : "Select tags..."}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[675px] p-0">
                            <Command>
                              <CommandInput placeholder="Search tag..." className="h-9" />
                              <CommandEmpty>No tag found.</CommandEmpty>
                              <CommandGroup>
                                {tags.map((tag) => (
                                  <CommandItem
                                    key={tag.value}
                                    value={tag.value}
                                    // @ts-ignore
                                    onSelect={(currentValue : number) => {
                                      // setValue(currentValue === value ? "" : currentValue)
                                      // @ts-ignore
                                      insertTag(currentValue)
                                      console.log(selectedTags)
                                      setOpen(false)
                                    }}
                                  >
                                    {tag.label}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        value === tag.value ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-1">
                      {selectedTags.map((item, index) => (
                        <div key={index} className="flex pl-4 pr-2 py-2 border-[1px] rounded-full font-normal text-sm justify-center items-center">
                            {item}
                            <X className="cursor-pointer bg-gray-600 text-white text-base p-1 ml-2 rounded-full" onClick={() => handleRemoveItem(index)}> </X>
                        </div>  
                      ))}
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit">Save changes</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <UploadJD />
            </div>
            <div className="flex flex-col text-lg font-medium text-gray-700 gap-4 mt-8">
              <span className="flex-none">What are you Aiming for:</span> 
              <div className="flex gap-8">
                <div className={`flex border-1 p-4 px-6 rounded-md cursor-pointer ${(difficulty == "Beginner") ? 'ring-2 ring-blue-600 shadow-lg drop-shadow-sm text-blue-700' : ''}`}
                      onClick={() => setDifficulty("Beginner")}>
                      Entry-Level
                </div>
                <div className={`flex border-1 p-4 px-6 rounded-md cursor-pointer ${(difficulty == "Professional") ? 'ring-2 ring-blue-600' : 'shadow-sm'}`}
                      onClick={() => setDifficulty("Professional")}>
                      Industry-Professional
                </div>
            </div>
            </div>
            <div className="flex items-center justify-end mt-20">
              <Button className="bg-blue-600 h-12 px-6 shadow-sm hover:bg-blue-700 hover:shadow-md text-md">
                <Link href="/questions">Start Practicing</Link>
              </Button>
            </div>
        </div>
      </div>
    </main>
  )
}






