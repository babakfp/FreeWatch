export type Platform = {
    name: string
    url: `https://${string}.${string}`
    description: `${string}.`
    contentTypes: ("Movies" | "Series" | "Anime")[]
    languages: ("English" | "Persian")[]
    canDownload?: boolean
    canWatchOnline?: boolean
    possiblyShowsAds?: boolean
}

export const platforms: Platform[] = [
    {
        name: "AIO.FILM",
        url: "https://aiofilm.store",
        description: "Download Movies, Series and Anime for Free.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["Persian"],
        canDownload: true,
    },
    {
        name: "HiAnime",
        url: "https://hianime.to",
        description: "Watch Anime Online for Free.",
        contentTypes: ["Anime"],
        languages: ["English"],
        canWatchOnline: true,
        possiblyShowsAds: true,
    },
    {
        name: "Nites (BFlix)",
        url: "https://w1.nites.is",
        description: "Watch Movies and Shows Online for Free.",
        contentTypes: ["Movies", "Series"],
        languages: ["English"],
        canWatchOnline: true,
    },
    {
        name: "MyFlixer",
        url: "https://myflixer.gs",
        description: "Watch (and Download) HD Movies, Series and Anime Online.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canWatchOnline: true,
    },
    {
        name: "9AnimeTV",
        url: "https://9animetv.to",
        description: "Watch (and Download) Anime Online for Free.",
        contentTypes: ["Anime"],
        languages: ["English"],
        canWatchOnline: true,
    },
    {
        name: "ZoeChip",
        url: "https://zoechip.com",
        description: "Watch (and Download) Movies, Series and Anime Online.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canWatchOnline: true,
    },
    {
        name: "UFlix",
        url: "https://uflix.cc",
        description: "Watch Movies, Series and Anime Online.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canWatchOnline: true,
    },
    {
        name: "1337x",
        url: "https://1337x.to",
        description: "More than just a movie site.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canDownload: true,
        canWatchOnline: true,
        possiblyShowsAds: true,
    },
    {
        name: "Movies2Watch",
        url: "https://movies2watch.tv",
        description: "Watch (and Download) Movies, Series and Anime Online.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canWatchOnline: true,
        possiblyShowsAds: true,
    },
    {
        name: "123Movie (1)",
        url: "https://ww16.0123movie.net",
        description: "Watch (and Download) Movies and Series Online.",
        contentTypes: ["Movies", "Series"],
        languages: ["English"],
        canWatchOnline: true,
        possiblyShowsAds: true,
    },
    {
        name: "123Movie (2)",
        url: "https://ww4.123moviesfree.net",
        description: "Watch (and Download) Movies and Series Online.",
        contentTypes: ["Movies", "Series"],
        languages: ["English"],
        canWatchOnline: true,
    },
    {
        name: "Soaper",
        url: "https://soaper.tv",
        description: "Watch (and Download) Movies and Series Online.",
        contentTypes: ["Movies", "Series"],
        languages: ["English"],
        canDownload: true,
        canWatchOnline: true,
        possiblyShowsAds: true,
    },
]
