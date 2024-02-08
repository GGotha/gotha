/* eslint-disable react/no-unescaped-entities */
"use client";

import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

export default function Setup() {
  return (
    <>
      <div className="flex justify-center w-full pb-36">
        <div className="lg:w-2/4 w-3/4 flex flex-col items-center">
          <div className="w-full">
            <Appbar />
          </div>
          <div className="flex justify-center items-start w-full flex-col gap-8">
            <h1 className="text-4xl font-bold text-start">💻 Setup</h1>
            <p className="w-[700px]">
              As a developer, I really like to buy new hardwares such as
              keyboard, mouse, a new laptop, microphones, headseats. I use a lot
              of tools and software to make my life easier.
            </p>
            <p className="w-[700px]">
              Everytime when I saw something new I go on the internet and search
              for reviews and unboxings. So, no more talking, let's see my
              setup:
            </p>

            <Image src="/setup.jpeg" alt="setup" width="700" height="400" />

            <p className="w-[700px]">
              Basically, this is my setup. I want to improve it more and more.
              As you can see the setup has a lot of cables, I'm trying to make
              it more clean.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-start items-start flex-col gap-8 w-full">
            <h1 className="text-4xl font-bold">⌨️ Accessories</h1>
            <div className="flex flex-col items-start w-auto">
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.amazon.com.br/Teclado-mec%C3%A2nico-Anne-Pro-interruptor/dp/B07Y4ZVP6J"
                  )
                }
              >
                Anne Pro 2 - 60% Keyboard
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.kabum.com.br/produto/149990/mouse-sem-fio-gamer-logitech-g-pro-x-superlight-lightspeed-25000-dpi-5-botoes-branco-910-005941"
                  )
                }
              >
                Logitech GPro X Superlight - Wireless Mouse
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.kabum.com.br/produto/98290/fone-de-ouvido-intra-auricular-gamer-hyperx-cloud-earbuds-vermelho-4p5j5aa"
                  )
                }
              >
                HyperX Earbuds - Headseats
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.kabum.com.br/produto/386859/microfone-gamer-hyperx-quadcast-s-podcast-antivibracao-led-rgb-usb-compativel-com-pc-ps4-e-mac-branco-519p0aa"
                  )
                }
              >
                HyperX Quadcast S White - Microphone
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.kabum.com.br/produto/149990/mouse-sem-fio-gamer-logitech-g-pro-x-superlight-lightspeed-25000-dpi-5-botoes-branco-910-005941"
                  )
                }
              >
                AOC Agon 27" AG251FZ2 - 1920x1080 - 240Hz - Monitor
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.kabum.com.br/produto/92685/monitor-gamer-aoc-agon-27-led-wide-165-hz-2k-qhd-g-sync-hdmi-displayport-ajuste-de-altura-som-integrado-ag271qg"
                  )
                }
              >
                2x Samsung 24" - 1920x1080 - 60Hz - Monitor
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.kabum.com.br/produto/39393/webcam-logitech-c920-pro-full-hd-para-chamadas-e-gravacoes-em-video-widescreen-1080p-960-000764"
                  )
                }
              >
                Logitech C920 Full HD 1080p - Webcam
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.amazon.com.br/dp/B09B96NJ4X/ref=pav_fromAsin_B09B8VGCR8_toAsin_B09B96NJ4X"
                  )
                }
              >
                Amazon Alexa Echo Dot - Smart Speaker
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.mercadolivre.com.br/lmpada-led-smart-wi-fi-7w-ews-407-cor-da-luz-rgb-110v220v/p/MLB21646053?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&from=gshop"
                  )
                }
              >
                EWS 407 - Inteligent Lamp
              </Button>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-start items-start w-full flex-col gap-8">
            <h1 className="text-4xl font-bold">🖥️ Computer Config</h1>
            <div className="flex flex-col items-start">
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.kabum.com.br/produto/162665/memoria-gamer-husky-gaming-avalanche-16gb-3200mhz-ddr4-cl19-preto-hgmf008"
                  )
                }
              >
                32GB DDR4 Husky 3200Mhz - Memory
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open("https://www.ebay.com/itm/225490182382")
                }
              >
                I9 9900k - Processor
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open("https://www.ebay.com/itm/335249733135")
                }
              >
                RTX 2060 - Graphics Card
              </Button>

              <Button
                variant="link"
                onClick={() =>
                  window.open("https://www.ebay.com/itm/314872347523")
                }
              >
                Z390M - Motherboard
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.kabum.com.br/produto/463322/water-cooler-240mm-hoopson-cl-230-rgb-amd-intel-branco-cl-230b"
                  )
                }
              >
                Hoopson 240mm - Water Cooler
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open("https://gamemaxpc.com/productkkk/254-en.html")
                }
              >
                GameMax 550W - Power Supply
              </Button>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-start items-start w-full flex-col gap-8">
            <h1 className="text-4xl font-bold">👨🏼‍💻 Softwares</h1>
            <div className="flex flex-col items-start">
              <Button
                variant="link"
                onClick={() =>
                  window.open("https://ubuntu.com/download/desktop")
                }
              >
                Ubuntu 22.04 LTS
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open(
                    "https://www.microsoft.com/pt-br/edge/download?form=MA13FJ"
                  )
                }
              >
                Microsoft Edge
              </Button>

              <Button
                variant="link"
                onClick={() => window.open("https://hyper.is/")}
              >
                Hyper Terminal
              </Button>
              <Button
                variant="link"
                onClick={() => window.open("https://code.visualstudio.com/")}
              >
                Visual Studio Code
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open("https://www.jetbrains.com/pt-br/idea/")
                }
              >
                IntelliJ
              </Button>
              <Button
                variant="link"
                onClick={() => window.open("https://insomnia.rest/download")}
              >
                Insomnia
              </Button>
              <Button
                variant="link"
                onClick={() => window.open("https://dbeaver.io/download/")}
              >
                Dbeaver
              </Button>
              <Button
                variant="link"
                onClick={() => window.open("https://open.spotify.com/")}
              >
                Spotify
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
