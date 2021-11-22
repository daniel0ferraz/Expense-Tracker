import { useState, useEffect } from "react";
import * as C from "./App_Styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

export default function App() {
	const [list, setList] = useState(items);
	const [filteredList, setFilteredList] = useState<Item[]>([]);
	const [currentMounth, setCurrentMount] = useState(getCurrentMonth());
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);

	useEffect(() => {
		setFilteredList(filterListByMonth(list, currentMounth));
	}, [list, currentMounth]);

	const handleMonthChange = (newMonth: string) => {
		setCurrentMount(newMonth);
	};

	return (
		<>
			<C.Container>
				<C.Header>
					<C.HeaderText>Sistema Financeiro</C.HeaderText>
				</C.Header>

				<C.Body>
					<InfoArea
						currentMounth={currentMounth}
						onMonthChange={handleMonthChange}
						income={income}
						expense={expense}
					/>

					{/*Area de inserção */}

					<TableArea list={filteredList} />
				</C.Body>
			</C.Container>
		</>
	);
}
