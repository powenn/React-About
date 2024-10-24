export default interface ContactSectionProps{
    contacts:ContactDict
}

type ContactDict = {
    [key: string]: string
}