'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {  Mail } from 'lucide-react'; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';
import TypingAnimation from "@/components/magicui/typing-animation";

import ShinyButton from "@/components/magicui/shiny-button";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TextRevealByWord from '@/components/magicui/text-reveal';
import { LampDemo } from './../../components/ui/lamp';
import { useRouter } from 'next/router';
export default function Home() {
 

 
  return (
    <>
      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-12 text-white bg-black md:px-24">
        <section className="mx-auto text-center md:mb-12">
          {/* <h1 className="text-3xl font-bold md:text-5xl">
            Dive into the World of Anonymous Feedback
          </h1>
          <p className="mt-3 text-base md:mt-4 md:text-lg">
            True Feedback - Where your identity remains a secret.
          </p> */}
          <TextRevealByWord text="Assignment submission is a headache for many of us and SUPER BORING !!!!."/>
          <LampDemo/>
          
        </section>
        <section className="mx-auto text-center text-white md:mb-12">
        <TypingAnimation
      className="text-4xl font-bold text-white dark:text-black"
      text="Just create a account and leave everything on us"
    />
        </section>
        <section className='mx-auto my-auto'>
        <Link href="/sign-up">
        <ShinyButton onClick={()=>{
          
        }} text="Join now" className="text-white bg-white"  />
       </Link>
        </section>
        

        {/* Carousel for Messages */}
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-lg md:max-w-xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0" />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-white bg-gray-900 md:p-6">
        © 2023 True Feedback. All rights reserved.
      </footer>
    </>
  );
}
