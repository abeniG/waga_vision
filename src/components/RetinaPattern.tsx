"use client";

import { ParallaxScroll } from "./ParallaxScroll";

export default function RetinaPattern() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 
        We use a container larger than the screen so that when ParallaxScroll moves it,
        we don't see the edges.
      */}
      <div className="absolute inset-x-0 -top-[50vh] h-[200vh]">
        <ParallaxScroll offset={150} className="w-full h-full opacity-25">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="retina-pattern"
                x="0"
                y="0"
                width="800"
                height="800"
                patternUnits="userSpaceOnUse"
              >
                {/* Complicated Organic Vein Network */}
                <g className="stroke-brand-cyan/20 fill-none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Primary thick veins */}
                  <g strokeWidth="2.5">
                    <path d="M0,200 C150,220 250,100 400,250 C500,350 600,300 800,450" />
                    <path d="M200,800 C250,650 150,550 300,400 C450,250 550,300 650,150" />
                    <path d="M400,0 C450,150 600,200 500,400 C400,600 650,700 700,800" />
                  </g>
                  
                  {/* Secondary medium veins */}
                  <g strokeWidth="1.2" className="stroke-brand-teal/30">
                    <path d="M400,250 C300,300 200,400 300,400" />
                    <path d="M500,400 C600,500 500,600 400,700" />
                    <path d="M650,150 C750,100 800,200 700,300 C600,400 700,450 800,450" />
                    <path d="M150,550 C50,600 0,500 100,400" />
                    <path d="M300,400 C350,500 450,500 500,400" />
                    <path d="M100,0 C150,100 50,200 150,300 C250,400 200,500 300,600" />
                    <path d="M800,700 C700,600 750,500 650,400 C550,300 600,200 500,100" />
                  </g>

                  {/* Micro capillaries */}
                  <g strokeWidth="0.5" className="stroke-brand-cyan/40">
                    <path d="M250,100 C300,50 350,150 400,100" />
                    <path d="M500,350 C450,300 400,350 350,300" />
                    <path d="M600,300 C650,250 600,200 650,150" />
                    <path d="M150,300 C100,250 50,350 0,300" />
                    <path d="M200,650 C250,700 300,650 350,750" />
                    <path d="M650,700 C600,750 550,650 500,750" />
                    <path d="M400,700 C350,650 300,750 250,700" />
                    <path d="M700,300 C750,350 700,400 750,450" />
                    <path d="M100,400 C50,450 100,500 50,550" />
                    <path d="M500,100 C550,50 600,150 650,100" />
                  </g>
                </g>

                {/* Glowing Synapses / Optic Nodes */}
                <g className="fill-brand-glow/60 stroke-none">
                  {/* Primary intersections */}
                  <circle cx="400" cy="250" r="3.5" className="animate-pulse" />
                  <circle cx="300" cy="400" r="3.5" />
                  <circle cx="500" cy="400" r="3.5" />
                  <circle cx="650" cy="150" r="3.5" className="animate-pulse" />
                  
                  {/* Secondary intersections */}
                  <circle cx="250" cy="100" r="2" />
                  <circle cx="600" cy="300" r="2" />
                  <circle cx="150" cy="550" r="2" />
                  <circle cx="400" cy="700" r="2" />
                  <circle cx="700" cy="800" r="2.5" />
                  <circle cx="200" cy="800" r="2.5" />
                  <circle cx="150" cy="300" r="2" />
                  <circle cx="700" cy="300" r="2" />
                  <circle cx="500" cy="100" r="2" />
                  
                  {/* Micro nodes */}
                  <circle cx="350" cy="300" r="1" />
                  <circle cx="650" cy="400" r="1" />
                  <circle cx="100" cy="400" r="1" />
                  <circle cx="350" cy="750" r="1" />
                  <circle cx="500" cy="750" r="1" />
                  <circle cx="750" cy="450" r="1" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#retina-pattern)" />
          </svg>
        </ParallaxScroll>
      </div>
    </div>
  );
}
