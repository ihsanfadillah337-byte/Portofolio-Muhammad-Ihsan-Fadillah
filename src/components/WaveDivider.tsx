import './WaveDivider.css';

const WaveDivider = () => {
  return (
    <div className="wave-divider-container">
      <svg
        className="wave-svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C160,80 320,0 480,40 C640,80 800,0 960,40 C1120,80 1280,0 1440,40 L1440,120 L0,120 Z"
          fill="hsl(210, 40%, 98%)"
          opacity="0.5"
        />
        <path
          d="M0,60 C160,100 320,20 480,60 C640,100 800,20 960,60 C1120,100 1280,20 1440,60 L1440,120 L0,120 Z"
          fill="hsl(214, 95%, 93%)"
          opacity="0.6"
        />
        <path
          d="M0,80 C160,110 320,50 480,80 C640,110 800,50 960,80 C1120,110 1280,50 1440,80 L1440,120 L0,120 Z"
          fill="hsl(210, 40%, 96%)"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;