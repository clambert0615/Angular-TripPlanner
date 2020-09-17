

export class Places {
    html_attributions: any;
    next_page_token: string;
    results: Result[];
    status: string;
}
export class Attractions{
    html_attributions: any;
    next_page_token: string;
    results: Result[];
    status: string;
}
export class Eating{
    html_attributions: any;
    next_page_token: string;
    results: Result[];
    status: string;
}
export class Lodging{
    html_attributions: any;
    next_page_token: string;
    results: Result[];
    status: string;
}
export class PlaceDetails{
    html_attributions: any;
    result: Result;
    status: string;
    apiKey: string;
}
export class Review{
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}
export class Result{
    business_status: string;
    geometry: Geometry;
    icon: string;
    name: string;
    opening_hours: Opening_Hours;
    photos: Photo[];
    place_id: string;
    plus_code: Plus_Code;
    rating: number;
    reference: string;
    reviews: Review[];
    scope: string;
    types: string[];
    user_ratings_total: number;
    vicinity: string;
    price_level: number;
    website: string;
}
export class Geometry{
    location: Location;
    viewport: Viewport;
}
export class Location{
    lat: number;
    lng: number;
}
export class Viewport{
    northeast: Northeast;
    southwest: Southwest;
}
export class Northeast{
    lat: number;
    lng: number;
}
export class Southwest{
    lat: number;
    lng: number;
}
export class Opening_Hours{
    open_now: boolean;
}
export class Plus_Code{
    compound_code: string;
    global_code: string;
}
export class Photo{
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
}
