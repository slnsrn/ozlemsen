import { useAppSizeConfig } from "../hooks/useAppSizeConfig";
import Header from "./Header";
import Social from "./Social";

export const Layout: React.FC<
  React.PropsWithChildren<{ fullScreen?: boolean }>
> = ({ children, fullScreen = false }) => {
  const { wHeight, footerHeight } = useAppSizeConfig();
  return (
    <div className={fullScreen ? "max-h-screen overflow-y-hidden" : "relative"}>
      <Header />
      <main
        style={{
          height: fullScreen ? wHeight : "auto",
          paddingBottom: footerHeight,
        }}
      >
        {children}
      </main>
      <Social />
    </div>
  );
};
