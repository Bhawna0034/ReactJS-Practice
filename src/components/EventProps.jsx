const EventProps = () => {
  function handleButtonClick(user) {
    console.log(`Hey ${user}, Welcome to React World!`);
  }

  function handleMouseEnter() {
    alert("Thank you for Hovering Me!");
  }

  return (
    <div>
      <WelcomeUser
        onButtonClick={() => handleButtonClick("Bhawna")}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
};
export default EventProps;

const WelcomeUser = ({ onButtonClick, onMouseEnter }) => {
  return (
    <div className="flex items-center gap-x-4">
      <button
        onClick={onButtonClick}
        className="bg-pink-500 text-white font-bold px-4 py-2"
      >
        Log In
      </button>
      <button
        onClick={onMouseEnter}
        className="bg-purple-500 text-white font-bold px-4 py-2"
      >
        Hover Me
      </button>
    </div>
  );
};

export const ParentComponent = () => {
  function handleButtonClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h1>Hello from Parent </h1>
      <ChildComponent onButtonClick={() => handleButtonClick()} />
    </div>
  );
};

export const ChildComponent = (props) => {
  return (
    <div>
      <h2>Hello from Child</h2>
      <button
        onClick={props.onButtonClick}
        className="border bg-teal-500 font-bold px-4 py-2"
      >
        Click Me
      </button>
    </div>
  );
};
