import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import EpisodeDetail from './src/pages/EpisodeDetail.tsx';

console.log("Starting render");
try {
  const html = renderToString(
    <MemoryRouter initialEntries={['/saison/4/episode/5']}>
      <Routes>
        <Route path="/saison/:seasonId/episode/:episodeId" element={<EpisodeDetail />} />
      </Routes>
    </MemoryRouter>
  );
  console.log("Render successful");
} catch (e) {
  console.error("Render failed:", e);
}
