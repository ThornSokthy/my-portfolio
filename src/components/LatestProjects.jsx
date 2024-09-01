import LatestProject from "./LatestProject";
import foodPenguinImage from "../assets/food_penquin_project.png";
import amazonImage from "../assets/amazon_project.png";

const LatestProjects = () => {
  return (
    <section className="bg-[#212529] h-full max-w-full container mx-auto px-4 py-14">
      <h2 className="text-3xl font-bold text-center mb-8">
        Take a look at the latest projects I’ve done
      </h2>
      <div className="flex flex-col px-4 md:px-20 lg:px-36 gap-28">
        <LatestProject
          image={foodPenguinImage}
          title="Food Penguin Project"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptatum voluptas accusamus provident eos? Tempora perspiciatis
          mollitia voluptas. Maxime iure corporis dicta. Voluptatem qui ullam
          quos, itaque veniam numquam cum."
        />
        <LatestProject
          image={amazonImage}
          title="Amazon Project"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptatum voluptas accusamus provident eos? Tempora perspiciatis
          mollitia voluptas. Maxime iure corporis dicta. Voluptatem qui ullam
          quos, itaque veniam numquam cum."
        />
      </div>
    </section>
  );
};

export default LatestProjects;
