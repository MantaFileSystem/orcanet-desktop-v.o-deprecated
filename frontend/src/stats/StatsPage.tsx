import PageHeader from "../header/PageHeader";
import StatsCardContainer from "./StatsCardContainer";
import BandwidthChart from "./BandwidthChart";
import FileTypeChart from "./FileTypeChart";
import ActivityChart from "./ActivityChart";


function StatsPageContent() {
  return (
    <div className="size-full overflow-y-auto p-7">
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 xl:grid-rows-1 gap-7">
        <StatsCardContainer />
        <BandwidthChart />
      </div>
      <div className="grid lg:grid-cols-2 gap-7 mt-7">
        <FileTypeChart />
        <ActivityChart />
      </div>
    </div>
  );
}

const StatsPage = () => {
  return (
    <div id="stats-page" className="size-full flex flex-col">
      <PageHeader pageName="Stats" />
      <StatsPageContent />
    </div>
  );
};

export default StatsPage;
