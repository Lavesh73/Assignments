import Friend from "./Friend";
import "./App.css"; // Ensure you import the CSS file

function App() {
  const friends = [
    {
      name: "Kunal",
      age: 21,
      hobby: "Painting",
      image: "https://thefancyfarmermn.com/wp-content/uploads/2024/09/IMG_2427-768x1024.jpeg",
      quote: "Art is freedom.",
      contact: "kunal@example.com"
    },
    {
      name: "Prerak",
      age: 22,
      hobby: "Cycling",
      image: "https://hips.hearstapps.com/hmg-prod/images/teacup-pig-guide-pig-on-couch-66a7bb78d01d9.jpg?resize=1200:*",
      quote: "Ride life like a cycle.",
      contact: "prerak@example.com"
    },
    {
      name: "Kala Ghoda",
      age: 20,
      hobby: "Gaming",
      image: "https://wildjolie.com/cdn/shop/articles/16_Most_Beautiful_Horse_in_the_World.jpg?v=1740021416&width=1780",
      quote: "Always level up.",
      contact: "ghoda@example.com"
    },
    {
      name: "Dogesh",
      age: 22,
      hobby: "Reading",
      image: "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*",
      quote: "Books are best friends.",
      contact: "dogesh@example.com"
    },
    {
      name: "Madhav",
      age: 26,
      hobby: "Hiking",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Climb every mountain.",
      contact: "madhav@example.com"
    },
  ];

  return (
    <div className="container">
      <h1>My Friends</h1>
      <div className="card-grid">
        {friends.map((friend, index) => (
          <Friend key={index} {...friend} />
        ))}
      </div>
    </div>
  );
}

export default App;
