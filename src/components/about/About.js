import { useNavigate } from "react-router-dom";
import "./About.css"

export const AboutPage = () => {

    const navigate = useNavigate()

    return (
        <main className="container--landing">
            <section>
                <h1>Welcome to F UR X! We're sorry you're here.</h1>
                <img className="gif" src="https://i.pinimg.com/564x/77/96/7b/77967b36d2554ea4469b121b122c1148.jpg" />
                <form className="form--about">
                    <h3>Your relationship is over. Your life is not.</h3>
                    <h4>Introducing F UR X, the groundbreaking breakup support app designed to help you navigate the challenging journey of moving on. F UR X serves as a supportive community where users can connect with others going through similar experiences. It's more than an app; it's a lifeline for those seeking understanding and connection during a breakup.</h4>

                    <h5>Enjoy!</h5>
                </form>
            </section>
        </main>
    );
}