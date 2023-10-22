import { Clock } from "@phosphor-icons/react";

const DisplayHours = ({ hoursString }) => {
    const hoursArray = hoursString.split(' ').filter((item, index) => index % 2 === 0);
  
    return (
      <>
        {hoursArray.map((hour, index) => (
          <div key={index}>
            {hour} <span className="text-muted">{hoursString.split(' ')[(index * 2) + 1]}</span>
          </div>
        ))}
      </>
    );
  };

  export default DisplayHours; 