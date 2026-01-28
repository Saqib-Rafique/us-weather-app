# US State Weather Dashboard (React + TypeScript)

Search by **US State name** (e.g., `California`) to fetch **Temperature, Pressure, Humidity** for a set of major cities in that state
using **OpenWeatherMap 5-day/3-hour forecast** (`/data/2.5/forecast`).

Each search result is kept on the page; new searches appear at the top.

## Setup

```bash
npm install
```

Create `.env`:

```bash
VITE_OWM_API_KEY=YOUR_API_KEY_HERE
```

Run:

```bash
npm run dev
```

## How it maps "state -> weather"

OpenWeatherMap's `forecast5` endpoint is **city-based**, not state-based.
This app keeps a small catalog mapping each state to a handful of major cities and displays those city metrics as a proxy.
