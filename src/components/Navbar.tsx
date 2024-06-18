const Navbar = () => {
  return (
    <div className="navbar bg-base-100  fixed top-0 z-50 w-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-vibes">Equi-ethos</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#history">Link</a>
          </li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a href="#whoweare">¿Quienes somos?</a>
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
