import React from 'react';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <ul>
      <li>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
      </li>
      <li>
        <Link href="/category/[navMenu]" as="/category/HTML&DOM">
          <a>HTML&DOM</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
