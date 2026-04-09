import React from "react";
import { Mic } from "lucide-react";

interface EpisodeCoverProps {
  title: string;
  commentedBy: string;
  guests: string;
  className?: string;
}

const EpisodeCover = ({ title, commentedBy, guests, className }: EpisodeCoverProps) => {
  return (
    <div className={`relative aspect-square rounded-3xl overflow-hidden bg-[#1A0A0A] border border-white/10 group cursor-pointer ${className}`}>
      {/* Background Halftone Mic Pattern */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute inset-0 grid-overlay" />
        <Mic className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] text-brand-red opacity-40 rotate-12" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        {/* Top Info */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
            <span>🎙️ Zenikast</span>
          </div>
          <h3 className="text-2xl font-bold text-white leading-tight max-w-[80%]">
            {title}
          </h3>
        </div>

        {/* Bottom Info */}
        <div className="grid grid-cols-2 gap-4 items-end">
          <div className="space-y-1">
            <span className="block text-[8px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Commenté par
            </span>
            <span className="block text-[10px] font-bold text-white">
              {commentedBy}
            </span>
          </div>
          <div className="space-y-1 text-right">
            <span className="block text-[8px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Invitées
            </span>
            <span className="block text-[10px] font-bold text-white leading-tight">
              {guests}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default EpisodeCover;
