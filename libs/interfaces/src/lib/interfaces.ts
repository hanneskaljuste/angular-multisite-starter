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

// Should be theming module thing ?
export interface Theme {
    name: string;
    loaded: boolean;
}
