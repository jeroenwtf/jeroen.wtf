import path from 'path';
import fs from 'fs';

export function getTitleFromFile(file: string): string {
	const parts = file.split('/');
	const fileName = parts[parts.length - 1];

	const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
	return fileNameWithoutExtension;
}

export function getNotesPermalinks(): string[] {
	const notesDir = path.resolve('./src/content/notes');
	const getAllMarkdownFiles = (dir: string): string[] => {
		const entries = fs.readdirSync(dir, { withFileTypes: true });
		return entries.flatMap(entry => {
			const fullPath = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				return getAllMarkdownFiles(fullPath);
			} else if (entry.isFile() && entry.name.endsWith('.md')) {
				return [fullPath];
			}
			return [];
		});
	};

	const allMarkdownFiles = getAllMarkdownFiles(notesDir);
	return allMarkdownFiles.map(file => {
		let relativePath = path.relative(notesDir, file);
		relativePath = relativePath.replace(/\.md$/, '')

		return slugify(relativePath);
	});
}

export function slugify(title: string) {
	return (
		title
			.trim()
			.replace(/[^A-Za-z0-9/_-]/g, '')
			.replace(/[\s_]+/g, '-')
			.replace(/^-+|-+$/g, '')
			.toLowerCase()
	)
}

export function cleanMarkdown(markdownString: string) {
	return markdownString
		// Remove code blocks
		.replace(/```[\s\S]*?```/g, '')
		// Clean wikilinks
		.replace(/\[\[(.*?)\]\]/g, (_, p1) => {
			const parts = p1.split('|');
			return parts.length > 1 ? parts[1].trim() : parts[0].trim();
		})
		.replace(/\*\*(.*?)\*\*/g, '$1') // Bold
		.replace(/_(.*?)_/g, '$1') // Italic
		.replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links
		.replace(/`(.*?)`/g, '$1') // Inline code
		.replace(/#+\s/g, '') // Headers
		.replace(/!\[.*?\]\(.*?\)/g, '') // Images
		.replace(/(?:\r\n|\r|\n)/g, ' '); // Newlines
}

export function shortString(text: string, limit: number = 256): string {
	if (text.length <= limit) {
		return text;
	}

	const words = text.split(' ');
	let result = '';

	for (const word of words) {
		if ((result + word).length <= limit - 1) {
			result += (result ? ' ' : '') + word;
		} else {
			break;
		}
	}

	return result.trim() + '…';
}
