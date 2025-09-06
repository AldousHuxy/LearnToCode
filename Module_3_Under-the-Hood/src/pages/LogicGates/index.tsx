import { ANDGate } from './ANDGate';
import { withLogicGate } from './hocs/withLogicGate';
import { NANDGate } from './NANDGate';
import { NOTGate } from './NOTGate';
import { ORGate } from './ORGate';

const LogicGates = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4">Boolean Logic Gates: the neurons of a computer</h1>
      <div className="p-4 grid grid-cols-2 gap-4">
        {withLogicGate('AND', <ANDGate />)}
        {withLogicGate('OR', <ORGate />)}
        {withLogicGate('NOT', <NOTGate />)}
        {withLogicGate('NAND', <NANDGate />)}
      </div>
    </>
  )
}

export default LogicGates;
