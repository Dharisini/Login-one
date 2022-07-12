import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");
  const [gender, setGender] = React.useState("male");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, color);
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setGender(event.target.value);
  };

  const resetRadioState = () => {
    setGender("");
  };

  return (
    <div className="pa-16">
      <div className="d-flex v-center h-center">
        <div className="w-100">
          <h2>Fill the Form!</h2>
          <div className="d-flex w-100">
            <form className="f-1" onSubmit={handleSubmit}>
              <Input name="Name" value={name} onChange={changeName} />
              <Input name="Age" value={age} onChange={changeAge} />
              <span className="w-50 pa-16 mb-16">Gender</span>
              {/* <Input name ="Gender" type="radio" value="Male" />  */}
              <div id="radio" className="d-flex fd-col">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleChange}
                />
                Male
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleChange}
                />
                female
              </div>
              {/* <div>
            <button type="reset" id="resetFunction" onClick={resetRadioState}
          </div> */}

              <Select
                name="Favourite Color"
                value={color}
                onChange={changeColor}
              />
              <button type="submit" className="btn-primary mb-16">
                Submit
              </button>
              <button className="btn-secondary">Clear</button>
            </form>
            <div className="w-50 pa-16 mb-16 f-1">
              <p>
                <b>{name}</b> is <b>{age}</b> years old and she/he likes the
                colour <b>{color}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
