import React from "react";
import "./PriorityLevelOption.css";
interface Props {
  proorityLevels: Array<PriorityLevelObj>;
  setPriorityLevel: (newLEvel: string) => void;
}


function PriorityLevelOption(props: Props): React.ReactElement {
  const onOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
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
