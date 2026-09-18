'use client';

import { useState } from 'react';
import Image from 'next/image';
import { campus360Scenes, tourCategories } from '@/data/campus360Data';
import { CampusScene } from '@/types';
import {
  Compass,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Info,
  CheckCircle2,
  RotateCw,
  PhoneCall
} from 'lucide-react';
import Link from 'next/link';

interface Campus360ViewerProps {
  initialSlug?: string;
}

export default function Campus360Viewer({ initialSlug }: Campus360ViewerProps) {
  const initialIndex = initialSlug
    ? campus360Scenes.findIndex((s) => s.slug === initialSlug)
    : 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const currentScene: CampusScene = campus360Scenes[currentIndex] || campus360Scenes[0];

  const filteredScenes = selectedCategory === 'All'
    ? campus360Scenes
    : campus360Scenes.filter((s) => s.category === selectedCategory);

  const nextScene = () => {
    setCurrentIndex((prev) => (prev + 1) % campus360Scenes.length);
  };

  const prevScene = () => {
    setCurrentIndex((prev) => (prev - 1 + campus360Scenes.length) % campus360Scenes.length);
  };

  return (
    <div className="space-y-6">
      {/* 360 Viewport Container */}
      <div
        className={`relative w-full overflow-hidden bg-slate-950 cut-corner-panel border-4 border-[#0d315c] shadow-2xl transition-all ${
          isFullscreen
            ? 'fixed inset-0 z-[13000] border-0 rounded-none h-screen'
            : 'h-[500px] md:h-[620px]'
        }`}
      >
        {/* Scene Background Image (High quality thumbnail representation) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={currentScene.thumb}
            alt={currentScene.title}
            fill
            priority
            className="object-cover object-center transition-all duration-700 scale-100"
          />
          {/* Subtle vignette and gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />
        </div>

        {/* Top Floating Controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          {/* Active Scene Badge */}
          <div className="pointer-events-auto flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 cut-corner-badge border border-white/20 text-white">
            <Compass className="w-4 h-4 text-[#ffaf3a] animate-spin" style={{ animationDuration: '8s' }} />
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-[#ffaf3a]">
                Location {currentIndex + 1} of {campus360Scenes.length} · {currentScene.category}
              </p>
              <h2 className="text-sm md:text-base font-black truncate max-w-[200px] sm:max-w-md">
                {currentScene.title}
              </h2>
            </div>
          </div>

          {/* Action Tools */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="w-10 h-10 rounded bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#019e6e] transition-colors"
              title="Toggle Scene Information"
            >
              <Info className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-10 h-10 rounded bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#019e6e] transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Nav Arrows */}
        <button
          onClick={prevScene}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#019e6e] active:scale-95 transition-all shadow-lg border border-white/10"
          aria-label="Previous scene"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextScene}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#019e6e] active:scale-95 transition-all shadow-lg border border-white/10"
          aria-label="Next scene"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scene Info Overlay Card */}
        {showInfo && (
          <div className="absolute bottom-20 left-4 right-4 md:left-8 md:bottom-24 md:max-w-lg z-20 bg-[#0d315c]/95 backdrop-blur-md border border-white/20 cut-corner-panel p-5 text-white shadow-2xl animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ffaf3a]">
                {currentScene.category}
              </span>
              <span className="text-[10px] text-white/50 font-bold">
                Deshmukhi Campus, Hyderabad
              </span>
            </div>
            <h3 className="text-xl font-black mb-2">{currentScene.title}</h3>
            <p className="text-xs text-white/80 leading-relaxed mb-3">
              {currentScene.description}
            </p>

            {currentScene.highlights && currentScene.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {currentScene.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-white/10 rounded text-[9px] font-bold text-white/90"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 360 Compass Indicator */}
        <div className="absolute bottom-4 right-4 z-20 bg-black/60 px-3 py-1.5 rounded cut-corner-badge text-white/70 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 pointer-events-none">
          <RotateCw className="w-3 h-3 text-[#019e6e] animate-spin" style={{ animationDuration: '6s' }} /> 360° View Active
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {tourCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 cut-corner-badge text-xs font-black uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-[#0d315c] text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Location Snap Thumbnails Ribbon */}
      <div className="bg-white border border-slate-200 cut-corner-panel p-4 shadow-sm">
        <p className="text-xs font-black uppercase tracking-widest text-[#0d315c] mb-3 px-1">
          Select Location ({filteredScenes.length}):
        </p>

        <div className="flex items-center gap-3 overflow-x-auto pb-2 [scrollbar-width:thin] snap-x">
          {filteredScenes.map((scene) => {
            const isSelected = scene.slug === currentScene.slug;
            const fullIndex = campus360Scenes.findIndex((s) => s.slug === scene.slug);
            return (
              <button
                key={scene.id}
                type="button"
                onClick={() => setCurrentIndex(fullIndex)}
                className={`group relative h-[78px] w-[126px] md:h-[95px] md:w-[155px] shrink-0 snap-start overflow-hidden cut-corner-card text-left transition-all ${
                  isSelected
                    ? 'ring-4 ring-[#019e6e] scale-[0.98]'
                    : 'opacity-70 hover:opacity-100 hover:scale-[1.02]'
                }`}
              >
                <Image
                  src={scene.thumb}
                  alt={scene.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <span className="absolute bottom-1.5 left-2 right-2 text-[10px] md:text-[11px] font-black text-white leading-tight truncate drop-shadow">
                  {scene.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
