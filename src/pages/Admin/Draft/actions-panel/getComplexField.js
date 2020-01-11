import Api from 'http';
import searchStationsParams from 'http/defaultParams/searchStations.json';
import SelectorLine from '../../../../components/selector-line/selector-line';
import SelectorStation from '../../../../components/selector-station/selector-station';

const getComplexField = (draftId, field, lines) => {
  switch (field.type) {
    case 'selectorLine':
      return {
        ...field,
        type: 'selector',
        fieldProps: {
          options: lines,
          optionClassName: 'p-0',
          custom: SelectorLine,
          valueProp: '_id',
          nameProp: 'shortName',
          customProp: 'line',
          maxOptions: 20
        }
      };
    case 'selectorStation':
      return {
        ...field,
        type: 'selector',
        fieldProps: {
          custom: SelectorStation,
          valueProp: '_id',
          nameProp: 'name',
          customProp: 'station',
          isDefaultValueObj: true,
          search: true,
          minLengthSearch: 3,
          remoteOptions: {
            apiMethod: str =>
              Api.station.search(draftId, {
                ...searchStationsParams,
                filter: { name: str },
                populate: [
                  { path: 'draft', select: 'town', populate: { path: 'town', select: 'logo' } }
                ]
              }),
            dataProp: 'elements'
          }
        }
      };
    default:
      return field;
  }
};

export default getComplexField;
