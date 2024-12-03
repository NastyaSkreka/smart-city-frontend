import { ReactNode } from "react";
import HeaderComponent from "./header.component";
import FooterComponent from "./footer.component";


interface PageLayoutProps {
    children: ReactNode;
  }

function PageLayoutComponent({ children }: PageLayoutProps) {

    return (
        <>
         <HeaderComponent/>
         {children}
         <FooterComponent/>
        </>
    )
}

export default PageLayoutComponent;