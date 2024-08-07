import GenreList from "@/components/genre-list";

export default function Sidebar() {
  return (
    <div className="h-full overflow-y-auto hidden lg:block w-80 p-6 bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-95 dark:bg-opacity-5 shadow-2xl rounded-3xl">
      <GenreList />
    </div>
  );
}
