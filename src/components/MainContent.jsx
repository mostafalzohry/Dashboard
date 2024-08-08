import LearnersList from "./LearnersList";
import OrganizationCards from "./OrganizationCards";
import StatCards from "./StatCards";

function MainContent() {
    return (
      <main className="flex-1 p-8">
        <StatCards />
        <LearnersList />
        <OrganizationCards />
      </main>
    );
  }

  export default MainContent