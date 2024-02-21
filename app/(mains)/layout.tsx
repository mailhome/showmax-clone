import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({
    children
}: MainLayoutProps) => {
  return (
    <div className="">
        <Navbar />
          { children }
        <Footer />
    </div>
  )
}

export default MainLayout