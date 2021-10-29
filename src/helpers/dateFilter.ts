import {Item} from '../types/Item';

export const getCurrentMonth = () => {
	let now = new Date();
	return `${now.getFullYear()}-${now.getMonth()+1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list) {
      if( // se o ano for 2021 passa pelo segundo item
        list[i].date.getFullYear() === parseInt(year) &&
        (list[i].date.getMonth() + 1) === parseInt(month)
      ) {
        newList.push(list[i]);
        // gera uma nova lista com itens do mesmo ano e mes 
       } 
    }  


    return newList;
}
