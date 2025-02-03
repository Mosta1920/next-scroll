import Card from "./Card";

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <h1>Keep Scrolling</h1>
        </section>
        <section className="cards">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              id={`card-${index + 1}`}
              frontSrc="/card-front.png"
              frontAlt="Card Image"
              backText="Your Card details appear here"
            />
          ))}
        </section>
        <section className="footer">
          <h1>End of Scrolling</h1>
        </section>
      </div>
    </>
  );
}
