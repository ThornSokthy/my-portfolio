import ProjectCard from "./ProjectCart";

const Projects = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://firebasestorage.googleapis.com/v0/b/rornsokhengportfolio.appspot.com/o/Blog%2FThumnail%2Fcyber.jpg?alt=media&token=b27bfe03-7b67-4d26-8a79-443a4652b833"
            tags={["React", "UI", "Frontend"]}
            likes={42}
            comments={7}
          />

          <ProjectCard
            title="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://firebasestorage.googleapis.com/v0/b/rornsokhengportfolio.appspot.com/o/1686029065824.jpg?alt=media&token=1a04b3fb-ee6c-4188-88d5-91542e32e696"
            tags={["React", "UI", "Frontend"]}
            likes={42}
            comments={7}
          />

          <ProjectCard
            title="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://firebasestorage.googleapis.com/v0/b/rornsokhengportfolio.appspot.com/o/Blog%2FThumnail%2Fmaxresdefault.jpg?alt=media&token=9483013c-0763-441e-a286-9266ce258be9"
            tags={["React", "UI", "Frontend"]}
            likes={42}
            comments={7}
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
