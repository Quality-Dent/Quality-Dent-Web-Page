import HomePage from "@/dental/home/presentation/pages/home-page";

const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Quality Dent",
    url: "https://qualitydentperu.com/",
    telephone: "+51998079870",
    image: "https://qualitydentperu.com/logo-white.png",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Rafael Escardo 201",
        addressLocality: "San Miguel",
        addressRegion: "Lima",
        addressCountry: "PE",
    },
    openingHours: "Mo-Sa 09:00-20:00",
    priceRange: "$$",
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
            />
            <HomePage/>
        </>
    );
}
