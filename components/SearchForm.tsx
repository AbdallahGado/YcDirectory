import Form from "next/form";

import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        defaultValue={query}
        name="query"
        type="text"
        placeholder="SEARCH STARTUPS hey ..."
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button className="search-btn cursor-pointer text-white " type="submit">
          <Search className="size-5"/>
        </button>
      </div>
    </Form>
  );
};
export default SearchForm;
