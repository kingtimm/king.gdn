---
title: Sneaky Gift
author: 'Tim King'
publishedAt: '2024-12-10T01:42:15.000Z'
posterImage: 'img/sneaky.png'
---

Organize a gift exchange with your loved ones

<img src="/img/sneaky.png" alt="a logo for sneaky gift site" class="rounded-xl"/>

[Sneaky Gift](https://sneaky.gift)

# Background
When I joined Bluesky - my feed quickly became a running list of small gifts that posters would share.

I really liked the starter packs, and thought it would be cool to have a similar OG image that showed membership of a gift exchange.
I was not able to build it that far, but did manage to launch it before the holiday season.

# Technology
I used some new packages (to me).

#### Nuxt UI v3
This made the UI a breeze. I started the project on `alpha.8` which
did not yet have a Stepper component. Instead, I made something similar with routing.
If I could start over, I would rely on the stepper and perhaps send query values instead of router params

#### Vue-Clerk
I have used vue-clerk on other projects, but used a some custom middleware timing. I also set up Apple oauth for the first time making use of my 

#### Pinia-colada
Data fetching asynchronously is always tricky. This library fun to set up. I did not use this for every call, but it gives a lot of control during the
multi-page form controller to make sure I'm not refetching on page focus and refresh.

#### Derangements
The backend api serves up proposed derangements and excludes any pairings we want to prevent.

#Roadmap
Some of the future items I'd love to build in:

1. Social sharing - the ability to have an og-image that shows your group
2. Social accounts - members of your exchange are simply text fields right now, but this could be more engaging
3. Wishlists - when a member of your exchange receives their recipient name, there's an opportunity to establish an account and indicate a wishlist.
4. Resend - no email notification - the organizer has to send links manually. I've really wanted to use Resend!

Being seasonal, I will probably pick this up in November 2025

If you have any thoughts to share - please [Contact](/contact)