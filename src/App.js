import Editor from "./components/Editor";
import LogsContainer from "./components/LogsConteiner";
import { useEffect, useRef, useState } from "react";
import { generate } from "astring";
import functions from "./builtin/functions";
import Box from "./components/Box";

const portuscriptparser = window.portuscriptparser;

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

  const run = (command) => {
    if (command) {
      consoleRef.current.pushLog({
        method: "command",
        data: [command]
      });
    }
    let ast = {};
    try {
      ast = portuscriptparser.parse(command || code);
      const jsCode = generate(ast);
      var jsProgram = new Function(functions + jsCode);
      try {
        if (
          command &&
          ast.body.length === 1 &&
          ast.body[0].expression?.type === "Identifier" &&
          ast.body[0].expression?.name in window
        ) {
          consoleRef.current.pushLog({
            method: "result",
            data: [window[ast.body[0].expression.name]]
          });
        } else {
          jsProgram();
          if (
            command &&
            ast.body.length === 1 &&
            ast.body[0].expression?.type === "AssignmentExpression"
          ) {
            consoleRef.current.pushLog({
              method: "result",
              data: [window[ast.body[0].expression.left.name]]
            });
          }
        }
      } catch (error) {
        console.error("psLog", error?.message || error);
      }
    } catch (error) {
      console.error("psLog", error?.message || error);
    }
  };

  return (
    <Box display="flex" height="100vh" overflow="hidden">
      <Box width="50%" height="100%">
        <Editor
          height="100%"
          value={code}
          onChange={(_code) => setCode(_code)}
        />
      </Box>
      <Box width="50%" height="100%">
        <LogsContainer ref={consoleRef} runCode={run} runCommand={cmd => run(cmd)}/>
      </Box>
    </Box>
  );
}

export default App;
