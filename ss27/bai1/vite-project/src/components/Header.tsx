import { NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <nav className='bg-[#2977ff] w-full p-4 flex gap-6 justify-evenly'>
        <NavLink to="/" style={{color:"white"}}>Home</NavLink>
        <NavLink to="/about" style={{color:"white"}}>About</NavLink>
        <NavLink to="/contact" style={{color:"white"}}>Contact</NavLink>
      </nav>
    </div>
  )
}
