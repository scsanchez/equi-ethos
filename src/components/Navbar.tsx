const Navbar = () => {
  return (
    <div className="navbar bg-gray-200 fixed top-0 z-50 w-full flex justify-between">
      <div className="flex">
        <a
          href="#"
          className="btn btn-ghost text-xl font-vibes dark:text-black dark:hover:text-blue-400"
        >
          Equi-ethos
        </a>
      </div>
      <div className="flex justify-end">
        <ul className="menu menu-horizontal px-1 dark:text-black ">
          <li>
            <a href="#contact">Contacta</a>
          </li>
          <li>
          <details className="details-menu">
          <summary>Proyecto</summary>
              <ul className="p-2 bg-base-100 rounded-t-none dark:bg-gray-200 ">
                <li>
                  <a href="#whoweare">¿Quiénes somos?</a>
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
