import { useState } from "react";

export default function CommentsSection() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const msgs: Array<string> = [
        "這樣好玩嗎😅",
        "沒別事做嗎😅",
        "還繼續點嗎😅",
        "掛精神科嗎😅",
        "😅😅😅😅😅"
    ];

    const handleClick = () => {
        setCount((prevCount) => {
            const newCount = prevCount + 1;

            if (newCount % 5 === 0 && newCount / 5 - 1 < msgs.length) {
                setMessage(msgs[(newCount / 5) - 1]);
            }

            if (newCount > msgs.length * 5) {
                return 0;
            }
            return newCount;
        });
    };

    return (
        <>
            <section className="comments-section card">
                <div className="card">
                    <button onClick={handleClick}>
                        {count === 0 ? `👆 😑 👇 : 0` : (count % 5 === 0 ? message : `👆 😑 👇 : ${count}`)}
                    </button>
                </div>
            </section>
        </>
    );
}
