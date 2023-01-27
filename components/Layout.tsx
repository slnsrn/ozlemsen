import Header from "./Header";
import Social from "./Social";

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Social />
    </>
  );
};
