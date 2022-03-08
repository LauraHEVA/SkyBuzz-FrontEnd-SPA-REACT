const Header = (title: string): JSX.Element => {
  return (
    <>
      <h1>{title}</h1>
      <img width={"22px"} src="favicon.ico" alt="Skybuzz logo" />
      <img
        width={"26px"}
        src="./images/burger-menu.png"
        alt="menu with 'about us' and logout options"
      />
    </>
  );
};

export default Header;
