import { urls } from "./urls";
import { socialLinks } from "./socials";

export const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nine Lives Studio",
    "image": urls.base + "/image.png",
    "@id": urls.base,
    "url": urls.base,
    "telephone": "+54 9 11 2737-7284",
    "priceRange": "69",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Formosa 523",
        "addressLocality": "Cdad. Autónoma de Buenos Aires",
        "postalCode": "C1424BZK",
        "addressCountry": "AR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -34.6212315,
        "longitude": -58.4382724
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
    },
    "sameAs": [
        socialLinks.instagram,
        socialLinks.youtube,
        socialLinks.soundcloud,
        urls.base
    ]
}; 