import { useState } from "react";

const ProfileUpdated = () => {
    const [isShown, setIsShown] = useState(false);

    return (
      <div className="App">
        <button
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          Hover over me!
        </button>
        {isShown && (
          <div>
            Ill appear when you hover over the button.
          </div>
        )}
      </div>
    );
  }

export default ProfileUpdated;