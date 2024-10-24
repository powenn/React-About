import SkillsSectionProps from "../interface/SkillsSectionProps";
import ContactSectionProps from "../interface/ContactSectionProps";
import ExperienceSectionProps from "../interface/ExperienceSectionProps";

export default function LeftSide() {
    const skills: Array<string> = [
        "Python Programming",
        "Junior Penetration Testing",
        "Web Application Penetration Testing",
        "iOS App Development with SwiftUI"
    ];

    const contacts: ContactSectionProps['contacts'] = {
        "Line ID": "null",
        "Email": "null",
    };

    const experience: ExperienceSectionProps['experience'] = {
        "大學一年級": {
            year: "2022-2023",
            details: ["App Development with Swift Certified User"]
        },
        "大學二年級": {
            year: "2023-2024",
            details: [
                "TKU iOS Club 社團負責人 / 社長 / 教學",
                "eJPT - Junior Penetration Tester",
                "遠傳電信2024暑期資訊安全實習生"
            ]
        },
        "大學三年級": {
            year: "2024-2025",
            details: [
                "資訊安全實務基礎 / 資安企業實務應用 - 助教",
                "教育部先進資通安全實務人才培育計畫 - 臺灣好厲駭 高階培訓學員",
                "TKU iOS Club 教學",
                "eWPT - Web Application Penetration Tester"
            ]
        },
    }

    return (
        <div className="left-side">
            <SkillsSection skills={skills} />
            <ContactSection contacts={contacts} />
            <ExperienceSection experience={experience} />
        </div>
    )
}

function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <section className="skills-section card">
            <h4>技能</h4>
            <ul>
                {
                    skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))
                }
            </ul>
        </section>
    )
}

function ContactSection({ contacts }: ContactSectionProps) {
    return (
        <>
            <section className="contact-section card">
                <h4>聯絡方式</h4>
                <ul>
                    {
                        Object.entries(contacts).map(([way, info], index) => (
                            <li key={index}>
                                <strong>{way}</strong>: {info}
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

function ExperienceSection({ experience }: ExperienceSectionProps) {
    return (
        <section className="experience-section card">
            <h4>Experience</h4>
            <ul>
                {
                    Object.entries(experience).map(([grade, { year, details }]) => (
                        <li key={grade}>
                            <em>{year}</em>&nbsp;<strong>{grade}</strong>
                            <ul>
                                {details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}
