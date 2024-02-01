export function extractVideoId(url) {
    const searchParams = new URLSearchParams(new URL(url).search);
    return searchParams.get("v");
}
