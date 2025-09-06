import { useState } from 'react';

const Memory = () => {
  const [wire, setWire] = useState<boolean>(false)

  const controlWire = wire ? '#2ECC40' : '#FF4136' // red/green
  const outputWire = wire ? '#2ECC40' : '#FF4136' // red/green
  const wireLabel = wire ? 'ON' : 'OFF'

  const toggleWire = () => setWire(prev => !prev)

  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-4">The Transistor</h1>
      <div className="flex flex-col justify-between items-center">
        <button
          onClick={toggleWire}
          className={`px-4 py-2 mb-4 font-semibold text-white rounded ${wire ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
        >
          {wireLabel}
        </button>
      </div>
      <svg width="300" height="200" viewBox="0 0 300 200">
        {/* Wires */}
        <line x1="50" y1="100" x2="120" y2="100" stroke={controlWire} strokeWidth="4" />
        <line x1="250" y1="60" x2="180" y2="100" stroke="#2ECC40" strokeWidth="4" />
        <line x1="250" y1="140" x2="180" y2="100" stroke={outputWire} strokeWidth="4" />
        {/* Transistor body */}
        <rect x="120" y="80" width="60" height="40" rx="10" fill="#333" />
        {/* Base, collector, emitter labels */}
        <text x="30" y="90" fontSize="14" fill="#333">Input Wire</text>
        <text x="225" y="55" fontSize="14" fill="#333">Flow Wire</text>
        <text x="225" y="155" fontSize="14" fill="#333">Output Wire</text>
      </svg>
    </div>
  );
}

export default Memory;
