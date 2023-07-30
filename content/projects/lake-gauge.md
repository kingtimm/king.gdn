---
title: Lake Gauge
author: 'Tim King'
publishedAt: '2023-07-28T01:42:15.000Z'
posterImage: 'img/lakegauge.jpg'
---

# Lake Gauge

The Lake Gauge shows lake data (temp, waves, wind, and sunset) on a small unassuming screen.

<img src="/img/lakegauge.jpg" alt="picture of the lake gauge" class="rounded-xl"/>

It is a fun, cheap (well, not including my time🤣) project that builds on cottage camera's back-end.

It leverages e-paper displays which have become really cheap. You'd recognize them from Kindle devices and now for electronic price tags in retail environments. They have a very low refresh rate, but newer ones have begun offering partial updates.

Waveshare has a few sizes supporting the partial updates. I used the 3.7 in this project, but next time I'd likely use the 4.2.

## Data
The data is pulled from the same API as the cottage cam sites [(link)](https://king.cottage.cam). Credit to [Great Lakes Observing System's Seagull product.](https://glos.org/priorities/seagull/)

## Device Limitations
The pico does not have much memory and the cost of each screen refresh is high. A few things that helped were:

- Compiling a firmware version with the larger files like the driver. Frozen bytecode took up less room.
- Not overwriting the screen with each refresh - just a blit with a key.
- Partial updates, over time, result in ghosting on the screen. You'll need a full refresh every once in a while.

## Parts
- Raspberry Pi Pico W (wireless)
- Waveshare E-paper 3.7 for Pico
- Case (Custom case from scrap walnut)

## References
- 3.7 driver (customized) [(link)](https://github.com/phoreglad/pico-epaper/blob/main/Pico_ePaper.py)
- 3.7 display [(link)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwils6uatbWAAxWGkmoFHYAqDaoQFnoECCMQAQ&url=https%3A%2F%2Fwww.waveshare.com%2Fpico-epaper-3.7.htm&usg=AOvVaw2vU4oO10rh86dSng-JInIe&opi=89978449)
