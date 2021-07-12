import Clock from './models/Clock';

export const allClocks: Clock[] = [{
    id: 1,
    name: "Local",
    locale: undefined,
    timeZone: undefined
}, {
    id: 2,
    name: "Brazil East",
    locale: "pt-br",
    timeZone: "Brazil/East"
}, {
    id: 3,
    name: "Mexico",
    locale: "es-MX",
    timeZone: "Mexico/General"
}, {
    id: 4,
    name: "Spain",
    locale: "es-ES",
    timeZone: "Europe/Madrid"
}, {
    id: 5,
    name: "Germany",
    locale: "de-DE",
    timeZone: "Europe/Berlin"
}, {
    id: 6,
    name: "Turkey",
    locale: "tr",
    timeZone: "Turkey"
}, {
    id: 7,
    name: "India",
    locale: "hi",
    timeZone: "Asia/Hong_Kong"
}, {
    id: 8,
    name: "Japan",
    locale: "ja",
    timeZone: "Asia/Tokyo"
}]