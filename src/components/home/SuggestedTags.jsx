import { useDispatch } from "react-redux";
import { setSearchParams } from "../../features/jobsSearch/jobSearchParamsSlice"; // Adjust import if needed
import { useNavigate } from "react-router-dom";

function SuggestedTags() {
  // Define the list of tags
  const tags = [
    { id: 1, label: "Software developer" },
    { id: 2, label: "Full stack develoer" },
    { id: 3, label: "Data Analyst" },
  ];

  // Dispatch and navigate hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle tag click
  function handleTagClick(tagLabel) {
    dispatch(setSearchParams({ query: tagLabel }));
    setTimeout(() => {
      navigate("/jobs");
    }, 100);
  }

  return (
    <div className="flex max-w-3xl flex-wrap items-center justify-center gap-2">
      {/* Map through the tags and create a button for each */}
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => handleTagClick(tag.label)} // Handle click event
          className="rounded-full border bg-gray-100 px-4 py-1 text-sm text-gray-600 hover:bg-blue-100 focus:outline-none"
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}

export default SuggestedTags;
