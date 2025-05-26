function Friend({ name, age, hobby, image, quote, contact }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-body">
        <h2>{name} <span className="age">({age} yrs)</span></h2>
        <p><strong>Hobby:</strong> {hobby}</p>
        <p><em>"{quote}"</em></p>
        <p className="contact">Contact: {contact}</p>
      </div>
    </div>
  );
}

export default Friend;
