import { Chevron, Github } from "../icons";
import type { Home, Information } from "../utils/loadData";
import { Code } from "./Code";

export const Hero = ({ info, home }: { info: Information; home: Home }) => (
  <div className="w-full h-full xl:px-[250px] xl:pt-[120px] md:flex-row md:px-[160px] md:pt-[80px] pt-[40px] relative">
    <div className="w-full flex justify-between  flex-shrink-0 px-[30px]">
      <div className=" xl:w-[550px]  md:w-[450px] w-full ">
        <h3>About me</h3>
        <div className="mt-[20px]">
          <p
            className="text-[16px] "
            dangerouslySetInnerHTML={{
              __html: home.about,
            }}
          ></p>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-[16px] text-black ">Reach out</p>

          <div className="flex gap-2 mt-1">
            {info?.email && (
              <a href={`mailto:${info.email}`} className="text-[#666] text-[16px] md:text-[18px] font-medium">
                <img src="/Email.svg" className="inline-block " />
              </a>
            )}
            {info?.linkedin && (
              <a href={info.linkedin} className="text-[#666] text-[16px] md:text-[18px] font-medium">
                <img src="/LinkedIn.svg" className="inline-block " />
              </a>
            )}
            {info.github && (
              <a
                href={info.github}
                className="text-[#666] text-[16px] md:text-[18px] font-medium flex justify-center items-center"
              >
                <Github color="black" size="small" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="hidden 2xl:block">
        <Code />
      </div>
    </div>

    <div className="absolute w-full bottom-[140px] left-0  flex justify-center">
      <a href="/#projects" className="z-10">
        <Chevron direction="down" color="white" />
      </a>
    </div>
    <script></script>
    <div className="absolute bottom-0 left-0 w-full h-full -z-20 flex items-end ">
      <svg width="100%" height="500" viewBox="0 0 100% 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1920 0C1089 284.5 791.357 262.933 0 335V505C843.97 507.853 1386 505 1920 505V0Z"
          fill="#5F8DF8"
        ></path>
        <path d="M1920 36C1089 320.5 791.357 262.433 0 334.5V505H1920V36Z" fill="#6F9AFF"></path>
      </svg>
    </div>
  </div>
);
