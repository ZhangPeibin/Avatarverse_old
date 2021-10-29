/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx } from '@emotion/react'
import React from "react";
import {Account} from "./index";

const TITLE = css`
  margin-left: 1rem;
  font-weight: bold;
  font-size: 1.9rem;
  cursor: default;
  color: hsl(211, 19%, 70%);

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const HEADER_RIGHT=css`
  margin-left: auto;
`;
export default function Header(props) {
  return (
    <header style={{
      display:"flex",
      alignItems:"center",
      height:"6rem",
      padding: "1rem 2rem"
    }}>

      <h2 css={TITLE}>Avatar Metaverse</h2>

      <div css={HEADER_RIGHT}>
        <Account
          address={props.address}
          localProvider={props.localProvider}
          userSigner={props.userSigner}
          mainnetProvider={props.mainnetProvider}
          price={props.price}
          web3Modal={props.web3Modal}
          loadWeb3Modal={props.loadWeb3Modal}
          logoutOfWeb3Modal={props.logoutOfWeb3Modal}
          blockExplorer={props.blockExplorer}
        />
    </div>
    </header>
  );
}
