const typeConsolve = (type = "log") => {
    console[type]("Đây là type: ",type);
}
typeConsolve("log");
typeConsolve("warn");
typeConsolve("error");
typeConsolve();