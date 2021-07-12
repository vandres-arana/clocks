export default interface Clock {
    id: number,
    name: string,
    locale: string | undefined,
    timeZone: string | undefined,
}