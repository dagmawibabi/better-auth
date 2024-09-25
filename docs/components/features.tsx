"use client";
import {
  CheckIcon,
  Globe2Icon,
  PlugIcon,
  PlugZap2Icon,
  Plus,
  RabbitIcon,
  ShieldCheckIcon,
  Webhook,
  XIcon,
} from "lucide-react";
import { LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { TechStackDisplay } from "./display-techstack";
import { Ripple } from "./ripple";

export default function Features() {
  return (
    <div className="md:w-10/12 mt-10 mx-auto font-geist relative md:border-l-0 md:border-[1.2px] rounded-none -pr-2">
      <Plus className="absolute top-[-17px] left-[-17px] text-black/20 dark:text-white/30  w-8 h-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:mx-0 grid-rows-4 md:grid-rows-4 w-full">
        <div className="relative items-start justify-start border-l-[1.2px] border-t-[1.2px] md:border-t-0  transform-gpu  flex flex-col p-10 overflow-clip">
          <Plus className="absolute bottom-[-17px] left-[-17px] text-black/20 dark:text-white/30  w-8 h-8" />

          <div className="flex gap-2 items-center my-1">
            <PlugZap2Icon className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Framework Agnostic{" "}
            </p>
          </div>
          <div className="mt-2">
            <div className="max-w-full">
              <div className="flex gap-3 ">
                <p className="text-xl md:text-2xl tracking-tighter font-normal max-w-lg">
                  Supports popular <strong>frameworks</strong>
                </p>
              </div>
            </div>
            <p className="text-left text-sm mt-2 text-muted-foreground">
              Supports your favorite frontend, backend and meta frameworks,
              including React, Vue, Svelte, Astro, Solid, Next.js, Nuxt.js,
              Hono, and more{" "}
              <a className="text-gray-50" href="/docs" target="_blank">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="relative items-start justify-start border-l-[1.2px] border-t-[1.2px] md:border-t-0  transform-gpu  flex flex-col p-10">
          <Plus className="absolute bottom-[-17px] left-[-17px] text-black/20 dark:text-white/30  w-8 h-8" />

          <div className="flex gap-2 items-center my-1">
            <LockClosedIcon className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">Authentication</p>
          </div>
          <div className="mt-2">
            <div className="max-w-full">
              <div className="flex gap-3 ">
                <p className="text-2xl tracking-tighter font-normal max-w-lg">
                  Email & Password <strong>Authentication</strong>
                </p>
              </div>
            </div>
            <p className="text-left text-sm mt-2 text-muted-foreground">
              Builtin support for email and password authentication, with secure
              password hashing and account management features{" "}
              <a className="text-gray-50" href="/docs" target="_blank">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="relative items-start justify-start md:border-l-[0.2px] border-t-[1.2px] md:border-t-0  flex flex-col p-10">
          <Plus className="absolute bottom-[-17px] left-[-17px] text-black/20 dark:text-white/30  w-8 h-8" />

          <div className="flex gap-2 items-center my-1">
            <Webhook className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">Social Sign-on</p>
          </div>
          <div className="mt-2">
            <div className="max-w-full">
              <div className="flex gap-3 ">
                <p className="text-2xl tracking-tighter font-normal max-w-lg">
                  Support multiple <strong>OAuth providers.</strong>
                </p>
              </div>
            </div>
            <p className="text-left text-sm mt-2 text-muted-foreground">
              Allow users to sign in with their accounts, including Github,
              Google, Discord, Twitter, and more.{" "}
              <a className="text-gray-50" href="#" target="_blank">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="items-start justify-start  border-l-[1.2px] border-t-[1.2px] flex flex-col p-10  ">
          <div className="flex gap-2 items-center my-1">
            <ShieldCheckIcon className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">Two Factor</p>
          </div>
          <div className="mt-2">
            <div className="max-w-full">
              <div className="flex gap-3 ">
                <p className="text-2xl tracking-tighter font-normal max-w-lg">
                  Two Factor <strong>Authentication</strong>
                </p>
              </div>
            </div>
            <p className="text-left text-sm mt-2 text-muted-foreground">
              With our built-in two factor authentication plugin, you can add an
              extra layer of security to your account.{" "}
              <Link className="text-gray-50" href="/docs" target="_blank">
                Learn more
              </Link>
            </p>
          </div>
        </div>
        <div className="items-start justify-staart  border-l-[1.2px] border-t-[1.2px] flex flex-col p-10  ">
          <div className="flex gap-2 items-center my-1">
            <RabbitIcon className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Organization & Access Control{" "}
            </p>
          </div>
          <div className="mt-2">
            <div className="max-w-full">
              <div className="flex gap-3 ">
                <p className="text-2xl tracking-tighter font-normal max-w-lg">
                  Gain and manage <strong>access.</strong>
                </p>
              </div>
            </div>
            <p className="text-left text-sm mt-2 text-muted-foreground">
              Manage users and their access to resources within your
              application.{" "}
              <a className="text-gray-50" href="/docs" target="_blank">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="items-start justify-start  border-l-[1.2px] border-t-[1.2px] transform-gpu relative  flex flex-col p-10  ">
          <Plus className="absolute bottom-[-15px] right-[-15px] text-black/20 dark:text-white/40 w-8 h-8" />
          <div className="flex gap-2 items-center my-1">
            <PlugIcon className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Plugin Ecosystem{" "}
            </p>
          </div>
          <div className="max-w-full">
            <div className="flex gap-3 ">
              <p className="text-2xl tracking-tighter font-normal max-w-lg">
                Pluggable with <strong>custom.</strong>
              </p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-left text-sm mt-2 text-muted-foreground">
              Enhance your application with our official plugins and those
              created by the community.{" "}
              <a className="text-gray-50" href="/docs" target="_blank">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="relative md:grid md:col-span-3 grid-cols-2 row-span-2 border-t-[1.2px] border-l-[1.2px]  md:border-b-[1.2px] dark:border-b-0  h-full py-20 ">
          <Plus className="absolute top-[-15px] left-[-15px] text-black/20 dark:text-black/20  w-8 h-8 " />
          <Plus className="absolute top-[-15px] right-[-15px] text-black/20 dark:text-black/20  w-8 h-8 " />
          <div className="p-16 pt-10 md:px-10 h-full md:absolute top-0 left-0  w-full">
            <div className="flex flex-col gap-3 justify-center h-full items-center w-full">
              <div className="flex gap-2 items-center">
                <Globe2Icon className="w-4 h-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Own your auth
                </p>
              </div>
              <p className="text-4xl md:text-4xl mt-4 tracking-tighter font-normal max-w-md mx-auto text-center">
                <strong>Roll your own auth with confidence in minutes!</strong>
              </p>
              <div className="flex mt-[10px] z-20 justify-center items-start">
                <TechStackDisplay
                  skills={[
                    "nextJs",
                    "nuxt",
                    "svelteKit",
                    "astro",
                    "solidStart",
                    "react",
                    "hono",
                  ]}
                />
              </div>
              <Link href="/docs" className="z-50">
                <Button className="mt-4 rounded-none p-5 ml-auto">
                  Start now!
                </Button>
              </Link>
              <Ripple />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
