type Callback = (message: string) => void;

function sendDoneStatus(callback: Callback): void {
  callback("done");
}

console.log(
  "TCL : sendDoneStatus : sendDoneStatus:",
  sendDoneStatus((message) => {
    console.log(message);
  }),
);
