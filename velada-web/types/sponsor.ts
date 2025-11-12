export interface Sponsor {
    id: SponsorID; // Utilizando tipos de cadena de texto específicos (literal types) [19]
    name: SponsorName;
    url: string;
    logo: any; // El componente SVG importado [18]
}