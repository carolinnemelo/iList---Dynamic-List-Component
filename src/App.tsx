import { InteractiveList } from "./components/interactive-list";
import { productData } from "./data";

function App() {
  return (
    <>
      <InteractiveList data={productData} title="Ilist"/>
    </>
  );
}

export default App;
