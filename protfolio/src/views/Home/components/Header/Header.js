import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src="images/illustration-intro.png" alt="illustration-intro" />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all you most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="btn ">Get Started</button>
    </div>
  );
}
