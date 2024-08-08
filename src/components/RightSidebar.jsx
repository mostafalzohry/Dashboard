import Attendance from "./Attendance";
import ManageOrganizationsButton from "./ManageOrganizationsButton";
import OverallActivity from "./OverallActivity";

function RightSidebar() {
    return (
      <aside className="w-64 bg-white p-6 flex flex-col space-y-6">
        <OverallActivity />
        <Attendance />
        <ManageOrganizationsButton />
      </aside>
    );
  }

  export default RightSidebar