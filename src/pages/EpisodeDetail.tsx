import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import episodes from "../lib/episodes.json";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Mic } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

export default function EpisodeDetail() {
  const { seasonId, episodeId } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  // Find the episode based on URL params
  const parsedSeasonId = parseInt(seasonId || "0", 10);
  const parsedEpisodeId = parseInt(episodeId || "0", 10);

  const seasonData =
    episodes[`saison${parsedSeasonId}` as keyof typeof episodes];
  // Filter is safer than using array index because IDs could be non-sequential
  // @ts-ignore
  const episode = seasonData
    ? seasonData.find((ep: any) => ep.id === parsedEpisodeId)
    : null;

  useEffect(() => {
    if (!episode) {
      // If episode doesn't exist, we just close and go back
      setIsOpen(false);
    }
  }, [episode]);

  const handleClose = () => {
    setIsOpen(false);
    // Go back to the previous page (like the season page)
    navigate(-1);
  };

  if (!episode) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogOverlay className="bg-black/60 backdrop-blur-sm" />
      <DialogContent className="max-w-[840px] p-0 bg-[#221e1f] border-none rounded-[2rem] overflow-hidden text-white data-[state=open]:duration-300">
        <div className="flex flex-col h-full bg-[#1e1a1b] p-8 pb-10">
          {/* Header section with image and title */}
          <div className="flex flex-col sm:flex-row gap-8 mb-8">
            <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] bg-black">
              {episode.image ? (
                <img
                  src={getAssetUrl(episode.image)}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="text-brand-red mb-3">
                <span className="text-white/60">Saison {episode.season}</span>{" "}
                <span className="mx-2 text-white/40">›</span>{" "}
                <span className="font-semibold">
                  Épisode {episode.episodeNumber || episode.id}
                </span>
              </div>

              <DialogTitle className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                {episode.title}
              </DialogTitle>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 mb-6 text-sm">
                <span>{episode.date || "1 Juillet 2024"}</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>{episode.duration}</span>
              </div>
              {/* Platform buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  href={episode.spotifyUrl || "#"}
                  target={episode.spotifyUrl ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors border border-white/5 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-[#1DB954] flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.72 12.9c.36.181.54.841.24 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                  Spotify
                </a>
                <a
                  href={episode.youtubeUrl || "#"}
                  target={episode.youtubeUrl ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors border border-white/5 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FF0000] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  Youtube
                </a>
                <a
                  href={episode.deezerUrl || "#"}
                  target={episode.deezerUrl ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors border border-white/5 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <div className="w-5 h-5 flex items-center justify-center text-[#8e43e7]">
                    <Mic className="w-4 h-4 fill-current" />
                  </div>
                  Deezer
                </a>
                <a
                  href={episode.appleUrl || "#"}
                  target={episode.appleUrl ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors border border-white/5 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <div className="w-5 h-5 flex items-center justify-center text-[#A668D3]">
                    <Mic className="w-4 h-4" />
                  </div>
                  Apple Podcast
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-lg text-white/70 leading-relaxed font-light mb-10">
            {episode.longDescription ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: episode.longDescription.replace(/\n/g, "<br />"),
                }}
              />
            ) : (
              episode.description
            )}
          </div>

          <div className="h-px bg-white/10 w-full mb-8"></div>

          {/* Credits section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
            {((episode.guestsList && episode.guestsList.length > 0) ||
              (!episode.guestsList && episode.guests)) && (
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                <div className="sm:col-span-2 text-brand-red text-xs font-bold tracking-widest uppercase mb-1 text-[#f25f5a]">
                  INVITÉ•E•S
                </div>
                {episode.guestsList ? (
                  episode.guestsList.map((guest: any, i: number) => (
                    <div key={i}>
                      <div className="font-bold text-white uppercase">
                        {guest.name}
                      </div>
                      <div className="text-white/50 text-sm">{guest.role}</div>
                    </div>
                  ))
                ) : (
                  <div className="sm:col-span-2">
                    <div className="font-bold text-white uppercase">
                      {episode.guests}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="sm:col-span-2">
              <div className="text-brand-red text-xs font-bold tracking-widest uppercase mb-3 text-[#f25f5a]">
                PRÉSENTÉ PAR
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                {episode.hostsList ? (
                  episode.hostsList.map((host: any, i: number) => (
                    <div key={i}>
                      <div className="font-bold text-white uppercase">
                        {host.name}
                      </div>
                      <div className="text-white/50 text-sm">{host.role}</div>
                    </div>
                  ))
                ) : (
                  <div className="sm:col-span-2">
                    <div className="font-bold text-white uppercase">
                      {episode.commentedBy}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
