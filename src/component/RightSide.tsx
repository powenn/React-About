import CertificationSectionProps from "../interface/CertificationSectionProps"

export default function RightSide() {

    const certs: CertificationSectionProps['certs'] = {
        "App Development with Swift Certified User": {
            img_url: "https://camo.githubusercontent.com/63347bb9751e69affaf79770552f70045b872638681fb86c7fc1c851ede4645b/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f39623061633761662d663761632d343933382d393661342d3264343830356266653233662f696d6167652e706e67",
            info_url: "https://www.credly.com/badges/38c0eed0-d6d5-422d-a2cc-18b44d0df509/public_url"
        },
        "eJPT - Junior Penetration Tester": {
            img_url: "https://camo.githubusercontent.com/280fb77bffe0010e47564bc1a8a319ec47b791f73ff66b75c2ee96871065c8e9/68747470733a2f2f74656d706c617465732e696d616765732e63726564656e7469616c2e6e65742f31363934373139323930313839383731393639393135313534303836323833342e706e67",
            info_url: "https://certs.ine.com/a639fb17-c205-408b-a3cd-a213049621ea"
        },
        "eWPT - Web Application Penetration Tester": {
            img_url: "https://camo.githubusercontent.com/61378e323ddd7024cb42c7abf26c9e446e4b1ec99118c8a05dce9eda441ef167/68747470733a2f2f6170692e61636372656469626c652e636f6d2f76312f63726564656e7469616c2f67656e65726174655f62616b65645f62616467653f63726564656e7469616c5f69643d313137323237353331",
            info_url: "https://certs.ine.com/21339d94-af3c-405e-a4aa-61800ecdafd6"
        }
    }


    return (
        <>
            <div className="right-side">
                <CertificationSection certs={certs} />
                <CertificationInfoSection certs={certs} />
            </div>
        </>
    )
}

function CertificationSection({ certs }: CertificationSectionProps) {
    return (
        <>
            <section className="certification-section card">
                <h4>證照</h4>
                {
                    Object.entries(certs).map(([name, info], index) => (
                        <div className="cert-item" key={index}>
                            <h5>{name}</h5>
                            <img src={info.img_url} alt={name} />
                        </div>
                    ))
                }
            </section>
        </>
    );
}

function CertificationInfoSection({ certs }: CertificationSectionProps) {
    return (
        <section className="cert-info-section card">
            <h4>證照資訊</h4>
            <table className="certification-table">
                <thead>
                    <tr>
                        <th>證照名稱</th>
                        <th>證照資訊</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(certs).map(([name, info], index) => (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>
                                <a href={info.info_url} target="_blank" rel="noopener noreferrer">
                                    檢視證照資訊
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}