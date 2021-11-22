import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";

type Props = {
	currentMounth: string;
	onMonthChange: (newMonth: string) => void;
	income: number;
	expense: number;
};

export const InfoArea = ({
	currentMounth,
	onMonthChange,
	icome,
	expense,
}: Props) => {
	const handlePrevMonth = () => {
		let [year, month] = currentMounth.split("-");
		let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
		currentDate.setMonth(currentDate.getMonth() - 1);
		onMonthChange(
			`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
		);
	};

	const handleNextMonth = () => {
		let [year, month] = currentMounth.split("-");
		let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
		currentDate.setMonth(currentDate.getMonth() + 1);
		onMonthChange(
			`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
		);
	};
	return (
		<>
			<C.Container>
				<C.MonthArea>
					<C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
					<C.MonthTitle>{formatCurrentMonth(currentMounth)}</C.MonthTitle>
					<C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
				</C.MonthArea>

				<C.ResumeArea>a</C.ResumeArea>
			</C.Container>
		</>
	);
};
