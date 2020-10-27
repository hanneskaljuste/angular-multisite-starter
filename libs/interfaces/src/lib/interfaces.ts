export interface Message {
    message: string;
}


export interface SiteConfiguration {
    id: number | string;
    theme: string;
    domain: string;
    features: SiteFeature[];
}


export interface SiteFeature {
    id: number | string;
    name: string;
}
