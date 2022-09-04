import React from "react";
import "./PriorityLevelOption.css";
interface Props {
  //An array of PriorityLevelObj to display the different priority levels and their names
  proorityLevels: Array<PriorityLevelObj>;
  //A function used to change the current priority level that will be added to new todo objects
  setPriorityLevel: (newLEvel: string) => void;
}


function PriorityLevelOption(props: Props): React.ReactElement {
  //triggered when user change the option dropdown
  //it will set the priority level to the one selected by users
  const onOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setPriorityLevel(event.target.value);
  };

  const getOptions = () => {
    const options = props.proorityLevels.map((level) => {
      return (
        <option
          value={level.level}
          className={`level-${level.level}`}
          key={level.PriorityLevelName}
        >
          {level.level}: {level.PriorityLevelName}
        </option>
      );
    });
    return options;
  };
  return <select className="select-menu" onChange={onOptionChange}>{getOptions()}</select>;
}

export default PriorityLevelOption;
