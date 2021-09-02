const translateLog = (message) => {
    return typeof message === "string" ? message.replace('is not defined', 'não foi declarado') : message;
}

export default translateLog;