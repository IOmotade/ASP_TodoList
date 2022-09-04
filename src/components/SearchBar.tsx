import "./SearchBar.css"

interface Prop{
    //a function to set user input in the search bar
    setUserInput: (input:string)=>void
}

const SearchBar = (props:Prop) => {
    //triggered when user enters anything in the search bar
    //it will get the new input, convert it to lowercase
    //then set the userInput in App to the new input
    const onSearchBarChange = (e:React.FormEvent<HTMLInputElement> )=>{
        const input = e.currentTarget.value.trim().toLowerCase()
        props.setUserInput(input)
    }

  return (
    <div className="search-bar">
      <h1>Search for Tasks <input className="search-input" type="text" onChange={onSearchBarChange}/>
      </h1>
    </div>
  );
};

export default SearchBar
