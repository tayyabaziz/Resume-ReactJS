export default function baseUrl(window) {
    if (process.env.NODE_ENV === "production") {
        return window.location.origin + "/api/";
    }
    else {
        return "https://tayyabaziz.com/api/";
    }
}