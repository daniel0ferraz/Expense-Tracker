import { useState, useEffect } from "react";
import "./index.css";
import * as C from "./App_Styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

export default function App() {
	const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
	const [currentMounth, setCurrentMount] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMounth))
  }, [list, currentMounth])

	return (
		<>
			<C.Container>
				<C.Header>
					<C.HeaderText>Sistema Financeiro</C.HeaderText>
				</C.Header>

				<C.Body>
					{/*Area de informações */}

					{/*Area de inserção */}

					{/*Area de itens */}
				</C.Body>
			</C.Container>
		</>
	);
}
