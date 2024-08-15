export type Platform = {
    name: string
    url: `https://${string}.${string}`
    description: `${string}.`
    contentTypes: ("Movies" | "Series" | "Anime")[]
    languages: ("English" | "Persian")[]
    canDownload?: boolean
    canWatchOnline?: boolean
    possiblyShowsAds?: boolean
    isFrequentlyUpdated?: boolean
}

export const platforms: Platform[] = [
    {
        name: "AIO.FILM",
        url: "https://aiofilm.store",
        description: "Download Movies, Series and Anime for Free.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["Persian"],
        canDownload: true,
        isFrequentlyUpdated: true,
    },
    {
        name: "HiAnime",
        url: "https://hianime.to",
        description: "Watch Anime Online for Free.",
        contentTypes: ["Anime"],
        languages: ["English"],
        canWatchOnline: true,
        possiblyShowsAds: true,
        isFrequentlyUpdated: true,
    },
    {
        name: "Nites (BFlix)",
        url: "https://w1.nites.is",
        description: "Watch Movies and Shows Online for Free.",
        contentTypes: ["Movies", "Series"],
        languages: ["English"],
        canWatchOnline: true,
        isFrequentlyUpdated: true,
    },
    {
        name: "MyFlixer",
        url: "https://myflixer.gs",
        description: "Watch (and Download) HD Movies, Series and Anime Online.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canWatchOnline: true,
        isFrequentlyUpdated: true,
    },
    {
        name: "9AnimeTV",
        url: "https://9animetv.to",
        description: "Watch (and Download) Anime Online for Free.",
        contentTypes: ["Anime"],
        languages: ["English"],
        canWatchOnline: true,
        possiblyShowsAds: true,
        isFrequentlyUpdated: true,
    },
    {
        name: "ZoeChip",
        url: "https://zoechip.com",
        description: "Watch (and Download) Movies, Series and Anime Online.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canWatchOnline: true,
        possiblyShowsAds: true,
        isFrequentlyUpdated: true,
    },
    {
        name: "UFlix",
        url: "https://uflix.cc",
        description: "Watch Movies, Series and Anime Online.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canWatchOnline: true,
        possiblyShowsAds: true,
        isFrequentlyUpdated: true,
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
        isFrequentlyUpdated: true,
    },
    {
        name: "Movies2Watch",
        url: "https://movies2watch.tv",
        description: "Watch (and Download) Movies, Series and Anime Online.",
        contentTypes: ["Movies", "Series", "Anime"],
        languages: ["English"],
        canWatchOnline: true,
        possiblyShowsAds: true,
        isFrequentlyUpdated: true,
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
        isFrequentlyUpdated: false,
    },
    {
        name: "AnimePahe",
        url: "https://animepahe.ru",
        description: "Watch Anime Online for Free.",
        contentTypes: ["Anime"],
        languages: ["English"],
        canDownload: true,
        canWatchOnline: true,
        isFrequentlyUpdated: true,
    },
]

export type Website = {
    name: string
    description: string
    url: string
}

export const websites: Website[] = [
    {
        name: "FMHY",
        description: "The largest collection of free stuff on the internet.",
        url: "https://fmhy.pages.dev/videopiracyguide",
    },
]
