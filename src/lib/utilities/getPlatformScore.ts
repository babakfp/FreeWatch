import type { Platform } from "$lib/data"

export const getPlatformScore = (platform: Platform) => {
    let score = 0

    if (platform.canDownload) {
        score += 1
    }
    if (platform.canWatchOnline) {
        score += 1
    }
    if (platform.possiblyShowsAds) {
        score -= 1
    }

    score += platform.languages.length
    score += platform.contentTypes.length

    return score
}
