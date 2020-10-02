import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ProjectSetup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonList: {},
      count: 0,
    };
    this.updateJsonList = this.updateJsonList.bind(this);
    this.updatedCount = this.updatedCount.bind(this);
  }
  updateJsonList(updatedJsonList) {
    this.setState({ jsonList: updatedJsonList });
  }
  updatedCount(updateCount) {
    this.setState({ count: updateCount });
  }

  render() {
    //const [jsonList, setJsonList] = useState([{Complex:[],Medium:[],Simple:[]}]);
    return (
      <div className="container p-3 my-3 border">
        <form>
          <div>
            <h3 class="nav nav-tabs">ManagerID : 1020371</h3>
          </div>

          <h4>Assets</h4>
          <Assets
            type="Assets"
            jsonStr={this.state.jsonList}
            updatedJsonList={this.updateJsonList}
            count={this.state.count}
            updateCount={this.updatedCount}
          />
          <h3>Application Costs</h3>
          <h4>Complex</h4>
          <Assets
            type="Complex"
            jsonStr={this.state.jsonList}
            updatedJsonList={this.updateJsonList}
            count={this.state.count}
            updateCount={this.updatedCount}
          />
          <h4>Medium</h4>
          <Assets
            type="Medium"
            jsonStr={this.state.jsonList}
            updatedJsonList={this.updateJsonList}
            count={this.state.count}
            updateCount={this.updatedCount}
          />
          <h4>Simple</h4>
          <Assets
            type="Simple"
            jsonStr={this.state.jsonList}
            updatedJsonList={this.updateJsonList}
            count={this.state.count}
            updateCount={this.updatedCount}
          />
          <div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <div style={{ marginTop: 20 }}>
          {JSON.stringify(this.state.jsonList)}
        </div>
      </div>
    );
  }
}

export function Assets(props) {
  const [inputList, setInputList] = useState([{ field1: "", field2: "" }]);
  const list = [...inputList];
  var count = parseInt(props.count);
  if (isNaN(parseInt(props.count))) {
    count = 0;
  }
  //let jsonList = {};
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    count = count + parseInt(value);
    if (count > 100) {
      return;
    }
    const jsonList = props.jsonStr;
    list[index][name] = value;
    setInputList(list);
    jsonList[e.target.title] = list;
    props.updatedJsonList(jsonList);
    props.updateCount(count);
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
      <div>
        <div class="card-body">
          {inputList.map((x, i) => {
            return (
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    className="form-control"
                    title={props.type}
                    name="field1"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    title={props.type}
                    className="form-control"
                    name="field2"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div class="col">
                  {inputList.length !== 1 && (
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-trash-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                        />
                      </svg>
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleAddClick(i)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-plus-square-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
