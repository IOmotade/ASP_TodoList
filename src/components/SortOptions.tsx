 
import "./SortOptions.css"

interface Props {
  options: Array<string>;
  sortTodo: (option: string) => void;
}

// class SortOptions extends Component<Props> {
//   getAllOptions=()=> {
//     const allOptions = this.props.options.map((option) => {
//       return <option key={option} value={option}>{option}</option>;
//     });
//     const firstOption = <option key={'Sory By'}>--Sort By--</option>;
//     return [firstOption].concat(allOptions);
//   }

//   handleSelectChange=(event: React.ChangeEvent<HTMLSelectElement>)=>{
//       event.preventDefault()
//       const selectedOption = event.target.value;
//       this.props.sortTodo(selectedOption)
//   }

//   render() {
//     return <select onChange={this.handleSelectChange}>{this.getAllOptions()}</select>;
//   }
// }

function SortOptions(props: Props): React.ReactElement {
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

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const selectedOption = event.target.value;
    props.sortTodo(selectedOption);
  };

    return <select className="select-menu" onChange={onSelectChange}>{getAllOptions()}</select>;
}

export default SortOptions;
