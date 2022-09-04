 
import "./SortOptions.css"

interface Props {
 //an array of sort option names
  options: Array<string>;
  //a function to sort all todo objects
  sortTodo: (option: string) => void;
}



function SortOptions(props: Props): React.ReactElement {
 //return all options in the sort option dropdown
 //it will add "Sort By " to each option name
  const getAllOptions = () => {
    const allOptions = props.options.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
    const firstOption = <option key={"Sory By"}>--Sort By--</option>;
    return [firstOption].concat(allOptions);
  };

  //triggered when users change the option dropdown
 //it will extract the option name selected by users
 //then call sortTodo with the option name to sort the todo objects
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const selectedOption = event.target.value;
    props.sortTodo(selectedOption);
  };

    return <select className="select-menu" onChange={onSelectChange}>{getAllOptions()}</select>;
}

export default SortOptions;
