export enum DateFormats {
	DDMMYYYY,
	MMDDYYYY,
	YYYYMMDD,
}

export const dateStringToDate = (
	dateString: string,
	InputFormat: DateFormats
): Date => {
	const dateParts = dateString
		.split('/')
		.map((value: string): number => parseInt(value));

	if (InputFormat === DateFormats.DDMMYYYY) {
		return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
	}
	if (InputFormat === DateFormats.MMDDYYYY) {
		return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
	}
	return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};
