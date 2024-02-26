import PopulationChart from './components/Chart';
import CheckBoxGroup from './components/CheckBoxGroup';
import { useQueryPrefecturePopulation } from './api/useQueryPrefecturePopulation';
import RadioButtonGroup from './components/RadioButtonGroup';
import { useState } from 'react';

const ChartPage = () => {
  const { data } = useQueryPrefecturePopulation();

  const [checkedPrefCodes, setCheckPrefCodes] = useState<number[]>([]);

  // 「総人口」:0,「年少人口」:1,「生産年齢人口」:2,「老年人口」:3
  // ラベルが増えても対応できるように番号で管理
  const [selectedLabelIndex, setSelectedLabelIndex] = useState<number>(0);

  const toggleCheckedPrefCodes = (prefCode: number) => {
    if (checkedPrefCodes.includes(prefCode)) {
      setCheckPrefCodes(
        checkedPrefCodes.filter(
          (checkedPrefCode) => checkedPrefCode !== prefCode,
        ),
      );
    } else {
      setCheckPrefCodes([...checkedPrefCodes, prefCode]);
    }
  };

  return (
    <>
      <CheckBoxGroup
        prefectures={data.prefectures}
        checkedPrefCodes={checkedPrefCodes}
        toggleCheckedPrefCodes={toggleCheckedPrefCodes}
      />
      <RadioButtonGroup
        labels={data.populationTypeLabels}
        selectedLabelIndex={selectedLabelIndex}
        setSelectedLabelIndex={setSelectedLabelIndex}
      />
      <PopulationChart
        checkedPrefCodes={checkedPrefCodes}
        populationTypeLabels={data.populationTypeLabels}
        selectedLabelIndex={selectedLabelIndex}
        populations={data.populationData}
        prefectures={data.prefectures}
      />
    </>
  );
};
export default ChartPage;
