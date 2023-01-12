import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const Search = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
  return (
    <>
      <div>
        <div className="mx-auto max-w-md">
          <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-gray-200 focus-within:shadow-lg">
            <div className="grid h-full w-12 place-items-center text-gray-300">
              <FaSearch
                size={20}
                color="#9ca3af"
              />
            </div>
            <input
              className="fontholder h-full w-full pl-4 text-sm text-gray-700 outline-none"
              type="text"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
