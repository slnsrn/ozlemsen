import Header from "./Header";
import Social from "./Social";

export const Layout: React.FC<
  React.PropsWithChildren<{ fullScreen?: boolean }>
> = ({ children, fullScreen = false }) => {
  return (
    <div className={fullScreen ? "max-h-screen overflow-y-hidden" : ""}>
      <Header />
      <main>{children}</main>
      <Social />
    </div>
  );
};
