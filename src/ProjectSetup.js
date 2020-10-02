import React, { useState, Component } from "react";

export default function ProjectSetup() {
  //const [jsonList, setJsonList] = useState([{Assets:[],Complex:[],Medium:[],Simple:[]}]);
  const jsonList = {};
  return (
    <div>
      <form>
        <tr>
          <label for="managerID">ManagerID :</label>
          <input type="number" value="12345" />
          <tr>
            <label for="Assets">Assets</label>
          </tr>
          <Assets type="Assets" jsonStr={jsonList} />
          <label for="applicationCosts">ApplicationCosts</label>
          <tr>Complex</tr>
          <Assets type="Complex" jsonStr={jsonList} />
          <tr>Medium</tr>
          <Assets type="Medium" jsonStr={jsonList} />
          <tr>Simple</tr>
          <Assets type="Simple" jsonStr={jsonList} />
        </tr>
      </form>
      <div style={{ marginTop: 20 }}>{JSON.stringify(jsonList)}</div>
    </div>
  );
}

export function Assets(props) {
  const [inputList, setInputList] = useState([{ field1: "", field2: "" }]);
  const list = [...inputList];
  var count=0;
  //let jsonList = {};
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    count=count+value;
    if(count>100)
    {
      return;
    }
    const jsonList = props.jsonStr;
    list[index][name] = value;
    setInputList(list);
    jsonList[e.target.title] = list;

    console.log(jsonList);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = (e, index) => {
    setInputList([...inputList, { field1: "", field2: "" }]);
  };

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <tr>
            <tr>
              <span>
                <input
                  type="text"
                  title={props.type}
                  name="field1"
                  onChange={(e) => handleInputChange(e, i)}
                />
              </span>
              <input
                type="text"
                name="field2"
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button onClick={() => handleAddClick(i)}>Add</button>
                )}
              </div>
            </tr>
          </tr>
        );
      })}
    </div>
  );
}
