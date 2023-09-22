import { useNavigate } from "react-router-dom";
import "./About.css"

export const AboutPage = () => {

    const navigate = useNavigate()

    return (
        <main className="container--landing">
            <section>
                <img className="gif" src="https://i.pinimg.com/originals/6a/0f/c8/6a0fc85baa9eb6de9ef20d7b5baed57b.gif" />
                <form className="form--about">
                    <h3>About F UR X will go here</h3>
                    <h4>About Creator</h4>

                    <h5>Enjoy!</h5>

                    <button className="button" onClick={() => navigate("/login")}>Back To Login</button>
                </form>
            </section>
        </main>
    );
}