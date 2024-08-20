import React from "react";
import CompanyImgOne from "@/public/client01.png";
import CompanyImgTwo from "@/public/altschool-logo.png";
import CompanyImgThree from "@/public/skilledup-life-logo.png";
import CompanyImgFour from "@/public/freelancer-logo.png";
import CompanyImgFive from "@/public/upwork-logo.png";
import Image from "next/image";
import Link from "next/link";

const Collaboration = ({
  CompanyImgOne,
  CompanyImgTwo,
  CompanyImgThree,
  CompanyImgFour,
  CompanyImgFive,
}: {
  CompanyImgOne?: string;
  CompanyImgTwo?: string;
  CompanyImgThree?: string;
  CompanyImgFour?: string;
  CompanyImgFive?: string;
}) => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-26">
      <h1 className="text-white font-bold mt-10 text-center text-[2.4rem] leading-snug tracking-wider">
        Trusted <span className="text-purple">by Companies</span>
      </h1>
      <div className="bg-black-100 py-14 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-center text-md font-semibold leading-2 tracking-wide text-gray-100">
            Trusted by the world&apos;s most innovative teams
          </h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              alt="Transistor"
              src={CompanyImgOne || "/client01.png"}
              width={200}
              height={100}
              className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Reform"
              src={CompanyImgTwo || "/upwork-logo.png"}
              width={200}
              height={100}
              className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Tuple"
              src={CompanyImgThree || "/Altschool-logo.png"}
              width={200}
              height={100}
              className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
            />
            
            <Image
              alt="SavvyCal"
              src={CompanyImgFour || "/freelancer-logo.png"}
              width={200}
              height={100}
              className="col-span-2 max-h-45 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            
            <Image
              alt="Statamic"
              src={CompanyImgFive || "/skilledup-life-logo.png"}
              width={200}
              height={100}
              className="col-span-2 col-start-2 max-h-45 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          
          </div>
          <div className="hidden sm:mt-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 my-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
              Over 35 companies use my Solutions to better their business.{" "}
              <Link href="/pages/customer-stories" legacyBehavior>
                <a href="#" className="font-semibold text-purple">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read my customer stories{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
