---
title: King Cottage Cam
author: 'Tim King'
publishedAt: '2021-08-01T01:42:15.000Z'
posterImage: 'img/cottagecam.png'
---

# King Cottage Cam

A landing page [(link)](https://king.cottage.cam) for the cottage camera live stream and data points from Great Lakes Observing System's Seagull product [(link)](https://glos.org/priorities/seagull/).

<div class="mockup-browser border border-base-300">
  <div class="mockup-browser-toolbar">
    <div class="input border border-base-300">
    <a href="https://king.cottage.cam" target="_blank">
        king.cottage.com
    </a>
    </div>
  </div>
<img src="/img/cottagecam.png" class="object-cover w-full aspect-video">
</div>

## Site Features

### Data Tiles
The data tiles mainly come from GLOS. The nuxt server caches the requests so that visitors don't take up too much traffic.

There are a couple of failover strategies in place because, first, bouys get taken in during the winter. And, sometimes individual sensors (such as temperature) stop working due to wear and tear. At the time of writing this (7/29/2023) - the Port Sheldon bouy has stopped sending temperature data. So, the api is responding with Air Temp from the muskegon tower and the rest from the bouy.

There is also a small api for sunset data using the [suncalc library](https://github.com/mourner/suncalc).

### Highlights
I need to make more! Creating the timelapsed recordings has some manual setup. It's a docker container I run that records the stream for a while then collapses the timeframe.

## Hardware
The current camera is an Amcrest 4K camera that has survived since 2021. It has a 112° field of view which captures "stairs to stairs" on the beach.

## Technologies
- [Restreamer](https://github.com/datarhei/restreamer)
- [Wireguard](https://wireguard.com)
- [Nuxt](https://nuxt.com)