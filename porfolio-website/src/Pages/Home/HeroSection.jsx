export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content-box">
                <div className="hero--section--content">
                    <p className="section--title">Hi, I'm Brittany</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dicta inventore numquam laudantium nemo distinctio dolorum soluta. Temporibus, suscipit id blanditiis amet minus fugiat ipsum vero iure ut, quaerat facere.
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
}

