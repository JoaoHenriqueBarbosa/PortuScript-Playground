import Editor from "./components/Editor";
import LogsContainer from "./components/LogsConteiner";
import { useEffect, useRef, useState } from "react";

import Box from "./components/Box";
import runner, { createContainer } from "./runner";
import Tabs from "./components/Tabbing/Tabs";
import Tab from "./components/Tabbing/Tab";

function App() {
  const [code, setCode] = useState(
    `var resultado = [];
funcao fibonacci(n, saida) {
  var a = 1, b = 1, sum;
  para (var i = 0; i < n; i++) {
    saida.push(a);
    sum = a + b;
    a = b;
    b = sum;
  }
}
fibonacci(10, resultado);
escreva(resultado.join(', '));
`
  );
  const consoleRef = useRef();
  const run = runner(consoleRef);

  return (
    <Box display="flex" height="100vh" overflow="hidden">
      <Box flex="1" height="100%">
        <Tabs>
          <Tab active>index.ps</Tab>
          {/* <Tab>Ajuda</Tab> */}
        </Tabs>
        <Editor
          height="100%"
          value={code}
          onChange={(_code) => setCode(_code)}
        />
      </Box>
      <Box flex="1" height="100%">
        <Tabs>
          <Tab active>Terminal</Tab>
        </Tabs>
        <LogsContainer ref={consoleRef} runner={run} code={code} />
      </Box>
    </Box>
  );
}

export default App;
