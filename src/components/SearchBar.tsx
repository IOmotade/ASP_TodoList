import "./SearchBar.css"

interface Prop{
    setUserInput: (input:string)=>void
}

const SearchBar = (props:Prop) => {
    const onSearchBarChange = (e:React.FormEvent<HTMLInputElement> )=>{
        const input = e.currentTarget.value.trim().toLowerCase()
        console.log(input)
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