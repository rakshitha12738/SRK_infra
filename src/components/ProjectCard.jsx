import { useNavigate } from "react-router-dom";

function ProjectCard({
  image,
  title,
  description,
  link,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="
        bg-white
        rounded-xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#34489b] mb-3">
          {title}
        </h2>

        <p className="text-gray-600 mb-6">
          {description}
        </p>

        <button
          onClick={() => navigate(link)}
          className="
            bg-[#34489b]
            text-white
            px-6
            py-3
            rounded
            transition
            hover:bg-[#24367c]
          "
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;