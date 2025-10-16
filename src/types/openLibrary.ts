export interface Book {
    key: string;
    title: string;
    author_name: string;
    first_publish_year? : number;
    lending_edition_s?: string;
}