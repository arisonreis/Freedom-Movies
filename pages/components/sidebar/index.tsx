import styles from "./sidebar.module.scss";
import {
  AiOutlineHome,
  AiOutlineHistory,
  AiFillVideoCamera,
  AiTwotoneFire
} from "react-icons/ai";
import { BiShow, BiLike } from "react-icons/bi";
import { Television, Popcorn } from "phosphor-react";
import { IoMdWifi } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import {MdAutoGraph} from 'react-icons/md'
export function Sidebar() {
  const sideBarItemMovies = [
    {
      icon: <AiOutlineHome className={styles.iconLinkSideBar} />,
      content: "Início",
      href: "/",
    },
    {
      icon: <BiShow className={styles.iconLinkSideBar} />,
      content: "Mais Vistos",
      href: "/",
    },
    {
      icon: <AiOutlineHistory className={styles.iconLinkSideBar} />,
      content: "Mais Recents",
      href: "/recents",
    },
    {
      icon: <AiFillVideoCamera className={styles.iconLinkSideBar} />,
      content: "Em produção",
      href: "/",
    },
    {
      icon: <Popcorn className={styles.iconLinkSideBar} size={28} />,
      content: "Exibido no cinema",
      href: "/",
    },
    {
      icon: <BiLike className={styles.iconLinkSideBar} />,
      content: "Em Destaque",
      href: "/",
    },
    { 
      icon: <AiTwotoneFire className={styles.iconLinkSideBar} />,
      content: "Em Alta",
      href: "/",
    },
    { 
      icon: <MdAutoGraph className={styles.iconLinkSideBar} />,
      content: "Tendências",
      href: "/",
    },
    {
      icon: <Television className={styles.iconLinkSideBar} />,
      content: "No ar",
      href: "/",
    },
    {
      icon: <IoMdWifi className={styles.iconLinkSideBar} />,
      content: "Ao vivo",
      href: "/",
    },
    {
      icon: <BsPersonFill className={styles.iconLinkSideBar} />,
      content: "Perfil",
      href: "/",
    },
  ];
  return (
    <nav className={styles.Sidebar}>
      <ul className={styles.itemsMovies}>
        {sideBarItemMovies.map((item, index) => {
          return (
            <li key={index} className={styles.ItemsList}>
              <a href={item.href} className={styles.Link}>
                {item.icon}
                {item.content}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}