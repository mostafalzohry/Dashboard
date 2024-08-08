import Header from "./Header";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";

 function Dashboard() {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    );
  }

  export default Dashboard