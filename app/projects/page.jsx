"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Hairbay Studios - On going",
      description:
        "Designed a modern, gender-neutral salon interior for Hairbay Studios—where refined aesthetics meet comfort.",
      images: [
        "/image/hairbay/image1.jpg",
        "/image/hairbay/image2.jpg",
        "/image/hairbay/image3.jpg",
        "/image/hairbay/image4.jpg",
        "/image/hairbay/image5.jpg",
        "/image/hairbay/image6.jpg",
        "/image/hairbay/image7.jpg",
        "/image/hairbay/image8.jpg",
      ],
    },
    {
      id: 2,
      name: "Midhun Azhikode",
      description:
        "Bedroom look modern and clean with a charming modern design.",
      images: [
        "/image/project1/image1.jpeg",
        "/image/project1/image2.jpeg",
        "/image/project1/image3.jpeg",
        "/image/project1/image4.jpeg",
        "/image/project1/image5.jpeg",
        "/image/project1/image6.jpeg",
        "/image/project1/image7.jpeg",
        "/image/project1/image8.jpeg",
        "/image/project1/image9.jpeg",
        "/image/project1/image10.jpeg",
        "/image/project1/image11.jpeg",
        "/image/project1/image12.jpeg",
        "/image/project1/image13.jpeg",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(
    projects.map(() => 0)
  );

  /* ===============================
     AUTO SLIDE (smooth)
  =============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev.map((index, i) =>
          (index + 1) % projects[i].images.length
        )
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevImage = (projectIdx) => {
    setActiveIndex((prev) =>
      prev.map((val, i) =>
        i === projectIdx
          ? (val - 1 + projects[i].images.length) %
            projects[i].images.length
          : val
      )
    );
  };

  const nextImage = (projectIdx) => {
    setActiveIndex((prev) =>
      prev.map((val, i) =>
        i === projectIdx
          ? (val + 1) % projects[i].images.length
          : val
      )
    );
  };

  return (
    <div>
      {/* HEADER */}
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          OUR PROJECTS
        </h1>
      </div>

      {/* PROJECT GRID */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {projects.map((project, projectIdx) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl"
          >
            {/* SLIDER TRACK */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  activeIndex[projectIdx] * 100
                }%)`,
              }}
            >
              {project.images.map((img, idx) => (
                <div key={idx} className="min-w-full h-[380px] relative">
                  <Image
                    src={img}
                    fill
                    alt={project.name}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* ARROWS (always visible) */}
            <button
              onClick={() => prevImage(projectIdx)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => nextImage(projectIdx)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* OVERLAY (always visible) */}
            <div className="absolute bottom-0 w-full p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h2 className="text-2xl font-semibold">
                {project.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
