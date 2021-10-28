import React,{useState} from 'react'

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  return (

    <form 
    onSubmit={handleSubmit}
    className="d-flex justify-content-center align-items-center mb-4">
    <div className="form-outline flex-fill">
      <input
       type="text"
       autoFocus
       value={value}
       placeholder="Enter todo item"
       onChange={(e) => setValue(e.target.value)}
        id="form3" 
        className="form-control form-control-lg" 
        
        />
    </div>
    <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button>
  </form>
  
  );
}

