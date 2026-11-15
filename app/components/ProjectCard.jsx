import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <article className="project-card">
      <div
        className="project-card-media h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {(gitUrl || previewUrl) && (
          <div className="project-actions absolute inset-0 flex items-center justify-center">
            {gitUrl && (
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                aria-label={`View ${title} source code`}
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
            {previewUrl && (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                aria-label={`View ${title} live preview`}
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="project-copy text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="project-title text-xl font-semibold mb-2">{title}</h5>
        <p className="project-description text-[#ADB7BE]">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;