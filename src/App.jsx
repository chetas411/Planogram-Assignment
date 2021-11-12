import React, { useState } from "react";
import Grid from "./components/Grid/Grid";
import InputForm from "./components/InputForm/InputForm";
import DisplayTable from "./components/DisplayTable/DisplayTable";
import SaveForm from "./components/SaveForm/SaveForm";
import PlanogramContextProvider from "./context/PlanogramContextProvider";
import SelectedCellsContextProvider from "./context/SelectedCellsContextProvider";
import DownloadContextProvider from "./context/DownloadContextProvider";
import "./App.css";

const App = () => {
  const [parameters, setParameters] = useState({
    rows: 0,
    cols: 0,
    category: "",
    color: "gray",
  });
  const [capture,setCapture] = useState(false)
  const [saveData,setSaveData] = useState({
    pname: '',
    shouldSave: false
  })
  const updatePlanogram = (newParams) => {
    setParameters(newParams);
  };
  const planogramData = {
    data: parameters,
    updateData: updatePlanogram,
  };
  const updateCapture = (val) => {
      setCapture(val)
  }
  const cellsData = {
      shouldSelect: capture,
      updateCells: updateCapture,
      data: []
  }
  const savedData = {
    saveData,
    updateSave: ({pname,shouldSave}) => setSaveData({pname,shouldSave}) 
  }
  console.log(cellsData);
  return (
    <PlanogramContextProvider data={planogramData}>
      <SelectedCellsContextProvider data={cellsData}>
        <DownloadContextProvider data={savedData}>
          <div className="layout">
            <Grid />
            <div>
              <InputForm />
              <SaveForm />
            </div>
          </div>
          <DisplayTable />
        </DownloadContextProvider>
      </SelectedCellsContextProvider>
    </PlanogramContextProvider>
  );
};

export default App;
