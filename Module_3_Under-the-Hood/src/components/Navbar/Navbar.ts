import './Navbar.scss';

export const Navbar = () => {
  return (`
    <nav>
      <ul>
        <li><a href="../index.html">HOME</a></li>
        <li><a href="../binary.html">BINARY</a></li>
        <li><a href="../memory.html">MEMORY</a></li>
        <li><a href="../logic.html">LOGIC GATES</a></li>
        <li><a href="../alu.html">ALU</a></li>
        <li><a href="../cpu.html">CPU</a></li>
      </ul>
    </nav>
  `)
}