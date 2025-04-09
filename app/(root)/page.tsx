import { title } from "process";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = (await searchParams).query;
  const posts =[{
    _createdAt: new Date(),
    views: 55,
    author: {_id:1, name: 'Abdallah'},
    _id: 1,
    description: 'This is a test description',
    image: 'https://placehold.co/600x400',
    category: 'Robots',
    title: 'we rebots',
  }]
  return (
    <main>
      <section className=" pink_container section_container flex flex-col items-center gap-4">
        <h1 className="tag corner-accent">Pitch, Vote, and Grow</h1>
        <p className="text-center heading">
          Pitch Your Startup, Connect with Entrepreneurs
        </p>
        <p className="sub_heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Recommended startups"}
        </p>
        <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType) => (
            <StartupCard key={post?._id} post={post}/>)
          )
          ):(
            <div className="text-center">
              <p className="text-20-semibold">No results found</p>
            </div>
          )}
        </ul>
      </section>
    </main>
  );
}
