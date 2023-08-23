import './banner.module.css';
import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';


const Header = () => {
  const [isOpenDropDown1, setIsOpenDropDown1] = useState(false);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpenDropDown1(!isOpenDropDown1);
    setIsOpenDropDown2(false);

  };

  const toggleDropdown2 = () => {
    setIsOpenDropDown2(!isOpenDropDown2);
    setIsOpenDropDown1(false);

  };

  const handleClickOutside = () => {
    setIsOpenDropDown1(false);
    setIsOpenDropDown2(false);
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.nav_menu} aria-label="navigation bar">
      <div className={styles.header_container}>
        <div className={styles.nav_start}>
          <a className={styles.logo} href='/'>
            <img src="https://s13emagst.akamaized.net/layout/ro/images/logo//59/88362.svg" width="100" height="100" alt="Emag" />
          </a>
          <nav className={styles.menu}>
            <ul className={styles.menu_bar}>
              <li>
                <button className={`btn ${isOpenDropDown1 ? 'styles.nav_link styles.dropdown_btn' : 'styles.nav_link styles.dropdown_btn'}`} onClick={toggleDropdown1} data-dropdown="dropdown1" aria-haspopup="true" aria-expanded="false" aria-label="browse">
                  Categories
                  <i className={`styles.bx styles.bx-chevron-down`} aria-hidden="true" />
                </button>
                {isOpenDropDown1 && (<div id="dropdown1" className={styles.dropdown} >
                  <ul role="menu">
                    <li role="menuitem">
                      <a className={styles.dropdown_link}>
                        <img height="55px" src="https://static.vecteezy.com/system/resources/previews/017/264/749/non_2x/illustration-man-holding-smartphone-illustration-of-a-businessman-holding-a-smartphone-with-a-blank-screen-free-png.png" className={styles.icon} />
                        <div>
                          <span className={styles.dropdown_link_title}>Electronics and Gadgets</span>
                          <p>Cutting-edge technology at your fingertips</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link}>
                        <img height="55px" src="https://static.vecteezy.com/system/resources/previews/024/560/814/non_2x/blazer-suit-design-company-concept-simple-element-from-cloth-collection-free-png.png" className={styles.icon} />
                        <div>
                          <span className={styles.dropdown_link_title}>Fashion and Apparel</span>
                          <p>Style that defines you, from head to toe</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link}>
                        <img height="55px" src="https://static.vecteezy.com/system/resources/previews/011/794/202/non_2x/brown-fabric-armchair-seat-with-wooden-leg-3d-rendering-modern-interior-design-for-living-room-free-png.png" className={styles.icon} />
                        <div>
                          <span className={styles.dropdown_link_title}>Home and Decor</span>
                          <p>Transform your space into a haven of elegance</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link}>
                        <img height="55px" src="https://static.vecteezy.com/system/resources/previews/023/337/485/non_2x/ai-generative-perfume-transparent-free-png.png" className={styles.icon} />
                        <div>
                          <span className={styles.dropdown_link_title}>Beauty and Cosmetics</span>
                          <p>Unleash your inner beauty with our curated collection</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link}>
                        <img height="55px" src="https://static.vecteezy.com/system/resources/previews/016/548/641/non_2x/3d-barbell-icon-sport-body-building-free-png.png" className={styles.icon} />
                        <div>
                          <span className={styles.dropdown_link_title}>Sports and Fitness</span>
                          <p>Elevate your game, embrace an active lifestyle</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link}>
                        <img height="55px" src="https://static.vecteezy.com/system/resources/previews/013/391/078/non_2x/stack-of-books-3d-illustration-free-png.png" className={styles.icon} />
                        <div>
                          <span className={styles.dropdown_link_title}>Books and Stationery</span>
                          <p>Ignite your imagination, one page at a time</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link}>
                        <img height="55px" src="https://static.vecteezy.com/system/resources/previews/010/915/994/non_2x/3d-number-block-icon-or-3d-123-number-block-icon-free-png.png" className={styles.icon} />
                        <div>
                          <span className={styles.dropdown_link_title}>Toys and Games</span>
                          <p>Fueling the joy of play for all ages</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link}>
                        <img height="55px" src="https://static.vecteezy.com/system/resources/previews/023/337/816/non_2x/ai-generative-beach-juice-illustration-free-png.png" className={styles.icon} />
                        <div>
                          <span className={styles.dropdown_link_title}>Health and Wellness</span>
                          <p>Nurture your mind, body, and soul with care</p>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <ul role="menu">

                    <li role="menuitem">
                      <a className={styles.dropdown_link} href="#adobe-xd">
                        <img height="25px" src="https://static.vecteezy.com/system/resources/previews/009/379/900/original/woman-face-expression-clipart-design-illustration-free-png.png" />
                        Women
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link} href="#after-effect">
                        <img height="25px" src="https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png" />
                        Men
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link} href="#sketch">
                        <img height="25px" src="https://www.pngmart.com/files/16/Vector-Happy-Child-PNG-Photos.png" />
                        Children
                      </a>
                    </li>

                  </ul>
                </div>)}

              </li>
              <li>
                <button className={`btn ${isOpenDropDown1 ? 'styles.nav_link styles.dropdown_btn' : 'styles.nav_link styles.dropdown_btn'}`} onClick={toggleDropdown2} data-dropdown="dropdown2" aria-haspopup="true" aria-expanded="false" aria-label="discover">
                  Discover
                  <i className={`styles.bx styles.bx-chevron-down`} aria-hidden="true" />
                </button>
                {isOpenDropDown2 && (<div id="dropdown2" className={styles.dropdown}>
                  <ul role="menu">
                    <li>
                      <span className={styles.dropdown_link_title}>Sales</span>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link} href="#branding" style={{ color: "var(--light-blue)" }}>Fashion Sales -50%</a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link} href="#illustrations">Black Friday</a>
                    </li>
                  </ul>
                  <ul role="menu">
                    <li>
                      <span className={styles.dropdown_link_title}>Download App</span>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link} href="#mac-windows">MacOS and Windows</a>
                    </li>
                    <li role="menuitem">
                      <a className={styles.dropdown_link} href="#linux">Linux</a>
                    </li>
                  </ul>
                </div>)}

              </li>
              <li> <button className={`styles.nav-link styles.dropdown_btn`} href="/">
                Jobs
                <i className={`styles.bx styles.bx-chevron-down`} aria-hidden="true" />
              </button></li>
              <li> <button className={`styles.nav-link styles.dropdown_btn`} href="/">
                Delivery
                <i className={`styles.bx styles.bx-chevron-down`} aria-hidden="true" />
              </button></li>
              <li> <button className={`styles.nav-link styles.dropdown_btn`}>
                <a href='/aboutus'  className={styles.dropdown_link}> About us</a>
                <i className={`styles.bx styles.bx-chevron-down`} aria-hidden="true" />
              </button></li>
            </ul>
          </nav>
        </div>

        <div className={styles.nav_end}>
          <div className={styles.right_container}>
            <form className={styles.search} role="search">
              <input type="search" name="search" placeholder="Search" onChange={inputHandler} />
              <i className={`styles.bx styles.bx-search`} aria-hidden="true" />
            </form>
            <a href="#profile">
              <img src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65479.jpg" width="30" height="30" alt="user image" />
            </a>
            <a href="/" className={`btn-primary btn`}>Logout
            </a>
          </div>
          <button id="hamburger" aria-label="hamburger" aria-haspopup="true" aria-expanded="false">
            <i className={`styles.bx styles.bx-menu`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
