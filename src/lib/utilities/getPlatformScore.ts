import type { Platform } from "$lib/data"

export const getPlatformScore = (platform: Platform) => {
    let score = 0

    if (platform.canDownload) {
        score += 1
    } else {
        score -= 1
    }

    if (platform.canWatchOnline) {
        score += 1
    } else {
        score -= 1
    }

    if (platform.possiblyShowsAds) {
        score -= 1
    } else {
        score += 1
    }

    if (platform.isFrequentlyUpdated) {
        score += 1
    } else {
        score -= 1
    }

    score += platform.contentTypes.length

    if (
        platform.contentTypes.length === 1
        && platform.contentTypes.includes("Anime")
    ) {
        score += 2
    }

    score += platform.languages.length

    if (platform.languages.includes("English")) {
        score += 1
    } else {
        score -= 1
    }

    return score
}
