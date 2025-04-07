export default function Home() {
  return (
    <div className="pink_container">
      <main className="section_container flex flex-col items-center gap-4">
        <h1 className="tag corner-accent">Pitch, Vote, and Grow</h1>
        <p className="text-center heading">
          Pitch Your Startup, Connect with Entrepreneurs
        </p>
        <p
          className="sub_heading
        "
        >
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <form className="search-form">
          <input
            type="text"
            placeholder="SEARCH STARTUPS"
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <img src="/search.png" alt="search" />
          </button>
        </form>
      </main>
    </div>
  );
}
