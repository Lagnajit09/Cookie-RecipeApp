import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { FilterIcon, CookieIcon, SearchIcon, ProfileIcon } from "@/constants/icons/icon"

export function Navbar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-primary text-primary-foreground sm:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <CookieIcon className="w-6 h-6" />
        <span className="text-lg font-bold">Cookie</span>
      </Link>
      <div className="relative flex-1 max-w-md mx-4">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search recipes..."
          className="w-full pl-10 pr-12 rounded-md bg-primary/20 focus:bg-primary/30 focus:outline-none"
        />
        {/* <Button variant="ghost" size="icon" className="absolute right-3 top-1/2 -translate-y-1/2">
          <FilterIcon className="w-5 h-5" />
          <span className="sr-only">Filter</span>
        </Button> */}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="hidden text-primary font-semibold sm:inline-flex">
          Add Recipe
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-lg outline-none border-none">
              <ProfileIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

