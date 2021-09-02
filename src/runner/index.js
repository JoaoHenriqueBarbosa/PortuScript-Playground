import { generate } from "astring";
import functions from "../builtin/functions";

const portuscriptparser = window.portuscriptparser;
let container = null;

export const getContainer = () => container;

export const createContainer = () => {
  container = document.createElement("iframe");
  container.width = container.height = 1;
  container.style.opacity = 0;
  container.style.border = 0;
  container.style.position = "absolute";
  container.style.top = "-100px";
  container.setAttribute("name", "<proxy>");
  document.body.appendChild(container);
  return container;
};

const runner = (consoleInstance) => (code) => {
  if (code.type === "command") {
    consoleInstance.current?.pushLog({
      method: code.type,
      data: [code.content],
    });
  }
  let ast = {};
  try {
    ast = portuscriptparser.parse(code.content);
    const jsCode = generate(ast);
    try {
      if (
        code.type === "command" &&
        ast.body.length === 1 &&
        ast.body[0].expression?.type === "Identifier" &&
        ast.body[0].expression?.name in window
      ) {
        consoleInstance.current?.pushLog({
          method: "result",
          data: [window[ast.body[0].expression.name]],
        });
      } else {
        container.contentWindow.eval(functions + jsCode);
        if (
          code.type === "command" &&
          ast.body.length === 1 &&
          ast.body[0].expression?.type === "AssignmentExpression"
        ) {
          consoleInstance.current?.pushLog({
            method: "result",
            data: [window[ast.body[0].expression.left.name]],
          });
        }
      }
    } catch (error) {
      container.contentWindow.console.error("psLog", error?.message || error);
    }
  } catch (error) {
    container.contentWindow.console.error("psLog", error?.message || error);
  }
};

export default runner;