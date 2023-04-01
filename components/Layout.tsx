import { useAppSizeConfig } from "../hooks/useAppSizeConfig";
import Header from "./Header";
import Social from "./Social";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main
        style={{
          paddingTop: 100,
        }}
      >
        {children}
      </main>
      <Social />
    </div>
  );
};
