import React from "react";
import NavBarComponent from "../components/NavBarComponent.js";
import SideBarComponent from "../components/SideBarComponent.js";

export default function MainPage() {
  // const movies = Array.from({ length: 10 }).map((m, i) => ({
  //   title: `Movie ${i}`,
  // }));
  return (
    <div>
      <SideBarComponent></SideBarComponent>
      <NavBarComponent />
      <h1>My Front</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, enim
        fuga possimus, eos aliquid odit obcaecati, quod nisi blanditiis maxime
        recusandae voluptatibus. Odit sapiente ducimus voluptas natus aliquam
        iusto nemo. Yeeee!
      </p>
    </div>
  );
}
