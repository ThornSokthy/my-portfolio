import { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import spiderman from "../assets/spider_img.png";
import LatestProjects from "./LatestProjects";

const Home = () => {
  const bannerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let banner = bannerRef.current;
    let canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");

    let dots = [];
    let colors = ["#eee", "#545454", "#596d91", "#bb5a68"];

    for (let index = 0; index < 60; index++) {
      dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    drawDots(dots, ctx);

    banner.addEventListener("mousemove", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots(dots, ctx);
      let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top,
      };

      dots.forEach((dot) => {
        let distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    });

    banner.addEventListener("mouseout", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots(dots, ctx);
    });
  }, []);

  const drawDots = (dots, ctx) => {
    dots.forEach((dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fillStyle = dot.color;
      ctx.fill();
    });
  };

  const [text, setText] = useTypewriter({
    words: ["Web Developer", "Moblie Developer", "Software Developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <main className="w-full overflow-hidden">
        <div
          ref={bannerRef}
          className=" relative h-[100vh] flex justify-center items-start flex-col px-4 md:px-20 lg:px-36"
        >
          <div className=" flex relative space-y-1 mb-4">
            <div>
              <span className="text-[13px] md:text-[16px] lg:text-xl">
                HI, my name is
              </span>
              <h1 className="text-2xl md:text-5xl lg:text-7xl text-gradient">
                Thorn Sokthy.
              </h1>
              <h1 className="text-2xl md:text-5xl lg:text-7xl text-[#e46e7f] font-bold">
                I'm a <span className=" text-effect">{text}</span>
                <Cursor />
              </h1>
              <p className="max-w-[70%] md:max-w-[45%] line-clamp-3 sm:line-clamp-none">
                I'm a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered
                products at <span>Upstatement.</span>
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-[8%] w-[180px] sm:w-[200px] md:w-[250px] lg:w-[350px] spider-effect ">
            <img className="w-full spider-effect-infinite" src={spiderman} />
          </div>

          <button className="btn">Contact Me</button>
        </div>
        <canvas
          ref={canvasRef}
          className="hidden sm:block absolute bg-transparent top-0 left-0 w-full h-full pointer-events-none"
        ></canvas>
      </main>

      <LatestProjects />
    </>
  );
};

export default Home;
