import React, { FC } from 'react';
import { Prefecture } from '../../types';
import CheckBox from '../Checkbox';
import styles from './checkboxGroup.module.scss';

type CheckBoxGroupProps = {
  prefectures: Prefecture[];
  checkedPrefCodes: number[];
  toggleCheckedPrefCodes: (prefCode: number) => void;
};

const CheckBoxGroup: FC<CheckBoxGroupProps> = (props) => {
  const { prefectures, checkedPrefCodes, toggleCheckedPrefCodes } = props;

  return (
    <div className={styles.checkBoxGroup}>
      {prefectures.map((prefecture) => (
        <div className={styles.checkBoxItem} key={prefecture.prefCode}>
          <CheckBox
            label={prefecture.prefName}
            isChecked={checkedPrefCodes.includes(prefecture.prefCode)}
            onChange={() => toggleCheckedPrefCodes(prefecture.prefCode)}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckBoxGroup;
