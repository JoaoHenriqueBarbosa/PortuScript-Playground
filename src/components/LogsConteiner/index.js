import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Console, Hook, Unhook } from "console-feed";
import Box from "../Box";
import { drop } from "lodash";
import translateLog from "../../utils/translateLog";
import { createContainer } from "../../runner";

const LogsContainer = forwardRef(({ runner, code }, ref) => {
  const [logs, setLogs] = useState([]);
  const [inputValue, setInputValue] = useState("portuscript index.ps");
  const [commandHistory, setCommandHistory] = useState([]);
  const [commandHistoryCursor, setCommandHistoryCursor] = useState(0);
  const inputRef = useRef();
  const containerRef = useRef();

  useImperativeHandle(ref, () => ({
    pushLog: pushLog,
  }));

  useEffect(() => {
    const container = createContainer();

    Hook(
      container.contentWindow.console,
      (log) => {
        const newLog = log;
        if (newLog.data?.[0] === "psLog") {
          newLog.data = drop(newLog.data);
          newLog.data = newLog.data.map((_logMessage) =>
            translateLog(_logMessage)
          );
          setLogs((currLogs) => [...currLogs, newLog]);
        }
      },
      false
    );
    return () => {
      Unhook(window.console);
    };
  }, []);

  const pushLog = (newLog) => {
    setLogs((currLogs) => [...currLogs, newLog]);
  };

  const cleanInput = () => {
    setCommandHistory((oldCmdHis) => {
      setCommandHistoryCursor(oldCmdHis.length);
      return [...oldCmdHis, inputValue];
    });
    setInputValue("");
    setTimeout(() => {
      containerRef.current.scrollTop = containerRef.current.offsetHeight;
    });
  };

  const runCommand = () => {
    switch (inputValue) {
      case "":
        break;
      case "portuscript index.ps":
        pushLog({
          method: "command",
          data: [inputValue],
        });
        runner({
          type: "script",
          content: code,
        });
        cleanInput();
        break;

      case "cls":
      case "clear":
        setLogs([]);
        cleanInput();
        break;

      default:
        runner({
          type: "command",
          content: inputValue,
        });
        cleanInput();
        break;
    }
  };

  const onKeyDown = (ev) => {
    switch (ev.key) {
      case "Enter":
        runCommand();
        break;

      case "ArrowUp":
      case "ArrowDown":
        if (commandHistoryCursor === -1) {
          setInputValue("");
        }
        if (commandHistory[commandHistoryCursor]) {
          setInputValue(commandHistory[commandHistoryCursor]);
        }
        setCommandHistoryCursor((_oldCursor) => {
          if (ev.key === "ArrowDown") {
            return _oldCursor < commandHistory.length - 1
              ? _oldCursor + 1
              : _oldCursor;
          }
          return _oldCursor >= 0 ? _oldCursor - 1 : _oldCursor;
        });
        break;

      default:
        break;
    }
  };

  const onConsoleClick = (ev) => {
    if (
      ev.target.classList.contains("linkified") &&
      ev.target.parentNode?.parentNode?.parentNode?.parentNode?.attributes?.[
        "data-method"
      ]?.value === "command"
    ) {
      ev.preventDefault();
    }

    if (ev.target.classList.contains("logsContainer")) {
      inputRef.current.focus();
    }
  };

  return (
    <Box
      className="logsContainer"
      backgroundColor="#242424"
      height="100%"
      width="100%"
      overflowY="auto"
      onClick={onConsoleClick}
      ref={containerRef}
    >
      <Console logs={logs} variant="dark" />
      <Box className="consoleInputContainer">
        <Box display="flex">
          <Box
            className="icon"
            textAlign="center"
            lineHeight="20px"
            color="#3e94d0"
          >
            {">"}
          </Box>
        </Box>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
          onKeyDown={onKeyDown}
        />
      </Box>
    </Box>
  );
});

export default LogsContainer;
