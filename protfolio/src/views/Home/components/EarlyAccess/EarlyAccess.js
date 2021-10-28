import "./EarlyAccess.css";

function EarlyAccess() {
  return (
    <div className="earlyAccess">
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. if you have any questions, our support tram would be happy to
        help you.
      </p>
      <input type="text" placeholder="email@example.com" />

      <button className="btn btn-email">Get Started</button>
    </div>
  );
}
export default EarlyAccess;
