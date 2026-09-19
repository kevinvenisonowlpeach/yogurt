import { Button } from "@/components/ui/button";

function App(): React.JSX.Element {
  return <Button onClick={() => window.electron.ipcRenderer.send("send")}>Hello World!</Button>;
}

export default App;
