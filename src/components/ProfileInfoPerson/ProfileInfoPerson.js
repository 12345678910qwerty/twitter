import style from "./ProfileInfoPerson.module.css";

export default function ProfileInfoPerson() {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <img
                    className={style.profile_avatar}
                    src="images/1234.jpg"
                    alt="avatar"
                />
                <button className={style.edit_button}>Edit profile</button>
            </div>
            <p
                className={style.text_style_one}
                style={{ letterSpacing: "-0.252px", margin: "3px 0 0 0" }}
            >
                Noah Smit
            </p>
            <p
                style={{ color: "#5B7083", letterSpacing: "-0.32px" }}
                className={style.text_style_two}
            >
                @noah
            </p>
            <p
                style={{
                    letterSpacing: "-0.24px",
                    margin: "10px 0 0 0",
                }}
                className={style.text_style_two}
            >
                Traveler
            </p>
        </>
    );
}
