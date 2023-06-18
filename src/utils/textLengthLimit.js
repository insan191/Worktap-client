export const textLengthLimit = (text, limit) => {
	text = text.toString().trim()
	if (text.length <= limit) return text

	text = text.slice(0, limit)

	return text.trim() + '...'
}
