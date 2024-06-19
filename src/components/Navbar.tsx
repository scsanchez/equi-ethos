const Navbar = () => {
  return (
    <div className="navbar bg-gray-200  fixed top-0 z-50 w-full">
      <div className="flex-1">
        <a href="#" className="btn btn-ghost text-xl font-vibes hover:text-white-300">Equi-ethos</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#contact">Contacta</a>
          </li>
          <li>
            <details>
              <summary>Proyecto</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a href="#history">Nuestra historia</a>
                </li>
                <li>
                  <a href="#whoweare">¿Quienes somos?</a>
                </li>
                <li>
                  <a href="#whatwedo">¿Qué hacemos?</a>
                </li>
                <li>
                  <a href="#workshops">Nuestros talleres</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
