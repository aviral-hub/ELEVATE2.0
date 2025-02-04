import React from "react";
import Image from "next/image";
import devshouseTicket from "../../public/CFS (1).png";
import devshouseTicket1 from "../../public/CFS (1).png";
import {
  IconBrandDiscordFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import Link from "next/link";
import { ColorInput } from "@mantine/core";

export default function Footer2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 p-12 font-spaceGrotesk">
      <div className="relative md:col-span-2">
        <div className="relative">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScjWbxPfdQZBHXmtAT4A3OQ8UgvMVSIfyA7B-1TEAuSeOfxkA/viewform" target="_blank">
            <Image
              src={devshouseTicket}
              alt="Devshouse Ticket"
              className="hover:opacity-0 absolute w-full h-full object-cover transition-opacity duration-500"
            ></Image>
            <Image
              src={devshouseTicket1}
              alt="Devshouse Ticket"
              className="w-full object-cover transition-opacity duration-500"
            ></Image>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-start">
        <div>
          <p className="text-2xl font-bold">Links</p>
        </div>
        <div className="flex flex-col">
          <a className="text-lg" href="#about">
            About
          </a>
          <a className="text-lg" href="#tracks">
            Theme
          </a>
          <a className="text-lg" href="#prizes">
            Prizes
          </a>
          <a className="text-lg" href="#timeline">
            Timeline
          </a>
          <a className="text-lg" href="#team">
            Team
          </a>
          <a className="text-lg" href="#sponsor">
            Sponsors
          </a>
          <a className="text-lg" href="#faqs">
            FAQs
          </a>
          <a className="text-lg" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-start">
        <div>
          <p className="text-2xl font-bold">Join us</p>
        </div>
        <div className="flex flex-col">
          
          
          <Link target="_blank" href="https://www.linkedin.com/company/ieee-computer-society-ghrce/mycompany/" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandLinkedin /> <p>LinkedIn</p>
            </span>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/ieee_cs_ghrce?igsh=NzQ3aDBycHJrZ2o5" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandInstagram /> <p>Instagram</p>
            </span>
          </Link>
          
          <Link target="_blank" href="" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandWhatsapp /> <p>Whatsapp</p>
            </span>
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-col gap-4 justify-center text-center col-span-4">
        <div>
          <p className="text-xl font-bold">Copyrights</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg">© 2024 {" "}
          <Link className="underline" href={'//'}>IEEE GHRCE</Link>. All rights reserved.</p>
        </div>
      </div> */}
    </div>
  );
}
