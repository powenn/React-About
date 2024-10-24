export default interface ExperienceSectionProps {
    experience: ExperienceDict;
}

type ExperienceDict = {
    [grade: string]: ExperienceInfo;
}

type ExperienceInfo = {
    year: string;
    details: Array<string>;
};
