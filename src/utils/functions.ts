export function formatNumber(value = 0) {
	const totalFormat = 4;
	const numberLength = String(value).length;
	const newValue = totalFormat - numberLength + 1;

	return Array(newValue).join('0') + value;
}
