import { Button } from "@/components/ui/button";
import Image from "next/image";

const Timeline = () => {
  return (
    <section>
      <div className="bg-zinc-900 text-white w-full flex flex-row">
        <div className="container w-full p-0 flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-blue-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12 h-52 flex justify-center bg-black rounded-xl p-10 border hover:cursor-pointer hover:transition-opacity hover:opacity-30">
                    <Image
                      src="/trio-logo-blue.svg"
                      alt="me"
                      width="150"
                      height="150"
                    />
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">Fev 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Software Engineer at Trio
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      First time working with a international company. Working
                      to a client based in the US.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12 h-52 flex justify-center bg-black rounded-xl p-10 border hover:cursor-pointer hover:transition-opacity hover:opacity-30">
                    <Image
                      src="/dimensa.png"
                      alt="me"
                      width="120"
                      height="150"
                    />
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">Jan, 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Software Engineer At Dimensa
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      During this time at Dimensa I coordinated the team and
                      developed new features. I created two news apps for the
                      company to help my team to be more productive.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12 h-52 flex justify-center bg-black rounded-xl p-10 border hover:cursor-pointer hover:transition-opacity hover:opacity-30">
                    <Image
                      src="/brydge.jpeg"
                      alt="me"
                      width="150"
                      height="150"
                    />
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">Jan 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Mid Level Software Engineer at Brydge
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      During this time I was focused on integrating with Payment
                      Methods and creating new microservices. I was able to
                      create a new flutter app for the company.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12 flex justify-center bg-black rounded-xl p-10 border hover:cursor-pointer hover:transition-opacity hover:opacity-30">
                    <Image
                      src="/aitialabs_logo.png"
                      alt="me"
                      width="150"
                      height="150"
                    />
                  </div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">Mar, 2020</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Junior Software Engineer at AiTia
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Developing websites for various niche businesses using
                      React and NestJS. This experience provided me with a
                      comprehensive understanding of both frontend and backend
                      development, allowing me to create responsive and engaging
                      websites that catered to specific client needs.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12 flex justify-center bg-black rounded-xl p-10 border hover:cursor-pointer hover:transition-opacity hover:opacity-30">
                    <Image
                      src="/joinx_logo.png"
                      alt="me"
                      width="150"
                      height="150"
                    />
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">Nov 2019</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Junior Software Engineer at JoinX
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Doing some freelance work and learning new technologies
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12 flex justify-center bg-black rounded-xl p-10 border hover:cursor-pointer hover:transition-opacity hover:opacity-30">
                    <Image
                      src="/valourinvest_logo.png"
                      alt="me"
                      width="150"
                      height="150"
                    />
                  </div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">Jun 2019</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Intern Software Engineer at Valour Invest
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      I was focused in getting the maximum of information with
                      my peers. Every day studying and learning new things.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline" className="w-80 h-11">
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
