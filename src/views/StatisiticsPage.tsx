import { defineComponent } from "vue";
import { Charts } from "../components/statistics/Charts";
import { TimeTabsLayout } from "../layouts/TimeTabsLayout";
export const StatisticsPage = defineComponent({
  setup() {
    return () => <TimeTabsLayout component={Charts} rerenderOnChangeTab={true} hideThisYear={true}></TimeTabsLayout>;
  },
});

export default StatisticsPage;
