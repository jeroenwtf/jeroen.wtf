export function getTitleFromFile(file: string): string {
	const parts = file.split('/');
	const fileName = parts[parts.length - 1];

	const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
	return fileNameWithoutExtension;
}

