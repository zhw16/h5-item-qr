import jsonData from '../json/sourceData.json' assert { type: 'json' };
import jsonData1 from '../json/01.json' assert { type: 'json' };
// import jsonData2 from '../json/02.json' assert { type: 'json' };
// import jsonData3 from '../json/1687920777289.json' assert { type: 'json' };
//从json文件中读取数据,插入到json集合中。
jsonData.push(jsonData1);
// jsonData.push(jsonData2);
// jsonData.push(jsonData3);
export const data = jsonData;



