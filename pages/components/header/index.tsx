/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import { BiMenu } from "react-icons/bi";
import Logo from "../../../imgs/logo.png";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MagnifyingGlass } from "phosphor-react";
export function Header(props: any) {
  const [sidebar, setSideBar] = useState(false);
  const ShowSideBar = async () => {
    sidebar === false ? setSideBar(!sidebar) : setSideBar(false);
  };
  useEffect(() => {
    props.set(sidebar);
  }, [props, sidebar]);
  const Input = useRef(null)
  const FocusInput = ()=>{
    Input.current.focus()
  }
  return (
    <header className={styles.Header}>
      <button className={styles.BtnActive} onClick={ShowSideBar}>
        {sidebar == false ? (
          <BiMenu className={styles.iconBtn} />
        ) : (
          <IoMdClose className={styles.iconBtn} />
        )}
      </button>
      <div className={styles.ContainerItemsCenter}>
        <Link href="/" className={styles.fakeLinkLogo}>
          <img src={Logo.src} alt="Logo" className={styles.Logo} />
        </Link>
        <div className={styles.BoxInputToIcon}>
          <input
            type="text"
            placeholder="Pesquise Por Filmes"
            className={styles.InputSearchMovie}
            ref={Input}
          />
          <MagnifyingGlass className={styles.IconSearch} size={26} onClick={FocusInput}/>
        </div>
        <ul className={styles.Menu}>
          <li className={styles.MenuItem}>
            <Link href="/sobre" className={styles.Link}>
              Lançamentos
            </Link>
          </li>
          <li className={styles.MenuItem}>
            <Link href="/categorias" className={styles.Link}>
              Gêneros
            </Link>
          </li>
          <button className={styles.ButtonBuscar}>
            <BsSearch fontWeight={1000} size={15} />
            Buscar
          </button>
          <li className={styles.MenuItem}>
            <Link href="/login" className={styles.Link}>
              Login
            </Link>
            <BsArrowRight fontWeight={900} size={15} />
          </li>
        </ul>
      </div>
    </header>
  );
}