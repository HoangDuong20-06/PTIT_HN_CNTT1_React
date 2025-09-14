type CallbackFn = (result: boolean) => void;

function checkCondition(condition: boolean, callback: CallbackFn): void {
  setTimeout(() => {
    callback(condition);
  }, 1000);
}
function display(result: boolean): void {
  console.log(`Điều kiện trả về: ${result}`);
}
checkCondition(true, display);   
checkCondition(false, display);  
