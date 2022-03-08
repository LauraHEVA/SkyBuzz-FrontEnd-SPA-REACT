const Header = (title: string): JSX.Element => {
  return (
    <>
      <h1>{title}</h1>
      <img width={"22px"} src="favicon.ico" alt="Skybuzz logo" />
    </>
  );
};

export default Header;
