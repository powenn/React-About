export default interface CertificationSectionProps {
    certs:CertDict
}

type CertDict = {
    [name: string]: CertInfo
}

type CertInfo = {
    img_url:string;
    info_url:string
}