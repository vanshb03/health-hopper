import { Metadata } from "next";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "../components/ui/button";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

import { AlbumArtwork } from "../components/album-artwork";
import { Menu } from "../components/menu";
import { PodcastEmptyPlaceholder } from "../components/podcast-empty-placeholder";
import { Sidebar } from "../components/sidebar";
import { listenNowAlbums, madeForYouAlbums } from "../data/albums";
import { playlists } from "../data/playlists";
import { CalendarDateRangePicker } from "../components/date-range-picker";
import Link from "next/link";
import Header from "@/components/header";
import { Flex } from "@radix-ui/themes";
import { ComboboxDemo } from "@/components/comboBox";
import { PopoverDemo } from "@/components/travellers";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function MusicPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <Header />
        {/* make this a layout */}
        {/* <div className="border-t"> */}
        <Flex className="bg-background mt-10 px-40">
          <Flex>
            <Flex className="p-4 border-[1px] border-gray-300 rounded-b-none border-b-0 rounded-lg flex justify-center">
              <Tabs defaultValue="Dental">
                <TabsList className="bg-transparent">
                  <TabsTrigger value="Dental">Dental</TabsTrigger>
                  <TabsTrigger value="Surgery">Surgery</TabsTrigger>
                  <TabsTrigger value="Cancer">Cancer</TabsTrigger>
                  <TabsTrigger value="Orthopedics">Orthopedics</TabsTrigger>
                  <TabsTrigger value="Transplant">Transplant</TabsTrigger>
                </TabsList>
              </Tabs>
            </Flex>
            <Flex className="flex flex-row p-6 gap-4 border-gray-300 rounded-t-none border-[1px] rounded-lg ">
              <ComboboxDemo />
              <CalendarDateRangePicker />
              <PopoverDemo />
            </Flex>
          </Flex>
          {/* <div className="grid lg:grid-cols-5"> */}
          {/* <Sidebar playlists={playlists} className="hidden lg:block" /> */}
          {/* <div className="col-span-3 lg:col-span-4 ">
            <div className="h-full py-6 ">
              <Tabs defaultValue="music" className="h-full space-y-6">
                <div className="space-between flex items-center">
                  <TabsList >
                    <TabsTrigger value="music" className="relative">
                      Music
                    </TabsTrigger>
                    <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                    <TabsTrigger value="live" disabled>
                      Live
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="ml-auto mr-4">
                    <Link href="/auth/signup">Signup</Link>
                  </div>
                </div>
                <TabsContent
                  value="music"
                  className="border-none p-0 outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Listen Now
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Top picks for you. Updated daily.
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="relative">
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {listenNowAlbums.map((album) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-[250px]"
                            aspectRatio="portrait"
                            width={250}
                            height={330}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                  <div className="mt-6 space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Made for You
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Your personal playlists. Updated daily.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="relative">
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {madeForYouAlbums.map((album) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-[150px]"
                            aspectRatio="square"
                            width={150}
                            height={150}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent
                  value="podcasts"
                  className="h-full flex-col border-none p-0 data-[state=active]:flex"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        New Episodes
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Your favorite podcasts. Updated daily.
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <PodcastEmptyPlaceholder />
                </TabsContent>
              </Tabs>
            </div>
          </div> */}
          {/* </div> */}
        </Flex>
      </div>
      {/* </div> */}
    </>
  );
}
