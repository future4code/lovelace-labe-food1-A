import React from "react";
import * as S from './styles'
import IconButton from "@material-ui/core/IconButton";
import { useCoordinator } from "../../hooks/useCoordinator";

const Footer = () => {
  const goTo = useCoordinator();
  return (
    <S.Footer>
      <IconButton title={'Retornar para Página Principal'} onClick={goTo.Home} aria-label="home">
        <img src={"https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/665B3253-0B10-4DA6-ADB0-B764A98E9A47.svg"}/>
      </IconButton>
      <IconButton title={'Ir para Carrinho'} onClick={goTo.Cart}  aria-label="cart">
        <img src={'https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/6E69D164-038D-459A-B0D8-E2052E60CBB9.svg'}/>
      </IconButton>
      <IconButton title={'Ir para Perfil'} onClick={goTo.Profile} aria-label="profile">
        <img src={'https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/67E026C8-789C-4AEF-AD4F-08BCD42B0795.svg'}/>
      </IconButton>
    </S.Footer>
  );
};

export default Footer;
