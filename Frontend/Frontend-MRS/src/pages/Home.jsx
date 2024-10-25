import React, { useState } from "react";
// import SearchBar from '../components/SearchBar';
// import MovieList from './MovieList';
import {
  Bell,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarRail,
// } from "@/components/ui/sidebar"

import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Plus,
  Search,
} from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { ScrollArea } from "@/components/ui/scroll-area"

const home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (query) => {
    // Fetch movie data based on query
    // Update `movies` state with the fetched results
  };

  return (
    <>
      {/* <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="border-r bg-background">
          <SidebarHeader className="border-b px-4 py-2">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6" />
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a className="flex items-center gap-3" href="#">
                    <Home className="h-4 w-4" />
                    Home
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a className="flex items-center gap-3" href="#">
                    <User className="h-4 w-4" />
                    Profile
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a className="flex items-center gap-3" href="#">
                    <Bell className="h-4 w-4" />
                    Notifications
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a className="flex items-center gap-3" href="#">
                    <Settings className="h-4 w-4" />
                    Settings
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start px-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="ml-2">John Doe</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p>Your main content goes here.</p>
        </main>
      </div>
    </SidebarProvider> */}

      {/* <div className="flex h-screen">
        <aside className="w-64 border-r bg-gray-50">
          <div className="border-b px-4 py-2 bg-white">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6" />
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </div>

          <nav className="flex flex-col p-4">
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-200"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-200"
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-200"
            >
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-200"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </a>
          </nav>

          <div className="border-t p-4 bg-white">
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded">
              <avatar className="h-8 w-8">
              <avatarImage src="/placeholder-user.jpg" alt="User" />
              <avatarFallback>U</avatarFallback>
            </avatar>
              <span className="ml-2">John Doe</span>
            </div>
            <div className="mt-4">
              <button className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-gray-200">
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p>Your main content goes here.</p>
        </main>
      </div> */}

      {/* ============================ */}

      <div className="flex h-screen bg-gray-900 text-white">
        <aside className="w-64 bg-gray-800 p-4">
          <h1 className="mb-8 text-2xl font-bold">Tasteful Picks</h1>
          <nav className="space-y-6">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400">Menu</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-purple-400"
                  >
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Movie</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>TV Show</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Genres</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Coming Soon</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400">
                Library
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Playlists</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>Watchlist</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Remind</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Combo</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Your rating</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400">
                General
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto">
          <header className="flex items-center justify-between p-4">
            <div className="relative w-1/3">
              <input
                type="search"
                placeholder="Search for movies, TV shows..."
                className="bg-gray-700 pl-10 text-white placeholder-gray-400"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            </div>
            <dropdownMenu>
              <dropdownMenuTrigger asChild>
                <button variant="ghost" className="h-8 w-8 rounded-full">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                    className="h-8 w-8 rounded-full"
                  />
                </button>
              </dropdownMenuTrigger>
              <dropdownMenuContent align="end">
                <dropdownMenuLabel>My Account</dropdownMenuLabel>
                <dropdownMenuSeparator />
                <dropdownMenuItem>Profile</dropdownMenuItem>
                <dropdownMenuItem>Settings</dropdownMenuItem>
                <dropdownMenuItem>Log out</dropdownMenuItem>
              </dropdownMenuContent>
            </dropdownMenu>
          </header>
          <scrollArea className="h-[calc(100vh-64px)]">
            <section className="relative h-[70vh]">
              <img
                src="/placeholder.svg?height=1080&width=1920"
                alt="Joker 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="mb-2 text-5xl font-bold">JOKER 2</h2>
                <p className="mb-2 text-sm text-gray-300">
                  2h 18m • 2024 • Crime, Drama, Musical, Thriller
                </p>
                <p className="mb-4 max-w-2xl text-sm">
                  Failed comedian Arthur Fleck meets the love of his life,
                  Harley Quinn, while in Arkham State Hospital. Upon release,
                  the pair embark on a doomed romantic misadventure
                </p>
                <div className="flex space-x-4">
                  <button
                    variant="secondary"
                    className="bg-white text-black hover:bg-gray-200"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch Trailer
                  </button>
                  <button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    More Info
                  </button>
                  <button
                    variant="ghost"
                    className="text-white hover:bg-white hover:text-black"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-1/2 left-4 transform">
                <button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-gray-800/50"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute bottom-1/2 right-4 transform">
                <button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-gray-800/50"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>
            </section>
            <section className="p-8">
              <h3 className="mb-4 text-2xl font-bold">Our Genres</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {["Action", "Adventure", "Comedy", "Drama", "Horror"].map(
                  (genre) => (
                    <genreCard key={genre} genre={genre} />
                  )
                )}
              </div>
            </section>
            <section className="p-8">
              <h3 className="mb-4 text-2xl font-bold">New Releases</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {[...Array(6)].map((_, i) => (
                  <movieCard key={i} />
                ))}
              </div>
            </section>
          </scrollArea>
        </main>
      </div>

      <sidebarProvider>
      <div className="flex h-screen bg-gray-100">
        <sidebar className="w-64 border-r bg-white">
          <sidebarContent>
            <div className="flex items-center p-4">
              <svg
                className=" h-8 w-8 text-indigo-600"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                <circle cx="12" cy="12" r="2" />
                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
              </svg>
            </div>
            <sidebarGroup>
              <sidebarMenu>
                <sidebarMenuItem>
                  <sidebarMenuButton className="w-full justify-start gap-2">
                    <svg
                      className=" h-5 w-5 text-indigo-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="w-full justify-start gap-2">
                    <svg
                      className=" h-5 w-5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Team
                  </sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="w-full justify-start gap-2">
                    <svg
                      className=" h-5 w-5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    Projects
                  </sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="w-full justify-start gap-2">
                    <svg
                      className=" h-5 w-5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect height="18" width="18" x="3" y="4" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    Calendar
                  </sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="w-full justify-start gap-2">
                    <svg
                      className=" h-5 w-5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" x2="8" y1="13" y2="13" />
                      <line x1="16" x2="8" y1="17" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Documents
                  </sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="w-full justify-start gap-2">
                    <svg
                      className=" h-5 w-5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Reports
                  </sidebarMenuButton>
                </sidebarMenuItem>
              </sidebarMenu>
            </sidebarGroup>
            <sidebarGroup>
              <sidebarGroupLabel>Your teams</sidebarGroupLabel>
              <sidebarGroupContent>
                <sidebarMenu>
                  <sidebarMenuItem>
                    <sidebarMenuButton className="w-full justify-start gap-2">
                      <avatar className="h-5 w-5">
                        <avatarFallback>H</avatarFallback>
                      </avatar>
                      Heroicons
                    </sidebarMenuButton>
                  </sidebarMenuItem>
                  <sidebarMenuItem>
                    <sidebarMenuButton className="w-full justify-start gap-2">
                      <avatar className="h-5 w-5">
                        <avatarFallback>T</avatarFallback>
                      </avatar>
                      Tailwind Labs
                    </sidebarMenuButton>
                  </sidebarMenuItem>
                  <sidebarMenuItem>
                    <sidebarMenuButton className="w-full justify-start gap-2">
                      <avatar className="h-5 w-5">
                        <avatarFallback>W</avatarFallback>
                      </avatar>
                      Workcation
                    </sidebarMenuButton>
                  </sidebarMenuItem>
                </sidebarMenu>
              </sidebarGroupContent>
            </sidebarGroup>
          </sidebarContent>
        </sidebar>
        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center justify-between border-b bg-white px-4">
            <div className="flex items-center gap-2">
              <input className="w-64" placeholder="Search..." type="search" />
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-4">
              <button size="icon" variant="ghost">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </button>
              <button className="gap-2" variant="ghost">
                <avatar className="h-6 w-6">
                  <avatarImage alt="Tom Cook" src="/placeholder.svg?height=32&width=32" />
                  <avatarFallback>TC</avatarFallback>
                </avatar>
                Tom Cook
                <chevronDown className="h-4 w-4" />
              </button>
            </div>
          </header>
          <main className="flex-1 p-4">
            <div className="h-full rounded-lg border-2 border-dashed border-red-600" />
          </main>
        </div>
      </div>
    </sidebarProvider>

      {/* <div className="flex h-screen bg-gray-900 text-white">
        <aside className="w-64 bg-gray-800 p-4">
          <h1 className="mb-8 text-2xl font-bold">Tasteful Picks</h1>
          <nav className="space-y-6">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400">Menu</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-purple-400"
                  >
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Movie</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>TV Show</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Genres</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Coming Soon</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400">
                Library
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Playlists</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>Watchlist</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Remind</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Combo</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Your rating</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400">
                General
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <header className="flex items-center justify-between p-4 bg-gray-800">
            <div className="relative w-1/3">
              <input
                type="search"
                placeholder="Search for movies, TV shows..."
                className="bg-gray-700 pl-10 text-white placeholder-gray-400 rounded"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            </div>
            <div className="flex items-center">
              <button className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-gray-700">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2">John Doe</span>
              </button>
              <button className="ml-4 flex items-center gap-2 text-white">
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </button>
            </div>
          </header>
          <section className="relative h-[70vh] p-4">
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Joker 2"
              className="h-full w-full object-cover rounded"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="mb-2 text-5xl font-bold">JOKER 2</h2>
              <p className="mb-2 text-sm text-gray-300">
                2h 18m • 2024 • Crime, Drama, Musical, Thriller
              </p>
              <p className="mb-4 max-w-lg text-gray-400">
                A detailed description of the movie goes here. This section can
                include information about the plot, characters, and other
                relevant details.
              </p>
            </div>
          </section>
        </main>
      </div> */}
    </>
  );
};

// function GenreCard({ genre }: { genre: string }) {
//   return (
//     <div className="group relative overflow-hidden rounded-lg">
//       <img
//         src="/placeholder.svg?height=300&width=200"
//         alt={genre}
//         className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//       <div className="absolute bottom-0 left-0 p-4">
//         <h4 className="text-lg font-semibold">{genre}</h4>
//       </div>
//       <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//         <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/50">
//           <ChevronRight className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   )
// }

// function MovieCard() {
//   return (
//     <div className="group relative overflow-hidden rounded-lg">
//       <img
//         src="/placeholder.svg?height=300&width=200"
//         alt="Movie"
//         className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//       <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//         <h4 className="text-sm font-semibold">Movie Title</h4>
//         <p className="text-xs text-gray-300">2024 • 2h 15m</p>
//       </div>
//     </div>
//   )
// }
export default home;
